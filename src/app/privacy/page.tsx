import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | PaycheckCalc',
  description: 'Privacy policy for PaycheckCalc — how we handle your data and protect your privacy.',
}

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>Last updated: May 11, 2026</p>

      <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '1rem' }}>
          PaycheckCalc ("we," "us," or "our") operates the website paycheck.center (the "Site"). This Privacy Policy explains how we collect, use, and protect information when you visit our Site.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Information We Collect</h2>
        <p style={{ marginBottom: '1rem' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Personal Information:</strong> We do not collect personal information such as your name, email address, or phone number unless you voluntarily provide it (for example, by contacting us via email).
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Calculator Inputs:</strong> Salary and pay frequency values you enter into the calculator are processed entirely in your browser. We do not transmit, store, or log your financial information on any server.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Automatically Collected Information:</strong> Like most websites, we may automatically collect certain technical information when you visit, including your IP address, browser type, operating system, referring URL, and pages visited. This data is used for analytics and to improve the Site.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Cookies and Advertising</h2>
        <p style={{ marginBottom: '1rem' }}>
          We use Google AdSense to display advertisements on the Site. Google AdSense may use cookies and similar technologies to serve ads based on your prior visits to this or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>Google's Ads Settings</a>.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Third-party vendors, including Google, use cookies to serve ads based on your visits to this and other websites. You may opt out of the use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>www.aboutads.info/choices</a>.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>How We Use Information</h2>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>To operate and maintain the Site</li>
          <li>To improve the user experience</li>
          <li>To analyze usage trends and site performance</li>
          <li>To display relevant advertisements via Google AdSense</li>
        </ul>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Data Sharing</h2>
        <p style={{ marginBottom: '1rem' }}>
          We do not sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated analytics data with service providers who assist in operating the Site.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Third-Party Links</h2>
        <p style={{ marginBottom: '1rem' }}>
          The Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Children's Privacy</h2>
        <p style={{ marginBottom: '1rem' }}>
          The Site is not directed at children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such information, we will take steps to delete it.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Changes to This Policy</h2>
        <p style={{ marginBottom: '1rem' }}>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of the Site after any changes constitutes acceptance of the updated policy.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Contact</h2>
        <p style={{ marginBottom: '1rem' }}>
          If you have questions about this Privacy Policy, please contact us at <a href="mailto:contact@aipeakbiz.com" style={{ color: 'var(--accent)' }}>contact@aipeakbiz.com</a>.
        </p>
      </div>
    </div>
  )
}
