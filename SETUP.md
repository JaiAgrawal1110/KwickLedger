# KwickLedger Website – Setup Guide

## Files
- `index.html` → Your complete website (single file, ready to deploy)
- `google_apps_script.js` → Backend script to save contact form data to Google Sheets

---

## Step 1 – Connect the Contact Form to Google Sheets

1. Go to **script.google.com** (sign in with your Google account)
2. Click **New Project**
3. Delete any existing code in the editor
4. Open `google_apps_script.js` and paste the entire contents
5. Click **Deploy → New Deployment**
6. Set **Type** = Web App
7. Set **Execute as** = Me
8. Set **Who has access** = Anyone
9. Click **Deploy** → copy the Web App URL (looks like `https://script.google.com/macros/s/...`)
10. Open `index.html` and find this line:
    ```
    const SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
    ```
    Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your copied URL.

Every form submission will now appear in a Google Sheet called **"Leads"** in your Google account.

---

## Step 2 – (Optional) Get Email Notifications

In `google_apps_script.js`, find the `MailApp.sendEmail` block and uncomment it (remove the `/*` and `*/`). You'll get an email at tushar.agarwal@teamkwickledger.com every time someone fills the form.

---

## Step 3 – Deploy the Website

### Option A – Hostinger / any web host
Upload `index.html` to your hosting's public folder. Rename it to `index.html` if it isn't already. That's it.

### Option B – GitHub Pages (free)
1. Create a repo at github.com
2. Upload `index.html`
3. Go to Settings → Pages → Source: main branch
4. Your site will be live at `yourname.github.io/reponame`

### Option C – Netlify (free, easiest)
1. Go to netlify.com → drag and drop `index.html`
2. Set a custom domain: kwickledger.com

---

## Step 4 – Add Your CA Degree / Certificates

Since you want to display certificates, you have two options:

**Option A (simple):** Add a PDF download link in the Credentials section:
```html
<a href="ca-certificate.pdf" class="btn-ghost" download>Download CA Certificate</a>
```

**Option B (image):** Add an `<img>` tag in the Credentials section with a scanned image of your certificate.

---

## Notes
- The site is a single HTML file — no server or Python backend needed for the frontend.
- The Python backend (Flask) would be needed only if you later want a self-hosted form endpoint instead of Google Sheets. Ask for it when you're ready.
- The Google Sheets approach is simpler and free — recommended to start.
