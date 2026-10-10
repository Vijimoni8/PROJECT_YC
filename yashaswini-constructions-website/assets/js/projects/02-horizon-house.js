/* ════════════════════════════════════════════════════════════════
   PROJECT 2 of 6 — Horizon House
   ----------------------------------------------------------------
   PHOTOS for this project live in:
       assets/images/projects/horizon-house/
     • cover.jpg          main photo (home-page card + top of project page)
     • 01.jpg … 06.jpg    interior photos, in the order they appear on the page

   To CHANGE a photo: save your new photo into that folder with the SAME
   file name (e.g. 03.jpg) and it replaces the old one. No code change needed.

   To CHANGE text (title, captions, description...): edit the fields below.
   To use a NEW file name, or add more photos, edit the "src" line below.
   ════════════════════════════════════════════════════════════════ */

PROJECTS.push({
  slug: "horizon-house",
  title: "Horizon House",
  category: "Contemporary Residence",
  location: "Bengaluru, Karnataka",
  area: "",          // leave "" to hide
  year: "",          // leave "" to hide
  summary: "Cantilevered volumes and deep overhangs that frame the landscape from every room.",
  description: "Horizon House stacks two cantilevered volumes around a reflecting water feature. Large sliding glass walls dissolve the boundary between living areas and garden, while timber-lined soffits bring warmth to the interiors. Materials were chosen to age gracefully and need minimal upkeep.",
  scope: ["Civil Construction", "Facade Works", "Interior Fit-out", "Landscape Coordination"],
  cover: "assets/images/projects/horizon-house/cover.jpg",

  // Interior photos (shown in the gallery, in this order)
  gallery: [
      { src: "assets/images/projects/horizon-house/01.jpg", caption: "Balcony Lounge" },
      { src: "assets/images/projects/horizon-house/02.jpg", caption: "Living Room Glazing" },
      { src: "assets/images/projects/horizon-house/03.jpg", caption: "Timber Panelling" },
      { src: "assets/images/projects/horizon-house/04.jpg", caption: "Sky Terrace" },
      { src: "assets/images/projects/horizon-house/05.jpg", caption: "Entrance Hall" },
      { src: "assets/images/projects/horizon-house/06.jpg", caption: "Water Feature" }
  ]
});
