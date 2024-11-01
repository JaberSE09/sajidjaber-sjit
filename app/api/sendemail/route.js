import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Load environment variables
import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

export async function POST(req = NextRequest, res = NextResponse) {
  try {
    const body = await req.json();
    const { name, subject, email, comment } = body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
      port: 465,
      service: 'yahoo',
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `${subject} - ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Comment: ${comment}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return NextResponse.json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error.message, error.stack);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}