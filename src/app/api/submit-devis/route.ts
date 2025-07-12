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

    // console.log('Sending to Google Sheets:', {
    //   nomComplet: nom,
    //   email,
    //   telephone,
    //   entreprise,
    //   message,
    //   formationId,
    //   formationNom: formation.nom,
    // })

    const webhookURL =
      'https://script.google.com/macros/s/AKfycbw3dY3iqhh49qCSD7oo4szDzrsvowUnBkCK56hzUM3geiCIzwdtl7H8z15vWsRWZE8/exec'
    await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nomComplet: nom,
        email,
        entreprise,
        telephone,
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
