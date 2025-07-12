'use client'

import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import type { WhoweareInter as WhoweareInterProps } from '@/payload-types'
import { Media } from '@/components/Media'

export const WhoWeAreTabs: React.FC<WhoweareInterProps> = (props) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-200">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            {props.header && (
              <>
                <h2 className="h2 font-playfair-display text-slate-800">{props.header}</h2>
              </>
            )}
          </div>

          {/* Section Content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-start md:space-x-8 xl:space-x-20 space-y-8 md:space-y-0">
            {/* Image Side */}
            <div className="md:w-1/2 relative pt-4 md:pt-0">
              <div className="transition-all">
                <div className="relative flex flex-col">
                  {props.tabs?.map((tab, index) => (
                    <Transition
                      key={tab.id || index}
                      show={index === activeTab}
                      enter="transition-opacity transform duration-700"
                      enterFrom="opacity-0 translate-y-6"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition-opacity transform duration-300"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-6"
                    >
                      <div className="relative w-full h-[600px]">
                        <div className="relative w-full h-full overflow-hidden rounded-3xl border-4 border-[#FBEBD6] shadow-2xl bg-gradient-to-br from-white via-[#FBEBD6] to-white">
                          <div className="absolute inset-0 z-0 animate-pulse-slow bg-gradient-to-r from-[#FBEBD6]/40 via-transparent to-[#FBEBD6]/40" />
                          <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                            <Media
                              resource={tab.image}
                              className="w-full h-full"
                              imgClassName="object-contain w-full h-full"
                              priority={index === 0}
                              loading="eager"
                            />
                          </div>
                        </div>
                      </div>
                    </Transition>
                  ))}
                </div>
              </div>
            </div>

            {/* Text + Tabs Side */}
            <div className="md:w-1/2">
              <div className="mb-8 text-left">
                {props.subheader && (
                  <h1 className="text-3xl text-slate-800 mb-2">{props.subheader}</h1>
                )}
                {props.description && (
                  <p className="text-lg text-slate-500 mb-6">{props.description}</p>
                )}
                {props.link?.label && (props.link.url || props.link.reference) && (
                  <a
                    href={
                      props.link.url ||
                      (typeof props.link.reference?.value === 'object'
                        ? 'slug' in props.link.reference.value
                          ? `/${props.link.reference.value.slug}`
                          : '#'
                        : '#')
                    }
                    target={props.link.newTab ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="text-[#D78B22] hover:underline text-base mt-2 inline-block"
                  >
                    {props.link.label}
                  </a>
                )}
              </div>

              {/* Tab Buttons */}
              <div className="space-y-4 mb-10">
                {props.tabs?.map((tab, index) => (
                  <button
                    key={tab.id || index}
                    className={`w-full text-left px-5 py-4 border rounded-md transition duration-300 ease-in-out shadow-sm ${
                      activeTab !== index
                        ? 'border-transparent opacity-50 hover:opacity-75'
                        : 'border-[#D78B22] bg-[#FBEBD6] text-[#D78B22]'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <h2 className="text-lg font-semibold mb-1">{tab.title}</h2>
                    {tab.text && <p className="text-slate-500 text-sm">{tab.text}</p>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
