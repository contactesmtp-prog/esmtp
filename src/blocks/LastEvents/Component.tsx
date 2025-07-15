import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
//import Image from 'next/image'
import { draftMode } from 'next/headers'
import type { Media as MediaType } from '@/payload-types'
import { Media } from '@/components/Media'
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
    <section className="relative overflow-hidden">
      {/* Enhanced Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C2E53] via-[#0C2E53] to-[#1a4470] pointer-events-none">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D78B22] rounded-full opacity-5 blur-3xl transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D78B22] rounded-full opacity-5 blur-3xl transform -translate-x-40 translate-y-40"></div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D78B22 1px, transparent 1px), radial-gradient(circle at 75% 75%, #D78B22 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          {/* Enhanced Section header */}
          <div className="max-w-4xl mx-auto text-center pb-16 md:pb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#D78B22] to-[#f4a335] rounded-2xl mb-8 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair-display leading-tight">
              {header}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D78B22] to-[#f4a335] mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Section content */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 items-start">
            {postsWithAuthors.map(({ post }, i) => {
              const heroImageUrl = getImageUrl(post.heroImage)
              return (
                <article
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  key={post.id || i}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 transition-all duration-500 ease-out hover:bg-white/10 hover:transform hover:scale-105 border border-white/10 hover:border-[#D78B22]/30 shadow-xl hover:shadow-2xl">
                    <Link href={`/events/${post.slug}`} className="relative block mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D78B22] to-[#f4a335] rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-300 ease-out transform group-hover:scale-105 blur-xl"></div>
                      <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        {/* {heroImageUrl ? (
                          // <Image
                          //   src={heroImageUrl}
                          //   alt={post.title || 'Event Image'}
                          //   width={400}
                          //   height={280}
                          //   className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                          // />
                          <Media
                            resource={heroImageUrl}
                            alt={post.title || 'Event Image'}
                            imgClassName="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                          />
                        ) : (
                          <div className="w-full h-64 bg-gradient-to-br from-[#D78B22]/20 to-[#f4a335]/20 flex items-center justify-center">
                            <svg
                              className="w-16 h-16 text-[#D78B22]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        )} */}
                        {typeof post.heroImage === 'object' && post.heroImage !== null ? (
                          <Media
                            resource={post.heroImage}
                            alt={post.title || 'Event Image'}
                            imgClassName="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                          />
                        ) : (
                          <div className="w-full h-64 bg-gradient-to-br from-[#D78B22]/20 to-[#f4a335]/20 flex items-center justify-center">
                            <svg
                              className="w-16 h-16 text-[#D78B22]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        )}

                        {/* Date badge */}
                        <div className="absolute top-4 right-4 bg-[#D78B22] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                          Dernière
                        </div>
                      </div>

                      {/* Floating icon */}
                      <div className="absolute -bottom-6 left-6 w-12 h-12 bg-gradient-to-r from-[#D78B22] to-[#f4a335] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </Link>

                    <div className="pt-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 font-playfair-display leading-tight">
                        <Link
                          href={`/events/${post.slug}`}
                          className="text-white hover:text-[#D78B22] transition-colors duration-300"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-white/70 leading-relaxed line-clamp-3">{post.excerpt}</p>

                      {/* Read more link */}
                      <Link
                        href={`/events/${post.slug}`}
                        className="inline-flex items-center mt-4 text-[#D78B22] hover:text-[#f4a335] font-semibold transition-colors duration-300 group/link"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Enhanced Button */}
          <div className="flex justify-center mt-16 md:mt-20">
            <Link
              href="/events"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#D78B22] to-[#f4a335] text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-[#f4a335] hover:to-[#D78B22] min-w-[220px]"
            >
              <span className="relative z-10">Voir tous les événements</span>
              <svg
                className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>

              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D78B22] to-[#f4a335] rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
