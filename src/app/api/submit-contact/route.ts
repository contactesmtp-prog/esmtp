// File: src/app/api/submit-contact/route.ts

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { nom, email, telephone, entreprise, message } = body

    if (!nom || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Send data to Google Sheets via webhook
    const webhookURL =
      'https://script.google.com/macros/s/AKfycbxkbM7XW5Yqw_j5iakjPsNuqJPx-QZdiR9GHQIXUzoAlxLj0NKLFyGloFE8FXhX_703/exec'
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
