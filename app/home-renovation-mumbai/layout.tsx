import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Renovation in Mumbai | HIGHEND Interiors',
  description: 'Complete home renovation services in Mumbai. Modernize your home with expert design and quality execution. Affordable & premium options.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/home-renovation-mumbai',
  },
}

export default function HomeRenovationMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
