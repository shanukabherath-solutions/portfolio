# Shanuka B. Herath — Portfolio

Personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Lucide icons** and **Framer Motion** (used only for the hero entrance and scroll reveals; all motion respects `prefers-reduced-motion`).

## 1. Edit your content (one file)

Everything lives in **`src/data/profile.ts`**. Search the project for `YOUR_` to find placeholders:

| Placeholder | Where | What to put |
|---|---|---|
| `YOUR_EMAIL` | `siteConfig.email` | Your public contact email |
| `YOUR_GITHUB_URL` | `siteConfig.social.github` | GitHub profile URL |
| `YOUR_LINKEDIN_URL` | `siteConfig.social.linkedin` | LinkedIn profile URL |
| `YOUR_TWITTER_URL` | `siteConfig.social.twitter` | Optional; leave as-is to omit |
| `YOUR_CV_URL` | `siteConfig.cvUrl` | e.g. `/cv.pdf` (put the file in `public/`) |
| `YOUR_SITE_URL` | `siteConfig.siteUrl` | Final domain, e.g. `https://shanuka.dev` (enables canonical URL, sitemap, Open Graph) |
| `YOUR_PHOTOSPHERE_GITHUB_URL` / `_DEMO_URL` / `_VIDEO_URL` | `featuredProject.links` | Project links |
| `YOUR_*_GITHUB_URL` | `smallProjects[].githubUrl` | One per cybersecurity project |

Placeholder links are automatically rendered as disabled (never as dead links), so the site is safe to preview before everything is filled in. Once you replace them, buttons become live.

Things to review before publishing:

- **Certifications** are all marked "In Progress". Change `status` to `"Completed"` only for ones you have actually finished.
- **Sinhala prompt examples** (`featuredProject.promptExamples`) are illustrative. Have a Sinhala speaker check them, or swap in prompts you've tested in Photosphere.
- **Case study** text describes the project as you outlined it; adjust anything that differs from what you actually built.
- The Photosphere image is an illustrative UI mockup (`PhotosphereMockup.tsx`). To use real screenshots, add them under `public/` and render them with `next/image`.
- Add an Open Graph image at `public/og.png` (1200x630) and reference it in `src/app/layout.tsx` (`openGraph.images`, `twitter.images`).

## 2. Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Checks: `npm run lint`, `npx tsc --noEmit`, `npm run build`.

## 3. Contact form

The form posts to `src/app/api/contact/route.ts`, which validates input. **No email provider is configured by default**, so it returns an honest error rather than pretending a message was sent. To enable it:

1. Pick a provider (Resend, EmailJS, Formspree, Nodemailer...).
2. Add the send call at the `TODO` in `route.ts`.
3. Set environment variables (see `.env.example`), including `CONTACT_DELIVERY_ENABLED=true`.

Until then, the direct email / LinkedIn / GitHub links in the contact section are the reliable path.

## 4. Environment variables

See `.env.example`. Copy to `.env.local` locally; add the same values in Vercel under *Project Settings → Environment Variables*. None are required to build.

## 5. Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project**, import the repo. The framework is auto-detected as Next.js; no build settings are needed.
3. Add environment variables if you enabled the contact form.
4. Deploy, then set `siteConfig.siteUrl` to your final domain and redeploy so canonical URLs, `sitemap.xml` and `robots.txt` reference it.

## 6. SEO included

Title and description as specified, Open Graph and Twitter metadata, canonical URL, JSON-LD `Person` schema, `robots.txt` and `sitemap.xml` (generated from `src/app/robots.ts` and `src/app/sitemap.ts`), SVG favicon, a single `h1` with a logical heading hierarchy. After deploying, submit the sitemap in Google Search Console.

## 7. Structure

```
src/
  app/             layout, page, robots, sitemap, api/contact
  components/
    layout/        Navbar, Footer
    sections/      Hero, About, Skills, Projects, CaseStudy, Experience,
                   Education, Certifications, Services, Contact
    ui/            Button, Badge, GlassCard, SectionHeading, RevealOnScroll, BrandIcons
  data/profile.ts  all content and links
  lib/utils.ts     helpers (placeholder detection)
```

Fonts (Space Grotesk, IBM Plex Sans/Mono) load from Google Fonts via `<link>` in `layout.tsx`, with system-font fallbacks.
