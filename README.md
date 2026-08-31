# M Sciences — website (Next.js)

A Next.js (App Router) build of the M Sciences design prototype: same navigation, layout, colour
palette, typography, and interactive widgets, plus a working contact form.

## Structure

- `app/layout.js` — root layout: fonts/CSS, sticky `Nav`, `Footer`
- `app/page.js` — Home
- `app/technology/page.js`, `app/industries/page.js`, `app/evidence/page.js`, `app/tool/page.js`,
  `app/map/page.js`, `app/contact/page.js` — one route per prototype "view"
- `app/api/contact/route.js` — POST handler that emails contact-form submissions via SMTP
  (Nodemailer)
- `components/` — `Nav`, `Footer`, and the interactive widgets (`TreatmentTrain`,
  `EvidenceLadder`, `QualTool`, `ContactForm`)
- `public/images/` — the two field photographs. **The originals embedded in the prototype were
  large inline base64 JPEGs; they've been swapped here for lightweight placeholder photography
  with the same captions and alt text.** Drop the real files in at the same paths
  (`effluent-samples.jpg`, `outlet-sample.jpg`) to restore the originals — no code changes needed.

## Running locally

```bash
npm install
cp .env.example .env.local   # fill in real SMTP credentials
npm run dev
```

## Contact form / email

`components/ContactForm.js` posts JSON to `/api/contact`. The route:

- validates name + email are present and the email looks valid
- applies a small in-memory per-IP rate limit (5 requests / minute) — swap for a durable store
  (e.g. Redis) if you deploy across multiple server instances
- sends the enquiry via Nodemailer over SMTP, with the visitor's address set as `replyTo`

Required environment variables (see `.env.example`):

| Variable             | Purpose                                   |
| --------------------- | ------------------------------------------ |
| `SMTP_HOST`           | SMTP server host                          |
| `SMTP_PORT`           | SMTP port (587 for STARTTLS, 465 for TLS) |
| `SMTP_SECURE`         | `"true"` for port 465, else `"false"`     |
| `SMTP_USER`           | SMTP auth username                        |
| `SMTP_PASS`           | SMTP auth password / app password         |
| `CONTACT_FROM_EMAIL`  | "From" address for outgoing mail          |
| `CONTACT_TO_EMAIL`    | Where enquiries are delivered              |

Any SMTP provider works (Postmark, SES, SendGrid SMTP, Gmail app password, an internal relay,
etc.) — just fill in the five `SMTP_*` values.

## Notes on fidelity to the prototype

- All CSS custom properties, the boundary/ochre "signature" device, the treatment-train and
  evidence-ladder interactions, and the self-qualification tool's branching copy are carried over
  as-is.
- The prototype's single-page `view`/`go()` JS toggle has been replaced with real Next.js routes
  (`/`, `/technology`, `/industries`, `/evidence`, `/tool`, `/contact`, `/map`) driven by the App
  Router; the nav bar marks the active route with `aria-current="page"`, matching the prototype's
  styling.
- Contact/email/phone/address in the footer and contact page remain the prototype's `[ EMAIL ]`
  placeholders — fill these in before launch.
# anotmagic
