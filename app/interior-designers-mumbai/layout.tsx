import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Designers in Mumbai | HIGHEND Interiors',
  description: 'Best interior designers in Mumbai for residential and commercial spaces. 15+ years experience, 500+ projects, affordable & luxury designs.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/interior-designers-mumbai',
  },
}

export default function InteriorDesignersMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
