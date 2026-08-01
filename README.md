# egeayan.dev

A one-page, hand-written site. Plain HTML and CSS, no build step, no JavaScript,
no dependencies, no framework.

```
index.html     markup + JSON-LD
styles.css     all styles
404.html       served by Vercel for unknown paths
robots.txt
sitemap.xml
vercel.json    security headers, clean URLs, asset caching
favicon.ico
```

## Local preview

Any static server works:

```bash
python3 -m http.server 8000
open http://localhost:8000
```

## Deploy

Vercel, as a static project — no framework, no build command, output directory `.`
Pushing to the default branch is enough once the project is linked.

## Editing

Quotes are `<figure><blockquote>…</blockquote><figcaption>…</figcaption></figure>`.
Numbering is automatic via a CSS counter, so entries can be added or removed anywhere
without renumbering anything. All copy is written lowercase, and `text-transform: lowercase`
on `body` keeps it that way.
