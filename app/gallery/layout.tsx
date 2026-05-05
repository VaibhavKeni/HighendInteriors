import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | HIGHEND Interiors - Interior Design Photos',
  description: 'Browse our gallery of interior design photos showcasing our work in residential and commercial spaces.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/gallery',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
