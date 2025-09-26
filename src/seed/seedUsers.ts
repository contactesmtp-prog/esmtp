import { getPayload } from 'payload'
import config from '@payload-config'

import users from './users.json'

async function run() {
  try {
    const payload = await getPayload({ config })

    for (const user of users) {
      // ✅ check if user already exists by email
      const existing = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: user.email,
          },
        },
      })

      if (existing.totalDocs > 0) {
        payload.logger.info(`⚠️ Skipped (already exists): ${user.email}`)
        continue
      }

      await payload.create({
        collection: 'users',
        data: user as any,
      })

      payload.logger.info(`✅ Created user: ${user.email}`)
    }
  } catch (error) {
    console.error('❌ Error seeding users:', error)
    process.exit(1)
  }

  process.exit(0)
}

await run()
