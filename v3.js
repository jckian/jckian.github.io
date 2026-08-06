/* ============================================================
   v3.js — shared data + behaviour for the "elim 版" site.
   PROJECTS_V3 is copied VERBATIM from work.html (facts source).
   Used by v3.html (home) and v3-work.html (case pages).
   ============================================================ */

/* ---- Yenhsing Cheng — selected works 2022–2025 (verbatim copy) ---- */
const PROJECTS_V3 = {
  "voro": {
    title: "VORO", cat: "Computational Design / Design Tech", year: "2026", tag: "Generative",
    role: "System design, computational workflow, real-time 3D front-end",
    client: "SCI-Arc · independent study",
    services: "Generative design, computational massing, structural synthesis, real-time 3D",
    intro: "An interactive 3D design system for early-stage architectural synthesis, integrating program, massing, and structure in a single workflow.",
    body: "VORO translates a design brief into a structured, buildable model. Given a precedent and a site constraint, the system generates a floor-by-floor program, evaluates it against massing typologies (cube, tower, slab, courtyard), and resolves a corresponding structural system — including internal frame with curtain wall, structural skin, or structural foam. All outputs are visualized and iterated in a real-time 3D browser environment.\n\nThe system operates through two coordinated layers.\n\nCHAT interprets natural language inputs. A precedent and site condition are translated into a structured spatial logic based on analyzed case studies, producing a programmatic framework.\n\nINDEX simulates this framework within the site context, generating massing, assigning structural systems, and producing live performance metrics including GFA, FAR, program distribution, and floor-by-floor breakdowns. Each iteration outputs a coherent, BIM-ready model, eliminating the disconnect between concept and documentation in early design stages.\n\nUnlike conventional workflows where program, form, and structure are developed sequentially, VORO evaluates them simultaneously. This enables immediate feedback between spatial intent and buildable geometry, producing design proposals that are structurally and programmatically consistent from the first iteration.",
    cover: "images/VORO/VORO-video.mp4",
    coverFit: "contain",          /* 16:9 UI capture — cropping it loses the panels */
    repo: "https://github.com/jckian/VORO",
    gallery: []
  },
  "01": {
    title: "Orienteering", cat: "Memory / Landscape", year: "2022", tag: "Landscape",
    team: "5-Person Teamwork",
    role: "Architectural design & programming",
    client: "NYCU GIA Studio · 5-person team",
    services: "Landscape regeneration, branding",
    intro: "Reprogramming a remote island and reusing a Cold War military outpost. The project remaps Xiju's landscape to turn Matsu's battlefield culture into a journey of sensory exploration.",
    body: "Located on Xiju Island at Taiwan's maritime edge, the project opens Former Military Outpost No.32 — a Cold War frontline carved into sandstone cliffs — for public use. The island's landscape is itself a product of military necessity, shaped by soldiers stationed here 40–50 years ago, so vegetation and ecology shift with elevation and defensive function. By remapping three distinct landscape layers — Plant (+240M), Stone (±0M) and Water (−400M) — 'Orienteering' becomes an exploring brand that guides travellers through Matsu's battlefield culture with their own body and senses. Five routes, one per sense — sight, sound, smell, taste and touch — turn the visit into a journey rather than a destination. As the stronghold retires from military duty it merges back into the earth: as one disappears, one emerges. — Instructors: Shu-Chang Kung, Ling-Li Tseng · 5 weeks, Summer 2022.",
    cover: "images/orienteering/冷戰島嶼重生%20-%20馬祖戰地轉譯.mp4",
    coverSpeed: 2,
    gallery: [
      { src: "images/orienteering/Portfolio_260131_selected10%20-%20Copy.png", cap: "The real Xiju: abandoned stone villages, granite shores and agave-covered slopes that shaped the design.", wide: true },
      { src: "images/orienteering/Portfolio_260131_selected7.png", cap: "Three landscape layers, Plant at +240M, Stone at ±0M and Water at −400M, each reinterpreting the island's defensive terrain." },
      { src: "images/orienteering/1%20(1).png", cap: "Arrival. Terraced contour planting curves down a misty hillside toward the buried outpost." },
      { src: "images/orienteering/1%20(2).png", cap: "The stronghold entrance keeps the old garrison motto ‘威鎮閩疆’ on a wall set into the green berm." },
      { src: "images/orienteering/1%20(11).png", cap: "Grass-covered terraces fold over a stone chamber buried in the slope. As one disappears, another emerges." },
      { src: "images/orienteering/1%20(3).png", cap: "Interiors feel carved from the mountain. Stacked stone and a long floor channel carry water and dim light." },
      { src: "images/orienteering/1%20(6).png", cap: "Late light reaches deep into a sheltered stone hall of columns and stepped seating." },
      { src: "images/orienteering/1%20(9).png", cap: "Organic stone stairways stitch the outpost's levels together; a visitor rests on the landing." },
      { src: "images/orienteering/1%20(10).png", cap: "A narrow cut between concrete walls releases onto the sea and the setting sun." },
      { src: "images/orienteering/1%20(2).jpg", cap: "Twilight. A single weathering-steel wall holds the edge between hillside and sea." },
      { src: "images/orienteering/site/IMG_12221.jpeg", cap: "Site: the island's deserted stone settlement above the bay." },
      { src: "images/orienteering/site/IMG_2369.jpg", cap: "Site: the existing outpost today, stone walls and a round pillbox over the offshore rocks." },
      { src: "images/orienteering/site/IMG_1066.jpeg", cap: "Site: a stone-capped bunker embedded in the miscanthus hillside, a radar post on the ridge." },
      { src: "images/orienteering/site/IMG_1045.jpeg", cap: "Site: a concrete gun apron and drainage channel left by the garrison." },
      { src: "images/orienteering/site/IMG_1070.jpeg", cap: "Site: weathered bunker blocks and the trench path along the rampart." },
      { src: "images/orienteering/site/IMG_18277.JPG", cap: "Site: sandstone cliffs and rockfall dropping to the sea below the outpost." },
      { src: "images/orienteering/site/IMG_2251.jpg", cap: "Site: inside a round pillbox, light slipping through a single embrasure." },
      { src: "images/orienteering/site/IMG_2290.jpg", cap: "Site: a narrow concrete passage within the tunnel system." },
      { src: "images/orienteering/site/IMG_2302.jpg", cap: "Site: a firing embrasure framing nothing now but the open sea." }
    ]
  },
  "02": {
    title: "1 House for All", cat: "Housing / Community", year: "2022", tag: "Housing",
    team: "30-Person Teamwork",
    award: "Solar Decathlon Europe 21/22, Architecture First Prize",
    role: "Design development & BIM coordination",
    client: "NYCU / TDIS · international competition",
    services: "Sustainable housing, mass timber",
    intro: "A transitional, net-zero housing system that inserts shared, mid-way housing into the gaps left by Taiwan's decade-long urban renewal process.",
    body: "Taiwan's average building lifespan is only 35–40 years, and urban renewal takes a decade on average — leaving demolished gaps across the city while complex ownership stalls rebuilding. '1 House for All' fills those gaps with mid-way buildings: not just a net-zero transitional house, but a social-enterprise housing and energy-sharing hub that can be replicated across different sites. Built from mass timber (CLT and GLT) with a modular, adaptable façade, the system is designed to be fast-built, fully disassembled and reused in the next construction. A shared ground floor and party-core wall let the plan flex for different residents, bringing together elderly people, families and temporary occupants, while adding e-bike and e-cargo charging to the neighbourhood. The final outcome was a 1:1 demonstration unit the team built themselves. — 30-person teamwork · 8 months, 2021F–2022S.",
    cover: "images/1-house-for-all/work-02.png",
    gallery: [
      { src: "images/1-house-for-all/building%20life%20cycle.png", cap: "Building life cycle. Each layer is designed to be replaced on its own timeline.", wide: true },
      { src: "images/1-house-for-all/Portfolio_260131_selected16.png", cap: "Plans and section: shared ground floor, dwelling units and a rooftop day care.", wide: true },
      { src: "images/1-house-for-all/construction%20system.png", cap: "Construction system: mass timber (CLT and GLT) wrapped in a reusable steel-framed skin.", wide: true },
      { src: "images/1-house-for-all/pipeline%20plan.png", cap: "Energy systems: water, active and passive climate control sharing one core.", wide: true }
    ]
  },
  "03": {
    title: "Banqiao Station", cat: "Public / Practice", year: "2023", tag: "Public",
    team: "3-Person Team · Professional Practice",
    role: "Architectural design & coordination",
    client: "Professional practice · MRT Banqiao Station",
    services: "Transit infrastructure, detailing",
    intro: "A new entrance for MRT Banqiao Station in New Taipei City, translating landscape motifs into buildable systems through professional practice.",
    body: "A new entrance for Banqiao Station in New Taipei City, developed in professional practice with an outsourced team in India — where design decisions constantly had to adjust to construction constraints. Landscape motifs are translated into arched structures that prolong a natural atmosphere and form a continuous urban green corridor. An open, double-height ground level enhances spatial permeability, while the loop line's signature colour gives covered circulation and clearer entry points for daily commuters. A cantilevered 2 m extension and rain-screen louvers optimise wind and rain protection. — 885 m² · NT$29,920,000.",
    cover: "images/banqiao-station/work-03.png",
    gallery: [
      { src: "images/banqiao-station/work-03-02.png", cap: "Night view. The loop line colour lights the covered circulation.", wide: true },
      { src: "images/banqiao-station/work-03-01.png", cap: "Entrance plaza and arched canopy at grade." },
      { src: "images/banqiao-station/work-03-03.png", cap: "Arched structure forming a continuous urban green corridor." },
      { src: "images/banqiao-station/work-03-04.png", cap: "Circulation through the open, double-height ground level." },
      { src: "images/banqiao-station/work-03-05.png", cap: "Cantilevered 2 m extension with rain-screen louvers." },
      { src: "images/banqiao-station/场景%2010.png", cap: "Night view beneath the lit canopy, stairs descending to the concourse.", wide: true },
      { src: "images/banqiao-station/fl1_plan.png", cap: "Ground floor plan: entrance, escalator core and landscaped forecourt.", wide: true },
      { src: "images/banqiao-station/section.png", cap: "Long section. The metal-clad roof lifts over a double-height concourse.", wide: true },
      { src: "images/banqiao-station/escalator-section.png", cap: "Escalator section. Circulation threads between street and platform.", wide: true },
      { src: "images/banqiao-station/escalator-section-2.png", cap: "Detailed section through the station's underground level and escalator.", wide: true }
    ]
  },
  "04": {
    title: "Earthen", cat: "Climate / Housing", year: "2025", tag: "Climate",
    team: "7-Person Teamwork",
    role: "Structural design, prototyping, glazing, robotic 3D printing",
    client: "SCI-Arc · Herwig Baumgartner",
    services: "Post-disaster housing, ceramic fabrication",
    intro: "Recovery housing for wildfire-displaced communities, built from 3D-printed ceramics and rammed earth. The units treat temporary housing as part of a longer recovery process.",
    body: "Earthen responds to the increasing frequency of California wildfires and the prolonged displacement that follows. Rather than treating temporary housing as disposable, it frames shelter as part of a longer recovery process — a system of transitional ADUs that can be deployed quickly yet remain useful as people return to stability. Sited at 3328 N Fair Oaks Avenue in Altadena, a lot left in ruin after the Eaton Fire, it pairs housing with a community bathhouse to form a small-scale recovery infrastructure for daily life and collective healing. Using 3D-printed ceramics and rammed earth, the design explores construction that is locally grounded and thermally resilient. A robotically 3D-printed ceramic façade collects, channels and retains rainwater through algorithmic growth patterns — each module printed in clay, then glazed and fired into an earth-toned palette — reimagining the architectural skin as a ‘living’ mediator rather than a static barrier. — 7-person teamwork · 15 weeks, Fall 2025.",
    cover: "images/earthen/work-04-01.jpg",
    gallery: [
      { src: "images/earthen/DSC03168.JPG", cap: "Fired ceramic façade. Printed clay glazed into an earth-toned palette.", wide: true },
      { src: "images/earthen/DSC03170.JPG", cap: "Glaze detail. Reactive whites and chrome pool between the printed layers." },
      { src: "images/earthen/work-04-04.jpg", cap: "Robotic 3D printing of the ceramic units." },
      { src: "images/earthen/work-04-05.jpg", cap: "Wall-chunk mock-up of the printed ceramic skin." },
      { src: "images/earthen/window%20lower.png", cap: "Installed mock-up. The window sill meets the printed ceramic wall." },
      { src: "images/earthen/window%20upper.png", cap: "Installed mock-up. The window head and the rainwater channel above." },
      { src: "images/earthen/work-04-07.jpg", cap: "Prototype chunk, plan and elevation at half scale." },
      { src: "images/earthen/Ceramic%20Unit%20Schematics.jpg", cap: "Ceramic unit schematics, the catalogue of printed modules at body scale.", wide: true },
      { src: "images/earthen/facade%20zone.png", cap: "Façade performance zones. Extrusions and pockets channel and hold rainwater." },
      { src: "images/earthen/glazing.png", cap: "Glaze study. Chrome, palladium, reactive white and edge colours layered to melt and pool." },
      { src: "images/earthen/wall%20section.jpg", cap: "Wall section. Glazing carried on rammed earth and 3D-printed ceramic." },
      { src: "images/earthen/window%20detail.jpg", cap: "Window and planter details, with irrigation feeding the succulent pockets." }
    ]
  },
  "05": {
    title: "DreamStudio", cat: "Generative AI / Game Design", year: "2022", tag: "Virtual",
    team: "5-Person Teamwork",
    role: "Spatial design, AI image generation, diagrams, film editing",
    client: "NYCU competition · 5-person team",
    services: "Generative AI, cognitive mapping, game design",
    intro: "A generative AI competition entry that turns collective memory into playable virtual space, guided by Edward Tolman's theory of cognitive maps.",
    body: "DreamStudio is a design competition at NYCU exploring how an AI image generator can drive program definition and design concepts. Building on Edward Tolman's 1948 theory of cognitive maps — mental, first-person representations of space built from both objective spatial features and subjective experience — the team developed a methodology that transforms collective memory into virtual spaces, generating layered conceptual experiences. Conceptual, emotional and contextual prompts are fed through neural networks (DreamStudio → Rhino → Unreal Engine) to deconstruct and recombine existing spaces into a playable virtual world. As an electronic extension of the body, the resulting space is navigated with simple keyboard and mouse, its discontinuous scales and atmospheres producing an uncanny experience distinct from physical space. — 5-person team · 10 days, Fall 2022.",
    cover: "images/dreamstudio/work-05.png",
    /* hero cycles through the four walkthrough clips instead of a still */
    coverPlaylist: [
      "images/dreamstudio/clips/vide_ltest1_1.mp4?v=20260701",
      "images/dreamstudio/clips/vide_ltest1-2.mp4",
      "images/dreamstudio/clips/vide_ltest1-3.mp4",
      "images/dreamstudio/clips/vide_ltest1-4.mp4"
    ],
    gallery: [
      { src: "images/dreamstudio/Portfolio_260131_selected21.png", wide: true },
      { src: "images/dreamstudio/diagram.png", wide: true },
      { src: "images/dreamstudio/diagram-2.png", wide: true },
      { src: "images/dreamstudio/index/1.png" },
      { src: "images/dreamstudio/index/work-05-02.png" },
      { src: "images/dreamstudio/work-05-03.png" },
      { src: "images/dreamstudio/Gemini_Generated_Image_n17i6wn17i6wn17i%20(1).png" },
      { src: "images/dreamstudio/Gemini_Generated_Image_km54j7km54j7km54.png" },
      { src: "images/dreamstudio/index/Gemini_Generated_Image_s3x6ous3x6ous3x6.png" },
      { src: "images/dreamstudio/index/Gemini_Generated_Image_bitvs2bitvs2bitv.png" },
      { src: "images/dreamstudio/Gemini_Generated_Image_6qj0056qj0056qj0.png" }
    ]
  },
  "threshld": {
    title: "THRESHLD", cat: "Generative / Product / Flagship Store", year: "2026", tag: "Generative",
    role: "Product design, inflatable mechanism, material studies & spatial design",
    client: "Flagship store concept · independent study",
    services: "Generative AI workflow, wearable design, soft robotics, ETFE flagship store",
    intro: "THRESHLD starts from a wearable product, an ornament that eases poor posture by gently inflating, and grows into a flagship store in LA's Chinatown where the ETFE skin responds to the posture of the people inside. The whole process is driven by AI, from product design to program layout and structure generation, working across ComfyUI, Grasshopper Python and Blender MCP.",
    body: "THRESHLD starts from product design and lets the architecture follow. The product, THRESHLD, is a wearable ornament for poor posture and muscle tension: when the body slips into a wrong position, it responds by softly inflating. It runs a three-step intervention — inner 'fingers' first give a gentle Remind signal, then gradually inflate to Warn, and if still ignored, fully inflate into a rigid mode that forces the body to rest. The mechanism is triggered by the frequency and angle of movement and calibrated against range-of-motion theory, then adapted into versions for other parts of the body; before buying, customers are scanned in a body-scanning booth so each piece fits perfectly. Material studies push the inflatable aesthetic — hydro-dipping colour tests and experiments in material opacity, with a texture map applied across the orange and mint-blue parts. The flagship store carries the same idea from body to building: wrapped in a translucent ETFE skin, its inflatable façade responds to its visitors' posture — swelling whenever the people inside slip out of alignment — so the store reminds, corrects and breathes exactly as the product does. The whole project — wearable, materials and store — is built through a generative pipeline: Blender driven through an MCP agent, with ComfyUI, LoRA and ControlNet steering form, texture and image so every iteration stays consistent across product and architecture. — Product, fabrication & spatial study, 2026.",
    cover: "images/THRESHLD/THRESHLD.mp4",
    gallery: [
      { src: "images/THRESHLD/16_9_2.mp4", cap: "The wearable in motion, inflating as posture slips.",
        left: [
          { src: "images/THRESHLD/Product-2.png", cap: "Product render of the translucent inflatable ornament." },
          { src: "images/THRESHLD/work-02-03.png", cap: "ETFE-wrapped interior. The façade breathes with the bodies inside." }
        ] },
      { src: "images/THRESHLD/timelapse_noVoice.mp4", cap: "Fabrication timelapse." },
      { src: "images/THRESHLD/mvLYsvfeKxzzeysLGpoI3_844fd4faae1c40de9c0b257b125353bb.mp4", cap: "Three-step intervention: Remind, Warn, then rigid rest." }
    ]
  },
  "archive": {
    title: "Archive", cat: "Scraps", year: "—", tag: "Archive",
    role: "—", client: "—", services: "—",
    intro: "Some truly random stuff.",
    body: "",
    layout: "archive",
    cover: "images/archive/kaleidoscope.mp4",
    video: "images/archive/kaleidoscope.mp4",
    longImg: "images/archive/archive-01.png",
    mockups: ["images/archive/1_1%20MOCKUP.jpg", "images/archive/1_1%20MOCKUP-2.jpg"],
    introA: "Kaleidoscope is an interactive kinetic installation inspired by Froebel Gifts and auxetic chequered tiling. The structure responds to the viewer's proximity through an Arduino-controlled mechanism, unfolding into a blooming form as someone approaches and returning to its resting state as they move away. By combining geometric transformation with physical interaction, the project reinterprets a simple construction toy as a responsive architectural object. (2021)",
    introB: "A transit pavilion designed for one of Taipei's busiest urban gateways and validated through full-scale prototyping. Located at Gongguan Station, the primary entrance to National Taiwan University and the surrounding commercial district, the project reimagines the MRT station exit as a civic pavilion. After completing the design, we fabricated a 1:1 mock-up and conducted structural load testing to verify its constructability and load-bearing performance, bridging digital design with real-world fabrication. (2019)",
    gallery: []
  },
  "hiyou": {
    title: "HiYou", cat: "AI / Interactive Installation", year: "2026", tag: "AI",
    team: "2-Person Teamwork",
    role: "System design, Unity front-end, Python back-end, computer vision pipeline",
    client: "SCI-Arc · AT Studio 1",
    services: "Real-time computer vision, speech recognition, generative portrait, interactive installation",
    intro: "A real-time interactive installation that turns a passerby into a participant. A live camera reads each visitor's expression, finds their closest match among other participants, and generates a composite portrait of the two as an icebreaker for real-world conversation.",
    body: "HiYou is a real-time interactive installation that transforms passersby into participants through AI-powered social interaction. Using a live camera feed, the system detects people, tracks their attention, and begins the experience after a three-second gaze.\n\nParticipants can answer a short series of spoken questions, which are transcribed using OpenAI Whisper. The system then analyzes facial features with MediaPipe Face Mesh (468 landmarks), together with behavioral metrics including head movement, eye activity, smile intensity, rhythm, and pitch variation.\n\nHiYou compares these visual and behavioral characteristics with other participants collected during the event to find the closest match. It generates a composite portrait blending the two faces and guides participants to meet each other in the physical space.\n\nBuilt with a Unity front end and a Python back end, the installation uses HTTP and OSC/UDP for real-time communication. The entire pipeline runs locally with MediaPipe, Whisper, and ArcFace, enabling fast, offline operation without cloud services.",
    cover: "images/hi-you/HiYou.mp4",
    coverPortrait: true,
    repo: "https://github.com/jckian/HiYou",
    gallery: [
      { src: "images/hi-you/L-Acoustics%20VID.mp4", cap: "Live installation demo at L-Acoustics with real participants.",
        left: [
          { src: "images/hi-you/workflow_final.png", cap: "System workflow: a two-peer architecture with a Unity front end and a Python back end." }
        ] }
    ]
  },
  "sciarc-gala": {
    title: "SCI-Arc Gala", cat: "Film / Installation", year: "2025", tag: "Event",
    team: "3-Person Teamwork",
    role: "Assisted M. Casey Rehm with image sequences, motion narratives and projection output",
    client: "SCI-Arc · M. Casey Rehm", services: "—",
    intro: "A series of AI-generated videos projected on the garden entrance of the DTLA Public Library, using custom-developed pipelines for the Fall 2025 SCI-Arc Gala.",
    body: "",
    cover: "images/sciarc-gala/SCIArcGalaFinalVideo.mp4",
    coverPortrait: true,
    gallery: [
      /* both are 9:16 — set side by side at equal width */
      { src: "images/sciarc-gala/archive-gala-opening.mp4", cap: "Annual gala opening film, projected on the LA Central Library façade.",
        even: true,
        left: [
          { src: "images/sciarc-gala/Gemini_Generated_Image_8fvg1i8fvg1i8fvg.png", cap: "Projection mapping turns the historic tower into a canvas." }
        ] },
      { src: "images/sciarc-gala/heroshot+exp.png", cap: "SCI-Arc Gala 2025, a night in downtown Los Angeles.", wide: true },
      { src: "images/sciarc-gala/Gemini_Generated_Image_vrft60vrft60vrft.png", cap: "Projected drawings washing over the old stone." }
    ]
  }
};

/* ---- v3-only additions ---- */

/* display / prev-next order (matches index.html), independent of object key order */
const ORDER_V3 = ["voro", "threshld", "01", "02", "03", "04", "05", "hiyou", "sciarc-gala", "archive"];

/* right-column location text on case pages (§4 of the plan) */
const SITES_V3 = {
  "voro": "SCI-Arc, Los Angeles",
  "threshld": "Chinatown, Los Angeles",
  "01": "Matsu, Taiwan",
  "02": "Taipei, Taiwan",
  "03": "New Taipei City, Taiwan",
  "04": "Altadena, Los Angeles",
  "05": "Virtual space",
  "hiyou": "Los Angeles",
  "sciarc-gala": "Downtown Los Angeles",
  "archive": ""
};

/* category → arch / tech group (same split as script.js WORK_GROUPS) */
const CAT_V3 = {
  "voro": "visual", "threshld": "visual", "01": "landscape", "02": "housing",
  "03": "public", "04": "housing", "05": "visual", "hiyou": "visual",
  "sciarc-gala": "event", "archive": "archive"
};
const GROUPS_V3 = { arch: ["landscape", "housing", "public"], tech: ["platform", "visual", "event", "archive"] };

/* projects hosted on their own site — no case page here, the index links straight out */
const EXTERNAL_V3 = [
  { title: "NEXA", url: "https://jckian.github.io/NEXA/NEXA-site.html" }
];

/* case-page hero override (empty: the old hiyou entry pointed at
   images/hi-you/clips/HiYou.mp4, which was deleted from disk) */
const HERO_OVERRIDE_V3 = {};

/* is this src a video? */
const isVidV3 = (s) => /\.(mp4|webm|mov)(?=$|[?#])/i.test(s || "");

/* ---- "projects" label → floating index of every case; works on every page ---- */
function initProjectsIndex() {
  const label = document.getElementById("projLabel");
  if (!label) return;

  let idx = document.querySelector(".idx");
  if (!idx) {
    const workPage = location.pathname.includes("blue") ? "v3-work-blue.html" : "v3-work.html";
    idx = document.createElement("nav");
    idx.className = "idx";
    idx.setAttribute("aria-label", "All projects");
    idx.innerHTML = EXTERNAL_V3
      .map((p) => `<a href="${p.url}">${p.title}</a>`)
      .concat(ORDER_V3.map((id) => `<a href="${workPage}?p=${id}">${PROJECTS_V3[id].title}</a>`))
      .join("");
    document.body.appendChild(idx);
  }

  const close = () => { idx.classList.remove("is-open"); label.setAttribute("aria-expanded", "false"); };
  const toggle = () => {
    const open = idx.classList.toggle("is-open");
    label.setAttribute("aria-expanded", open ? "true" : "false");
  };

  label.addEventListener("click", toggle);
  label.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
  document.addEventListener("click", (e) => {
    if (idx.classList.contains("is-open") && !idx.contains(e.target) && e.target !== label) close();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* per-clip playback: skip a slow lead-in (start, in seconds) and/or speed it up (rate) */
const CLIP_CFG_V3 = {
  "images/VORO/VORO-video.mp4": { start: 4 },
  "images/orienteering/冷戰島嶼重生%20-%20馬祖戰地轉譯.mp4": { start: 18, rate: 1.5 },
  "images/sciarc-gala/SCIArcGalaFinalVideo.mp4": { start: 15 }
};

function applyClipConfig(v) {
  const cfg = CLIP_CFG_V3[v.getAttribute("src")];
  if (!cfg) return;
  const t = cfg.start || 0;

  const setup = () => {
    if (cfg.rate) v.playbackRate = cfg.rate;
    if (t && v.duration > t) v.currentTime = t;
  };
  if (t) {
    /* native loop would restart at 0, so drive the wrap manually */
    v.loop = false;
    v.addEventListener("ended", () => {
      setup();
      const p = v.play(); if (p && p.catch) p.catch(() => {});
    });
  }
  v.addEventListener("loadedmetadata", setup);
  if (v.readyState >= 1) setup();
}

/* ---- playlist: cycle one <video> through several clips instead of looping one ---- */
function cyclePlaylist(v, list, startIdx) {
  if (!v || !list || list.length < 2) return;
  let i = startIdx > 0 ? startIdx : 0;
  v.loop = false;                       /* looping one clip would never reach the next */
  v.addEventListener("ended", () => {
    i = (i + 1) % list.length;
    v.src = list[i];
    v.load();
    const p = v.play(); if (p && p.catch) p.catch(() => {});
  });
}

/* case-page hero */
function initCoverPlaylist(list, startIdx) {
  cyclePlaylist(heroVideo(), list, startIdx);
}

const heroVideo = () => document.querySelector(".case3__hero video, .case3__vtop-media video");

/* the index hands the clicked clip's playhead over in sessionStorage; the hero picks
   it up so the video keeps running instead of restarting. Returns the playlist index
   it resumed on (-1 if nothing carried over). */
const CARRY_KEY = "v3-carry";

function resumeHeroVideo(list) {
  const v = heroVideo();
  let data = null;
  try { data = JSON.parse(sessionStorage.getItem(CARRY_KEY) || "null"); } catch (e) { /* ignore */ }
  sessionStorage.removeItem(CARRY_KEY);
  if (!v || !data || !data.src) return -1;

  const idx = list ? list.indexOf(data.src) : -1;
  if (data.src !== v.getAttribute("src") && idx < 0) return -1;   /* a different clip: play it normally */
  if (idx > 0) v.src = data.src;                                  /* the feed had already advanced */

  /* the clone kept playing through the transition — don't rewind that either */
  const at = data.time + (Date.now() - data.ts) / 1000;
  const seek = () => { if (v.duration && at < v.duration - 0.2) { try { v.currentTime = at; } catch (e) { /* not seekable */ } } };
  v.addEventListener("loadedmetadata", seek, { once: true });
  if (v.readyState >= 1) seek();
  return idx;
}

/* home feed: <video data-playlist="05"> plays that project's coverPlaylist */
function initFeedPlaylists() {
  document.querySelectorAll("video[data-playlist]").forEach((v) => {
    const p = PROJECTS_V3[v.dataset.playlist];
    cyclePlaylist(v, p && p.coverPlaylist);
  });
}

/* ---- index → case transition: the clicked media grows into the hero band,
   then the page follows. The case page's hero picks it up with a settle-in. ---- */
function initCardTransition() {
  const feed = document.querySelector(".feed");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!feed || reduced || !Element.prototype.animate) return;

  /* coming back via the bfcache must not leave the page faded out */
  window.addEventListener("pageshow", () => {
    document.body.classList.remove("is-leaving");
    document.querySelectorAll(".zoomclone").forEach((c) => c.remove());
  });

  feed.querySelectorAll(".feed__item:not([data-external])").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (feed.classList.contains("is-filtered")) return;   /* filtered index has its own layout */
      const media = item.querySelector("img, video");
      if (!media) return;
      e.preventDefault();

      const from = media.getBoundingClientRect();
      const headH = parseFloat(getComputedStyle(document.body).paddingTop) || 90;
      const heroH = Math.min(window.innerHeight * 0.88, 820);   /* = .case3__hero height */

      /* a portrait clip on a tech case page lands as .case3__hero--portrait:
         full height, natural width, flush right — so fly it there, not full-bleed */
      const mw = media.videoWidth || media.naturalWidth || 0;
      const mh = media.videoHeight || media.naturalHeight || 0;
      const id = new URLSearchParams(item.search).get("p");
      const portrait = mh > mw && GROUPS_V3.tech.includes(CAT_V3[id]);

      const to = portrait
        ? {
            left: window.innerWidth - heroH * (mw / mh),
            top: headH,
            width: heroH * (mw / mh),
            height: heroH
          }
        : {
            left: 0,
            top: headH,
            width: window.innerWidth,
            /* a contain-fit hero is only as tall as the frame needs */
            height: (PROJECTS_V3[id] || {}).coverFit === "contain" && mw
              ? Math.min(heroH, window.innerWidth * (mh / mw))
              : heroH
          };

      if (media.tagName === "VIDEO") {
        try {
          sessionStorage.setItem(CARRY_KEY, JSON.stringify({
            src: media.getAttribute("src"), time: media.currentTime, ts: Date.now()
          }));
        } catch (err) { /* private mode: the hero just starts over */ }
      }

      const clone = media.cloneNode(true);
      clone.className = portrait ? "zoomclone zoomclone--portrait" : "zoomclone";
      /* FLIP: the clone is laid out at its DESTINATION, then transformed back onto
         the card. Only `transform` animates, so the whole flight stays on the
         compositor — animating left/top/width/height relayouts every frame. */
      clone.style.left = to.left + "px";
      clone.style.top = to.top + "px";
      clone.style.width = to.width + "px";
      clone.style.height = to.height + "px";
      const invert = `translate(${from.left - to.left}px, ${from.top - to.top}px)`
        + ` scale(${from.width / to.width}, ${from.height / to.height})`;
      clone.style.transform = invert;

      if (clone.tagName === "VIDEO") {
        clone.muted = true; clone.playsInline = true; clone.loop = true;
        const p = clone.play(); if (p && p.catch) p.catch(() => {});
        try { clone.currentTime = media.currentTime; } catch (err) { /* not seekable yet */ }
      }
      document.body.appendChild(clone);
      document.body.classList.add("is-leaving");

      const anim = clone.animate(
        [{ transform: invert }, { transform: "none" }],
        { duration: 460, easing: "cubic-bezier(.4,0,.15,1)", fill: "forwards" }
      );
      /* navigate a touch before the flight lands — the browser is already fetching,
         and waiting for the last few frames is what reads as a stall */
      anim.onfinish = () => { location.href = item.href; };
      setTimeout(() => { location.href = item.href; }, 400);
    });
  });
}

/* ---- the full-screen opener runs under the fixed header, so the header drops its
   white background (and turns white itself) until it scrolls clear of the footage.
   Filtering the index removes the full-screen treatment, so re-sync on that too. ---- */
let syncHeroHeader = () => {};

function initHeroHeader() {
  const head = document.querySelector(".v3head");
  const hero = document.querySelector('.feed__item[data-n="0"]');
  const feed = document.querySelector(".feed");
  if (!head || !hero) return;

  syncHeroHeader = () => {
    const over = !feed.classList.contains("is-filtered")
      && hero.getBoundingClientRect().bottom > head.offsetHeight;
    head.classList.toggle("is-over", over);
  };

  syncHeroHeader();
  addEventListener("scroll", syncHeroHeader, { passive: true });
  addEventListener("resize", syncHeroHeader);
}

/* ---- video performance: play only while in the viewport ---- */
function initVideoObserver() {
  const vids = document.querySelectorAll("video[data-lazyplay]");
  vids.forEach(applyClipConfig);
  if (!vids.length || !("IntersectionObserver" in window)) {
    vids.forEach((v) => { const p = v.play(); if (p && p.catch) p.catch(() => {}); });
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
      else v.pause();
    });
  }, { rootMargin: "150px 0px", threshold: 0.1 });
  vids.forEach((v) => io.observe(v));
}

/* ---- fade-in on scroll ---- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  els.forEach((el) => io.observe(el));
}
