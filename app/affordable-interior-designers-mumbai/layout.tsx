import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affordable Interior Designers in Mumbai | HIGHEND Interiors',
  description: 'Budget-friendly interior design services in Mumbai. Quality designs at affordable prices. Home interiors, offices, retail spaces.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/affordable-interior-designers-mumbai',
  },
}

export default function AffordableInteriorDesignersMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
