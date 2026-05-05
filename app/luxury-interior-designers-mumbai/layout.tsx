import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Interior Designers in Mumbai | HIGHEND Interiors',
  description: 'Premium luxury interior design services in Mumbai. High-end homes, villas, penthouses. Exclusive designs with premium materials.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/luxury-interior-designers-mumbai',
  },
}

export default function LuxuryInteriorDesignersMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
