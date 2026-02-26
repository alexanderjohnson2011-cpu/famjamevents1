import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contact } = body;

    if (!contact?.name || !contact?.phone || !contact?.email) {
      return NextResponse.json({ ok: true });
    }

    console.log('Booking lead received:', body);

    const webhookUrl = process.env.HONEYBOOK_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
      } catch (error) {
        console.error('HoneyBook webhook post failed:', error);
      }
    } else {
      console.log('HONEYBOOK_WEBHOOK_URL not set. Skipping HoneyBook routing.');
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Booking submission error:', error);
    return NextResponse.json({ ok: true });
  }
}
