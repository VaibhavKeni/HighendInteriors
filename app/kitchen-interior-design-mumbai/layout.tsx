import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kitchen Interior Design in Mumbai | HIGHEND Interiors',
  description: 'Professional kitchen interior design in Mumbai. Modern kitchens, modular designs, premium appliances, smart storage solutions.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/kitchen-interior-design-mumbai',
  },
}

export default function KitchenInteriorDesignMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
