/* ════════════════════════════════════════════════════════════════
   PROJECT 1 of 6 — The Obsidian Residence
   ----------------------------------------------------------------
   PHOTOS for this project live in:
       assets/images/projects/obsidian-residence/
     • cover.jpg          main photo (home-page card + top of project page)
     • 01.jpg … 06.jpg    interior photos, in the order they appear on the page

   To CHANGE a photo: save your new photo into that folder with the SAME
   file name (e.g. 03.jpg) and it replaces the old one. No code change needed.

   To CHANGE text (title, captions, description...): edit the fields below.
   To use a NEW file name, or add more photos, edit the "src" line below.
   ════════════════════════════════════════════════════════════════ */

PROJECTS.push({
  slug: "obsidian-residence",
  title: "The Obsidian Residence",
  category: "Luxury Villa",
  location: "Bengaluru, Karnataka",
  area: "",          // leave "" to hide
  year: "",          // leave "" to hide
  summary: "A contemporary villa of concrete, timber and glass — built for light, privacy and permanence.",
  description: "A two-storey residence where raw concrete, warm timber and floor-to-ceiling glazing create a calm, gallery-like home. Interiors flow from double-height living spaces to quiet private suites, with concealed linear lighting that shapes every room after dusk. Every junction, joint and finish was resolved on site with the same precision as the structure itself.",
  scope: ["Civil Construction", "Interior Design", "Custom Joinery", "Lighting Design"],
  cover: "assets/images/projects/obsidian-residence/cover.jpg",

  // Interior photos (shown in the gallery, in this order)
  gallery: [
      { src: "assets/images/projects/obsidian-residence/01.jpg", caption: "Living Area" },
      { src: "assets/images/projects/obsidian-residence/02.jpg", caption: "Upper Lounge & Balcony" },
      { src: "assets/images/projects/obsidian-residence/03.jpg", caption: "Family Room" },
      { src: "assets/images/projects/obsidian-residence/04.jpg", caption: "Timber Feature Wall" },
      { src: "assets/images/projects/obsidian-residence/05.jpg", caption: "Glazed Corner" },
      { src: "assets/images/projects/obsidian-residence/06.jpg", caption: "Courtyard Edge" }
  ]
});
