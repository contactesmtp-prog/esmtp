// const redirects = async () => {
//   const internetExplorerRedirect = {
//     destination: '/ie-incompatible.html',
//     has: [
//       {
//         type: 'header',
//         key: 'user-agent',
//         value: '(.*Trident.*)', // all ie browsers
//       },
//     ],
//     permanent: false,
//     source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
//   }

//   const redirects = [internetExplorerRedirect]

//   return redirects
// }

// export default redirects

// /Users/zix/Desktop/ZINOU-PROJECT/esmtp/redirects.js
const redirects = async () => {
  // 1) Strip "/home" for supported locales
  const stripHome = [
    { source: '/:lang(fr|en|ar)/home', destination: '/:lang', permanent: true },
    { source: '/:lang(fr|en|ar)/home/', destination: '/:lang', permanent: true },
  ]

  // 2) Your existing Internet Explorer redirect
  const internetExplorerRedirect = {
    destination: '/ie-incompatible.html',
    has: [
      { type: 'header', key: 'user-agent', value: '(.*Trident.*)' }, // IE only
    ],
    permanent: false,
    source: '/:path((?!ie-incompatible.html$).*)',
  }

  return [
    ...stripHome, // put ours first
    internetExplorerRedirect,
  ]
}

export default redirects
