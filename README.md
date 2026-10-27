# Cha-Ching

Mobile-first sports research and parlay workspace.

## What works now

- PWA installable shell with network-first updates and offline fallback.
- Live event schedule from TheSportsDB's free endpoint.
- Persistent browser preview account, saved picks, parlay legs, bankroll settings, and live-TV listings.
- No fabricated odds, payouts, broadcast links, or guaranteed predictions.

## Production wiring still required

1. Create a real auth project (Supabase, Firebase, or another provider) and replace the browser-local session.
2. Add a server-side odds provider proxy. Keep `ODDS_API_KEY` on the server; never ship it in browser JavaScript.
3. Add a database table for users, watchlists, parlays, bankroll settings, and audit timestamps.
4. Confirm legal broadcast sources for each country before displaying a Watch link.
5. Configure HTTPS and a deployment host. Service workers do not work from a plain `file://` URL.

Copy `.env.example` into the server environment when the backend is added. Do not commit real keys.
