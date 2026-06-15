# KwickLedger – Business Website

> A freelance project — a clean, professional single-page website built for **KwickLedger**, a CA/accounting services firm.

---

## 🔍 Overview

KwickLedger needed a fast, lightweight website to establish their online presence and capture leads. The goal was to keep it simple — no heavy frameworks, no backend server — just a polished single-file site that anyone can deploy in minutes.

The contact form saves submissions directly to **Google Sheets** via **Google Apps Script**, making lead management easy without any database or server setup.

---

## ✨ Features

- Fully responsive single-page design
- Contact form with client-side validation
- Lead capture → Google Sheets via Google Apps Script (no backend needed)
- Optional email notification on every form submission
- Zero dependencies — pure HTML, CSS, and JavaScript

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Form Backend | Google Apps Script |
| Data Storage | Google Sheets |
| Hosting | Hostinger / GitHub Pages / Netlify (any static host) |

---

## 📁 Project Structure

```
KwickLedger/
├── index.html               # Complete website (single file)
├── google_apps_script.js    # Google Apps Script – saves form data to Sheets
└── README.md                # This file
```

---

## 🚀 Setup & Deployment

### 1. Connect the Contact Form to Google Sheets

1. Go to [script.google.com](https://script.google.com) and create a **New Project**
2. Paste the contents of `google_apps_script.js`
3. Click **Deploy → New Deployment**
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the generated Web App URL
5. In `index.html`, replace:
   ```
   const SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
   with your copied URL

Every form submission will now appear in a Google Sheet called **"Leads"** in your Google account.

### 2. (Optional) Email Notifications

In `google_apps_script.js`, find the `MailApp.sendEmail` block and uncomment it to receive an email on every new enquiry.

### 3. Deploy the Website

**Netlify (easiest)** — drag and drop `index.html` at [netlify.com](https://netlify.com)

**GitHub Pages (free)**
1. Push this repo to GitHub
2. Go to Settings → Pages → Source: main branch

**Any web host** — upload `index.html` to your public folder. Done.

---

## 👨‍💻 Developer

Built by **Jai Agrawal** — 4th year CS student & freelance web developer

🔗 [github.com/JaiAgrawal1110](https://github.com/JaiAgrawal1110)

---

## 📄 License

This project was built for a client. Code structure and implementation may be referenced for learning purposes.
