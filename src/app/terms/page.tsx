import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | PaycheckCalc',
  description: 'Terms of service for PaycheckCalc — rules and guidelines for using our paycheck calculator.',
}

export default function TermsPage() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Terms of Service</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>Last updated: May 11, 2026</p>

      <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '1rem' }}>
          By accessing and using paycheck.center (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use the Site.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>1. Use of the Site</h2>
        <p style={{ marginBottom: '1rem' }}>
          PaycheckCalc provides free online paycheck estimation tools for informational purposes only. You may use the Site for personal, non-commercial purposes. You agree not to misuse the Site, including but not limited to attempting to access it through automated means, interfering with its functionality, or using it for any unlawful purpose.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>2. No Financial or Tax Advice</h2>
        <p style={{ marginBottom: '1rem' }}>
          The calculations and information provided on this Site are estimates only and do not constitute financial, tax, or legal advice. Tax rates, deductions, and regulations change frequently. The Site calculates based on standard deductions for single filers and does not account for all individual tax situations, pre-tax deductions, local taxes, credits, or other factors that may affect your actual take-home pay.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          You should not rely solely on this Site for making financial decisions. Always consult a qualified tax professional or financial advisor for advice specific to your situation.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>3. Accuracy of Information</h2>
        <p style={{ marginBottom: '1rem' }}>
          We make reasonable efforts to keep tax rate data current and accurate. However, we do not warrant that all information on the Site is complete, accurate, or up to date. We are not liable for any errors or omissions in the calculations or content provided.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>4. Intellectual Property</h2>
        <p style={{ marginBottom: '1rem' }}>
          All content on this Site, including text, design, code, and graphics, is the property of PaycheckCalc and its operators. You may not reproduce, distribute, or create derivative works from this content without prior written permission.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>5. Third-Party Content and Advertising</h2>
        <p style={{ marginBottom: '1rem' }}>
          The Site displays third-party advertisements through Google AdSense and may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any third-party sites or advertisers. Your interactions with third-party advertisers are solely between you and the advertiser.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>6. Limitation of Liability</h2>
        <p style={{ marginBottom: '1rem' }}>
          To the fullest extent permitted by law, PaycheckCalc and its operators shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of, or inability to use, the Site or its content. This includes, without limitation, any damages resulting from reliance on calculations or information provided by the Site.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>7. Disclaimer of Warranties</h2>
        <p style={{ marginBottom: '1rem' }}>
          The Site is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>8. Changes to These Terms</h2>
        <p style={{ marginBottom: '1rem' }}>
          We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of the Site after changes are posted constitutes acceptance of the revised Terms.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>9. Governing Law</h2>
        <p style={{ marginBottom: '1rem' }}>
          These Terms are governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law provisions.
        </p>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>10. Contact</h2>
        <p style={{ marginBottom: '1rem' }}>
          If you have questions about these Terms, please contact us at <a href="mailto:contact@aipeakbiz.com" style={{ color: 'var(--accent)' }}>contact@aipeakbiz.com</a>.
        </p>
      </div>
    </div>
  )
}
