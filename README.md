# Yashaswini Constructions — Website

## Open it
Double-click `index.html`. Keep all files and folders together exactly as they are.

## Publish it
Upload the CONTENTS of this folder (index.html, project.html, assets/, robots.txt)
to your host (Netlify, Vercel, GitHub Pages, or any web hosting).

## Folder guide
    index.html            Home page
    project.html          Project showcase page (one template for every project)
    assets/css/style.css  All styling
    assets/js/            main.js, projects.js (builds the pages)
    assets/js/projects/   ONE FILE PER PROJECT  <-- edit project text and photo list here
    assets/images/        Logo, hero images, og-image.jpg (link-preview picture)
    assets/images/projects/<project-name>/   ONE PHOTO FOLDER PER PROJECT  <-- replace photos here

## Change a project's photos (easiest way)
1. Open the project's folder, e.g.  assets/images/projects/obsidian-residence/
   It contains:
     cover.jpg          main photo (home-page card and top of the project page)
     01.jpg ... 06.jpg  interior photos, in the order they appear on the page
2. Replace a photo by saving your new photo into that folder with the SAME name
   (for example, overwrite 03.jpg). No code change is needed.

## Change a project's text or captions
Open the matching file in assets/js/projects/ (e.g. 01-obsidian-residence.js).
It holds the title, location, summary, description, scope tags, and the caption
under each photo. Edit the text between the quotation marks.

## Add a new project
1. Create a new folder in assets/images/projects/ with the project name
   (lowercase, no spaces, e.g. villa-green-park) and put cover.jpg and 01.jpg,
   02.jpg ... in it.
2. Copy one file in assets/js/projects/, rename it (e.g. 07-villa-green-park.js),
   and change the details, the slug, and the photo paths inside it.
3. Add a line for the new file in BOTH index.html and project.html, next to the
   other "assets/js/projects/..." script lines.
The project then appears on the home page and gets its own page.

NOTE: the 6 projects and their photos are SAMPLE placeholders. Replace them with
your real projects and interior photos. Each folder currently holds copies of the
sample photos.

## Website description (SEO) — what was added
- Page title + description for Google results (index.html <head>)
- Link-preview tags (WhatsApp / Facebook / LinkedIn / X) + a preview image
- Business info for search engines (name, phone, email, city)
- Each project page sets its own title and description automatically

## After you get your domain
In index.html and project.html, change the og:image / twitter:image values from
`assets/images/og-image.jpg` to the full address, e.g.
`https://yourdomain.com/assets/images/og-image.jpg`
(WhatsApp/Facebook need the full address to show the preview picture).
Also confirm the phone number and email in index.html (they were already on the
site: +91 80 4123 4567, info@yashaswini.in).
