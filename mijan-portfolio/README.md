# Mijan Ali — Portfolio (step-by-step guide)

A cinematic, responsive portfolio: entrance animation → hero with pull-cord theme toggle → interactive doors → scroll-driven journey → skills → selected works → contact.
Plain **HTML + CSS + JavaScript**. No framework, no build step, so it deploys to GitHub Pages as-is and works on laptop and mobile.

```
mijan-portfolio/
├── index.html          ← page structure (6 sections)
├── css/style.css       ← all styling, animations, responsive rules
├── js/data.js          ← ★ YOUR CONTENT (edit this most)
├── js/main.js          ← behaviour (animations, doors, timeline, form)
├── assets/
│   ├── mijan.png       ← ★ ADD YOUR PHOTO HERE (you create this)
│   ├── portrait-placeholder.svg
│   └── favicon.svg
└── .nojekyll
```

---

## PART 1 — One-time setup (≈20 min)

### 1. Install the tools
| Tool | Where | Check it worked |
|---|---|---|
| **VS Code** | https://code.visualstudio.com | open it |
| **Git** | https://git-scm.com/downloads | `git --version` in a terminal |
| **GitHub account** | https://github.com/signup | you can log in |

Pick your GitHub username carefully — it appears in your live URL.

### 2. VS Code extensions
Open VS Code → Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`) and install:
- **Live Server** (Ritwick Dey) — instant browser preview with auto-reload
- **Prettier – Code formatter** (optional, keeps code tidy)

### 3. Tell Git who you are (once per computer)
Open the VS Code terminal (`` Ctrl+` ``):
```bash
git config --global user.name  "Mijan Ali"
git config --global user.email "the-email-you-used-on-github@example.com"
git config --global init.defaultBranch main
```

---

## PART 2 — Open and preview the project

1. Unzip `mijan-portfolio.zip` somewhere sensible (e.g. `Documents/Projects/`).
2. VS Code → **File → Open Folder…** → choose the `mijan-portfolio` folder.
3. Right-click `index.html` → **Open with Live Server**. The site opens at `http://127.0.0.1:5500`.
4. Every time you save a file the page reloads automatically.

### Test mobile while developing
- **In the browser:** press `F12` → click the phone/tablet icon (Device Toolbar) → pick *iPhone 14*, *Pixel 7*, etc.
- **On your real phone:** connect the phone to the **same Wi-Fi**, then open `http://YOUR-LAPTOP-IP:5500` (find the IP with `ipconfig` on Windows or `ifconfig` on Mac/Linux).

---

## PART 3 — Make it yours

### 1. Add your photo (the "cinematic" look needs a cut-out)
1. Take a half-body photo with a plain background.
2. Remove the background at https://www.remove.bg (free) → you get a **transparent PNG**.
3. Save it as `assets/mijan.png` (exact name, lowercase — GitHub is case-sensitive).
4. Keep it under ~500 KB (compress at https://squoosh.app) so mobile loads fast.

The site shows in black-and-white and turns colour on hover.

### 2. Edit `js/data.js`
Everything is already filled in from your details (name, BCA at Rajarshi Janak University, +2 at Gorkha Model Secondary School GPA 3.10, Sociair, Ambition Guru, Mind-Heart game, Daju Bhai Wine Shop). Search for **`TODO`** and replace:

| What | Field |
|---|---|
| Real years on the timeline | `journey[].big` (e.g. `"2026"`) and `journey[].when` (e.g. `"Jan 2026 – Now"`) |
| Your email | `email` |
| GitHub / LinkedIn / Instagram / Facebook links | `socials` |
| Live links to your game & wine-shop demo | `works[].link` |
| Roles that flip on the hero card | `roles` |

Only list things that are true — recruiters check.

### 3. Optional tweaks
- **Accent colour:** `--accent` at the top of `css/style.css`.
- **Door colours:** `--dc` on `.door--blue / --purple / --green / --orange`.
- **Door destinations:** `data-target="#journey"` on each door in `index.html`.

---

## PART 4 — Put it on GitHub

### 1. Create the repository
1. GitHub → **+ → New repository**.
2. **Name:** `YOUR-USERNAME.github.io` → gives you the short URL `https://YOUR-USERNAME.github.io`
   (any other name works too, but the URL becomes `https://YOUR-USERNAME.github.io/that-name/`).
3. Set it **Public**. Do **not** tick "Add a README" (we already have one). Click **Create repository**.

### 2. Push your code from VS Code's terminal
Inside the project folder:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```
First push opens a browser window to sign in to GitHub. Approve it.

> No-terminal alternative: VS Code's **Source Control** tab (`Ctrl+Shift+G`) → *Initialize Repository* → type a message → *Commit* → *Publish Branch*.

### 3. Turn on GitHub Pages
1. Repo → **Settings → Pages**.
2. **Source:** *Deploy from a branch*.
3. **Branch:** `main` · folder `/ (root)` → **Save**.
4. Wait 1–2 minutes (watch the **Actions** tab turn green). Your site is live at
   `https://YOUR-USERNAME.github.io`.

### 4. Verify on laptop **and** phone
- Open the URL on your laptop and on your phone (use mobile data too, not only Wi-Fi).
- Check: intro animation, pull cord toggles theme, doors open and take you to sections, timeline changes as you scroll, menu (☰) works on phone, form opens your email.

---

## PART 5 — Updating the site later (your daily loop)

1. Edit files in VS Code, check in Live Server.
2. Publish:
```bash
git add .
git commit -m "Describe what you changed"
git push
```
3. Live site refreshes in ~1 minute (hard-refresh with `Ctrl+Shift+R` if you see the old version).

---

## PART 6 — Make the contact form really send messages

By default the form opens the visitor's email app (works with zero setup). To receive messages directly:
1. Sign up at https://formspree.io (free) → **New Form** → copy the URL like `https://formspree.io/f/abcdwxyz`.
2. Paste it into `formspree` in `js/data.js`. Commit and push. Done.

---

## PART 7 — Polish before you share it

- [ ] Real photo added, real links and years filled in
- [ ] Add a **Share preview image**: put a 1200×630 `assets/og.jpg` and add to `<head>`:
  ```html
  <meta property="og:title" content="Mijan Ali — Developer & Creator">
  <meta property="og:description" content="BCA student & Implementation Officer from Nepal.">
  <meta property="og:image" content="https://YOUR-USERNAME.github.io/assets/og.jpg">
  ```
- [ ] Run **Lighthouse** (DevTools → Lighthouse) and aim for 90+ on Performance & Accessibility
- [ ] Add the site link to your GitHub profile, LinkedIn, and CV
- [ ] Optional custom domain (e.g. `mijanali.com.np`): Settings → Pages → Custom domain, then add the DNS records GitHub shows

---

## Troubleshooting

| Problem | Fix |
|---|---|
| 404 after enabling Pages | Wait 2 min; confirm `index.html` is at the repo root and branch is `main` |
| Photo missing live but fine locally | File name case: must be exactly `assets/mijan.png` |
| Page unstyled live | Paths must be `css/style.css` (no leading `/`) when using a project repo name |
| `git push` rejected / auth fails | Sign in again via the browser prompt, or create a Personal Access Token and use it as the password |
| Old version shows | Hard refresh, or open in a private window |
| Fonts look different offline | Fonts load from Google Fonts — needs internet, falls back to system fonts |

---

## How the code is organised (so you can learn from it)

- **`index.html`** — semantic sections: `#home`, `#world`, `#journey`, `#skills`, `#works`, `#contact`.
- **`style.css`** — CSS variables for the light/dark theme; the doors are pure CSS (arched `border-radius`, `perspective` + `rotateY` for the opening leaf); the monitor mock-ups are CSS too; mobile rules at `max-width: 860px`.
- **`main.js`** — intro letter reveal, theme cord (saved in `localStorage`), role flip card, door "portal" transition (`clip-path` circle), scroll-driven timeline (maps scroll progress inside a tall section to the active item using `position: sticky`), scroll-reveal with `IntersectionObserver`, and the form.
- Respects `prefers-reduced-motion` for accessibility.

### Good next steps (once this is live)
1. Replace the CSS mock screens in "Selected Works" with real screenshots (`assets/works/*.jpg`).
2. Upload Mind-Heart Tic-Tac-Toe and the wine-shop demo as their own GitHub repos + Pages, then link them.
3. Add a downloadable CV (`assets/Mijan-Ali-CV.pdf`) button in the hero.
4. Later, try GSAP or Three.js for even more cinematic motion.
