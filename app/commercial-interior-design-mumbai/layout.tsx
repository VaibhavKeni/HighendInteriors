import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Interior Design in Mumbai | HIGHEND Interiors',
  description: 'Professional commercial interior design services in Mumbai. Office design, retail spaces, corporate interiors. Expert team, timely delivery.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/commercial-interior-design-mumbai',
  },
}

export default function CommercialInteriorDesignMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
