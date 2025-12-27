# 🎀 Le Pigottine di Vivina

> Sito web moderno per la vendita di bambole artigianali fatte a mano.

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

---

## 📋 Descrizione

**Le Pigottine di Vivina** è un sito web monopagina ultra-moderno dedicato alla vendita di bambole artigianali (*pigottine*) fatte a mano. Il design è contemporaneo, con effetti glassmorphism, animazioni fluide e una palette colori pastello elegante.

### ✨ Caratteristiche Principali

- 🎨 **Design Ultra-Moderno** - Glassmorphism, gradients sottili, animazioni smooth
- 📱 **Responsive Mobile-First** - Perfetto su ogni dispositivo
- 🚀 **Performance Ottimizzate** - Next.js con Static Export
- 🎬 **Splash Screen** - Presentazione animata di 4 secondi
- 📸 **Galleria Interattiva** - Con filtri e lightbox
- 💬 **Contatto WhatsApp** - Integrazione diretta

---

## 🚀 Quick Start

### Prerequisiti

- Node.js 18+ 
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone https://github.com/[username]/Pigottine.git

# Entra nella cartella
cd Pigottine

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### Build per Produzione

```bash
# Crea la build ottimizzata
npm run build

# La cartella 'out' contiene i file statici pronti per il deploy
```

---

## 📁 Struttura Progetto

```
pigottine-website/
├── public/images/pigottine/    # Immagini delle pigottine
├── src/
│   ├── app/                    # App Router Next.js
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Sezioni della pagina
│   │   └── ui/                 # Componenti riutilizzabili
│   └── lib/                    # Utilities e costanti
├── ARCHITETTURA.md             # Documentazione architettura
├── TODO.md                     # Lista attività
└── README.md                   # Questo file
```

---

## 🎨 Design System

### Colori Pastello

| Colore   | Valore     | Uso                |
|----------|------------|--------------------|
| Rosa     | `#f9a8d4`  | Primario, accenti  |
| Salmone  | `#fda4af`  | Secondario, CTA    |
| Acqua    | `#5eead4`  | Terziario          |
| Crema    | `#fefdfb`  | Sfondi             |

### Font

- **Titoli:** Plus Jakarta Sans
- **Corpo:** Inter

---

## 📸 Aggiungere Nuove Pigottine

1. Carica l'immagine in `public/images/pigottine/`
2. Apri `src/components/sections/PortfolioSection.tsx`
3. Aggiungi l'immagine all'array `galleryImages`:

```typescript
{
  id: 12,
  src: '/images/pigottine/nuova-pigottina.jpg',
  alt: 'Descrizione della pigottina',
  category: 'fatine' // o altra categoria
}
```

---

## 📞 Modificare Contatti

Apri `src/lib/constants.ts` e modifica:

```typescript
export const SITE_CONFIG = {
  phone: '+39 XXX XXXXXXX',      // Numero telefono
  whatsapp: '+39 XXX XXXXXXX',   // Numero WhatsApp
  email: 'tua@email.com',        // Email
  social: {
    instagram: 'https://instagram.com/...',
    facebook: 'https://facebook.com/...',
  }
}
```

---

## 🚀 Deploy su AWS Amplify

1. Push del codice su GitHub
2. Vai su AWS Amplify Console
3. Clicca "New App" → "Host web app"
4. Connetti il repository GitHub
5. Configura:
   - Build command: `npm run build`
   - Output directory: `out`
6. Deploy!

---

## 🛠️ Tecnologie

- **Framework:** Next.js 14 (App Router)
- **Linguaggio:** TypeScript
- **Styling:** Tailwind CSS
- **Animazioni:** Framer Motion
- **Icons:** Lucide React

---

## 📝 Scripts Disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Avvia server sviluppo |
| `npm run build` | Crea build produzione |
| `npm run start` | Avvia server produzione |
| `npm run lint` | Esegue ESLint |

---

## 📄 Licenza

Questo progetto è privato e di proprietà di Vivina.

---

## 👩‍💻 Sviluppato con ❤️

Creato con cura per **Le Pigottine di Vivina** - Bambole artigianali fatte a mano con amore e dedizione.
