# Assets Guide

## Directory purpose

| Directory | Intended content |
|---|---|
| `public/images/profile/` | Profile portraits and personal photos |
| `public/images/projects/` | Project screenshots, thumbnails, and mockups |
| `public/images/experience/` | Work and internship documentation |
| `public/images/education/` | Education and graduation photos |
| `public/images/companies/` | Company logos and related imagery |
| `public/images/background/` | Hero and section background images |
| `public/images/icons/` | Custom SVG icons and image-based icons |
| `public/fonts/` | Self-hosted font files |
| `public/documents/cv/` | CV and resume documents |

## Naming conventions

- Lowercase, hyphen separated: `profile-portrait-01.webp`.
- Prefix by purpose, end with a two digit variant: `project-dashboard-01.webp`.
- No spaces, no uppercase, no personal dates in filenames.
- Keep the same base name across formats: `hero-bg.webp` and `hero-bg.avif`.

## Recommended formats

| Content | Format |
|---|---|
| Photos and screenshots | WebP (AVIF as a second source when useful) |
| Logos and icons | SVG |
| Documents | PDF |
| Fonts | WOFF2 |

## Dimensions and aspect ratios

| Asset type | Suggested size | Ratio |
|---|---|---|
| Profile portrait | 800 x 1000 | 4:5 |
| Project thumbnail | 1200 x 750 | 16:10 |
| Project detail screenshot | 1600 x 1000 | 16:10 |
| Company logo | SVG, 24 to 48 px tall | flexible |
| Hero background | 1920 x 1080 | 16:9 |
| Icons | SVG, 24 x 24 viewBox | 1:1 |

These are starting points, not rules. Match the ratio to how the asset is displayed.

## Optimization

- Export at the largest size actually displayed, not larger.
- Compress photos to WebP quality around 75 to 85.
- Strip metadata before committing.
- Keep individual images under roughly 300 KB unless a larger size is genuinely needed.
- Prefer SVG for anything that is line art or a logo.

## Referencing assets

From HTML:

```html
<img src="/public/images/profile/profile-portrait-01.webp" alt="..." width="800" height="1000">
```

From CSS:

```css
.hero { background-image: url("/public/images/background/hero-bg.webp"); }
```

Paths are absolute from the site root and start with `/public/`.

## Replacing an image

1. Put the new file in the same directory with the same filename, or
2. Put it with a new filename and update the single `src` or `url()` reference.

Do not rename or move unrelated assets. Keep one reference per asset.

## Avoiding duplicates and bloat

- Search for an existing asset before adding a new one.
- Use one file per purpose, not per section copy.
- Delete replaced files only when no reference remains and the owner approves.