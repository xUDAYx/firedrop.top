import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendPaymentConfirmationEmail } from '@/components/group-invite-template';

export async function POST(req: Request) {
  try {
    const { name, number, email, id } = await req.json(); // Receive email

    const paymentData = await db.paymentData.create({
      data: {
        name,
        number,
        email,
        transactionId: id,
      },
    });

    await sendPaymentConfirmationEmail(email, name); // Send the email

    return NextResponse.json({ success: true, data: paymentData });
  } catch (error) {
    console.error('Error saving payment data:', error);
    return NextResponse.json({ success: false, error: 'Failed to save payment data' }, { status: 500 });
  }
}