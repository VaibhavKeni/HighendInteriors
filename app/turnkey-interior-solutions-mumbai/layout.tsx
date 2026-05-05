import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Turnkey Interior Solutions in Mumbai | HIGHEND Interiors',
  description: 'Complete turnkey interior solutions in Mumbai. End-to-end project management, design to execution, hassle-free experience.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/turnkey-interior-solutions-mumbai',
  },
}

export default function TurnkeyInteriorSolutionsMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
