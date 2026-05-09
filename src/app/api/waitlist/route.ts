/**
 * VERDICT — Waitlist API Route
 * ─────────────────────────────
 * Drop this file at:  app/api/waitlist/route.ts
 *
 * Requires these env vars in .env.local / Vercel:
 *   NEXT_PUBLIC_SUPABASE_URL      (already have this)
 *   SUPABASE_SERVICE_ROLE_KEY     (already have this — use service role, not anon, for server writes)
 *
 * Run this SQL in Supabase first:
 * ─────────────────────────────────────────────────
 *   CREATE TABLE IF NOT EXISTS waitlist (
 *     id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 *     email      text NOT NULL UNIQUE,
 *     created_at timestamptz DEFAULT now()
 *   );
 *
 *   -- Only server-side (service role) can write. Public cannot read or write.
 *   ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "service role only" ON waitlist USING (false);
 * ─────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Lazy client init so a missing env var fails the request, not the build.
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY  // service role bypasses RLS
  if (!url || !key) throw new Error('Supabase env vars not configured')
  return createClient(url, key)
}

export async function POST(req: NextRequest) {
  try {
    const supabase = getSupabase()
    const { email } = await req.json()

    // Basic validation
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const normalizedEmail = email.trim().toLowerCase()

    const { error } = await supabase
      .from('waitlist')
      .insert({ email: normalizedEmail })

    if (error) {
      // Duplicate email — treat as success so we don't leak whether an email is registered
      if (error.code === '23505') {
        return NextResponse.json({ ok: true })
      }
      console.error('[waitlist] Supabase error:', error)
      return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[waitlist] Unexpected error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
