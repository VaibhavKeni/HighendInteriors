import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Interior Designers in Mumbai | HIGHEND Interiors',
  description: 'Expert residential interior designers in Mumbai. Home design, modular kitchens, bedrooms, living rooms. Affordable & luxury options.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/residential-interior-designers-mumbai',
  },
}

export default function ResidentialInteriorDesignersMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
