# E. Excel Standard Concepts — Digital Transformation Project

> Importer/Supplier of Distribution Transformers, Armoured Cables, Aluminium Conductors, Electrical Fittings, Accessories & Engineering Service.
> **50, Idoluwo Street, Lagos Island, Lagos · RC: 3158644**

---

## Project Overview

This repository contains the full-stack codebase for the digital transformation of **E. Excel Standard Concepts**, a CAC-registered electrical materials importer and supplier based on Lagos Island, Nigeria.

The project is delivered in two phases:

| Phase | Scope | Status |
|-------|-------|--------|
| **Phase 1** | Professional website, Google Business Profile, WhatsApp Business setup, domain & email | 🔄 In Progress |
| **Phase 2** | Digital inventory system, sales recording, digital invoicing, sales dashboard | 📋 Planned |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js (Vite) |
| Backend | Django (Python) + Django REST Framework |
| Database | PostgreSQL |
| Styling | Tailwind CSS |
| Hosting — Frontend | Vercel |
| Hosting — Backend | Render |
| Domain | eexcelstandardconcepts.com.ng |
| Email | Zoho Mail |
| Version Control | Git / GitHub |

---

## Phase 1 — Website Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, trust bar, featured categories, why us, about preview |
| Catalogue | `/catalogue` | All 9 product categories with WhatsApp enquiry CTAs |
| About | `/about` | Business story, stats, operations photos, location |
| Contact | `/contact` | WhatsApp button, enquiry form, address, map |

---

## Product Categories

1. Earthing Materials
2. Distribution Transformers
3. All Armoured Cables
4. Feeder Pillar
5. Single Cables & Earthing
6. Switches & Sockets
7. Overhead Silicon Materials
8. Aluminium Conductor
9. Chandelier & Lighting

---

## Getting Started

### Prerequisites

- Node.js v18+
- Python 3.11+
- PostgreSQL 15+
- Git

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp ../.env.example .env         # Fill in your values
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Environment Variables

Copy `.env.example` to `.env` in the backend folder and fill in your values. Never commit `.env` to version control.

---

## Development Workflow

```
main          → production-ready code only
dev           → active development branch
feature/*     → individual features (branch from dev, PR back to dev)
```

Commit message format:
```
feat: add WhatsApp enquiry button to product cards
fix: correct mobile nav menu z-index
style: update hero section typography
docs: add product category descriptions to README
```

---

## Business Contact

**E. Excel Standard Concepts**
50, Idoluwo Street, Lagos Island, Lagos, Nigeria
RC: 3158644
Tel: 0809 870 8481 / 0802 110 3711
Email: ebukaexcel26@gmail.com

---

## Developer

**Emcent** — MSc Management of Business Information Technology, University of Greenwich
Project Lead & Full-Stack Developer

---

*This project is private and developed exclusively for E. Excel Standard Concepts.*
