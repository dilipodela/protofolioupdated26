
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, mobile } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // You should update this to your verified domain later
      to: ['kirrinath@gmail.com'],
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Message: ${message}
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ success: false, error: error.message || 'Unknown Resend error' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    console.error('Unexpected Error:', error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
