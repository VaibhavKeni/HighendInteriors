import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Interior Designers in Mumbai | HIGHEND Interiors',
  description: 'Award-winning interior designers in Mumbai. Premium quality, innovative designs, 15+ years experience. Residential & commercial projects.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/best-interior-designers-mumbai',
  },
}

export default function BestInteriorDesignersMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
