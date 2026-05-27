import type { Metadata } from 'next'
import { faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with PaycheckCalc for questions, feedback, or support.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact PaycheckCalc',
    description: 'Get in touch with PaycheckCalc for questions, feedback, or support.',
  },
}

const faqs = [
  {
    question: 'Are these calculations accurate?',
    answer: 'Our estimates are based on 2026 federal and state tax rates for single filers using the standard deduction. They do not account for pre-tax deductions, local taxes, or individual tax situations. For exact figures, consult a tax professional.',
  },
  {
    question: 'I found an error in a state\'s tax rate.',
    answer: 'Please email us at contact@aipeakbiz.com with the state name and the correct rate, along with a source, and we\'ll update it promptly.',
  },
  {
    question: 'Can I use PaycheckCalc for married filing jointly?',
    answer: 'Currently, PaycheckCalc calculates taxes for single filers only. We plan to add additional filing statuses in the future.',
  },
]

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Contact Us</h1>

      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
        Have a question, found a bug, or want to provide feedback? We'd love to hear from you.
      </p>

      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
        }}
      >
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Email</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          For general inquiries, corrections, or partnership opportunities, reach us at:
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          <a href="mailto:contact@aipeakbiz.com" style={{ color: 'var(--accent)', fontWeight: 500 }}>
            contact@aipeakbiz.com
          </a>
        </p>
      </div>

      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
        }}
      >
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Common Questions</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Are these calculations accurate?</strong><br />
            Our estimates are based on 2026 federal and state tax rates for single filers using the standard deduction. They do not account for pre-tax deductions, local taxes, or individual tax situations. For exact figures, consult a tax professional.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ color: 'var(--text-primary)' }}>I found an error in a state's tax rate.</strong><br />
            Please email us with the state name and the correct rate, along with a source, and we'll update it promptly.
          </p>
          <p>
            <strong style={{ color: 'var(--text-primary)' }}>Can I use PaycheckCalc for married filing jointly?</strong><br />
            Currently, PaycheckCalc calculates taxes for single filers only. We plan to add additional filing statuses in the future.
          </p>
        </div>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        PaycheckCalc is operated by <a href="https://www.aipeakbiz.com" target="_blank" rel="noopener nofollow" style={{ color: 'var(--accent)' }}>AI Peak Biz</a>.
      </p>
    </div>
  )
}
