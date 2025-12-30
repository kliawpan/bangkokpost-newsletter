


---

## 🎯 Objectives & Design Principles

### 1. Editorial-First UX
Bangkok Post is a newsroom product, not a marketing site.  
Design decisions prioritize:
- Readability over decoration
- Clear editorial hierarchy
- Calm, trustworthy visual tone inspired by print newspapers

Typography, spacing, and layout rules intentionally resemble **newspaper column logic**, not generic card-based SaaS UI.

---

### 2. Consistent Design System
All pages share a **single source of truth** for:
- Colors
- Typography
- Spacing
- Borders & rules
- Interaction states

This reduces visual drift and allows future scalability.

Key principles:
- Serif typography for headlines
- Sans-serif for body/UI
- Subtle rules instead of heavy dividers
- Minimal shadows to preserve editorial credibility

---

### 3. Interaction & State Management (Vanilla JS)
The project intentionally avoids frameworks to demonstrate **core frontend fundamentals**.

Implemented behaviors:
- Newsletter selection with persistent visual state
- Sticky signup bar triggered by meaningful user action
- Preview modal for newsletter content
- Controlled redirects after form submission

The JavaScript is structured to:
- Separate UI state from DOM manipulation
- Avoid unnecessary global listeners
- Keep logic readable and maintainable

---

## 🧩 Feature Breakdown

### Newsletter Landing Page (`index.html`)
- Featured newsletter section
- Responsive newsletter grid
- Interactive selection CTA
- Sticky signup bar
- Preview modal

### Subscription Success (`success.html`)
- Clear confirmation messaging
- Editorial tone instead of transactional UI
- Visual consistency with main product

### Unsubscribe Flow (`unsubscribe.html`)
- Feedback-driven unsubscribe UX
- Single-choice reason selection
- Optional free-text feedback
- Designed to reduce friction while capturing insight

### Unsubscribe Confirmation (`unsubscribe-success.html`)
- Calm closure messaging
- No dark patterns
- Clear return path

---

## ✉️ HTML Email – Daily Roundup

The email template (`email-daily-roundup.html`) is built using:
- Table-based layout
- Inline CSS only
- Email-safe HTML patterns

It includes:
- Masthead & branding
- Featured article
- Article list
- Most-commented section
- Promotional banner
- Subscription, social, and legal footer

This reflects **real-world email constraints** (Outlook, Gmail, Apple Mail) rather than modern web assumptions.

---

## ♿ Accessibility Considerations (Baseline)

- Semantic HTML structure
- Button-based interactions
- Readable contrast ratios
- Visible focusable elements
- Clear form labels and feedback copy

> Advanced accessibility features (ARIA roles, focus trapping, keyboard navigation enhancements) are acknowledged and documented as next-phase improvements.

---

## 🚀 Deployment Strategy

The project is deployed via **GitHub Pages**:
- Static hosting
- No build step
- CDN-friendly
- Fast iteration and review

This approach mirrors how many newsroom microsites and campaign pages are deployed in practice.

---

## 🛠 Tech Stack

- HTML5
- CSS3 (custom design system)
- Vanilla JavaScript
- Git / GitHub
- GitHub Pages

No framework is used intentionally to demonstrate **fundamental frontend competency and architectural discipline**.

---

## 🔍 Trade-offs & Decisions

- **No framework**: chosen to highlight fundamentals over tooling
- **Static delivery**: aligns with editorial and campaign-style deployments
- **Email-safe HTML**: prioritizes compatibility over elegance
- **Minimal animations**: preserves credibility and performance

---

## 🔮 What I Would Improve Next (Production Roadmap)

If this were extended into a production system:
- Componentization via a templating system or framework
- Stronger accessibility (ARIA, focus management, keyboard UX)
- Centralized state management
- Analytics hooks (selection behavior, unsubscribe reasons)
- Automated email testing (Litmus / Email on Acid)
- Visual regression testing

---

## 🧠 Final Note

This project is designed to reflect **how a senior frontend engineer thinks**, not just how they code:
- Clear reasoning
- Consistent systems
- Editorial sensitivity
- Real-world constraints

It intentionally balances aesthetics, usability, maintainability, and practicality.

---

© 2025 Bangkok Post – Frontend Technical Assignment
