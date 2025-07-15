'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0C2E53] text-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-extrabold mb-4 text-[#D78B22]">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg mb-6">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button
          asChild
          className="bg-[#D78B22] hover:bg-[#b8741d] text-white px-6 py-3 rounded-full text-lg"
        >
          <Link href="/">Go Back Home</Link>
        </Button>
      </div>
    </div>
  )
}
