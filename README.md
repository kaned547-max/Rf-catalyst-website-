# RF Catalyst Automotive — Production Website

**RFCA_COMMS_Website_v4.0**  
Disclosure Level: PUBLIC  
Drive Folder: 05_TECH_OVERVIEW  

---

## Repository Contents

| File | Purpose |
|------|---------|
| `index.html` | Main production website (single-file, self-contained) |
| `robots.txt` | Search engine + LLM crawler permissions |
| `llms.txt` | LLM-optimised structured context for AI discovery |
| `sitemap.xml` | SEO sitemap (update `rfcatalyst.com` to live domain) |
| `README.md` | This file |

---

## Deployment

### Netlify (recommended — drag and drop)
1. Go to [netlify.com](https://netlify.com) → drag the entire folder into the deploy zone
2. Assign custom domain in Site Settings

### GitHub Pages
1. Push this repo to GitHub
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Assign custom domain

### Vercel (connected to this repo)
1. Connect `kaned547-max/Rf-catalyst-website-` to Vercel
2. Framework: Other (static)
3. Output directory: `/`

---

## Domain Configuration

Update the following before going live:

- `sitemap.xml` — replace `rfcatalyst.com` with live domain
- `index.html` — meta `og:url` and `canonical` link tags (line ~10–11)
- `llms.txt` — Website URL near bottom

---

## Disclosure Level

All content is **PUBLIC / GREEN** disclosure level. No proprietary performance data, system mechanism detail, or IP-sensitive content is present. Safe for public deployment without NDA.

OEM evaluation packs and NDA-gated materials are distributed separately via direct contact — not hosted publicly.

---

## Brand System Reference

| Token | Value |
|-------|-------|
| Background | `#0A0E14` |
| Cyan accent | `#00E5FF` |
| Amber accent | `#FFB300` |
| Green accent | `#00E676` |
| Display font | Orbitron |
| Mono font | DM Mono |
| Body font | Inter |

---

## Last Updated

April 2026 — v4.0 production build
