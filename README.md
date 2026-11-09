# Anold Omagwa Onchangu’s portfolio

## Run locally

Use Node.js 24 and run these commands from the repository folder.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. The site uses the `/portfolio-website/` path.

To preview the production build, run `npm run build` followed by `npm run preview`.

## Publish to GitHub Pages

Before pushing the migration to `main`, open the repository’s **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The deploy workflow builds the site and publishes `dist` on pushes to `main`. It can also be started manually from the **Actions** tab.
