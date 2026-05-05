import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bedroom Interior Design in Mumbai | HIGHEND Interiors',
  description: 'Expert bedroom interior design in Mumbai. Serene, luxurious bedrooms with custom wardrobes, lighting, and premium finishes.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/bedroom-interior-design-mumbai',
  },
}

export default function BedroomInteriorDesignMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
