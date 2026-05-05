import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'False Ceiling Design in Mumbai | HIGHEND Interiors',
  description: 'Modern false ceiling design and installation in Mumbai. Decorative ceilings, lighting integration, acoustic solutions.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/false-ceiling-design-mumbai',
  },
}

export default function FalseCeilingDesignMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
