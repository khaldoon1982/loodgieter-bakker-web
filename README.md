# Loodgieter Bakker Website

Production-ready Next.js website for Loodgieter Bakker.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **i18n**: next-intl (NL + EN)
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Setup Database**:
   - Create a PostgreSQL database (e.g. locally or on Supabase/Neon).
   - Copy `.env.example` to `.env` and update `DATABASE_URL`.
     ```bash
     cp .env.example .env
     ```
   - Run migrations:
     ```bash
     npx prisma migrate dev --name init
     ```
   - Seed the database (Reviews + FAQs):
     ```bash
     npx prisma db seed
     ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

## Project Structure
- `src/app/[locale]`: Localized routes (pages).
- `src/components`: Reusable UI components.
- `src/messages`: JSON translation files (nl.json, en.json).
- `src/lib`: Utilities (Prisma client, class names).
- `prisma`: Database schema and seed script.

## Deployment on Vercel
1. Push to GitHub.
2. Import project in Vercel.
3. Add `DATABASE_URL` environment variable in Vercel Project Settings.
4. Set Build Command: `next build` (default).
5. Set Install Command: `npm install` (default).
6. Redeploy.

## Features
- **i18n**: Support for Dutch (default) and English.
- **SEO**: Metadata, Sitemap, Robots.txt, JSON-LD Schema.
- **Forms**: Contact form with validation and honeypot spam protection.
- **Admin**: Database is prepared for a future admin panel (Reviews/Leads tables).
