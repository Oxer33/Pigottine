# 🚀 ISTRUZIONI DEPLOY - Le Pigottine di Vivina

## Passaggio 1: Creare Repository GitHub

1. Vai su https://github.com/new
2. Nome repository: **Pigottine**
3. Descrizione: "Le Pigottine di Vivina - Sito web per bambole artigianali"
4. Visibilità: **Public** (o Private se preferisci)
5. NON selezionare "Initialize with README" (abbiamo già tutto)
6. Clicca **Create repository**

## Passaggio 2: Push del Codice su GitHub

Dopo aver creato il repository, esegui questi comandi nel terminale:

```powershell
cd "C:\Users\CORVINA\Desktop\AI\Pigottine di Vivina\pigottine-website"

# Aggiungi il remote (sostituisci USERNAME con il tuo username GitHub)
git remote add origin https://github.com/Oxer33/Pigottine.git

# Push del codice
git push -u origin main
```

Se richiesto, inserisci le credenziali GitHub.

## Passaggio 3: Deploy su AWS Amplify

1. Vai su https://console.aws.amazon.com/amplify/
2. Clicca **New app** → **Host web app**
3. Seleziona **GitHub** come provider
4. Autorizza AWS ad accedere ai tuoi repository
5. Seleziona il repository **Pigottine**
6. Seleziona il branch **main**

### Configurazione Build

Quando richiesto, usa queste impostazioni:

**Framework:** Next.js - SSG

**Build settings** (amplify.yml):
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

7. Clicca **Save and deploy**
8. Attendi il completamento del deploy (5-10 minuti)

## Passaggio 4: Configurare Dominio Personalizzato (Opzionale)

1. Nel pannello Amplify, vai su **Domain management**
2. Clicca **Add domain**
3. Inserisci: `vivina.pigottine.com` (o il dominio che preferisci)
4. Segui le istruzioni per configurare i DNS

---

## 🔧 Comandi Utili

### Avviare in locale per test
```powershell
cd "C:\Users\CORVINA\Desktop\AI\Pigottine di Vivina\pigottine-website"
npm run dev
```
Poi apri http://localhost:3000

### Creare nuova build
```powershell
npm run build
```

### Aggiornare il sito dopo modifiche
```powershell
git add .
git commit -m "Descrizione delle modifiche"
git push
```
AWS Amplify farà automaticamente il re-deploy!

---

## ⚠️ Note Importanti

1. **Aggiornare i contatti**: Prima del deploy finale, modifica `src/lib/constants.ts` con i dati reali (telefono, email, social)

2. **Immagini**: Le immagini sono già nella cartella `public/images/pigottine/`

3. **Favicon**: Crea un favicon.ico e mettilo in `public/`

4. **Privacy**: Se il sito è pubblico, considera di aggiungere una Privacy Policy

---

## 📞 Supporto

Se hai problemi con il deploy, controlla:
- La console di AWS Amplify per errori
- I log di build
- Che tutte le dipendenze siano installate (`npm install`)
