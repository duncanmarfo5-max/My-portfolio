/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email address
  - `subject` (text, not null) — message subject
  - `message` (text, not null) — message body
  - `created_at` (timestamp, default now)

2. Security
- Enable RLS on `contact_messages`.
- Grant INSERT only (no SELECT/UPDATE/DELETE) to `anon` and `authenticated` —
  visitors can submit the contact form but nobody can read messages through
  the public API. The owner reads submissions directly in the Supabase dashboard
  (service role bypasses RLS).
- INSERT policy allows any visitor to submit; column length constraints and
  app-side validation guard input size.
- No `user_id` column: this portfolio has no sign-in screen.

3. Notes
- Single-tenant portfolio site; messages are write-only from the browser.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) <= 120),
  email text NOT NULL CHECK (char_length(email) <= 254),
  subject text NOT NULL CHECK (char_length(subject) <= 200),
  message text NOT NULL CHECK (char_length(message) <= 5000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT (name, email, subject, message) ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
