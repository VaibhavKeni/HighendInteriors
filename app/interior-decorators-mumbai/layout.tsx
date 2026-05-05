import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Decorators in Mumbai | HIGHEND Interiors',
  description: 'Professional interior decorators in Mumbai. Home decoration, styling, furnishing. Transform your space with expert decoration services.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/interior-decorators-mumbai',
  },
}

export default function InteriorDecoratorsMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
