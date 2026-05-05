import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modular Kitchen Design in Mumbai | HIGHEND Interiors',
  description: 'Modern modular kitchen design and installation in Mumbai. Premium appliances, custom cabinetry, smart storage solutions.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/modular-kitchen-design-mumbai',
  },
}

export default function ModularKitchenDesignMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
