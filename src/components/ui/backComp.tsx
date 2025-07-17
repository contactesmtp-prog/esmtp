// 'use client'

// import { useRouter } from 'next/navigation'
// import { Button } from '@/components/ui/button' // Or use a plain <button>

// export default function BackButton() {
//   const router = useRouter()

//   return (
//     <Button variant="outline" onClick={() => router.back()} className="mb-6">
//       ← Retour
//     </Button>
//   )
// }

'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-[#0C2E53] hover:text-[#D78B22] hover:bg-[#D78B22]/10 transition-colors duration-300 rounded-xl px-4 py-2 text-sm font-medium shadow-sm"
    >
      <ArrowLeft className="w-4 h-4" />
      Retour
    </Button>
  )
}
