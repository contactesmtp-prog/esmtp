// src/app/api/search/route.ts
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const query = url.searchParams.get('q')

  if (!query) {
    return NextResponse.json({ docs: [] })
  }

  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'search',
    limit: 10,
    select: {
      title: true,
      slug: true,
    },
    where: {
      or: [
        {
          title: {
            like: query,
          },
        },
        {
          'meta.title': {
            like: query,
          },
        },
        {
          slug: {
            like: query,
          },
        },
      ],
    },
  })

  return NextResponse.json({ docs: posts.docs })
}
