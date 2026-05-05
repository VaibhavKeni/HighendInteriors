import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About HIGHEND Interiors | Best Interior Designer in Mumbai',
  description: 'Learn about HIGHEND Interiors - 15+ years of experience in interior design. Award-winning team, 500+ projects, premium quality, and client satisfaction.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
