# Next.js + TypeScript Template

A modern, production-ready Next.js template with TypeScript, Tailwind CSS, and essential development tools pre-configured.

## What's Included

- **[Next.js 16](https://nextjs.org)** - React framework with App Router and Turbopack
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ESLint 9](https://eslint.org/)** - Code linting with Next.js config
- **[Prettier](https://prettier.io/)** - Code formatting with Tailwind plugin
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## Features

- ⚡️ **Turbopack** enabled for faster builds and development
- 🎨 **Tailwind CSS 4** with PostCSS setup
- 📝 **TypeScript** configured with strict mode
- 🔍 **ESLint** with Next.js recommended rules
- ✨ **Prettier** with automatic Tailwind class sorting
- 🚀 **React 19** with latest features
- 📦 **pnpm** for efficient dependency management

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm (install with `npm install -g pnpm`)

### Installation

1. Clone or download this template:
```bash
git clone <your-repo-url>
cd next-ts
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
next-ts/
├── app/               # Next.js App Router pages and layouts
├── components/        # Reusable React components
│   └── ui/           # Basic UI components (Button, etc.)
├── public/           # Static assets
├── .vscode/          # VSCode settings and extensions
├── .env.example      # Environment variables template
├── .gitignore        # Git ignore rules
├── eslint.config.mjs # ESLint configuration
├── next.config.ts    # Next.js configuration
├── package.json      # Project dependencies
├── postcss.config.mjs # PostCSS configuration
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## Customization

### Tailwind CSS

Tailwind CSS 4 is configured via PostCSS. Customize your design in `postcss.config.mjs`.

### TypeScript

TypeScript configuration is in `tsconfig.json`. The template uses strict mode for better type safety.

### ESLint & Prettier

- ESLint config: `eslint.config.mjs`
- Prettier config: `.prettierrc`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [pnpm Documentation](https://pnpm.io/)

## Deployment

Deploy to [Vercel](https://vercel.com/new) (recommended):

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

Or deploy to any platform that supports Node.js applications.
