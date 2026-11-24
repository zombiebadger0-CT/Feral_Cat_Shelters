# Feral Cat Shelters Central CT

A page to help distribute feral cat shelters in CT. Built with [Docusaurus](https://docusaurus.io/) and hosted on GitHub Pages.

## Local development

```bash
npm install
npm start        # dev server at http://localhost:3000/
npm run build    # production build into ./build
npm run serve    # preview the production build
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repo settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Colors (Winter Shelter palette)

| Name | Hex | Use |
|---|---|---|
| Snowfall | `#F5F6F3` | Primary background |
| Shelter Navy | `#24334D` | Headings, navigation, footer |
| Evergreen | `#405B4B` | Buttons, links, calls to action |
| Winter Sky | `#AFC2D1` | Decorative accents, backgrounds |
| Shelter Silver | `#A9AAA6` | Borders, dividers, details |
| Winter Earth | `#6C5743` | Secondary headings, warm accents |

Defined as CSS variables in `src/css/custom.css`.
