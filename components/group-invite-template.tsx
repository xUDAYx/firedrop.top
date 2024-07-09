import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendPaymentConfirmationEmail(email: string, name: string) {
  try {
    await resend.emails.send({
      from: 'no-reply@firedrop.top',
      to: email,
      subject: 'Private Group Invite - Firedrop',
      html: `
        <html>
          <head>
            <title>Private Group Invite</title>
          </head>
          <body>
            <h1>Hi ${name},</h1>
            <p>Thank you for your payment! We are currently processing it, and please note that it is fully refundable.</p>
            <p>We are pleased to invite you to join our Firedrop Team private chat for further instructions and updates.</p>
            <p>Please follow the link below or scan the QR code to join the chat:</p>
            <p><a href="https://chat.whatsapp.com/LKYt1SwdXD320BpZlOOIkV">Join Firedrop Team Chat</a></p>
            <p>Once you have joined, please drop a "hi" in the admin DM of the group.</p>
            <p>Best regards,</p>
            <p> Firedrop Team</p>
          </body>
        </html>
      `,
    });
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}