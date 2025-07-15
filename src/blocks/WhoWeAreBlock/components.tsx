'use client'

import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import type { WhoweareInter as WhoweareInterProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const WhoWeAreTabs: React.FC<WhoweareInterProps> = (props) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D78B22] rounded-full opacity-5 blur-3xl transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0C2E53] rounded-full opacity-5 blur-3xl transform -translate-x-40 translate-y-40"></div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #0C2E53 1px, transparent 1px), radial-gradient(circle at 75% 75%, #D78B22 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          {/* Enhanced Section Header */}
          <div className="max-w-4xl mx-auto text-center pb-16 md:pb-20">
            {props.header && (
              <>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0C2E53] to-[#1a4470] rounded-2xl mb-8 shadow-lg">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C2E53] mb-6 font-playfair-display leading-tight">
                  {props.header}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#D78B22] to-[#f4a335] mx-auto rounded-full"></div>
              </>
            )}
          </div>

          {/* Enhanced Section Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Enhanced Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Background decoration for image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D78B22]/20 to-[#f4a335]/20 rounded-3xl blur-xl opacity-50"></div>

                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
                  {props.tabs?.map((tab, index) => (
                    <Transition
                      key={tab.id || index}
                      show={index === activeTab}
                      enter="transition-all duration-700 ease-out"
                      enterFrom="opacity-0 scale-95 translate-y-8"
                      enterTo="opacity-100 scale-100 translate-y-0"
                      leave="transition-all duration-300 ease-in"
                      leaveFrom="opacity-100 scale-100 translate-y-0"
                      leaveTo="opacity-0 scale-95 translate-y-8"
                    >
                      <div className="relative w-full h-[500px] lg:h-[600px]">
                        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white">
                          {/* Image container with enhanced styling */}
                          <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                            <Media
                              resource={tab.image}
                              className="w-full h-full"
                              imgClassName="object-contain w-full h-full transition-transform duration-700 hover:scale-105"
                              priority={index === 0}
                              loading="eager"
                            />
                          </div>

                          {/* Floating badge */}
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D78B22] to-[#f4a335] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    </Transition>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Text + Tabs Side */}
            <div className="order-1 lg:order-2">
              {/* Content Header */}
              <div className="mb-10">
                {props.subheader && (
                  <h3 className="text-3xl md:text-4xl font-bold text-[#0C2E53] mb-4 font-playfair-display leading-tight">
                    {props.subheader}
                  </h3>
                )}
                {props.description && (
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{props.description}</p>
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
                    className="group inline-flex items-center text-[#D78B22] hover:text-[#f4a335] font-semibold transition-all duration-300"
                  >
                    {props.link.label}
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                )}
              </div>

              {/* Enhanced Tab Buttons */}
              <div className="space-y-4">
                {props.tabs?.map((tab, index) => (
                  <button
                    key={tab.id || index}
                    className={`group w-full text-left p-6 rounded-2xl transition-all duration-300 ease-out transform hover:scale-[1.02] ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-[#0C2E53] to-[#1a4470] text-white shadow-xl border-2 border-[#D78B22]'
                        : 'bg-white hover:bg-gray-50 text-gray-800 shadow-lg border-2 border-gray-100 hover:border-[#D78B22]/30'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Tab indicator */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeTab === index
                            ? 'bg-[#D78B22] text-white'
                            : 'bg-gray-200 text-gray-600 group-hover:bg-[#D78B22] group-hover:text-white'
                        }`}
                      >
                        {activeTab === index ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-bold">{index + 1}</span>
                        )}
                      </div>

                      <div className="flex-1">
                        <h4
                          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                            activeTab === index
                              ? 'text-white'
                              : 'text-[#0C2E53] group-hover:text-[#0C2E53]'
                          }`}
                        >
                          {tab.title}
                        </h4>
                        {tab.text && (
                          <p
                            className={`text-sm leading-relaxed transition-colors duration-300 ${
                              activeTab === index ? 'text-white/80' : 'text-gray-600'
                            }`}
                          >
                            {tab.text}
                          </p>
                        )}
                      </div>

                      {/* Arrow indicator */}
                      <div
                        className={`flex-shrink-0 transition-all duration-300 ${
                          activeTab === index
                            ? 'text-[#D78B22]'
                            : 'text-gray-400 group-hover:text-[#D78B22]'
                        }`}
                      >
                        <ArrowRight
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            activeTab === index ? 'translate-x-1' : 'group-hover:translate-x-1'
                          }`}
                        />
                      </div>
                    </div>
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
