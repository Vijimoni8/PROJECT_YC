/* ════════════════════════════════════════════════════════════════
   PROJECT 3 of 6 — Courtyard Villa
   ----------------------------------------------------------------
   PHOTOS for this project live in:
       assets/images/projects/courtyard-villa/
     • cover.jpg          main photo (home-page card + top of project page)
     • 01.jpg … 06.jpg    interior photos, in the order they appear on the page

   To CHANGE a photo: save your new photo into that folder with the SAME
   file name (e.g. 03.jpg) and it replaces the old one. No code change needed.

   To CHANGE text (title, captions, description...): edit the fields below.
   To use a NEW file name, or add more photos, edit the "src" line below.
   ════════════════════════════════════════════════════════════════ */

PROJECTS.push({
  slug: "courtyard-villa",
  title: "Courtyard Villa",
  category: "Villa",
  location: "Bengaluru, Karnataka",
  area: "",          // leave "" to hide
  year: "",          // leave "" to hide
  summary: "An inward-looking home organised around a quiet water courtyard.",
  description: "Designed around a central courtyard and reflecting pool, this villa keeps every principal room connected to light and greenery while preserving complete privacy from the street. Natural stone, dark steel and warm timber were used throughout for a restrained, timeless palette.",
  scope: ["Civil Construction", "Stone & Flooring", "Interior Design", "Waterproofing"],
  cover: "assets/images/projects/courtyard-villa/cover.jpg",

  // Interior photos (shown in the gallery, in this order)
  gallery: [
      { src: "assets/images/projects/courtyard-villa/01.jpg", caption: "Courtyard & Pool" },
      { src: "assets/images/projects/courtyard-villa/02.jpg", caption: "Dining Area" },
      { src: "assets/images/projects/courtyard-villa/03.jpg", caption: "Sitting Room" },
      { src: "assets/images/projects/courtyard-villa/04.jpg", caption: "Master Suite Balcony" },
      { src: "assets/images/projects/courtyard-villa/05.jpg", caption: "Staircase & Lighting" },
      { src: "assets/images/projects/courtyard-villa/06.jpg", caption: "Garden Room" }
  ]
});
