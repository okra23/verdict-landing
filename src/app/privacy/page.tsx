import LegalLayout from '../_components/LegalLayout'

export const metadata = {
  title: 'Privacy Policy — Verdict',
  description: 'What Verdict collects, where the data goes, and how to remove it.',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="May 2026">
      <p>
        This is a plain-English summary of what Verdict does with your data. If
        something here isn&rsquo;t clear, email{' '}
        <a href="mailto:support@verdict.cards">support@verdict.cards</a>.
      </p>

      <h2>Who We Are</h2>
      <p>
        Verdict is operated by{' '}
        <strong>Collins and Company Enterprises, LLC</strong>, a Mississippi
        limited liability company. For purposes of GDPR and similar laws, we are
        the &ldquo;data controller&rdquo; for personal information processed
        through this site.
      </p>
      <p>
        <strong>Mailing address:</strong><br />
        Collins and Company Enterprises, LLC<br />
        102 Indian Creek Blvd<br />
        Flowood, MS 39232<br />
        United States
      </p>
      <p>
        <strong>Privacy contact:</strong>{' '}
        <a href="mailto:support@verdict.cards">support@verdict.cards</a>
      </p>

      <h2>What We Collect</h2>
      <ul>
        <li>
          <strong>Searches</strong> you run. The normalized query (lowercase,
          punctuation stripped) is used as a cache key so repeat searches are
          faster and can be enriched over time.
        </li>
        <li>
          <strong>Collection and Watchlist entries</strong> you save — the card
          query, purchase price, target price, notes, and timestamps. Stored in
          Supabase.
        </li>
        <li>
          <strong>Photos</strong> you upload to the Grade Tool or &ldquo;Snap a
          photo&rdquo; identification. These are sent to Anthropic&rsquo;s
          Claude Vision API for processing and <strong>not</strong> stored by
          us after the response is returned.
        </li>
        <li>
          <strong>Basic technical logs</strong> — browser user-agent, errors,
          and request/response timing. Used for debugging; not sold.
        </li>
      </ul>

      <h2>What We Don&rsquo;t Collect</h2>
      <ul>
        <li>We don&rsquo;t require an account today. If/when we add accounts, email and auth info will be added here.</li>
        <li>We don&rsquo;t use tracking cookies, pixels, or third-party analytics.</li>
        <li>We don&rsquo;t collect payment information — there&rsquo;s nothing to pay for yet.</li>
      </ul>

      <h2>Who Sees Your Data</h2>
      <p>
        To run the product, your data is passed through a handful of third-party
        services. None of them receive data beyond what&rsquo;s needed to deliver
        their function:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — stores sales history, your collection,
          watchlist, and player-collection data. Hosted in the US.
        </li>
        <li>
          <strong>SerpAPI / eBay</strong> — search queries go to eBay&rsquo;s
          public marketplace via SerpAPI to pull sold listings. They see the
          card query text only. Verdict is not affiliated with, endorsed by, or
          sponsored by eBay Inc. — we use their public listings data the same
          way a price aggregator uses a store&rsquo;s catalog.
        </li>
        <li>
          <strong>Anthropic (Claude)</strong> — photos and text prompts sent to
          Claude for AI identification, grading, and bounds detection.
          Anthropic&rsquo;s data handling is covered by their enterprise API
          terms — photos aren&rsquo;t used to train models.
        </li>
        <li>
          <strong>Vercel</strong> — hosts the site and processes every request.
        </li>
      </ul>
      <p>
        <strong>We don&rsquo;t sell or rent your data to anyone. Not today, not later.</strong>{' '}
        If that ever changes, we will update this policy with advance notice and
        an opt-out mechanism before any sharing begins.
      </p>

      <h2>eBay Data: What, Why, and How</h2>
      <p>
        Verdict&rsquo;s prices come from publicly visible sold-listing data
        from eBay. We don&rsquo;t access anyone&rsquo;s eBay account, order
        history, or private messages. We don&rsquo;t store individual buyer or
        seller usernames. We cache the listing titles, sold prices, sale dates,
        shipping costs, and public listing URLs so long-term trend analysis is
        possible after eBay removes a sale from its rolling 90-day window.
      </p>

      <h2>How Long Data is Kept</h2>
      <ul>
        <li>Sales history: retained indefinitely to power long-term trend charts.</li>
        <li>Your collection/watchlist entries: until you delete them.</li>
        <li>Photos you upload: processed in memory and discarded.</li>
        <li>Search logs: retained up to 30 days for debugging, then rotated out.</li>
      </ul>

      <h2>Your Rights</h2>
      <p>
        Regardless of where you live, Verdict provides the following rights. We
        apply the most-user-friendly standard to every visitor, not just those
        in jurisdictions that legally require it:
      </p>
      <ul>
        <li>
          <strong>Right to know</strong> what we store — see the &ldquo;What We
          Collect&rdquo; section above. If you want a specific data export,
          email us.
        </li>
        <li>
          <strong>Right to access</strong> — your collection and watchlist
          entries are always visible and exportable in-app.
        </li>
        <li>
          <strong>Right to delete</strong> — remove any collection or watchlist
          card in-app (permanent and immediate), or email us to wipe everything
          associated with you within 30 days.
        </li>
        <li>
          <strong>Right to correct</strong> — editable data is editable in-app.
          For anything else, email us and we&rsquo;ll fix it.
        </li>
        <li>
          <strong>Right to opt out of sale</strong> — moot, because we do not
          sell your data. If we ever begin sharing data for commercial
          purposes, you will have a clear opt-out before it starts.
        </li>
        <li>
          <strong>Right to non-discrimination</strong> — exercising any of
          these rights will not result in degraded service, price changes, or
          reduced features.
        </li>
      </ul>
      <p>
        <strong>California, Virginia, Colorado, Connecticut, Utah, EU/UK residents</strong>{' '}
        — you have the same rights above under your local privacy laws
        (CCPA/CPRA, VCDPA, CPA, CTDPA, UCPA, GDPR). Mississippi does not
        currently have a comprehensive consumer privacy law, but Mississippi
        residents enjoy the same protections by our choice.
      </p>

      <h2>Data Breach Notification</h2>
      <p>
        If we discover a security incident that affects personal data, we will
        notify affected users by email (if we have an address) or by a
        prominent in-app notice within 72 hours of confirmation, as required by
        applicable law. The notice will describe what happened, what data was
        involved, and what steps you can take.
      </p>

      <h2>Children</h2>
      <p>
        Verdict isn&rsquo;t directed at children under 13 and we don&rsquo;t
        knowingly collect data from them. If you believe a child has used the
        service, let us know and we&rsquo;ll delete their data.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes materially, we&rsquo;ll update the &ldquo;Last
        updated&rdquo; date at the top and surface a notice in the app. For
        small clarifications, we&rsquo;ll just update the page.
      </p>

      <h2>Contact</h2>
      <p>
        Questions, data access, or deletion requests:{' '}
        <a href="mailto:support@verdict.cards">support@verdict.cards</a>, or
        write to us at the mailing address above.
      </p>
    </LegalLayout>
  )
}
