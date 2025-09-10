import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { nom, email, telephone, entreprise, message, formationId } = body

    if (!formationId || !nom || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })
    const formation = await payload.findByID({
      collection: 'formations',
      id: formationId,
    })

    const webhookURL =
      'https://script.google.com/macros/s/AKfycbyMaNLhi9a4GMNHyWp6TWaKX0Iy-d8dSsYEahngORuodiPiR0pvYqKfVTrIhKKJ2F2s/exec'
    await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nomComplet: nom,
        email,
        telephone,
        entreprise,
        message,
        formationId,
        formationNom: formation.nom,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
