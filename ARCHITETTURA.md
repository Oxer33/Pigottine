# 🏗️ ARCHITETTURA DEL PROGETTO

## Le Pigottine di Vivina - Sito Web Monopagina

**Versione:** 1.0.0  
**Data Creazione:** 27 Dicembre 2024  
**Framework:** Next.js 14+ con App Router  
**Linguaggio:** TypeScript  
**Styling:** Tailwind CSS  

---

## 📁 STRUTTURA DEL PROGETTO

```
pigottine-website/
├── public/                          # Asset statici
│   ├── images/
│   │   └── pigottine/              # Immagini delle pigottine
│   │       ├── hero-bg.jpg         # Sfondo hero section
│   │       ├── about-vivina.jpg    # Foto per sezione chi sono
│   │       └── pigottina-*.jpg     # Galleria pigottine (1-11)
│   ├── favicon.ico                 # Icona del sito
│   └── manifest.json               # PWA manifest (da creare)
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── globals.css             # Stili globali + Tailwind
│   │   ├── layout.tsx              # Layout root con metadata SEO
│   │   └── page.tsx                # Homepage principale
│   │
│   ├── components/
│   │   ├── layout/                 # Componenti di layout
│   │   │   ├── Navbar.tsx          # Barra di navigazione sticky
│   │   │   ├── Footer.tsx          # Footer con social icons
│   │   │   └── index.ts            # Export centralizzato
│   │   │
│   │   ├── sections/               # Sezioni della pagina
│   │   │   ├── SplashScreen.tsx    # Splash screen 4 secondi
│   │   │   ├── HeroSection.tsx     # Hero full-screen
│   │   │   ├── AboutSection.tsx    # Chi sono
│   │   │   ├── PortfolioSection.tsx # Galleria con lightbox
│   │   │   ├── ServicesSection.tsx # Servizi offerti
│   │   │   ├── ContactSection.tsx  # Contatti e WhatsApp
│   │   │   └── index.ts            # Export centralizzato
│   │   │
│   │   └── ui/                     # Componenti UI riutilizzabili
│   │       ├── Button.tsx          # Pulsante con varianti
│   │       ├── Card.tsx            # Card con glassmorphism
│   │       └── index.ts            # Export centralizzato
│   │
│   └── lib/                        # Utilities e configurazioni
│       ├── constants.ts            # Costanti globali (config, nav, servizi)
│       └── utils.ts                # Funzioni utility (cn, keywords)
│
├── .eslintrc.json                  # Configurazione ESLint
├── .gitignore                      # File da ignorare in Git
├── next.config.js                  # Configurazione Next.js
├── next-env.d.ts                   # Types Next.js
├── package.json                    # Dipendenze e script
├── postcss.config.js               # Configurazione PostCSS
├── tailwind.config.ts              # Configurazione Tailwind CSS
├── tsconfig.json                   # Configurazione TypeScript
├── ARCHITETTURA.md                 # Questo file
├── TODO.md                         # Lista attività
└── README.md                       # Documentazione progetto
```

---

## 🎨 DESIGN SYSTEM

### Palette Colori Pastello

| Nome     | Uso                      | Hex Light  | Hex Dark   |
|----------|--------------------------|------------|------------|
| Rosa     | Primario, accenti        | #f9a8d4    | #f472b6    |
| Salmone  | Secondario, CTA          | #fda4af    | #fb7185    |
| Acqua    | Terziario, servizi       | #5eead4    | #2dd4bf    |
| Crema    | Sfondi                   | #fefdfb    | #0a0a0a    |

### Tipografia

- **Display:** Plus Jakarta Sans (titoli)
- **Body:** Inter (testo corpo)
- **Peso:** 300-800

### Animazioni

- **Framer Motion** per tutte le animazioni
- Scroll-triggered animations
- Hover effects sui componenti
- Splash screen con durata 4 secondi

---

## 🧩 COMPONENTI PRINCIPALI

### Layout Components

| Componente | Descrizione | Props |
|------------|-------------|-------|
| `Navbar` | Navigation bar sticky con blur | - |
| `Footer` | Footer minimalista con social | - |

### Section Components

| Componente | Descrizione | Features |
|------------|-------------|----------|
| `SplashScreen` | Schermata caricamento | Animazione 4s, logo, loading |
| `HeroSection` | Hero full-screen | Parallax, CTA, scroll indicator |
| `AboutSection` | Chi sono | Split layout, features grid |
| `PortfolioSection` | Galleria | Filtri, lightbox, grid responsive |
| `ServicesSection` | Servizi | Cards glassmorphism, icons |
| `ContactSection` | Contatti | WhatsApp button, social links |

### UI Components

| Componente | Varianti | Stati |
|------------|----------|-------|
| `Button` | primary, secondary, ghost, outline | loading, disabled |
| `Card` | default, glass, elevated, outline | hoverable |

---

## 🔧 TECNOLOGIE UTILIZZATE

### Core
- **Next.js 14.2.3** - Framework React con App Router
- **React 18.3** - Libreria UI
- **TypeScript 5.4** - Type safety

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS
- **Custom Design System** - Colori, spacing, animazioni

### Animazioni
- **Framer Motion 11** - Animazioni declarative

### Icons
- **Lucide React** - Icon set moderno

### Utilities
- **clsx** - Conditional classes
- **tailwind-merge** - Merge Tailwind classes

---

## 📱 RESPONSIVE DESIGN

Il sito è progettato mobile-first con breakpoint:

| Breakpoint | Min Width | Target Device |
|------------|-----------|---------------|
| Default    | 0px       | Mobile        |
| sm         | 640px     | Mobile large  |
| md         | 768px     | Tablet        |
| lg         | 1024px    | Desktop       |
| xl         | 1280px    | Desktop large |
| 2xl        | 1536px    | 4K screens    |

---

## 🚀 DEPLOYMENT

### Piattaforma: AWS Amplify

**Configurazione:**
- Output: Static Export (`output: 'export'`)
- Build Command: `npm run build`
- Output Directory: `out`

### Repository GitHub
- Nome: `Pigottine`
- Branch principale: `main`

---

## 📝 NOTE PER SVILUPPATORI FUTURI

### Come aggiungere nuove pigottine

1. Carica l'immagine in `public/images/pigottine/`
2. Formato consigliato: `.jpg` o `.webp`
3. Dimensioni consigliate: min 800x800px
4. Aggiorna l'array `galleryImages` in `PortfolioSection.tsx`

### Come modificare i contatti

1. Apri `src/lib/constants.ts`
2. Modifica l'oggetto `SITE_CONFIG`
3. Aggiorna telefono, email, social links

### Come modificare i servizi

1. Apri `src/components/sections/ServicesSection.tsx`
2. Modifica l'array `services`
3. Ogni servizio ha: id, icon, title, description, features, gradient

---

## ✅ STATO COMPLETAMENTO

- [x] Struttura progetto
- [x] Design system
- [x] Componenti UI
- [x] Layout (Navbar, Footer)
- [x] Splash Screen
- [x] Hero Section
- [x] About Section
- [x] Portfolio Section
- [x] Services Section
- [x] Contact Section
- [x] SEO ottimizzato
- [x] Responsive design
- [ ] Dark mode toggle (opzionale)
- [ ] Blog section (da implementare)
- [ ] PWA manifest
