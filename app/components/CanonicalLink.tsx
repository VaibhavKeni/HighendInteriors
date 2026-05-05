'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { CANONICAL_URLS } from '@/app/lib/canonicalUrls'

export default function CanonicalLink() {
  const pathname = usePathname()

  useEffect(() => {
    try {
      const canonicalUrl = CANONICAL_URLS[pathname] || `https://highendinteriors.co.in${pathname}`
      
      // Remove existing canonical link if any
      const existingCanonical = document.querySelector('link[rel="canonical"]')
      if (existingCanonical && existingCanonical !== document.head.querySelector('link[rel="canonical"][href="https://highendinteriors.co.in/"]')) {
        existingCanonical.remove()
      }

      // Check if canonical link already exists with this URL
      const existingLink = document.querySelector(`link[rel="canonical"][href="${canonicalUrl}"]`)
      if (!existingLink) {
        const link = document.createElement('link')
        link.rel = 'canonical'
        link.href = canonicalUrl
        document.head.appendChild(link)
      }
    } catch (error) {
      console.error('Error setting canonical URL:', error)
    }
  }, [pathname])

  return null
}
