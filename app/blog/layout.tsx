import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | HIGHEND Interiors - Interior Design Tips & Ideas',
  description: 'Read our blog for interior design tips, trends, and ideas for your home and office.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
