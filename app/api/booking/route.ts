import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { service, eventDate, name, email } = body;

    if (!service || !eventDate || !name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const webhookUrl = process.env.HONEYBOOK_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!webhookRes.ok) {
        return NextResponse.json({ error: 'Failed to send booking webhook' }, { status: 502 });
      }
    } else {
      console.log('HONEYBOOK_WEBHOOK_URL not set. Booking payload:', body);
    }

    return NextResponse.json({ success: true, message: 'Booking request received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Booking submission error:', error);
    return NextResponse.json({ error: 'Failed to process booking request' }, { status: 500 });
  }
}
