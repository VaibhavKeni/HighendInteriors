import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2BHK Interior Design in Mumbai | HIGHEND Interiors',
  description: '2BHK apartment interior design in Mumbai. Space optimization, modern designs, affordable pricing. Transform your 2-bedroom home.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/2bhk-interior-design-mumbai',
  },
}

export default function TwoBHKInteriorDesignMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
