import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { nom, email, telephone, entreprise, message, rentalId } = body

    // Validation
    if (!nom || !email || !rentalId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })

    // Get rental item details from Payload
    const rental = await payload.findByID({
      collection: 'rentalitems',
      id: rentalId,
    })

    if (!rental) {
      return NextResponse.json({ error: 'Rental item not found' }, { status: 404 })
    }

    // ✅ Send to Google Sheets webhook
    const webhookURL =
      'https://script.google.com/macros/s/AKfycbwFjkib6sS3TOjHHeUGQ_ceQNSmPa192K5LhxS01dNRIVqsJovnOpK74-s60GTcG94FcA/exec'
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nomComplet: nom,
        email,
        telephone,
        entreprise,
        message,
        rentalId,
        rentalTitle: rental.title,
      }),
    })

    if (!response.ok) {
      throw new Error('Webhook request failed')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Rental Devis API Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
