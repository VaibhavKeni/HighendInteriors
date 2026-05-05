import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop Interior Design in Mumbai | HIGHEND Interiors',
  description: 'Retail and shop interior design in Mumbai. Eye-catching displays, customer-friendly layouts, brand-aligned designs.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/shop-interior-design-mumbai',
  },
}

export default function ShopInteriorDesignMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
