import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reviews | HIGHEND Interiors - Google Reviews & Ratings',
  description: 'Check out our Google reviews and ratings. HIGHEND Interiors has 5★ rating with 450+ reviews from satisfied clients.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/reviews',
  },
}

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
