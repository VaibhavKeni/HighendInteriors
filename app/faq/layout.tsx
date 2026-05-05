import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | HIGHEND Interiors - Frequently Asked Questions',
  description: 'Find answers to frequently asked questions about our interior design services, pricing, and process.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/faq',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
