# egeayan.dev

A hand-written personal site. Plain HTML and CSS, no build step, no JavaScript,
no dependencies, no framework.

```
index.html     home — about, projects, quotes
styles.css     all styles
404.html
robots.txt
sitemap.xml
llms.txt
vercel.json
favicon.ico
```

## Local preview

```bash
python3 -m http.server 8000
open http://localhost:8000
```

## Deploy

Vercel static project — no framework, no build command, output directory `.`

## Editing

Quotes are `<figure><blockquote>…</blockquote><figcaption>…</figcaption></figure>` in `index.html`.
Numbering is a CSS counter. All copy is lowercase; `text-transform: lowercase` on `body` keeps it that way.
