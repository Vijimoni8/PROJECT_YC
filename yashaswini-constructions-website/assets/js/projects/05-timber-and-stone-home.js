/* ════════════════════════════════════════════════════════════════
   PROJECT 5 of 6 — Timber & Stone Home
   ----------------------------------------------------------------
   PHOTOS for this project live in:
       assets/images/projects/timber-and-stone-home/
     • cover.jpg          main photo (home-page card + top of project page)
     • 01.jpg … 06.jpg    interior photos, in the order they appear on the page

   To CHANGE a photo: save your new photo into that folder with the SAME
   file name (e.g. 03.jpg) and it replaces the old one. No code change needed.

   To CHANGE text (title, captions, description...): edit the fields below.
   To use a NEW file name, or add more photos, edit the "src" line below.
   ════════════════════════════════════════════════════════════════ */

PROJECTS.push({
  slug: "timber-and-stone-home",
  title: "Timber & Stone Home",
  category: "Independent House",
  location: "Bengaluru, Karnataka",
  area: "",          // leave "" to hide
  year: "",          // leave "" to hide
  summary: "Warm timber cladding set against honest stone and concrete.",
  description: "A family home that balances warmth and strength — vertical timber panels, board-formed concrete and generous glazing. Interiors continue the same material story, with built-in seating, concealed storage and soft, layered lighting for evenings at home.",
  scope: ["Civil Construction", "Timber Cladding", "Interior Fit-out", "Electrical & Lighting"],
  cover: "assets/images/projects/timber-and-stone-home/cover.jpg",

  // Interior photos (shown in the gallery, in this order)
  gallery: [
      { src: "assets/images/projects/timber-and-stone-home/01.jpg", caption: "Timber Feature Wall" },
      { src: "assets/images/projects/timber-and-stone-home/02.jpg", caption: "Living & Dining" },
      { src: "assets/images/projects/timber-and-stone-home/03.jpg", caption: "Kitchen Island" },
      { src: "assets/images/projects/timber-and-stone-home/04.jpg", caption: "Reading Nook" },
      { src: "assets/images/projects/timber-and-stone-home/05.jpg", caption: "Upper Landing" },
      { src: "assets/images/projects/timber-and-stone-home/06.jpg", caption: "Family Lounge" }
  ]
});
