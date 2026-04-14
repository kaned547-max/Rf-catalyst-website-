# RF Catalyst Automotive — Production Website v4.1

**RFCA_COMMS_Website_v4.1**  
Disclosure Level: PUBLIC  
Drive Folder: 05_TECH_OVERVIEW  

---

## What's New in v4.1

| Feature | Detail |
|---------|--------|
| Gumroad URL | Corrected to `kaneduffy.gumroad.com` throughout |
| Hero lead capture | Email + role dropdown expands inline; pre-fills main form |
| Primary CTA | "Request NDA & Evaluation Pack" throughout |
| Oxford banner | Full-width validation callout with review quote and stats |
| Team section | Kane Duffy bio + Oxford advisory card |
| Gated contact form | 3-step: Details → Enquiry (NDA consent) → Confirmation |
| What happens next | 3-step micro-flow: NDA 24hr → Eval pack → Call booking |
| Calendly hook | `CALENDLY_URL` constant — swap in real URL pre-launch |
| Form endpoint | `FORM_ENDPOINT` constant — swap in Formspree/Make webhook |
| Privacy Policy | Full section with 3-column card layout |
| Terms of Use | Included in legal section |
| Data handling note | Near every form field and CTA |
| Footer | Company number added; Gumroad and Privacy links |

---

## Repository Contents

| File | Purpose |
|------|---------|
| `index.html` | Main production website |
| `robots.txt` | Search + LLM crawler permissions |
| `llms.txt` | AI-discovery structured context |
| `sitemap.xml` | SEO sitemap |
| `404.html` | Branded 404 with auto-redirect |
| `README.md` | This file |

---

## Pre-Go-Live Checklist

- [ ] **Domain**: Update `rfcatalyst.com` in `sitemap.xml`, `og:url`, `canonical` (index.html lines ~12–13)
- [ ] **Form endpoint**: Replace `YOUR_FORM_ID` in `FORM_ENDPOINT` constant with Formspree ID or Make.com webhook URL
- [ ] **Calendly**: Replace `https://calendly.com/rfcatalyst` in `CALENDLY_URL` constant with real link
- [ ] **Oxford quote**: Review and confirm the validation quote is accurate — currently set to a representative summary of OxVal VG1–VG3 review
- [ ] **Gumroad products**: Confirm P01/P04/P05/P06 are listed and URLs are live at kaneduffy.gumroad.com
- [ ] **Make.com webhook**: Connect `FORM_ENDPOINT` to existing Make scenario for lead logging to Drive + Gmail notification

---

## Form Submission Flow

```
User fills Step 1 (name/org/email/role)
  → goStep(2) validates fields
User fills Step 2 (interest/context/NDA consent)
  → submitForm() POSTs JSON to FORM_ENDPOINT
  → On success: goStep(3) shows confirmation
  → Confirmation: Gumroad link + Calendly book button
```

**Fallback**: If `FORM_ENDPOINT` still has `YOUR_FORM_ID`, submission opens a pre-filled mailto. This is safe for launch if Formspree is not yet configured.

---

## Recommended Formspree Setup

1. Register at formspree.io with kaned547@gmail.com
2. Create new form → copy endpoint URL e.g. `https://formspree.io/f/xabcdefg`
3. Replace `YOUR_FORM_ID` in `FORM_ENDPOINT` constant

Alternatively, use Make.com Custom Webhook (existing scenario) — paste the `eu1.make.com` webhook URL into `FORM_ENDPOINT`.

---

## Deployment

**Netlify Drop** (fastest): Drag folder to netlify.com → assign domain  
**GitHub Pages**: Push to `kaned547-max/Rf-catalyst-website-` → Settings → Pages → main/root  
**Vercel**: Connect repo → Framework: Other → Output: `/`  

---

## Brand Reference

| Token | Value |
|-------|-------|
| Background | `#0A0E14` |
| Cyan | `#00E5FF` |
| Amber | `#FFB300` |
| Green | `#00E676` |
| Display | Orbitron |
| Mono | DM Mono |
| Body | Inter |
