import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials | HIGHEND Interiors - Client Reviews',
  description: 'Read testimonials from our satisfied clients about their interior design experience with HIGHEND Interiors.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/testimonials',
  },
}

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
