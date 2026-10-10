/* ════════════════════════════════════════════════════════════════
   PROJECT 6 of 6 — The Workspace Studio
   ----------------------------------------------------------------
   PHOTOS for this project live in:
       assets/images/projects/workspace-studio/
     • cover.jpg          main photo (home-page card + top of project page)
     • 01.jpg … 06.jpg    interior photos, in the order they appear on the page

   To CHANGE a photo: save your new photo into that folder with the SAME
   file name (e.g. 03.jpg) and it replaces the old one. No code change needed.

   To CHANGE text (title, captions, description...): edit the fields below.
   To use a NEW file name, or add more photos, edit the "src" line below.
   ════════════════════════════════════════════════════════════════ */

PROJECTS.push({
  slug: "workspace-studio",
  title: "The Workspace Studio",
  category: "Commercial Interiors",
  location: "Bengaluru, Karnataka",
  area: "",          // leave "" to hide
  year: "",          // leave "" to hide
  summary: "A refined, light-filled office fit-out built for focus and for hosting clients.",
  description: "A complete commercial fit-out delivered turnkey — open work zones, glass-fronted meeting rooms, a reception lounge and a client presentation room. Acoustic ceilings, concealed services and warm timber accents keep the space productive and welcoming.",
  scope: ["Space Planning", "Turnkey Fit-out", "MEP Coordination", "Furniture & Lighting"],
  cover: "assets/images/projects/workspace-studio/cover.jpg",

  // Interior photos (shown in the gallery, in this order)
  gallery: [
      { src: "assets/images/projects/workspace-studio/01.jpg", caption: "Open Work Zone" },
      { src: "assets/images/projects/workspace-studio/02.jpg", caption: "Meeting Room" },
      { src: "assets/images/projects/workspace-studio/03.jpg", caption: "Reception Lounge" },
      { src: "assets/images/projects/workspace-studio/04.jpg", caption: "Client Presentation Room" },
      { src: "assets/images/projects/workspace-studio/05.jpg", caption: "Collaboration Space" },
      { src: "assets/images/projects/workspace-studio/06.jpg", caption: "Executive Cabin" }
  ]
});
