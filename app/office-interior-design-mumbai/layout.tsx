import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Office Interior Design in Mumbai | HIGHEND Interiors',
  description: 'Professional office interior design in Mumbai. Workspace optimization, corporate interiors, modern office designs for productivity.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/office-interior-design-mumbai',
  },
}

export default function OfficeInteriorDesignMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
