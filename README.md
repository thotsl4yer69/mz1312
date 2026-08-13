# MZ1312 — Historical MAZLABZ Storefront Prototype

> **Status: Archived product-generation prototype**  
> This repository is retained as evidence of early full-stack/product work. It is **not** the canonical MAZLABZ technical portfolio and should not be read as a current production storefront.

For the account-wide technical portfolio and repository classification, see **[PORTFOLIO_INDEX.md](PORTFOLIO_INDEX.md)**. For how project maturity, AI assistance and upstream provenance are represented, see **[REPOSITORY_POLICY.md](REPOSITORY_POLICY.md)**.

## What this project was

A Next.js/TypeScript/Tailwind storefront concept for the MZ1312 / Pigeonhole product line, built around the earlier “Neon Pigeon” brand direction. It explored product presentation, responsive web design, deployment and payment-flow concepts.

## Implemented / explored

- Next.js App Router
- TypeScript
- Tailwind CSS
- Responsive product presentation
- Bitcoin payment-modal concept
- Podcast/external-content integration
- Vercel-oriented deployment structure
- ESLint/type-safety tooling

## Evidence boundary

The repository contains a functioning web prototype, but earlier README language overstated its maturity. Card checkout, order management, user accounts and a complete commerce backend were not finished here, so this repository is now labelled as a **historical prototype**, not “production ready.”

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Build check:

```bash
npm run build
```

## Historical project structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
public/
├── images/
└── videos/
```

## Superseded roadmap

The original prototype anticipated Stripe checkout, higher-resolution product photography, shopping-cart logic, user accounts/order tracking and additional editorial content. Those items are historical roadmap notes rather than claims about the current repository.

## Provenance

This is an authored MAZLABZ project developed with AI-assisted engineering workflows. AI assistance should not be interpreted as independent validation of deployment, security, payment handling or commercial readiness.

---

**Portfolio classification:** Historical product generation · Web/product prototype · Retained for evidence
