# Biblio Landing Page

Linear-style marketing site for [Biblio](https://biblio.wonderly.info/docs/) by Wonderly — a universal knowledge base MCP server for coding agents.

## Pages

- `/` — landing page (hero, closed-loop story, features, AGENTS.md comparison, leader proof, open core, waitlist)
- `/implementation` — six-step implementation guide (deploy, partitions, agent config, AGENTS.md, code reviews, telemetry)

## Stack

Next.js 15 (App Router) · React 19 · hand-rolled CSS (no UI framework) · Inter via Google Fonts.

## Develop

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npx vercel deploy --prod
```

Or push to a Git repo with the Vercel integration enabled.

## Notes

- The waitlist form (`components/Waitlist.tsx`) currently hands off to a `mailto:` — swap in your real endpoint/CRM when ready.
- All product claims are sourced from the Biblio docs; research citations link to arXiv:2602.11988 and arXiv:2602.12670.
