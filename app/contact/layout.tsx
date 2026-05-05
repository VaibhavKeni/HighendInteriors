import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact HIGHEND Interiors | Get Your Free Consultation',
  description: 'Contact HIGHEND Interiors for your interior design project. Call +91 83558 88976 or fill our contact form for a free consultation.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
