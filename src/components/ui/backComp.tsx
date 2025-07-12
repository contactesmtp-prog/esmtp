'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button' // Or use a plain <button>

export default function BackButton() {
  const router = useRouter()

  return (
    <Button variant="outline" onClick={() => router.back()} className="mb-6">
      ← Back
    </Button>
  )
}
