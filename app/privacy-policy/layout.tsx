import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | HIGHEND Interiors',
  description: 'Privacy policy for HIGHEND Interiors website.',
  alternates: {
    canonical: 'https://highendinteriors.co.in/privacy-policy',
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
