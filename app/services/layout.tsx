import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Design Services | HIGHEND Interiors Mumbai',
  description: 'Comprehensive interior design services including residential, commercial, modular kitchens, and more. Expert designers with 15+ years experience.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
