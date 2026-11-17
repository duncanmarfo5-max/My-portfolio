# Duncan Obeng Marfo — Developer Portfolio

A responsive React + TypeScript portfolio for Duncan Obeng Marfo (`DUNCAN OBENG MARFO`).

## Run locally

1. Extract this folder.
2. Open it in VS Code.
3. Open the integrated terminal and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Personalize your details

Edit `src/config/site.ts` to update your biography, skills, projects, services, email, LinkedIn and GitHub links.

The hero portrait is `public/duncan-obeng-marfo.png`. Replace that file with another transparent PNG using the same filename if you want to update the portrait.

## Contact form

The contact form uses Supabase. Configure the following Vite environment variables in a local `.env` file using `.env.example` as a guide:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Apply the SQL migration in `supabase/migrations/` to your Supabase project before using the form. Until Supabase is configured, the form clearly tells visitors to use the direct contact links instead of pretending a message was sent.

## Notes

- LinkedIn, GitHub and email are left empty in `src/config/site.ts` until the correct profile details are supplied.
- Project demo/repository links are placeholders where no verified URL has been provided.
- Technologies and experience should be edited to reflect skills and work you can confidently discuss.
