import { cn } from '@/utilities/ui'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { draftMode } from 'next/headers'
import type { Media as MediaType } from '@/payload-types'

type EventType = RequiredDataFromCollectionSlug<'events'>
type UserType = RequiredDataFromCollectionSlug<'users'>

const queryEventBySlug = async (): Promise<EventType[]> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'events',
    draft,
    limit: 3,
    pagination: false,
    overrideAccess: draft,
    sort: '-createdAt',
  })

  return result.docs as EventType[]
}

const queryUserByID = async (id: string): Promise<UserType | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'users',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      id: { equals: id },
    },
  })

  return result.docs[0] || null
}

const getImageUrl = (media: number | MediaType | null | undefined): string | null => {
  if (media && typeof media === 'object' && 'url' in media && typeof media.url === 'string') {
    return media.url
  }
  return null
}

export const LastEventBlock = async ({ header }: { header: string }) => {
  const posts = await queryEventBySlug()

  const postsWithAuthors = await Promise.all(
    posts.map(async (post) => {
      const author = post.authors?.[0]
      let user: UserType | null = null
      if (author && typeof author === 'object' && 'id' in author) {
        user = await queryUserByID(String(author.id))
      }
      return { post, user }
    }),
  )

  return (
    <section className="relative">
      {/* Background shape */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)] h-96 md:h-auto md:mb-64"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-100">{header}</h2>
          </div>

          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-10 items-start">
            {postsWithAuthors.map(({ post }, i) => {
              const heroImageUrl = getImageUrl(post.heroImage)
              return (
                <article data-aos="fade-up" data-aos-delay={i * 100} key={post.id || i}>
                  <Link href={`/events/${post.slug}`} className="relative block group mt-8 mb-4">
                    <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" />
                    <div className="overflow-hidden">
                      {heroImageUrl && (
                        <Image
                          src={heroImageUrl}
                          alt={post.title || 'Event Image'}
                          width={342}
                          height={342}
                          className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out"
                        />
                      )}
                    </div>
                    <div className="w-16 h-16 absolute bg-gradient-to-b from-blue-500 to-blue-600 rounded-full -top-8 left-8">
                      <svg
                        className="w-16 h-16 fill-current text-white"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="32" cy="32" r="16" />
                      </svg>
                    </div>
                  </Link>
                  <h3 className="h4 font-playfair-display mb-2">
                    <Link
                      href={`/events/${post.slug}`}
                      className="text-slate-800 hover:underline hover:decoration-blue-100"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-lg text-slate-500">{post.excerpt}</p>
                </article>
              )
            })}
          </div>

          {/* Button */}
          <div className="w-full flex justify-center mt-16">
            <Link
              href="/events"
              className="bg-white text-slate-900 border border-slate-200 rounded-lg py-2 px-6 hover:bg-slate-100 transition text-center min-w-[200px]"
            >
              View All Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
