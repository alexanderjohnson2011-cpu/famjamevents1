import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { service, eventDate, timeWindow, guestCount, name, email, phone, notes } = body;

    if (!service || !eventDate || !name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Booking submission received:', {
      service,
      eventDate,
      timeWindow,
      guestCount,
      name,
      email,
      phone,
      notes,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Booking request received successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}
