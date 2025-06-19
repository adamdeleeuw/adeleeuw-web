# DeLeeuw Digital Agency  
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
| **CI/Dev**      | GitHub Actions (build & lint) • ESLint • Prettier             |

## 4. Core Features
| Feature                   | Impact                                         |
|---------------------------|------------------------------------------------|
| 🌐 **Custom Domain**      | deleeuwdigital.com via Google Domains → Vercel (FQDN) |
| 📊 **Analytics**          | Plausible Analytics integration (privacy-first) |
| 🗂️ **Portfolio Grid**    | Click-to-lightbox on project thumbnails         |
| 📫 **Contact Form**       | Client-side validation → email sent via Nodemailer (Google Workspace SMTP) |
| 📱 **Mobile Nav**         | Slide-in drawer with focus trapping             |

## 5. Quick Start (Local)
```bash
git clone https://github.com/adamdeleeuw/adeleeuw-web.git
cd agency-site
pnpm install            # or npm / yarn
pnpm dev                # http://localhost:3000
