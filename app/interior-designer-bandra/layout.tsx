import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Designer in Bandra | HIGHEND Interiors',
  description: 'Interior design services in Bandra, Mumbai. Luxury and premium home interiors. Expert designers, quality execution, timely delivery.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/interior-designer-bandra',
  },
}

export default function InteriorDesignerBandraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
