import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'events',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/events/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <article className="pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      {/* <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">
          <RichText 
          className="max-w-[48rem] mx-auto" 
          data={post.content} enableGutter={false}
          
          />
        </div>
      </div> */}
      <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-200/50 hover:shadow-lg hover:border-slate-300/50 transition-all duration-300 h-full">
        <RichText
          data={post.content}
          enableGutter={false}
          className="prose prose-slate max-w-none
                            [&>h1]:text-4xl [&>h1]:lg:text-5xl [&>h1]:font-bold [&>h1]:leading-tight [&>h1]:text-slate-900 [&>h1]:mb-6
                            [&>h2]:text-3xl [&>h2]:lg:text-4xl [&>h2]:font-bold [&>h2]:leading-tight [&>h2]:text-slate-800 [&>h2]:mb-5
                            [&>h3]:text-2xl [&>h3]:lg:text-3xl [&>h3]:font-semibold [&>h3]:leading-snug [&>h3]:text-slate-800 [&>h3]:mb-4
                            [&>h4]:text-xl [&>h4]:lg:text-2xl [&>h4]:font-semibold [&>h4]:text-slate-700 [&>h4]:mb-3
                            [&>h5]:text-lg [&>h5]:font-medium [&>h5]:text-slate-700 [&>h5]:mb-3
                            [&>h6]:text-base [&>h6]:font-medium [&>h6]:text-slate-600 [&>h6]:mb-2
                            [&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>p:last-child]:mb-0
                            [&>ul]:text-lg [&>ul]:text-slate-600 [&>ul]:mb-6
                            [&>ol]:text-lg [&>ol]:text-slate-600 [&>ol]:mb-6
                            [&>li]:mb-2
                            [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-slate-700 [&>blockquote]:bg-slate-50 [&>blockquote]:py-4 [&>blockquote]:rounded-r-lg
                            [&>code]:bg-slate-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono [&>code]:text-slate-800
                            [&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto
                            [&_strong]:font-semibold [&_strong]:text-slate-800
                            [&_em]:italic [&_em]:text-slate-700
                            [&_a]:text-blue-600 [&_a]:hover:text-blue-700 [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-2
                          "
        />
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'events',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
