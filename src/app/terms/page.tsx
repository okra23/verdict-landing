import LegalLayout from '../_components/LegalLayout'

export const metadata = {
  title: 'Terms of Service — Verdict',
  description: 'Terms and conditions for using Verdict.',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="May 2026">
      <p>
        By using Verdict (the &ldquo;Service&rdquo;) you agree to these terms.
        If you don&rsquo;t, stop using the site.
      </p>

      <p>
        The Service is operated by{' '}
        <strong>Collins and Company Enterprises, LLC</strong>, a Mississippi
        limited liability company with offices at 102 Indian Creek Blvd,
        Flowood, MS 39232 (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;Verdict&rdquo;). You can reach us at{' '}
        <a href="mailto:support@verdict.cards">support@verdict.cards</a>.
      </p>

      <h2>1. What the Service Is</h2>
      <p>
        Verdict is a web-based tool that estimates sports/TCG/non-sport card
        values, projects grading outcomes, analyzes lots, and tracks
        collections. It is provided as-is, with no warranty, as a
        decision-support tool.
      </p>

      <h2>2. Not Professional Advice</h2>
      <p>
        Nothing Verdict produces is an appraisal, a guarantee of value, a
        grading commitment, or investment advice. Prices are estimates derived
        from eBay sold listings. Grades are AI predictions.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Scrape, mirror, republish, or resell Verdict&rsquo;s data or UI without permission.</li>
        <li>Use automated tools to flood the service with requests (rate limiting applies).</li>
        <li>Attempt to reverse-engineer, decompile, or exploit the API for purposes beyond normal in-browser use.</li>
        <li>Upload photos you don&rsquo;t have the right to submit.</li>
        <li>Use the service to harass, defraud, or harm others.</li>
      </ul>

      <h2>4. Your Content</h2>
      <p>
        Photos and text you submit remain yours. By submitting them, you grant
        us a limited license to process them through our third-party services
        (Claude, SerpAPI, Supabase) solely to deliver the feature you invoked.
        We do not claim ownership and do not use your content for any other
        purpose.
      </p>

      <h2>5. Data from eBay and Other Sources</h2>
      <p>
        Sold-listing data shown on Verdict is derived from eBay&rsquo;s public
        marketplace via third-party APIs and is shown strictly for
        informational purposes.{' '}
        <strong>
          Verdict is not affiliated with, endorsed by, sponsored by, or
          otherwise officially connected to eBay Inc.
        </strong>{' '}
        &ldquo;eBay&rdquo; and related marks are the property of eBay Inc.
      </p>
      <p>
        Product names, set names, brand marks, and service marks shown in the
        tool (Topps, Panini, Upper Deck, Bowman, Fleer, Donruss, PSA, BGS, SGC,
        CGC, etc.) belong to their respective owners and are used here solely
        for identification and compatibility purposes. Their inclusion does not
        imply endorsement, affiliation, or sponsorship by any of those parties.
      </p>
      <p>
        Should Verdict participate in the eBay Partner Network or another
        affiliate program in the future, outbound purchase links may earn us a
        commission at no additional cost to the user. Any such compensation
        will be disclosed and will not affect the pricing or verdict data shown
        in the tool.
      </p>

      <h2>5a. DMCA / Copyright Takedown</h2>
      <p>
        Verdict accepts user-uploaded photos for card identification and
        grading. If you believe content on this site infringes your copyright,
        send a written notice to our DMCA Designated Agent containing:
      </p>
      <ul>
        <li>Your physical or electronic signature.</li>
        <li>Identification of the copyrighted work claimed to be infringed.</li>
        <li>Identification of the material on Verdict that is allegedly infringing (URL and description).</li>
        <li>Your contact information (address, phone, email).</li>
        <li>A statement, under penalty of perjury, that you have a good-faith belief the use is not authorized and that the information in the notice is accurate.</li>
      </ul>
      <p>
        <strong>DMCA Designated Agent:</strong>
      </p>
      <p>
        Collins and Company Enterprises, LLC<br />
        Attn: DMCA Designated Agent<br />
        102 Indian Creek Blvd<br />
        Flowood, MS 39232<br />
        United States<br />
        Email: <a href="mailto:support@verdict.cards">support@verdict.cards</a>
      </p>
      <p>
        We will respond within a reasonable time and remove material as
        required by the Digital Millennium Copyright Act (17 U.S.C. § 512).
      </p>

      <h2>6. Service Availability</h2>
      <p>
        We make no uptime guarantees. Third-party dependencies (Vercel,
        Supabase, SerpAPI, Anthropic, eBay) can go down, return wrong data, or
        rate-limit us. We&rsquo;ll do our best to fix issues quickly but
        can&rsquo;t promise a specific response time.
      </p>

      <h2>7. Changes to the Service</h2>
      <p>
        Features may be added, changed, or removed without notice. Data
        structure may evolve. If your saved data needs to migrate, we&rsquo;ll
        migrate it; if a feature is deprecated in a way that affects you,
        we&rsquo;ll explain.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent allowed by law, Verdict and its operator are not
        liable for:
      </p>
      <ul>
        <li>Financial losses resulting from decisions you made based on the tool&rsquo;s output.</li>
        <li>Lost grading fees on cards that did not hit their projected grade.</li>
        <li>Indirect, consequential, or punitive damages.</li>
        <li>Downtime, data loss, or third-party service failures.</li>
      </ul>
      <p>
        Our total liability for any claim is limited to $100 or the amount you
        paid us in the 12 months before the claim, whichever is greater.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify Verdict from claims arising out of your
        violation of these terms, your misuse of the service, or content you
        upload that infringes someone else&rsquo;s rights.
      </p>

      <h2>10. Termination</h2>
      <p>
        We can suspend or terminate your access if you violate these terms or
        if your usage threatens service stability. You can stop using the
        service at any time; if you want your saved data removed, see the{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>11. Governing Law and Dispute Resolution</h2>
      <p>
        These terms are governed by the laws of the State of Mississippi, USA,
        without regard to its conflict-of-law rules. Any dispute arising out of
        or relating to these terms or the Service shall be brought exclusively
        in state or federal courts located in Hinds County, Mississippi, and
        the parties consent to the personal jurisdiction of those courts.
      </p>
      <p>
        Before filing a lawsuit, the parties agree to attempt a good-faith
        informal resolution by contacting each other at{' '}
        <a href="mailto:support@verdict.cards">support@verdict.cards</a>. Most
        issues can be resolved this way.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We may update these terms as the service evolves. If changes are
        material, we will update the &ldquo;Last updated&rdquo; date and
        surface a notice in the app. Continued use of the service after an
        update constitutes acceptance of the new terms.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these terms:{' '}
        <a href="mailto:support@verdict.cards">support@verdict.cards</a>, or
        write to Collins and Company Enterprises, LLC, 102 Indian Creek Blvd,
        Flowood, MS 39232.
      </p>
    </LegalLayout>
  )
}
