import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Designer in Vile Parle | HIGHEND Interiors',
  description: 'Interior design services in Vile Parle, Mumbai. Home and office interiors. Local expertise, quality designs, timely execution.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/interior-designer-vileparle-mumbai',
  },
}

export default function InteriorDesignerVileParleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
