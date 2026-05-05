import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Furniture Designers in Mumbai | HIGHEND Interiors',
  description: 'Custom furniture design and manufacturing in Mumbai. Bespoke furniture, modular designs, premium materials and finishes.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/furniture-designers-mumbai',
  },
}

export default function FurnitureDesignersMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
