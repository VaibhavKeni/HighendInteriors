import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Interior Designer in Mumbai | HIGHEND Interiors',
  description: 'Professional home interior designer in Mumbai. Complete home design solutions, residential interiors, modern & traditional styles.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/home-interior-designer-mumbai',
  },
}

export default function HomeInteriorDesignerMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
