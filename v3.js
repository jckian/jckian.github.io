/* ============================================================
   v3.js, shared data + behaviour for the "elim" site.
   PROJECTS_V3 is copied VERBATIM from work.html (facts source).
   Used by v3.html (home) and v3-work.html (case pages).
   ============================================================ */

/* ---- Yenhsing Cheng, selected works 2022-2025 (verbatim copy) ---- */
const PROJECTS_V3 = {
  "voro": {
    title: "VORO", cat: "Computational Design / Design Tech", year: "2026", tag: "Generative",
    period: "2026", status: "Independent research · functional prototype", orgLabel: "Studio", team: "Independent work",
    role: "Designed the system architecture and computational workflow, and developed the real-time 3D interface for testing program, massing, and structure together.",
    client: "SCI-Arc · independent study",
    services: "Generative design, computational massing, structural synthesis, real-time 3D",
    intro: "VORO is a browser-based design tool that develops program, massing, and structure together. It gives designers early feedback on spatial and structural decisions before the project moves into detailed modelling.",
    body: "VORO translates a design brief into a structured, buildable model. Given a precedent and a site constraint, the system generates a floor-by-floor program, evaluates it against massing typologies (cube, tower, slab, courtyard), and resolves a corresponding structural system: internal frame with curtain wall, structural skin, or structural foam. All outputs are visualized and iterated in a real-time 3D browser environment.\n\nThe system operates through two coordinated layers.\n\nCHAT interprets natural language inputs. A precedent and site condition are translated into a structured spatial logic based on analyzed case studies, producing a programmatic framework.\n\nINDEX simulates this framework within the site context, generating massing, assigning structural systems, and producing live performance metrics including GFA, FAR, program distribution, and floor-by-floor breakdowns. Each iteration outputs a coherent, BIM-ready model, closing the gap between concept and documentation in early design.\n\nUnlike conventional workflows where program, form, and structure are developed sequentially, VORO evaluates them simultaneously. The result is immediate feedback between spatial intent and buildable geometry, so proposals stay structurally and programmatically consistent from the first iteration.",
    cover: "images/VORO/VORO-video.mp4",
    coverHD: "images/VORO/VORO-video-1080.mp4",
    coverFit: "contain",          /* 16:9 UI capture, cropping it loses the panels */
    repo: "https://github.com/jckian/VORO",
    gallery: []
  },
  "throwshade": {
    title: "ThrowShade", cat: "Social App / Hackathon Build", year: "2026", tag: "Product",
    cover: "images/throwshade/ThrowShade-Landscape-69s.mp4",
    coverHD: "images/throwshade/ThrowShade-Landscape-69s-1080.mp4",
    coverFit: "contain",          /* 16:9 pitch film, cropping it loses the type */
    repo: "https://github.com/eesha-on-jupiter/ThrowShade",
    gallery: []
  },
  "01": {
    title: "Orienteering", cat: "Memory / Landscape", year: "2022", tag: "Landscape",
    period: "February to August 2022", status: "Academic project · design proposal", orgLabel: "Studio",
    team: "5-person team",
    advisor: "Shu-Chang Kung, Ling-Li Tseng",
    role: "Led programming and brand identity development, integrating spatial experience, landscape, visual identity, and structural and tectonic strategies.",
    client: "NYCU Graduate Institute of Architecture",
    services: "Landscape regeneration, branding",
    intro: "Xiju's military sites once formed a dispersed network of surveillance and defense. Rather than preserving these structures as isolated monuments, we reorganize them as five orienteering routes based on sight, sound, smell, taste, and touch. Stronghold No. 32 becomes the starting point and orientation base of this network. Movement between village, ridgeline, coastline, and military remains transforms the island from a collection of destinations into a continuous sensory journey to rediscover the senses they often overlook.",
    body: "Stronghold No. 32 is read not as a single building, but as a vertical system embedded within the coastal terrain. Surface bunkers occupy exposed ridges, semi-subterranean living quarters are concealed within the slope, and underground tunnels extend toward the shoreline.\n\nThe inherited vertical section is translated into three landscape operations. New planting extends the profile of the hillside, turning military camouflage into a process of ecological succession. Stacked stone defines terraces, thresholds, and retaining edges while maintaining the material character of the island. Existing drainage routes are redirected through the underground system to manage moisture and create new bathing spaces.\n\nThe ground-level landscape is organized as a sequence rather than a collection of isolated rooms. From the arrival trail, visitors move through planted terraces and reused bunkers toward viewing platforms and coastal bathing spaces. Each zone is defined by a change in slope, material, visibility, or proximity to water, allowing everyday circulation and visitor exploration to overlap without producing a single prescribed route.\n\nThe project uses the site's changing elevation to transform movement into a bodily experience. A planted roof extends the terrain across the former bunker, while a stepped interior connects the arrival level with the tunnel below. Along the passage, metal frames remain aligned with a fixed sea-level datum as the floor rises and falls. The changing distance between the body, ground, and datum makes ascent and descent perceptible, turning the former military structure into a continuous public journey.\n\nAdvisors: Shu-Chang Kung and Ling-Li Tseng. Five-person team, February to August 2022.",
    cover: "images/orienteering/work-01-hero.webp",
    gallery: [
      /* the film moved out of the hero band: at 6:40 it is something you sit and watch,
         so it gets a scrub bar here instead of looping silently behind the title */
      { src: "images/orienteering/冷戰島嶼重生%20-%20馬祖戰地轉譯.mp4", cap: "Project film. Five sensory routes across Xiju, from the village to Stronghold No. 32.", wide: true, controls: true },
      { src: "images/orienteering/rendering/1%20(1).webp", cap: "Stronghold No. 32 from the air. Planted terraces extend the hillside profile across the former bunker and down to the shoreline.", wide: true },
      { src: "images/orienteering/2026/sheet-five-senses.webp", cap: "From a defense network to five sensory routes. Island-scale reprogramming with Stronghold No. 32 as the orientation base.", wide: true },
      { src: "images/orienteering/2026/sheet-three-terrains.webp", cap: "Reading Stronghold No. 32 as three interlocking terrains. Planting extends the surface, stone stabilizes the embedded layer, and water activates the tunnels.", wide: true },
      { src: "images/orienteering/2026/landscape-plan.webp", cap: "A continuous landscape from arrival to shore. Ground floor landscape plan.", wide: true },
      { src: "images/orienteering/2026/section-descent.webp", cap: "Descending through the former military terrain. A fixed sea-level datum holds while the tunnel floor rises and falls.", wide: true },
      { src: "images/orienteering/2026/concealed-terrain.webp", cap: "Concealed terrain. Mist over the reconstructed ground where the bunker once stood.", wide: true },
      { src: "images/orienteering/2026/re-entering.webp", cap: "Re-entering the landscape. The stronghold merges back into the earth as the new route opens.", wide: true }
    ]
  },
  "02": {
    title: "1 House for All", cat: "Housing / Community", year: "2022", tag: "Housing",
    period: "August 2021 to April 2022", status: "International competition · 1:1 demonstration unit", orgLabel: "Studio",
    team: "30-person team",
    award: "1st Prize in Architecture, Solar Decathlon Europe 21/22",
    role: "Led BIM coordination and developed the modular facade, party-wall systems, and woodwork for the full-scale ADU prototype.",
    client: "NYCU / TDIS · international competition",
    services: "Sustainable housing, mass timber",
    intro: "House for All is a modular mid-way housing system designed for the temporary gaps created by Taipei's prolonged urban renewal process. The proposal combines reversible mass-timber construction, shared neighborhood services, and low-energy systems in a prototype that can be assembled, inhabited, disassembled, and reused.",
    body: "Taipei's urban-renewal process often takes more than a decade, leaving cleared properties vacant and residents in prolonged uncertainty. House for All treats these temporary gaps as sites for stable mid-way housing rather than as periods of inactivity.\n\nModular units provide stable accommodation while contributing shared energy, mobility, and community services to the surrounding neighborhood. As redevelopment advances, the buildings can be disassembled, relocated, and adapted to another site, allowing housing to support communities through change rather than waiting for stability.\n\nThe building uses a reversible kit of timber, CLT, and GLT components designed for rapid assembly, disassembly, and reuse. Long-life foundations and structural frames are separated from shorter-life partitions, insulated walls, and facades, so each layer can be repaired, replaced, or relocated independently. The section connects shared neighborhood spaces at ground level, homes above, and a rooftop day care center, bringing social interaction, everyday living, and care together across generations.\n\nThe environmental strategy begins by reducing loads through an airtight, insulated envelope, controlled glazing, and heat-recovery ventilation. Roof-mounted solar thermal and photovoltaic systems then supply hot water and electricity, while an energy-management system shifts battery charging away from peak demand. The grid remains as a backup, so the prototype can operate as a resilient neighborhood-scale energy system.\n\nThe work ended in a completed 1:1 ADU prototype built for Solar Decathlon Europe 2021/22. 30-person team, August 2021 to April 2022.",
    cover: "images/1-house-for-all/work-02.webp",
    gallery: [
      { src: "images/1-house-for-all/2026/sheet-network.webp", cap: "A distributed housing network built to move. Temporary sites, community living in section, and the lifespan of each building layer.", wide: true },
      { src: "images/1-house-for-all/2026/sheet-energy.webp", cap: "Reducing demand before producing energy. Water and electricity, active control, passive control, and the disassembly logic of each material.", wide: true },
      { src: "images/1-house-for-all/2026/built-full-scale.webp", cap: "Built at full scale. The completed 1:1 ADU prototype for Solar Decathlon Europe 2021/22.", wide: true }
    ]
  },
  "03": {
    title: "Banqiao Station Entrance", cat: "Public / Practice", year: "2025", tag: "Public",
    period: "October 2024 to August 2025", status: "Professional project · schematic design to construction detailing", orgLabel: "Practice",
    team: "3-person team",
    architect: "Shi-Shuin Chen",
    role: "Developed schematic design and construction detailing, contributing to code compliance, project coordination with an international outsourced team, and communication with consultants.",
    client: "Square-Arch Architect · MRT Banqiao Station",
    services: "Transit infrastructure, detailing",
    intro: "The entrance is conceived as a continuation of the adjacent landscape rather than an isolated transit object. Branching canopy columns reinterpret tree structures, while the elevated station volume creates a clear, double-height public ground beneath. Pedestrian routes remain visible across the site, and the warm-colored circulation core acts as an orientation device connecting the sidewalk, concourse, and upper station level.",
    body: "The adjacent green belt continues into a branching structural canopy, linking landscape, circulation, and the station frontage. Lifting the enclosed station volume preserves cross-site movement and creates a visible, weather-protected public threshold beneath.\n\nThe entrance envelope is developed as a layered environmental system. A two-metre cantilever projects beyond the glazed edge to reduce exposure to wind-driven rain, while vertical metal fins and horizontal louvers extend the weather barrier without enclosing the public ground below. These repeated members provide shade, drainage, and protection while translating the branching landscape motif into a buildable architectural system.\n\nThe work ran from schematic design through construction detailing on a live project, with code compliance checks, coordination with an international outsourced documentation team, and direct communication with consultants. 885 m² · NT$29,920,000. Three-person team, October 2024 to August 2025.\n\nPhotograph and intellectual property rights belong to the original architecture firm.",
    cover: "images/banqiao-station/work-03.webp?v=20260921",
    gallery: [
      { src: "images/banqiao-station/work-03-02.webp?v=20260921", cap: "The public threshold beneath the lifted station volume, with branching columns carrying the canopy.", wide: true },
      { src: "images/banqiao-station/2026/sheet-green-belt.webp", cap: "Extending the green belt into the station. Ground floor plan, entrance elevation, and the Revit BIM escalator section.", wide: true },
      { src: "images/banqiao-station/2026/sheet-envelope.webp", cap: "Layered envelope for rain and wind. The extended weather canopy, maximum louver extension, and rain-screen louvers.", wide: true }
    ]
  },
  "04": {
    title: "Earthen", cat: "Climate / Housing", year: "2025", tag: "Climate",
    period: "September to December 2025", status: "Academic research · half-scale prototype", orgLabel: "Studio",
    team: "7-person team",
    advisor: "Herwig Baumgartner",
    role: "Led structural development of the envelope system, including robotic ceramic printing, glaze studies, assembly detailing, rammed-earth testing, and fabrication of the half-scale prototype.",
    client: "SCI-Arc",
    services: "Post-disaster housing, ceramic fabrication",
    intro: "Developed in response to post-wildfire displacement in Southern California, Earthen proposes a transitional ADU system that combines rammed earth with robotically printed ceramic components. Rather than functioning as a static barrier, the envelope operates as a living water-distribution system: printed ridges capture rainfall, integrated channels direct its movement, planting pockets retain moisture, and concealed irrigation lines return excess water to the ground.",
    body: "The ceramic units establish the geometry of the wall and remain in place as permanent formwork for compacted earth. Steel reinforcement and irrigation lines are integrated within the assembly, bringing environmental performance, fabrication, and structural logic into a single composite system. Specialized ceramic units wrap around windows and planting openings, maintaining the continuity of both the wall structure and its hydrological network.\n\nEach ceramic unit is robotically printed, glazed, and fired before being stacked into vertical courses. Reinforcing bars align the modules and tie the ceramic shell to the foundation and window frames. Rammed earth is compacted within the printed formwork in successive lifts, producing a composite assembly that accommodates openings, irrigation lines, and localized planting pockets.\n\nThe site is a lot on N Fair Oaks Avenue in Altadena left in ruin after the Eaton Fire, where housing is paired with a community bathhouse to form a small piece of recovery infrastructure for daily life. The envelope was tested as a half-scale composite wall prototype.\n\nAdvisor: Herwig Baumgartner. Seven-person team, September to December 2025.",
    cover: "images/earthen/window%20upper.webp",
    gallery: [
      { src: "images/earthen/DSC03170.webp", cap: "Glazed ceramic units stacked into a vertical course. Layered glazes pool along the printed ridges.", wide: true },
      { src: "images/earthen/2026/sheet-water-wall.webp", cap: "A wall that collects, holds, and releases water. Collect, channel, retain, release, with the hybrid assembly and the full-scale wall module.", wide: true },
      { src: "images/earthen/2026/sheet-fabrication.webp", cap: "Fabrication, compaction, and assembly. Robotic ceramic printing, glazing and firing, then stacking and compaction.", wide: true },
      { src: "images/earthen/2026/full-wall.webp", cap: "The finished half-scale wall." }
    ]
  },
  "05": {
    title: "DreamStudio", cat: "Generative AI / Game Design", year: "2022", tag: "Virtual",
    period: "Fall 2022 · 10 days", status: "Design competition · playable prototype", orgLabel: "Studio",
    team: "5-person team",
    role: "Developed the spatial narrative through AI image generation, Rhino modelling, Unreal Engine world-building, diagrams, and film editing.",
    client: "NYCU competition",
    services: "Generative AI, cognitive mapping, game design",
    intro: "DreamStudio uses AI-generated images as source material for a playable environment built in Rhino and Unreal Engine. The project translates participants' spatial memories into a shared, navigable world.",
    body: "DreamStudio is a design competition at NYCU that explores how an AI image generator can drive program definition and design concepts. It builds on Edward Tolman's 1948 theory of cognitive maps, the first-person mental representations of space formed from both objective spatial features and subjective experience.\n\nFrom that starting point the team developed a method that turns collective memory into virtual space. Conceptual, emotional and contextual prompts are fed through neural networks, moving from DreamStudio to Rhino to Unreal Engine, to deconstruct and recombine existing spaces into a playable world.\n\nThe resulting space is navigated with a keyboard and mouse, and its discontinuous scales and atmospheres produce an experience distinct from physical space.\n\nFive-person team, 10 days, Fall 2022.",
    cover: "images/dreamstudio/work-05.webp",
    /* hero cycles through the four walkthrough clips instead of a still */
    coverPlaylist: [
      "images/dreamstudio/clips/vide_ltest1_1.mp4?v=20260701",
      "images/dreamstudio/clips/vide_ltest1-2.mp4",
      "images/dreamstudio/clips/vide_ltest1-3.mp4",
      "images/dreamstudio/clips/vide_ltest1-4.mp4"
    ],
    coverPlaylistHD: [
      "images/dreamstudio/clips/vide_ltest1_1-1080.mp4",
      "images/dreamstudio/clips/vide_ltest1-2-1080.mp4",
      "images/dreamstudio/clips/vide_ltest1-3-1080.mp4",
      "images/dreamstudio/clips/vide_ltest1-4-1080.mp4"
    ],
    gallery: [
      { src: "images/dreamstudio/Portfolio_260131_selected21.webp", wide: true },
      { src: "images/dreamstudio/diagram.webp", wide: true },
      { src: "images/dreamstudio/diagram-2.webp", wide: true },
      { src: "images/dreamstudio/index/1.webp" },
      { src: "images/dreamstudio/index/work-05-02.webp" },
      { src: "images/dreamstudio/work-05-03.webp" },
      { src: "images/dreamstudio/Gemini_Generated_Image_n17i6wn17i6wn17i%20(1).webp" },
      { src: "images/dreamstudio/Gemini_Generated_Image_km54j7km54j7km54.webp" },
      { src: "images/dreamstudio/index/Gemini_Generated_Image_s3x6ous3x6ous3x6.webp" },
      { src: "images/dreamstudio/index/Gemini_Generated_Image_bitvs2bitvs2bitv.webp" },
      { src: "images/dreamstudio/Gemini_Generated_Image_6qj0056qj0056qj0.webp" }
    ]
  },
  "threshld": {
    title: "THRESHLD", cat: "Generative / Product / Flagship Store", year: "2026", tag: "Generative",
    period: "February to April 2026", status: "Academic project · working prototypes", orgLabel: "Studio", team: "Independent work",
    advisor: "M. Casey Rehm, Garrett Santo",
    tools: "Blender MCP, Rhino MCP, Grasshopper, Python, Houdini, ComfyUI (Flux 2 and Hunyuan3D), hydro dip",
    role: "Developed the workflow from site capture and point-cloud processing to AI-generated massing, architectural rationalization, product prototyping, visualization, and fabrication studies.",
    client: "SCI-Arc",
    services: "Generative AI workflow, wearable design, soft robotics, ETFE flagship store",
    intro: "This wearable collar responds when neck flexion exceeds a predefined range-of-motion threshold. Rather than issuing a single alert, it provides three escalating levels of physical feedback. Soft internal fingers first create a tactile reminder; if the posture is maintained, internal chambers inflate to reduce movement; at full inflation, the collar stiffens and guides the neck back toward a neutral position. The system transforms posture correction from passive notification into immediate bodily feedback.",
    body: "The collar works in three stages. When neck flexion first exceeds the range-of-motion threshold, soft internal fingers contact the neck to provide a subtle physical reminder. If the incorrect posture is maintained, the internal air chambers gradually inflate, reducing the available range of movement. At full inflation the collar becomes structurally rigid, limiting further flexion and guiding the neck back toward a neutral position. The longer the incorrect posture is held, the stronger the physical feedback becomes.\n\nBuilding on that posture-to-pressure mechanism, the flagship store scales pneumatic response from the body to the building envelope. The design begins with a 3D scan of the existing site. The resulting point cloud is cleaned, registered, and processed into a spatial reference model that preserves the surrounding building fabric, setbacks, and street conditions. Within this measured context, customer posture and movement are treated as directional inputs for a field of ETFE cushions.\n\nAI-assisted studies explore the operations of stacking, inflation, rotation, and overlap, while selected forms are rationalized through a regular timber frame. Translucent enclosures form display rooms and suspended galleries, and an open ground-floor threshold connects the retail interior with the street. Changes in cushion pressure alter the facade's depth, translucency, and silhouette, making interior activity perceptible from the street.\n\nAdvisors: M. Casey Rehm and Garrett Santo. Built with Blender MCP, Rhino MCP, Grasshopper, Python, Houdini, ComfyUI (Flux 2 and Hunyuan3D), and hydro dipping. February to April 2026.",
    cover: "images/THRESHLD/THRESHLD.mp4",
    coverHD: "images/THRESHLD/THRESHLD-1080.mp4",
    gallery: [
      { src: "images/THRESHLD/16_9_2.mp4", cap: "The wearable in motion, inflating as posture slips.",
        left: [
          { src: "images/THRESHLD/work-02-03.webp", cap: "Flagship store interior. Timber frame, suspended galleries and the scanning booth beyond." }
        ] },
      { src: "images/THRESHLD/2026/sheet-collar.webp", cap: "Inflatable cervical posture-feedback collar. Tactile cue, progressive inflation, then stabilizing constraint.", wide: true },
      { src: "images/THRESHLD/2026/sheet-store.webp", cap: "Site capture, AI generation, and architectural rationalization, with the ground-floor organization.", wide: true },
      { src: "images/THRESHLD/timelapse_noVoice.mp4", cap: "Fabrication timelapse." },
      { src: "images/THRESHLD/mvLYsvfeKxzzeysLGpoI3_844fd4faae1c40de9c0b257b125353bb.mp4", cap: "Three-step intervention: remind, warn, then rigid rest." }
    ]
  },
  "archive": {
    title: "Archive", cat: "Early Experiments", year: "Various", tag: "Archive",
    period: "2019 to 2021", status: "Academic studies · full-scale prototypes", orgLabel: "Type", team: "Individual + team work",
    role: "Developed interaction logic, physical prototypes, and structural tests across responsive installations and full-scale pavilion studies.", client: "Independent + academic studies", services: "",
    intro: "Two early studies in responsive structures and full-scale prototyping. Kaleidoscope is an Arduino-controlled kinetic installation that unfolds when a viewer approaches. The Gongguan transit pavilion was developed through a full-scale mock-up and structural load testing.",
    body: "",
    layout: "archive",
    cover: "images/archive/kaleidoscope.mp4",
    coverHD: "images/archive/kaleidoscope-1080.mp4",
    video: "images/archive/kaleidoscope.mp4",
    longImg: "images/archive/archive-01.webp",
    mockups: ["images/archive/1_1%20MOCKUP.webp", "images/archive/1_1%20MOCKUP-2.webp"],
    introA: "Kaleidoscope is an interactive kinetic installation inspired by Froebel Gifts and auxetic chequered tiling. The structure responds to the viewer's proximity through an Arduino-controlled mechanism, unfolding into a blooming form as someone approaches and returning to its resting state as they move away. By combining geometric transformation with physical interaction, the project reinterprets a simple construction toy as a responsive architectural object. (2021)",
    introB: "A transit pavilion designed for one of Taipei's busiest urban gateways and validated through full-scale prototyping. Located at Gongguan Station, the primary entrance to National Taiwan University and the surrounding commercial district, the project reimagines the MRT station exit as a civic pavilion. After completing the design, we fabricated a 1:1 mock-up and conducted structural load testing to verify its constructability and load-bearing performance, bridging digital design with real-world fabrication. (2019)",
    gallery: []
  },
  "hiyou": {
    title: "HiYou", cat: "AI / Interactive Installation", year: "2026", tag: "AI",
    period: "2026", status: "Academic installation · live tested", orgLabel: "Studio",
    team: "2-person team",
    role: "Designed the interaction system and built the Unity front end, Python back end, and computer-vision pipeline for real-time matching and portrait generation.",
    client: "SCI-Arc · AT Studio 1",
    services: "Real-time computer vision, speech recognition, generative portrait, interactive installation",
    intro: "HiYou is a live installation designed to help strangers meet. A Unity front end and Python back end analyse facial and vocal cues from a short interaction, match participants, and generate a composite portrait that helps them find each other in the room. The system runs locally and was tested with participants at L-Acoustics.",
    body: "HiYou is a real-time installation that turns passersby into participants. Using a live camera feed, the system detects people, tracks their attention, and begins the experience after a three-second gaze.\n\nParticipants can answer a short series of spoken questions, which are transcribed using OpenAI Whisper. The system then analyzes facial features with MediaPipe Face Mesh (468 landmarks), together with behavioral metrics including head movement, eye activity, smile intensity, rhythm, and pitch variation.\n\nHiYou compares these visual and behavioral characteristics with other participants collected during the event to find the closest match. It generates a composite portrait blending the two faces and guides participants to meet each other in the physical space.\n\nBuilt with a Unity front end and a Python back end, the installation uses HTTP and OSC/UDP for real-time communication. The entire pipeline runs locally with MediaPipe, Whisper, and ArcFace, so the installation stays fast and works offline, without cloud services.",
    cover: "images/hi-you/HiYou.mp4",
    coverPortrait: true,
    repo: "https://github.com/jckian/HiYou",
    gallery: [
      { src: "images/hi-you/L-Acoustics%20VID.mp4", cap: "Live installation demo at L-Acoustics with real participants.",
        left: [
          { src: "images/hi-you/workflow_final.webp", cap: "System workflow: a two-peer architecture with a Unity front end and a Python back end." }
        ] }
    ]
  },
  "sciarc-gala": {
    title: "SCI-Arc Gala", cat: "Film / Installation", year: "2025", tag: "Event",
    period: "Fall 2025", status: "Commissioned installation · projected at full scale", orgLabel: "Client",
    team: "3-person team",
    role: "Developed image sequences, motion transitions, and projection-ready outputs with M. Casey Rehm for the building-scale installation.",
    client: "SCI-Arc · M. Casey Rehm", services: "",
    intro: "The 2025 SCI-Arc Gala projected a continuous film across the Los Angeles Central Library façade. Image sequences, motion transitions, and projection output were developed with M. Casey Rehm, editing architectural drawings and generated imagery into one building-scale piece.",
    body: "",
    cover: "images/sciarc-gala/SCIArcGalaFinalVideo.mp4",
    coverPortrait: true,
    gallery: [
      /* both are 9:16, set side by side at equal width */
      { src: "images/sciarc-gala/archive-gala-opening.mp4", cap: "Annual gala opening film, projected on the LA Central Library façade.",
        even: true,
        left: [
          { src: "images/sciarc-gala/Gemini_Generated_Image_8fvg1i8fvg1i8fvg.webp", cap: "Projection mapping turns the historic tower into a canvas." }
        ] },
      { src: "images/sciarc-gala/heroshot+exp.webp", cap: "SCI-Arc Gala 2025, a night in downtown Los Angeles.", wide: true },
      { src: "images/sciarc-gala/Gemini_Generated_Image_vrft60vrft60vrft.webp", cap: "Projected drawings washing over the old stone." }
    ]
  }
};

/* ---- v3-only additions ---- */

/* display / prev-next order (matches index.html), independent of object key order */
const ORDER_V3 = ["03", "04", "voro", "02", "hiyou", "threshld", "01", "sciarc-gala", "05", "throwshade", "archive"];

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
  "throwshade": "",
  "archive": ""
};

/* category → arch / tech group (same split as script.js WORK_GROUPS) */
const CAT_V3 = {
  "voro": "visual", "threshld": "visual", "01": "landscape", "02": "housing",
  "03": "public", "04": "housing", "05": "visual", "hiyou": "visual",
  "sciarc-gala": "event", "throwshade": "platform", "archive": "archive"
};
const GROUPS_V3 = { arch: ["landscape", "housing", "public"], tech: ["platform", "visual", "event", "archive"] };

/* projects hosted on their own site, no case page here, the index links straight out */
const EXTERNAL_V3 = [
  { title: "NEXA", url: "https://jckian.github.io/NEXA/NEXA-site.html" }
];

/* case-page hero override (empty: the old hiyou entry pointed at
   images/hi-you/clips/HiYou.mp4, which was deleted from disk) */
const HERO_OVERRIDE_V3 = {};

/* is this src a video? */
const isVidV3 = (s) => /\.(mp4|webm|mov)(?=$|[?#])/i.test(s || "");
/* every clip ships a small first-frame JPEG under images/posters/, so a slot shows
   its shot straight away instead of sitting empty while the video downloads.
   Same relative path, .jpg in place of the video extension. */
const posterForV3 = (s) => "images/posters/" + String(s || "").split(/[?#]/)[0]
  .replace(/^images\//, "").replace(/-1080(?=\.[^.\/]+$)/, "").replace(/\.[^.\/]+$/, ".jpg") + "?v=20260917";

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
  "images/NEXA/nexa-wide-16x9-v4.mp4": { start: 2, rate: 1.5 },
  "images/NEXA/NEXA-30s.mp4": { start: 0 },
  "images/VORO/VORO-video.mp4": { start: 4 },
  "images/orienteering/冷戰島嶼重生%20-%20馬祖戰地轉譯.mp4": { start: 18, rate: 1.5 },
  "images/orienteering/冷戰島嶼重生%20-%20馬祖戰地轉譯-1080.mp4": { start: 0, rate: 1.5 },
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

const heroVideo = () => document.querySelector(".case3__hero video, .case3__vhero video");

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

  /* the clone kept playing through the transition, don't rewind that either */
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
         full height, natural width, flush right, so fly it there, not full-bleed */
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
         compositor, animating left/top/width/height relayouts every frame. */
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
      /* navigate a touch before the flight lands, the browser is already fetching,
         and waiting for the last few frames is what reads as a stall */
      anim.onfinish = () => { location.href = item.href; };
      setTimeout(() => { location.href = item.href; }, 400);
    });
  });
}

/* ---- retain the overlay-header behaviour only if a hero is deliberately moved
   under the headliner; the current index hero begins immediately below it. ---- */
let syncHeroHeader = () => {};

function initHeroHeader() {
  const head = document.querySelector(".v3head");
  const hero = document.querySelector('.feed__item[data-n="0"]');
  const feed = document.querySelector(".feed");
  if (!head || !hero) return;

  syncHeroHeader = () => {
    const heroRect = hero.getBoundingClientRect();
    const over = !feed.classList.contains("is-filtered")
      && heroRect.top < head.offsetHeight / 2
      && heroRect.bottom > head.offsetHeight;
    head.classList.toggle("is-over", over);
  };

  syncHeroHeader();
  addEventListener("scroll", syncHeroHeader, { passive: true });
  addEventListener("resize", syncHeroHeader);
}

/* ---- presentation-style index: one wheel gesture advances one project and makes
   that project the single crisp focal point. Filters, touch layouts and the page
   beyond the final project keep native scrolling. ---- */
function initIndexWheelSlides() {
  const feed = document.querySelector(".feed");
  const head = document.querySelector(".v3head");
  if (!feed || !head) return;

  let locked = false;
  let lockStarted = 0;
  let lastWheel = 0;
  let unlockTimer = 0;
  let syncFrame = 0;

  const targets = () => {
    return [...feed.querySelectorAll(".feed__item")]
      .filter((item) => getComputedStyle(item).display !== "none")
      .map((item) => ({
        item,
        top: item.dataset.n === "0" ? 0 : Math.max(0, Math.round(
          item.getBoundingClientRect().top + scrollY - head.offsetHeight - 24
        ))
      }))
      .sort((a, b) => a.top - b.top);
  };

  const setMode = () => {
    const enabled = innerWidth > 820 && !matchMedia("(pointer: coarse)").matches;
    feed.classList.toggle("is-slide-mode", enabled);
    if (!enabled) feed.querySelectorAll(".is-slide-active").forEach((item) => item.classList.remove("is-slide-active"));
  };

  const setActive = (item) => {
    if (!feed.classList.contains("is-slide-mode") || !item) return;
    const group = item.dataset.slideGroup;
    feed.querySelectorAll(".feed__item").forEach((entry) => {
      const sameGroup = Boolean(group && entry.dataset.slideGroup === group);
      entry.classList.toggle("is-slide-active", entry === item || sameGroup);
    });
    const activeCategory = Object.entries(GROUPS_V3)
      .find(([, categories]) => categories.includes(item.dataset.cat))?.[0];
    head.querySelectorAll('.v3head__nav a[data-group]').forEach((link) => {
      link.classList.toggle('is-active', link.dataset.group === activeCategory);
    });
  };

  const syncActive = () => {
    if (locked || !feed.classList.contains("is-slide-mode") || feed.classList.contains("is-filtered")) return;
    const stops = targets();
    const nearest = stops.reduce((best, stop) => Math.abs(stop.top - scrollY) < Math.abs(best.top - scrollY) ? stop : best, stops[0]);
    if (nearest) setActive(nearest.item);
  };

  const scheduleUnlock = () => {
    clearTimeout(unlockTimer);
    unlockTimer = setTimeout(() => {
      const now = Date.now();
      if (now - lastWheel >= 160 && now - lockStarted >= 520) {
        locked = false;
        syncActive();
      }
      else scheduleUnlock();
    }, 170);
  };

  addEventListener("wheel", (event) => {
    if (innerWidth <= 820 || matchMedia("(pointer: coarse)").matches
      || feed.classList.contains("is-filtered") || event.ctrlKey
      || Math.abs(event.deltaY) < 2 || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

    if (locked) {
      event.preventDefault();
      lastWheel = Date.now();
      scheduleUnlock();
      return;
    }

    const stops = targets();
    const tolerance = 28;
    const destination = event.deltaY > 0
      ? stops.find((stop) => stop.top > scrollY + tolerance)
      : [...stops].reverse().find((stop) => stop.top < scrollY - tolerance);
    if (destination === undefined) return;

    event.preventDefault();
    locked = true;
    lockStarted = lastWheel = Date.now();
    scheduleUnlock();
    setActive(destination.item);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    scrollTo({ top: destination.top, behavior: reduced ? "auto" : "smooth" });
  }, { passive: false });

  addEventListener("scroll", () => {
    if (syncFrame) return;
    syncFrame = requestAnimationFrame(() => {
      syncFrame = 0;
      syncActive();
    });
  }, { passive: true });
  addEventListener("resize", () => {
    setMode();
    syncActive();
  });

  setMode();
  syncActive();
}

/* ---- video performance: play only while in the viewport ---- */
function playInlineVideo(v) {
  if (!v) return;
  /* iOS Safari checks the DOM properties as well as the HTML attributes. */
  v.muted = true;
  v.defaultMuted = true;
  v.playsInline = true;
  v.setAttribute("muted", "");
  v.setAttribute("playsinline", "");
  v.setAttribute("webkit-playsinline", "");

  const attempt = () => {
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  };
  attempt();
  /* Safari can reject the first attempt while a lazy source is still loading. */
  if (v.readyState < 3) v.addEventListener("canplay", attempt, { once: true });
}

function videoIsOnScreen(v) {
  if (!v || v.offsetParent === null) return false;
  const r = v.getBoundingClientRect();
  return r.bottom > -150 && r.top < innerHeight + 150 && r.right > 0 && r.left < innerWidth;
}

function refreshIndexVideos() {
  document.querySelectorAll("video[data-lazyplay]").forEach((v) => {
    if (document.visibilityState !== "hidden" && videoIsOnScreen(v)) playInlineVideo(v);
    else v.pause();
  });
}

function initVideoObserver() {
  const vids = document.querySelectorAll("video[data-lazyplay]");
  const responsiveVids = [...vids].filter((v) => v.dataset.portraitSrc && v.dataset.landscapeSrc);
  const portraitQuery = matchMedia("(orientation: portrait)");
  const syncResponsiveSources = () => {
    responsiveVids.forEach((v) => {
      const nextSrc = portraitQuery.matches ? v.dataset.portraitSrc : v.dataset.landscapeSrc;
      if (!nextSrc || v.getAttribute("src") === nextSrc) return;
      const resume = videoIsOnScreen(v);
      v.pause();
      v.setAttribute("src", nextSrc);
      v.load();
      if (resume) playInlineVideo(v);
    });
  };
  syncResponsiveSources();
  if (portraitQuery.addEventListener) portraitQuery.addEventListener("change", syncResponsiveSources);
  else if (portraitQuery.addListener) portraitQuery.addListener(syncResponsiveSources);
  vids.forEach(applyClipConfig);
  if (!vids.length || !("IntersectionObserver" in window)) {
    refreshIndexVideos();
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting) playInlineVideo(v);
      else v.pause();
    });
  }, { rootMargin: "150px 0px", threshold: 0.1 });
  vids.forEach((v) => io.observe(v));

  addEventListener("pageshow", refreshIndexVideos);
  addEventListener("orientationchange", () => requestAnimationFrame(refreshIndexVideos));
  document.addEventListener("visibilitychange", refreshIndexVideos);
  /* Low Power Mode may wait for a gesture before allowing inline playback. */
  addEventListener("pointerdown", refreshIndexVideos, { passive: true, once: true });
  addEventListener("touchstart", refreshIndexVideos, { passive: true, once: true });
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
