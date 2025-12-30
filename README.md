## 🎯 Objectives & Design Principles

### 1. Editorial-first UX (based on actual content behavior)
Bangkok Post is fundamentally a newsroom product, not a marketing website.

While implementing the UI, I intentionally avoided common marketing patterns
such as oversized CTAs, aggressive colors, and heavy card effects.
Instead, layout decisions were driven by how news content is actually consumed.

In practice, this meant:
- Prioritizing headline readability and line length
- Establishing a clear visual hierarchy between featured content and secondary stories
- Using spacing and thin rules to guide the reading flow, similar to print layouts

Typography and layout follow newspaper-style column logic rather than generic SaaS card grids.

---

### 2. Consistent design system applied across multiple flows
Rather than styling each page independently, I treated the project as a small system.

All pages (subscribe, success, unsubscribe, email) share the same:
- Color palette and typography decisions
- Button and interaction styles
- Layout rhythm and spacing scale

This approach reduced duplication and ensured that new pages could be added
without introducing visual inconsistency.

Key decisions:
- Serif typography for editorial content and headlines
- Sans-serif typography for UI and form elements
- Subtle borders and separators instead of strong visual blocks
- Minimal use of shadows to maintain a credible, editorial tone

---

### 3. Interaction & state handling (implemented in Vanilla JavaScript)
I intentionally implemented all interactions using plain JavaScript
to clearly demonstrate how state and UI behavior are managed without framework abstractions.

The following behaviors were added beyond static layout:
- Newsletter selection with persistent visual state (selected / unselected)
- Sticky signup bar that appears only after meaningful user interaction
- Preview modal that dynamically updates content based on selected newsletter
- Controlled navigation after form submission (success and unsubscribe flows)

From a code perspective:
- UI state (selected newsletters) is handled separately from DOM rendering
- Event listeners are scoped to relevant elements to avoid unnecessary global listeners
- Functions are kept small and purpose-driven to improve readability and maintainability

---

## 🧩 Feature Breakdown

### Newsletter Landing Page (`index.html`)
This page acts as the primary interaction surface.

Implemented features:
- Featured newsletter section to establish editorial priority
- Responsive newsletter grid that maintains consistent image ratios
- Click-to-select behavior with immediate visual feedback
- Sticky signup bar that reflects the current selection state
- Preview modal that allows users to understand content before subscribing

---

### Subscription Success (`success.html`)
Designed as a confirmation page rather than a marketing upsell.

Focus points:
- Clear confirmation message
- Calm editorial tone
- Visual continuity with the main product experience

---

### Unsubscribe Flow (`unsubscribe.html`)
The unsubscribe flow was designed to be informative without being obstructive.

Implemented behavior:
- Single-choice reason selection to reduce friction
- Optional free-text feedback for additional insight
- Clear submission action with predictable outcome

The goal was to balance user autonomy with feedback collection.

---

### Unsubscribe Confirmation (`unsubscribe-success.html`)
This page provides clear closure to the unsubscribe flow.

Design intent:
- No dark patterns or guilt messaging
- Simple confirmation
- Clear path back to the main site

---

## ✉️ HTML Email – Daily Roundup

The Daily Roundup email (`email-daily-roundup.html`) was built using
email-safe HTML patterns rather than modern web assumptions.

Implementation details:
- Table-based layout for maximum client compatibility
- Inline CSS only (no external styles or classes)
- Fixed content width for predictable rendering
- Graceful image fallbacks and readable text hierarchy

The template includes:
- Masthead and branding
- Featured article
- Article list
- “Most Comments” section
- Promotional banner
- Subscription, social, and legal footer

This reflects real-world constraints of major email clients
(Outlook, Gmail, Apple Mail).

---

## ♿ Accessibility Considerations (Baseline)

Accessibility was considered as part of the implementation rather than as an afterthought.

Current coverage includes:
- Semantic HTML structure
- Button-based interactions instead of clickable divs
- Clear form labels and instructional copy
- Readable contrast ratios
- Visible focusable elements

More advanced accessibility enhancements (ARIA roles, focus trapping,
keyboard navigation improvements) are identified as next-phase work.

---

## 🚀 Deployment Strategy

The project is deployed using GitHub Pages.

Reasons for this choice:
- Static hosting matches the nature of editorial landing pages
- No build step required
- Easy review and iteration
- CDN-friendly delivery

This setup closely mirrors how newsroom microsites and campaign pages
are often deployed in production.

---

## 🛠 Tech Stack

- HTML5
- CSS3 (custom design system)
- Vanilla JavaScript
- Git / GitHub
- GitHub Pages

No frontend framework was used intentionally, in order to demonstrate
fundamental frontend reasoning, structure, and control over behavior.

---

## 🔍 Trade-offs & Decisions

- **No framework**  
  Chosen to focus on interaction logic and UI behavior rather than framework syntax.

- **Static delivery**  
  Aligns with editorial workflows and lightweight deployments.

- **Email-safe HTML**  
  Prioritizes compatibility and reliability over modern layout techniques.

- **Minimal animation**  
  Keeps the interface credible and content-focused.

---

## 🔮 What I Would Improve Next (Production Roadmap)

If extended into a production system, the next steps would include:
- Componentization using a templating system or framework
- Stronger accessibility support (ARIA, keyboard navigation, focus management)
- Centralized state management
- Analytics hooks for selection and unsubscribe behavior
- Automated email client testing (Litmus / Email on Acid)
- Visual regression testing for UI consistency

---

## 🧠 Final Note

This project reflects how I approach frontend work at a senior level:
making deliberate trade-offs, focusing on clarity over cleverness,
and designing interfaces that can realistically scale within
a newsroom environment.

The emphasis is on maintainability, readability, and real-world constraints,
rather than purely visual experimentation.

---

© 2025 Bangkok Post – Frontend Technical Assignment
