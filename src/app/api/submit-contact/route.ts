// File: src/app/api/submit-contact/route.ts

import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { nom, email, telephone, entreprise, message } = body

    if (!nom || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Optional: Save to Payload CMS if needed
    const payload = await getPayload({ config: configPromise })

    // If you have a "contacts" collection in Payload, save it
    // await payload.create({
    //   collection: 'contacts',
    //   data: {
    //     nom,
    //     email,
    //     entreprise,
    //     telephone,
    //     message,
    //   },
    // })

    // Send data to Google Sheets via webhook
    const webhookURL = 'https://script.google.com/macros/s/YOUR_WEBHOOK_URL_HERE/exec'

    await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nomComplet: nom,
        email,
        entreprise,
        telephone,
        message,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('submit-contact API Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
