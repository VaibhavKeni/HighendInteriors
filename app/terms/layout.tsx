import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | HIGHEND Interiors',
  description: 'Terms and conditions for HIGHEND Interiors website and services.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
