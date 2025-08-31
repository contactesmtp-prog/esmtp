// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'

// sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { Events } from './collections/Events'
import { Formations } from './collections/Formations'
import { Themes } from './collections/Themes'
import { rentalItems } from './collections/RentalItems'
import { Rentalcategories } from './collections/RentalCategories'
import { ContactUs } from './collections/ContactUs'
import sharp from 'sharp'

//S3 STORAGE
import { s3Storage } from '@payloadcms/storage-s3'
import { NodeHttpHandler } from '@smithy/node-http-handler'
import http from 'http'
const agent = new http.Agent({
  keepAlive: true,
  maxSockets: 500,
})

const customHandler = new NodeHttpHandler({
  connectionTimeout: 5000,
  socketTimeout: 10000,
  httpAgent: agent,
})
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // // Feel free to delete this at any time. Simply remove the line below.
      // beforeLogin: ['@/components/BeforeLogin'],
      // // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // // Feel free to delete this at any time. Simply remove the line below.
      // beforeDashboard: ['@/components/BeforeDashboard'],
      graphics: {
        Icon: '/graphics/Icon/index.tsx#Icon',
        Logo: '/graphics/Logo/index.tsx#Logo',
      },
    },

    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  collections: [
    Pages,
    Posts,
    Media,
    Categories,
    Users,
    Events,
    Formations,
    Themes,
    rentalItems,
    Rentalcategories,
    ContactUs,
  ],

  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
    s3Storage({
      bucket: process.env.S3_BUCKET || '',

      config: {
        endpoint: process.env.S3_ENDPOINT, // Required for MinIO
        region: process.env.S3_REGION,
        requestHandler: customHandler,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        forcePathStyle: true, // Required for MinIO
      },
      collections: {
        media: {
          prefix: 'uploads', // optional folder prefix
        },
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET,
  serverURL: process.env.SERVER_URL || 'http://localhost:3000',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },

  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'French',
        code: 'fr',
      },
      {
        label: 'Arabic',
        code: 'ar',
        // opt-in to setting default text-alignment on Input fields to rtl (right-to-left)
        // when current locale is rtl
        rtl: true,
      },
    ],
    defaultLocale: 'en', // required
    fallback: true, // defaults to true
  },
})
