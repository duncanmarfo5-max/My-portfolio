# Contact form email setup (Vercel + Resend)

The contact form now posts to `/api/contact`. The Vercel serverless function sends the message using Resend. Supabase is no longer used.

## 1. Create a Resend account
1. Sign up at https://resend.com/
2. Create an API key in the Resend dashboard. Keep it private.
3. For production, verify a domain you control in Resend and use a sender address on that domain.
   - Resend's `onboarding@resend.dev` sender is intended for testing and has recipient restrictions; do not rely on it for public production traffic.

## 2. Add environment variables in Vercel
Open your Vercel project → Settings → Environment Variables and add:

- `RESEND_API_KEY` = your Resend API key
- `CONTACT_TO_EMAIL` = `duncanmarfo5@gmail.com`
- `CONTACT_FROM_EMAIL` = a sender such as `DAKIDCODER <hello@your-verified-domain.com>`

Apply them to Production, Preview and Development as appropriate, then redeploy.

## 3. Local testing
Vite alone does not run Vercel serverless functions. Install Vercel CLI and run `vercel dev` from the project folder after linking the project and adding the environment variables. Alternatively, deploy a Preview build and test the contact form there.

## 4. Install dependencies
Run `npm install` after extracting this updated project. This removes the unused Supabase package from your installed dependencies and refreshes the lockfile.

The Resend API key must only exist as `RESEND_API_KEY` in Vercel/server environment variables. Never prefix it with `VITE_` or commit it to Git.
