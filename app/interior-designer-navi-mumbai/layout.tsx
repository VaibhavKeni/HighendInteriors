import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Designer in Navi Mumbai | HIGHEND Interiors',
  description: 'Interior design services in Navi Mumbai. Residential and commercial interiors. Expert team, quality execution, affordable pricing.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/interior-designer-navi-mumbai',
  },
}

export default function InteriorDesignerNaviMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
