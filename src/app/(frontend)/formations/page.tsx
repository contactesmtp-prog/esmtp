// src/app/(frontend)/formations/page.tsx
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Formation } from '@/payload-types'
import { FormationsClient } from './FormationsClient'

type Props = {
  searchParams: Promise<{
    theme?: string
  }>
}

export default async function FormationsPage({ searchParams }: Props) {
  const payload = await getPayload({ config: configPromise })
  const BeforeId = await searchParams
  const themeId = BeforeId?.theme

  let themeInfo = null
  if (themeId) {
    try {
      themeInfo = await payload.findByID({
        collection: 'themes',
        id: themeId,
      })
    } catch (error) {
      console.error('Theme not found:', error)
    }
  }

  const result = await payload.find({
    collection: 'formations',
    limit: 100,
    pagination: false,
    where: themeId
      ? {
          theme: {
            equals: themeId,
          },
        }
      : {},
  })

  const formations = result.docs as Formation[]

  return (
    <FormationsClient
      formations={formations}
      themeInfo={themeInfo ? { id: String(themeInfo.id), title: themeInfo.title } : null}
    />
  )
}
