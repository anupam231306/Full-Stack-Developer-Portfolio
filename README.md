# Premium Portfolio — Setup Guide

React + Tailwind + Framer Motion + EmailJS se bana premium dark-theme portfolio.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          ← apna resume yahan daalein (is naam se)
├── src/
│   ├── assets/
│   │   └── profile.jpg     ← apni photo se REPLACE karein (same naam rakhein)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SignalLine.jsx  ← signature animated divider
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🚀 Step 1 — Install & Run

Terminal me project folder ke andar jaake:

```bash
npm install
npm run dev
```

Browser me `http://localhost:5173` khul jayega.

Production build ke liye:
```bash
npm run build
npm run preview
```

## 🖼️ Step 2 — Apni Photo Daalein

`src/assets/profile.jpg` file ko apni photo se replace kar dein
(same filename `profile.jpg` rakhein, ya code me naya naam update kar dein
`Hero.jsx` aur `About.jsx` me `import profileImg from '../assets/profile.jpg'` line).

## ✏️ Step 3 — Apna Content Update Karein

Har component ke top pe `// ✏️ EDIT ME` comment ke saath saari editable
cheeze clearly marked hain:

- **`Navbar.jsx`** → naam/logo
- **`Hero.jsx`** → naam, taglines (typing animation), intro, social links
- **`About.jsx`** → bio, stats/counters
- **`Skills.jsx`** → tech stack categories
- **`Projects.jsx`** → apne real projects (title, description, tech, links, image)
- **`Contact.jsx`** → email/phone/location, EmailJS keys (neeche dekhein)
- **`Footer.jsx`** → social links

## 📧 Step 4 — EmailJS Setup (Contact Form Ke Liye — ZAROORI)

Contact form se real email receive karne ke liye:

1. **Account banayein** → [emailjs.com](https://www.emailjs.com/) pe free
   account banayein.

2. **Email Service connect karein** → Dashboard → **Email Services** →
   **Add New Service** → Gmail/Outlook select karein aur connect karein.
   Yahan se aapko **Service ID** milega (jaise `service_ab12cd3`).

3. **Email Template banayein** → Dashboard → **Email Templates** →
   **Create New Template**. Template body me ye variables use karein:
   ```
   From: {{name}} ({{email}})
   Subject: {{subject}}

   {{message}}
   ```
   Save karne ke baad **Template ID** milega (jaise `template_xy98zt6`).

4. **Public Key lein** → Dashboard → **Account** → **General** tab →
   **Public Key** copy karein.

5. **Code me paste karein** → `src/components/Contact.jsx` file kholein,
   top pe ye teen lines milegi:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
   Inki jagah apni real values daal dein.

6. Save karein, form test karein — submit karte hi aapke connected email
   pe message aa jayega. Loading spinner, success/error toast, aur
   validation (empty fields, invalid email) already implemented hain.

## 📄 Step 5 — Resume Add Karein

Apna resume PDF `public/resume.pdf` naam se daal dein — Hero section ka
"Download Resume" button automatically isko serve karega.

## 🎨 Design Tokens (Theme Customize Karne Ke Liye)

Sab colors/fonts ek jagah `tailwind.config.js` me defined hain:

```js
colors: {
  base: '#0B0D12',     // background
  gold: '#C9A15A',     // primary accent — change this to re-theme
  teal: '#3E5C56',     // secondary accent
  ivory: '#EDEAE3',    // text
  ...
}
```

Sirf inko change karke poore site ka color scheme badal sakte hain.

## 🌐 Step 6 — Deploy

Sabse aasaan free options:

- **Vercel**: `npm i -g vercel` → `vercel` (project folder me run karein)
- **Netlify**: `npm run build` → `dist` folder ko Netlify pe drag-drop karein
- **GitHub Pages**: `vite.config.js` me `base: '/repo-name/'` add karein, phir `gh-pages` package se deploy karein

Deploy karne se pehle `npm run build` chalakar check kar lein ki koi error
na aaye.

---

Kisi bhi component me content ya styling change karna ho to bas us file
ko edit karein — sab kuch modular aur independent hai.
