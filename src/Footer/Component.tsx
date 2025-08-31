// import { getCachedGlobal } from '@/utilities/getGlobals'
// import Link from 'next/link'
// import React from 'react'

// import { CMSLink } from '@/components/Link'
// import { Logo } from '@/components/Logo/Logo'
// import {
//   Facebook,
//   Linkedin,
//   Twitter,
//   Instagram,
//   Youtube,
//   MapPin,
//   Phone,
//   Mail,
//   ExternalLink,
//   Sparkles,
// } from 'lucide-react'

// import type { Footer } from '@/payload-types'

// export async function Footer() {
//   const footerData = (await getCachedGlobal('footer', 1)(lang)) as Footer

//   const navGroups = footerData?.navItems || []
//   const socialLinks = footerData?.socialLinks || []
//   const mapEmbedUrl = footerData?.mapEmbed

//   const iconMap: Record<string, React.ReactNode> = {
//     facebook: <Facebook className="w-5 h-5" />,
//     linkedin: <Linkedin className="w-5 h-5" />,
//     twitter: <Twitter className="w-5 h-5" />,
//     instagram: <Instagram className="w-5 h-5" />,
//     youtube: <Youtube className="w-5 h-5" />,
//   }

//   const contacts = [
//     contactInfo?.email && {
//       icon: <Mail className="w-4 h-4" />,
//       label: 'Email',
//       value: contactInfo.email,
//       href: `mailto:${contactInfo.email}`,
//     },
//     contactInfo?.phone && {
//       icon: <Phone className="w-4 h-4" />,
//       label: 'Téléphone',
//       value: contactInfo.phone,
//       href: `tel:${contactInfo.phone}`,
//     },
//     contactInfo?.address && {
//       icon: <MapPin className="w-4 h-4" />,
//       label: 'Adresse',
//       value: contactInfo.address,
//       href: null,
//     },
//   ].filter(Boolean)

//   return (
//     <footer className="relative mt-auto bg-gradient-to-br from-[#0C2E53] via-[#0C2E53] to-[#1a4a7a] text-white overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#D78B22]/5 to-transparent rounded-full blur-3xl"></div>
//       </div>

//       {/* Top accent line */}
//       <div className="h-1 bg-gradient-to-r from-[#D78B22] via-[#D78B22]/80 to-[#D78B22]"></div>

//       <div className="relative container mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
//           {/* Column 1: Logo + Description + Social */}
//           <div className="lg:col-span-1 space-y-8">
//             <div className="space-y-6">
//               <Link href="/" className="inline-block group">
//                 <div className="relative">
//                   <Logo className="h-20 w-auto transition-transform duration-300 group-hover:scale-105" />
//                   <div className="absolute -inset-2 bg-gradient-to-r from-[#D78B22]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
//                 </div>
//               </Link>

//               <div className="space-y-4">
//                 <div className="inline-flex items-center gap-2 bg-[#D78B22]/20 text-[#D78B22] px-3 py-1 rounded-full text-xs font-medium">
//                   <Sparkles className="w-3 h-3" />
//                   Excellence & Innovation
//                 </div>
//                 <p className="text-white/80 text-sm leading-relaxed max-w-xs">
//                   ESMTP - Excellence dans les services, les technologies et le professionnalisme
//                   moderne. Votre partenaire de confiance pour la formation professionnelle.
//                 </p>
//               </div>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-3">
//               <h4 className="text-sm font-semibold text-[#D78B22] mb-4 flex items-center gap-2">
//                 <div className="w-1 h-4 bg-[#D78B22] rounded-full"></div>
//                 Contact rapide
//               </h4>
//               {contactInfo.map((item, index) => (
//                 <div key={index} className="flex items-center gap-3 group">
//                   <div className="w-8 h-8 bg-[#D78B22]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D78B22]/30 transition-colors">
//                     <div className="text-[#D78B22]">{item.icon}</div>
//                   </div>
//                   <div className="text-xs">
//                     <div className="text-white/60 font-medium">{item.label}</div>
//                     {item.href ? (
//                       <a
//                         href={item.href}
//                         className="text-white/90 hover:text-[#D78B22] transition-colors duration-300 flex items-center gap-1"
//                       >
//                         {item.value}
//                         {item.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
//                       </a>
//                     ) : (
//                       <span className="text-white/90">{item.value}</span>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div className="space-y-4">
//               <h4 className="text-sm font-semibold text-[#D78B22] flex items-center gap-2">
//                 <div className="w-1 h-4 bg-[#D78B22] rounded-full"></div>
//                 Suivez-nous
//               </h4>
//               <div className="flex gap-3">
//                 {socialLinks.map((social, i) => {
//                   const isCustom = social.link?.type === 'custom'
//                   const url =
//                     isCustom && social.link?.url
//                       ? social.link.url
//                       : social.link?.reference &&
//                           typeof social.link.reference === 'object' &&
//                           'slug' in social.link.reference
//                         ? `/${social.link.reference.slug}`
//                         : '#'

//                   return (
//                     <a
//                       key={i}
//                       href={url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group relative w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#D78B22] transition-all duration-300 hover:scale-110"
//                       aria-label={social.platform}
//                     >
//                       <div className="text-white group-hover:scale-110 transition-transform duration-300">
//                         {iconMap[social.platform.toLowerCase()]}
//                       </div>
//                       <div className="absolute inset-0 bg-gradient-to-r from-[#D78B22]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
//                     </a>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Column 2 & 3: Navigation Groups */}
//           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
//             {navGroups.map((group, i) => (
//               <div key={i} className="space-y-4">
//                 {group.title && (
//                   <h4 className="text-sm font-semibold text-[#D78B22] mb-4 flex items-center gap-2">
//                     <div className="w-1 h-4 bg-[#D78B22] rounded-full"></div>
//                     {group.title}
//                   </h4>
//                 )}
//                 <ul className="space-y-3">
//                   {(group.links || []).map((linkObj, j) => (
//                     <li key={j}>
//                       {linkObj.link && (
//                         <CMSLink
//                           {...linkObj.link}
//                           className="group text-sm text-white/80 hover:text-[#D78B22] transition-all duration-300 flex items-center gap-2"
//                         >
//                           <div className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-[#D78B22] group-hover:w-2 transition-all duration-300"></div>
//                           <span className="group-hover:translate-x-1 transition-transform duration-300">
//                             {/* {linkObj.link.label} */}
//                           </span>
//                         </CMSLink>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Column 4: Google Map */}
//           <div className="lg:col-span-1 space-y-4">
//             <h4 className="text-sm font-semibold text-[#D78B22] mb-4 flex items-center gap-2">
//               <div className="w-1 h-4 bg-[#D78B22] rounded-full"></div>
//               Notre localisation
//             </h4>
//             <div className="relative group">
//               <div className="w-full h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
//                 <iframe
//                   src={
//                     mapEmbedUrl ||
//                     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102711.55126047462!2d1.2748095397382297!3d36.16949014998975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12840e802595ec23%3A0x343dccf4a3049e3e!2sChlef!5e0!3m2!1sen!2sdz!4v1752247299939!5m2!1sen!2sdz'
//                   }
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="transition-all duration-300 group-hover:scale-105"
//                 ></iframe>
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0C2E53]/20 to-transparent pointer-events-none"></div>
//               </div>
//               <div className="absolute -inset-1 bg-gradient-to-r from-[#D78B22]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright Section */}
//       <div className="relative border-t border-white/10 bg-[#0C2E53]/50 backdrop-blur-sm">
//         <div className="container mx-auto px-6 py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-gradient-to-r from-[#D78B22] to-[#D78B22]/80 rounded-lg flex items-center justify-center">
//                 <Sparkles className="w-4 h-4 text-white" />
//               </div>
//               <p className="text-sm text-white/70">© 2025 ESMTP - Tous droits réservés</p>
//             </div>

//             <div className="flex items-center gap-6 text-xs text-white/60">
//               <Link href="/privacy" className="hover:text-[#D78B22] transition-colors duration-300">
//                 Politique de confidentialité
//               </Link>
//               <Link href="/terms" className="hover:text-[#D78B22] transition-colors duration-300">
//                 Conditions d&apos;utilisation
//               </Link>
//               <Link href="/contact" className="hover:text-[#D78B22] transition-colors duration-300">
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// 'use client'

// import { getCachedGlobal } from '@/utilities/getGlobals'
// import Link from 'next/link'
// import React from 'react'

// import { CMSLink } from '@/components/Link'
// import { Logo } from '@/components/Logo/Logo'
// import {
//   Facebook,
//   Linkedin,
//   Twitter,
//   Instagram,
//   Youtube,
//   MapPin,
//   Phone,
//   Mail,
//   ExternalLink,
//   Sparkles,
// } from 'lucide-react'

// import type { Footer } from '@/payload-types'

// type Lang = 'en' | 'fr' | 'ar'

// export async function Footer({ lang }: { lang: Lang }) {
//   const footerData = (await getCachedGlobal('footer', 1)(lang)) as Footer

//   const navGroups = footerData?.navItems || []
//   const socialLinks = footerData?.socialLinks || []
//   const mapEmbedUrl = footerData?.mapEmbed
//   const contactInfo = footerData?.contactInfo

//   const iconMap: Record<string, React.ReactNode> = {
//     facebook: <Facebook className="w-5 h-5" />,
//     linkedin: <Linkedin className="w-5 h-5" />,
//     twitter: <Twitter className="w-5 h-5" />,
//     instagram: <Instagram className="w-5 h-5" />,
//     youtube: <Youtube className="w-5 h-5" />,
//   }

//   type ContactItem = {
//     icon: React.ReactNode
//     label: string
//     value: string
//     href: string | null
//   }

//   const contacts: ContactItem[] = [
//     contactInfo?.email
//       ? {
//           icon: <Mail className="w-4 h-4" />,
//           label: lang === 'fr' ? 'Email' : lang === 'ar' ? 'البريد الإلكتروني' : 'Email',
//           value: contactInfo.email,
//           href: `mailto:${contactInfo.email}`,
//         }
//       : null,
//     contactInfo?.phone
//       ? {
//           icon: <Phone className="w-4 h-4" />,
//           label: lang === 'fr' ? 'Téléphone' : lang === 'ar' ? 'الهاتف' : 'Phone',
//           value: contactInfo.phone,
//           href: `tel:${contactInfo.phone}`,
//         }
//       : null,
//     contactInfo?.address
//       ? {
//           icon: <MapPin className="w-4 h-4" />,
//           label: lang === 'fr' ? 'Adresse' : lang === 'ar' ? 'العنوان' : 'Address',
//           value: contactInfo.address,
//           href: null,
//         }
//       : null,
//   ].filter(Boolean) as ContactItem[]

//   return (
//     <footer
//       dir={lang === 'ar' ? 'rtl' : 'ltr'}
//       className="relative mt-auto bg-gradient-to-br from-[#0C2E53] via-[#0C2E53] to-[#1a4a7a] text-white overflow-hidden"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#D78B22]/5 to-transparent rounded-full blur-3xl"></div>
//       </div>

//       {/* Top line */}
//       <div className="h-1 bg-gradient-to-r from-[#D78B22] via-[#D78B22]/80 to-[#D78B22]"></div>

//       <div className="relative container mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
//           {/* Column 1: Logo + Description + Contact + Social */}
//           <div className="lg:col-span-1 space-y-8">
//             <div className="space-y-6">
//               <Link href="/" className="inline-block group">
//                 <div className="relative">
//                   <Logo className="h-20 w-auto transition-transform duration-300 group-hover:scale-105" />
//                   <div className="absolute -inset-2 bg-gradient-to-r from-[#D78B22]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
//                 </div>
//               </Link>

//               <div className="space-y-4">
//                 <div className="inline-flex items-center gap-2 bg-[#D78B22]/20 text-[#D78B22] px-3 py-1 rounded-full text-xs font-medium">
//                   <Sparkles className="w-3 h-3" />
//                   {lang === 'fr'
//                     ? 'Excellence & Innovation'
//                     : lang === 'ar'
//                       ? 'التميّز والابتكار'
//                       : 'Excellence & Innovation'}
//                 </div>
//                 <p className="text-white/80 text-sm leading-relaxed max-w-xs">
//                   {lang === 'fr'
//                     ? 'ESMTP - Excellence dans les services, les technologies et le professionnalisme moderne.'
//                     : lang === 'ar'
//                       ? 'ESMTP - التميّز في الخدمات، التقنيات والاحترافية الحديثة.'
//                       : 'ESMTP - Excellence in services, technologies, and modern professionalism.'}
//                 </p>
//               </div>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-3">
//               <h4 className="text-sm font-semibold text-[#D78B22] mb-4 flex items-center gap-2">
//                 <div className="w-1 h-4 bg-[#D78B22] rounded-full"></div>
//                 {lang === 'fr' ? 'Contact rapide' : lang === 'ar' ? 'اتصال سريع' : 'Quick Contact'}
//               </h4>
//               {contacts.map((item, index) => (
//                 <div key={index} className="flex items-center gap-3 group">
//                   <div className="w-8 h-8 bg-[#D78B22]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D78B22]/30 transition-colors">
//                     <div className="text-[#D78B22]">{item.icon}</div>
//                   </div>
//                   <div className="text-xs">
//                     <div className="text-white/60 font-medium">{item.label}</div>
//                     {item?.href ? (
//                       <a
//                         href={item.href}
//                         className="text-white/90 hover:text-[#D78B22] transition-colors duration-300 flex items-center gap-1"
//                       >
//                         {item.value}
//                         {item.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
//                       </a>
//                     ) : (
//                       <span className="text-white/90">{item.value}</span>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div className="space-y-4">
//               <h4 className="text-sm font-semibold text-[#D78B22] flex items-center gap-2">
//                 <div className="w-1 h-4 bg-[#D78B22] rounded-full"></div>
//                 {lang === 'fr' ? 'Suivez-nous' : lang === 'ar' ? 'تابعنا' : 'Follow us'}
//               </h4>
//               <div className="flex gap-3">
//                 {socialLinks.map((social, i) => {
//                   const isCustom = social.link?.type === 'custom'
//                   const url =
//                     isCustom && social.link?.url
//                       ? social.link.url
//                       : social.link?.reference &&
//                           typeof social.link.reference === 'object' &&
//                           'slug' in social.link.reference
//                         ? `/${social.link.reference.slug}`
//                         : '#'

//                   return (
//                     <a
//                       key={i}
//                       href={url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group relative w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#D78B22] transition-all duration-300 hover:scale-110"
//                       aria-label={social.platform}
//                     >
//                       <div className="text-white group-hover:scale-110 transition-transform duration-300">
//                         {iconMap[social.platform.toLowerCase()]}
//                       </div>
//                       <div className="absolute inset-0 bg-gradient-to-r from-[#D78B22]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
//                     </a>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Column 2 & 3: Navigation */}
//           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
//             {navGroups.map((group, i) => (
//               <div key={i} className="space-y-4">
//                 {group.title && (
//                   <h4 className="text-sm font-semibold text-[#D78B22] mb-4 flex items-center gap-2">
//                     <div className="w-1 h-4 bg-[#D78B22] rounded-full"></div>
//                     {group.title}
//                   </h4>
//                 )}
//                 <ul className="space-y-3">
//                   {(group.links || []).map((linkObj, j) => (
//                     <li key={j}>
//                       {linkObj.link && (
//                         <CMSLink
//                           lang={lang}
//                           {...linkObj.link}
//                           className="group text-sm text-white/80 hover:text-[#D78B22] transition-all duration-300 flex items-center gap-2"
//                         >
//                           <div className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-[#D78B22] group-hover:w-2 transition-all duration-300"></div>
//                           <span className="group-hover:translate-x-1 transition-transform duration-300">
//                             {linkObj.link.label}
//                           </span>
//                         </CMSLink>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Column 4: Google Map */}
//           <div className="lg:col-span-1 space-y-4">
//             <h4 className="text-sm font-semibold text-[#D78B22] mb-4 flex items-center gap-2">
//               <div className="w-1 h-4 bg-[#D78B22] rounded-full"></div>
//               {lang === 'fr' ? 'Notre localisation' : lang === 'ar' ? 'موقعنا' : 'Our Location'}
//             </h4>
//             <div className="relative group">
//               <div className="w-full h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
//                 <iframe
//                   src={mapEmbedUrl || 'https://www.google.com/maps'}
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="transition-all duration-300 group-hover:scale-105"
//                 ></iframe>
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0C2E53]/20 to-transparent pointer-events-none"></div>
//               </div>
//               <div className="absolute -inset-1 bg-gradient-to-r from-[#D78B22]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="relative border-t border-white/10 bg-[#0C2E53]/50 backdrop-blur-sm">
//         <div className="container mx-auto px-6 py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-gradient-to-r from-[#D78B22] to-[#D78B22]/80 rounded-lg flex items-center justify-center">
//                 <Sparkles className="w-4 h-4 text-white" />
//               </div>
//               <p className="text-sm text-white/70">
//                 © 2025 ESMTP -{' '}
//                 {lang === 'fr'
//                   ? 'Tous droits réservés'
//                   : lang === 'ar'
//                     ? 'كل الحقوق محفوظة'
//                     : 'All rights reserved'}
//               </p>
//             </div>

//             <div className="flex items-center gap-6 text-xs text-white/60">
//               <Link href="/privacy" className="hover:text-[#D78B22] transition-colors duration-300">
//                 {lang === 'fr'
//                   ? 'Politique de confidentialité'
//                   : lang === 'ar'
//                     ? 'سياسة الخصوصية'
//                     : 'Privacy Policy'}
//               </Link>
//               <Link href="/terms" className="hover:text-[#D78B22] transition-colors duration-300">
//                 {lang === 'fr'
//                   ? "Conditions d'utilisation"
//                   : lang === 'ar'
//                     ? 'شروط الاستخدام'
//                     : 'Terms of Use'}
//               </Link>
//               <Link href="/contact" className="hover:text-[#D78B22] transition-colors duration-300">
//                 {lang === 'fr' ? 'Contact' : lang === 'ar' ? 'اتصال' : 'Contact'}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Footer } from '@/payload-types'
import FooterClient from './FooterClient'
type Lang = 'en' | 'fr' | 'ar'

export default async function FooterServer({ lang }: { lang: Lang }) {
  const footerData = (await getCachedGlobal('footer', 1)(lang)) as Footer
  return <FooterClient lang={lang} footerData={footerData} />
}
