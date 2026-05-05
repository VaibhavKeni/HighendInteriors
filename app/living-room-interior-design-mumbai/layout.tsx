import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Living Room Interior Design in Mumbai | HIGHEND Interiors',
  description: 'Elegant living room design in Mumbai. TV units, seating arrangements, accent walls, entertainment setups. Modern & stylish designs.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/living-room-interior-design-mumbai',
  },
}

export default function LivingRoomInteriorDesignMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
