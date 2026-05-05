import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Designer in Andheri | HIGHEND Interiors',
  description: 'Interior design services in Andheri, Mumbai. Residential and commercial interiors. Local expertise, premium quality, affordable pricing.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/interior-designer-andheri',
  },
}

export default function InteriorDesignerAndheriLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
