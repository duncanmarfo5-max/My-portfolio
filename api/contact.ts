type ApiRequest = {
  method?: string;
  body?: unknown;
};
type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Allow', 'POST');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = (req.body && typeof req.body === 'object' ? req.body : {}) as Record<string, unknown>;
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const subject = String(body.subject ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please complete all fields.' });
  }
  if (name.length > 120 || email.length > 254 || subject.length > 200 || message.length > 5000 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please check your details and try again.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'duncanmarfo5@gmail.com';
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error('Contact email is not configured: missing RESEND_API_KEY or CONTACT_FROM_EMAIL.');
    return res.status(503).json({ error: 'The contact form is temporarily unavailable. Please email me directly.' });
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio contact: ${subject}`,
        text: `New portfolio contact message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error('Resend API error:', resendResponse.status, details);
      return res.status(502).json({ error: 'Your message could not be delivered. Please try again later or email me directly.' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact email request failed:', error);
    return res.status(502).json({ error: 'Your message could not be delivered. Please try again later.' });
  }
}
