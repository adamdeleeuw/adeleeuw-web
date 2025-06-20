# de Leeuw Digital - Web Dev Agency  
*A minimalist personal agency homepage—built to showcase my brand, services, and capabilities.*

[![Live Site](https://img.shields.io/badge/live-site-brightgreen)](https://www.deleeuwdigital.com/)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> **Note:** Site is fully static. Contact form demo uses a mock endpoint—swap in your own API or form service for production.

---

## 1. Why I Built It
As I prepare to onboard clients and showcase my work to employers, I needed a **single source of truth** that communicates who I am (professionally), what I build (for clients), and how to work with me—all in a clean, fast-loading package. This site proves I can deliver a polished agency presence end-to-end.

## 2. Thought Process & Design
- **Visitor goals:** Land → understand services → review portfolio → contact (≤ 2 min)  
- **Design priorities:** Instant load (currently slow FCP --> will work on it --> refer to *future improvements* section), clear CTAs, mobile-first hero  
- **AI leverage:** Vercel v0 sketched component boilerplate based off of engineered prompts; I hand-crafted brand colors, feature additions (manual code + further prompts), animations, and responsive breakpoints.

## 3. Tech Stack & Architecture
| Layer           | Details                                                      |
|-----------------|--------------------------------------------------------------|
| **Framework**   | Next.js 14 (App Router) • React • TypeScript                |
| **Styling**     | Tailwind CSS • shadcn/ui components • Lucide icons           |
| **Fonts**       | Inter + Be Vietnam Pro via next/font                          |
| **Deployment**  | Vercel with custom domain via Google Domains & DNS configured |
| **Email**       | Google Workspace SMTP for contact form; SPF & DKIM enabled    |
| **CI/Dev**      | git commands -> pushes to virtual repo -> vercel automatically redeploys (I get an email upon failed deployment) • ESLint |

## 4. Core Features
| Feature                   | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| 🌐 **Custom Domain**      | Hosted at deleeuwdigital.com with SSL, fast static delivery, and SEO meta tags |
| 🖼️ **Responsive Design**  | Fully mobile-friendly layout, adaptive navigation, and touch-optimized UI     |
| 🗂️ **Portfolio Gallery**  | Interactive project grid with lightbox/modal previews for each project        |
| 📫 **Contact Form**       | Validated form with SMTP email delivery (Google Workspace), error handling    |
| 🔒 **Privacy Policy**     | Professionally written, interactive privacy page with tables and fade-in UI   |                      |
| 🧩 **Reusable Components**| Modular shadcn/ui and custom components for buttons, cards, nav, and more     |
| 🛠️ **Accessibility**      | Keyboard navigation, focus management, and semantic HTML                      |
| 📊 **Analytics**          | Plausible Analytics integration (privacy-first, no cookies)                   |
| ⚡ **Performance**        | Optimized images (eventually :), lazy loading, and minimal bundle size                       |
| 📝 **ESLint**  | Code linting for production quality code                     |
| 🚀 **CI/CD**              | Vercel auto-deploys on git push, with email notifications on failure          |

## 5. Quick Start (Local)
```bash
git clone https://github.com/adamdeleeuw/adeleeuw-web.git
cd agency-site
npm install            # or npm / yarn
npm dev                # http://localhost:3000
```
## 6. Future Improvements 📈
- IMAGE OPTIMIZATION (this is by far the most important issue that must be fixed, and a common issue that plagues most of my sites --> honestly I have been too lazy up to this point to fix it ahhhh)
- SEO meta & sitemap auto-generation from front-matter
- Set up GitHub Actions for more complete CI/CD pipeline (Eslint, maybe use Prettier?)
- Incorperate "Big Tech" level tests such as unit tests, integration tests, E2E tests, accessibility tests, visual regression tests and an increase usage of performance tests (PageSpeed Insights or Core Web Vitals)
- Accessible dark mode toggle with persisted preference
- Form spam protection (Captcha or Netlify Forms)
- PWA support: manifest + service worker
- Automated image optimization via next/image + AVIF/WebP
- A/B testing snippet (e.g. Google Optimize)
- Newsletter signup integration (Mailchimp API)
- A blog page with developer tips as well as business tips on how to expand your business presence onine (SEO, Google pages, LinkedIn, Google Ads, etc.)

## 7. What I Learned 🧠

- Configured custom domain (DNS A + CNAME records) through Google Domains → Vercel
- Set up Google Workspace SMTP with SPF/DKIM for reliable form delivery
- Managed TypeScript path aliases for cleaner imports
- Went deep into linting this site - increased my debugging skills and my ability to write production level code
- Client interaction - cold calls/emails and consultation preperation
- Professional business communication
- Clear documentation and is easy to understand (for myself and clients)

## 8. License

Released under the MIT License—free for learning, adaptation, and remixing.

## About Me

I’m Adam de Leeuw, a Computer Engineering student at UBC. I build product-quality demos and production apps fast by blending low-overhead tech with AI tooling, then document the process for teammates and clients.

[Connect with me on LinkedIn](https://www.linkedin.com/in/adamjdl/)
