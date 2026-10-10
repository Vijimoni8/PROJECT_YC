/* ════════════════════════════════════════════════════════════════
   PROJECT 4 of 6 — Skyline Duplex
   ----------------------------------------------------------------
   PHOTOS for this project live in:
       assets/images/projects/skyline-duplex/
     • cover.jpg          main photo (home-page card + top of project page)
     • 01.jpg … 06.jpg    interior photos, in the order they appear on the page

   To CHANGE a photo: save your new photo into that folder with the SAME
   file name (e.g. 03.jpg) and it replaces the old one. No code change needed.

   To CHANGE text (title, captions, description...): edit the fields below.
   To use a NEW file name, or add more photos, edit the "src" line below.
   ════════════════════════════════════════════════════════════════ */

PROJECTS.push({
  slug: "skyline-duplex",
  title: "Skyline Duplex",
  category: "Duplex Interiors",
  location: "Bengaluru, Karnataka",
  area: "",          // leave "" to hide
  year: "",          // leave "" to hide
  summary: "A double-height duplex with panoramic glazing and sculpted lighting.",
  description: "A full-home interior makeover of a duplex apartment — double-height living space, floating staircase, bespoke wardrobes and integrated ambient lighting. Every cabinet and panel was fabricated to fit the space exactly, giving the home a seamless, hotel-grade finish.",
  scope: ["Interior Design", "Modular & Custom Furniture", "False Ceiling & Lighting", "Turnkey Execution"],
  cover: "assets/images/projects/skyline-duplex/cover.jpg",

  // Interior photos (shown in the gallery, in this order)
  gallery: [
      { src: "assets/images/projects/skyline-duplex/01.jpg", caption: "Double-Height Living" },
      { src: "assets/images/projects/skyline-duplex/02.jpg", caption: "Staircase" },
      { src: "assets/images/projects/skyline-duplex/03.jpg", caption: "Master Bedroom" },
      { src: "assets/images/projects/skyline-duplex/04.jpg", caption: "Wardrobe & Joinery" },
      { src: "assets/images/projects/skyline-duplex/05.jpg", caption: "Home Office" },
      { src: "assets/images/projects/skyline-duplex/06.jpg", caption: "Terrace Lounge" }
  ]
});
