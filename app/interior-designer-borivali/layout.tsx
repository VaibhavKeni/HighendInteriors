import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Designer in Borivali | HIGHEND Interiors',
  description: 'Interior design services in Borivali, Mumbai. Residential and commercial spaces. Affordable designs, quality materials, expert execution.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/interior-designer-borivali',
  },
}

export default function InteriorDesignerBorivaliLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
