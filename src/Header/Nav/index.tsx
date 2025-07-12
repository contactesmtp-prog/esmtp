'use client'

import React from 'react'
import type { Header } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface HeaderNavProps {
  data: Header
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex items-center gap-4">
      {navItems.map((item, i) => {
        if (item.isGroup) {
          return (
            // <div key={i} className="relative group">
            //   <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-800 dark:text-white hover:text-primary transition">
            //     {item.label || 'Menu'} <ChevronDown className="w-4 h-4" />
            //   </button>

            //   <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700 rounded-md z-20 min-w-[180px]">
            //     <ul className="flex flex-col p-2">
            //       {(item.items || []).map((child, j) => (
            //         <li key={j}>
            //           {child.link && (
            //             <CMSLink
            //               {...child.link}
            //               appearance="link"
            //               className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
            //             />
            //           )}
            //         </li>
            //       ))}
            //     </ul>
            //   </div>
            // </div>
            <div key={i} className="relative group inline-block">
              <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-800 dark:text-white hover:text-primary transition">
                {item.label || 'Menu'} <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 top-full group-hover:flex hidden flex-col bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700 rounded-md z-20 min-w-[180px]">
                <ul className="flex flex-col p-2">
                  {(item.items || []).map((child, j) => (
                    <li key={j}>
                      {child.link && (
                        <CMSLink
                          {...child.link}
                          appearance="link"
                          className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        }

        return (
          <CMSLink
            key={i}
            {...item.link}
            appearance="link"
            className="text-sm font-medium text-gray-800 dark:text-white hover:text-primary transition px-2 py-1"
          />
        )
      })}

      <Link href="/search" className="text-sm text-gray-500 hover:text-primary">
        🔍
        <span className="sr-only">Search</span>
      </Link>
    </nav>
  )
}
