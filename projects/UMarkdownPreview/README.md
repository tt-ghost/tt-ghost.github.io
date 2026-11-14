# UMarkdownPreview 2.0 landing page

Static, dependency-free landing page for the Mac App Store listing. Five languages, with English as the default page at the site root.

**Production URL:** `https://tt-ghost.github.io/projects/UMarkdownPreview/`

## Structure

```text
landing/
├── index.html          # English (default)
├── zh/index.html       # 简体中文
├── ja/index.html       # 日本語
├── es/index.html       # Español
├── fr/index.html       # Français
└── assets/
    ├── landing.css
    ├── app-icon.png
    └── img/<language>/ # hero, focus, work, code, themes
```

No build step, no external fonts, no JavaScript dependencies. The only script is a small IntersectionObserver reveal, disabled automatically for `prefers-reduced-motion`.

The `themes` asset is the settings window screenshot alone. Its light stage is written in CSS (`.settings-stage`), not baked into the image.

## Local preview

```bash
cd landing
python3 -m http.server 8080
# open http://localhost:8080/
```

## App Store Connect Marketing URL

Set the Marketing URL for all five localizations to:

```text
https://tt-ghost.github.io/projects/UMarkdownPreview/
```

The root page is the English version; the other languages live at their own paths:

| App Store localization | Direct page |
| --- | --- |
| en-US | `https://tt-ghost.github.io/projects/UMarkdownPreview/` |
| zh-Hans | `https://tt-ghost.github.io/projects/UMarkdownPreview/zh/` |
| ja | `https://tt-ghost.github.io/projects/UMarkdownPreview/ja/` |
| es-ES | `https://tt-ghost.github.io/projects/UMarkdownPreview/es/` |
| fr-FR | `https://tt-ghost.github.io/projects/UMarkdownPreview/fr/` |

The App Store download buttons open in a new tab (`target="_blank"`).

The Download buttons use the generic App Store link:

```text
https://apps.apple.com/app/id6761372363
```

This redirects to the visitor's storefront. If you prefer country-specific links, replace that href in each language page.

## Deploy

Publish the contents of `landing/` at `projects/UMarkdownPreview/` in the `tt-ghost.github.io` Pages site:

- The final URL should resolve to `https://tt-ghost.github.io/projects/UMarkdownPreview/` and serve the English page.
- The other language pages resolve to `.../zh/`, `.../ja/`, `.../es/`, `.../fr/`.
- The site uses relative asset paths, so it works under this second-level path.

Other static hosts work too (Cloudflare Pages, Netlify, Vercel, Nginx, S3 + CloudFront); keep the same path structure if you want the URLs above to remain valid.

## Before going live

1. The canonical, Open Graph, and `hreflang` URLs are already set to `https://tt-ghost.github.io/projects/UMarkdownPreview/`. If you deploy elsewhere, search and replace that base in the five pages.
2. Add a `sitemap.xml` with absolute URLs and add the `Sitemap:` line to `robots.txt`.
3. Confirm the App Store link opens the correct storefront.
4. Optional: replace the text Download button with Apple's official "Download on the Mac App Store" badge, following Apple's badge guidelines.

`robots.txt` and `llms.txt` are included at this path. Crawlers look for `robots.txt` at the domain root, so if you control `tt-ghost.github.io`, also place a copy there.

## Editing copy

Each language page is a standalone HTML file; edit the text directly in `index.html` (English), `zh/index.html`, `ja/index.html`, etc. The shared visual system is in `assets/landing.css`. Keep the existing class names if you want to preserve the layout.

The privacy policy lives in `docs/github/` as one file per language: `PRIVACY.md` (English), `PRIVACY.zh.md`, `PRIVACY.ja.md`, `PRIVACY.es.md`, and `PRIVACY.fr.md`. Each landing page links to its own file.

## Images

Screenshots are taken from the localized 2.0 app build. The five 16:10 screenshots (hero, focus, work, code) are 1280×800 WebP with JPEG fallbacks. The settings window (`themes`) is a separate 1400×1200 screenshot and sits on a CSS light stage. To replace one, keep the same file name under `assets/img/<language>/` and update the `width`/`height` attributes if the aspect ratio changes.
