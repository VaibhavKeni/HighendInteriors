import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | HIGHEND Interiors - Interior Design Projects',
  description: 'View our portfolio of completed interior design projects. Residential and commercial spaces transformed by HIGHEND Interiors.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/portfolio',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
