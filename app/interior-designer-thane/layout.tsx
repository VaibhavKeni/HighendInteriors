import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Designer in Thane | HIGHEND Interiors',
  description: 'Interior design services in Thane. Home and office interiors. Professional designers, quality work, competitive pricing.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/interior-designer-thane',
  },
}

export default function InteriorDesignerThaneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
