import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Very small in-memory rate limiter (per server instance). Good enough to
// blunt naive abuse; swap for a durable store (Redis, etc.) in production.
const submissions = new Map();
const WINDOW_MS = 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = submissions.get(ip) || { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count += 1;
  submissions.set(ip, entry);
  return entry.count > MAX_PER_WINDOW;
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many enquiries from this connection. Please try again in a minute.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      name = '',
      email = '',
      organisation = '',
      industry = '',
      flow = '',
      constraint = '',
      endpoint = '',
    } = body || {};

    if (!name.trim() || !email.trim()) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_FROM_EMAIL,
      CONTACT_TO_EMAIL,
    } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
      console.error('Contact form: SMTP environment variables are not fully configured.');
      return NextResponse.json(
        { error: 'The enquiry could not be sent right now. Please try again later.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === 'true',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = `Website enquiry — ${name}${organisation ? ' / ' + organisation : ''}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation || '—'}`,
      `Industry: ${industry || '—'}`,
      `Approximate flow: ${flow || '—'}`,
      `Primary constraint: ${constraint || '—'}`,
      '',
      'Target endpoint:',
      endpoint || '—',
    ].join('\n');

    const html = `
      <h2 style="font-family:sans-serif">New website enquiry</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><strong>Organisation</strong></td><td>${escapeHtml(organisation) || '—'}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><strong>Industry</strong></td><td>${escapeHtml(industry) || '—'}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><strong>Approximate flow</strong></td><td>${escapeHtml(flow) || '—'}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><strong>Primary constraint</strong></td><td>${escapeHtml(constraint) || '—'}</td></tr>
      </table>
      <p style="font-family:sans-serif;font-size:14px"><strong>Target endpoint</strong></p>
      <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(endpoint) || '—'}</p>
    `;

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL || SMTP_USER,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form submission failed:', err);
    return NextResponse.json(
      { error: 'The enquiry could not be sent. Please try again later.' },
      { status: 500 }
    );
  }
}
