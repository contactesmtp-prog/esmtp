// import { cn } from '@/utilities/ui'
// import React from 'react'

// import { Card, CardPostData } from '@/components/Card'

// export type Props = {
//   posts: CardPostData[]
// }

// export const CollectionArchive: React.FC<Props> = (props) => {
//   const { posts } = props
//   // console.log('here posts', posts)

//   return (
//     <div className={cn('container')}>
//       <div>
//         <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
//           {posts?.map((result, index) => {
//             // console.log('here result', result)

//             if (typeof result === 'object' && result !== null) {
//               return (
//                 <div className="col-span-4" key={index}>
//                   <Card className="h-full" doc={result} relationTo="events" showCategories />
//                 </div>
//               )
//             }

//             return null
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

import { cn } from '@/utilities/ui'
import React from 'react'

import { Card, CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = ({ posts }) => {
  return (
    <section
      className={cn(
        'relative z-10 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#f9f9f9] via-white to-[#f9f9f9]',
      )}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Archives des Événements
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez les derniers événements, histoires et actualités de notre communauté.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 pl-4 sm:pl-6 lg:pl-8">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div
                  key={index}
                  className="transition transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Card className="h-full" doc={result} relationTo="events" showCategories />
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </section>
  )
}
