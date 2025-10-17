## Briyan Sitinjak – Portfolio

A personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. It showcases projects, experience, and contact information with clean UI components and subtle motion.

### Tech stack
- **Framework**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, `tailwind-merge`, `tailwindcss-animate`
- **UI/UX**: Radix UI primitives, custom `ui` components, Framer Motion
- **Icons**: `lucide-react`, `react-icons`

## Getting started
Prerequisites: Node 18+ and npm.

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available scripts
```bash
# start dev server
npm run dev

# build for production
npm run build

# start production server (after build)
npm run start

# lint the codebase
npm run lint
```

## Project structure
```
app/                # Next.js app router pages
  layout.tsx        # Root layout
  page.tsx          # Home page
  anesya/           # Example sub-page
  contact/          # Contact page
  resume/           # Resume page
  services/         # Services page
  work/             # Work/Projects page

src/
  assets/           # Images and icons used throughout the site
  components/       # Reusable UI and feature components
    ui/             # Base UI components (button, card, sheet, etc.)
    steps/          # Stepper/flow related components
    ...
  constant/         # App constants and types
  context/          # React context providers
  layout/           # Layout-specific wrappers/components

lib/                # Utilities and helpers
public/             # Static public assets
```

## Conventions
- **Components** live under `src/components` and are grouped by feature.
- **Styling** uses Tailwind classes in components; global styles in `app/globals.css`.
- **Type safety** with TypeScript; avoid `any` in new code.

## Deployment
Optimized for deployment on Vercel. After pushing to the default branch, connect the repository on Vercel and it will auto-build using `next build`.

## License
This project is private for portfolio use. Do not redistribute without permission.
