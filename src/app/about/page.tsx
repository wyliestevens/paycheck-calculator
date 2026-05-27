import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about PaycheckCalc — a free paycheck calculator providing take-home pay estimates for all 50 US states with 2026 tax rates.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About PaycheckCalc',
    description: 'Learn about PaycheckCalc — a free paycheck calculator for all 50 US states.',
  },
}

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>About PaycheckCalc</h1>

      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
        PaycheckCalc is a free online paycheck calculator that helps employees and job seekers estimate their take-home pay in any US state. We provide accurate calculations based on 2026 federal and state income tax rates, Social Security, and Medicare withholdings.
      </p>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
        Understanding your paycheck shouldn't require an accounting degree. We built PaycheckCalc to give everyone a clear, instant picture of how much money they'll actually bring home after taxes — whether you're evaluating a job offer, planning a budget, or comparing salaries across states.
      </p>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>What We Calculate</h2>
      <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
        <li>Federal income tax using 2026 progressive tax brackets</li>
        <li>State income tax (flat, progressive, or none — depending on the state)</li>
        <li>Social Security tax (6.2% on the first $168,600 of earnings)</li>
        <li>Medicare tax (1.45% on all earnings)</li>
      </ul>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Disclaimer</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
        PaycheckCalc provides estimates for informational purposes only. Our calculations are based on standard deductions for single filers and do not account for pre-tax deductions (401k, health insurance), additional withholdings, local taxes, or other individual circumstances. For precise tax calculations, please consult a qualified tax professional or use the IRS withholding estimator.
      </p>

      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
        PaycheckCalc is operated by AI Peak Biz. For questions or feedback, please visit our <a href="/contact" style={{ color: 'var(--accent)' }}>contact page</a>.
      </p>
    </div>
  )
}
