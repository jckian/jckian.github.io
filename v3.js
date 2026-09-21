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
    body: "VORO translates a design brief into a structured, buildable model. Given a precedent and a site constraint, the system generates a floor-by-floor program, evaluates it against massing typologies (cube, tower, slab, courtyard), and resolves a corresponding structural system: internal frame with curtain wall, structural skin, or structural foam. All outputs are visualized and iterated in a real-time 3D browser environment.\n\nThe system operates through two coordinated layers.\n\nCHAT interprets natural language inputs. A precedent and site condition are translated into a structured spatial logic based on analyzed case studies, producing a programmatic framework.\n\nINDEX simulates this framework within the site context, generating massing, assigning structural systems, and producing live performance metrics including GFA, FAR, program distribution, and floor-by-floor breakdowns. Each iteration outputs a coherent, BIM-ready model, eliminating the disconnect between concept and documentation in early design stages.\n\nUnlike conventional workflows where program, form, and structure are developed sequentially, VORO evaluates them simultaneously. This enables immediate feedback between spatial intent and buildable geometry, producing design proposals that are structurally and programmatically consistent from the first iteration.",
    cover: "images/VORO/VORO-video.mp4",
    coverHD: "images/VORO/VORO-video-1080.mp4",
    coverFit: "contain",          /* 16:9 UI capture, cropping it loses the panels */
    repo: "https://github.com/jckian/VORO",
    gallery: []
  },
  "01": {
    title: "Orienteering", cat: "Memory / Landscape", year: "2022", tag: "Landscape",
    period: "Summer 2022 · 5 weeks", status: "Academic project · design proposal", orgLabel: "Studio",
    team: "5-person team",
    role: "Led project reprogramming and identity development, integrating spatial experience, landscape strategy, visual communication, and tectonic design within a five-person team.",
    client: "NYCU GIA Studio",
    services: "Landscape regeneration, branding",
    intro: "Xiju's military sites once formed a dispersed network of surveillance and defense. Rather than preserving these structures as isolated monuments, the project reorganizes them as five orienteering routes based on sight, sound, smell, taste, and touch. Stronghold No. 32 becomes the starting point of that network, so movement between village, ridgeline, coastline, and military remains turns the island from a collection of destinations into a continuous sensory journey. Across the site, planting gradually overtakes former defensive surfaces while paths frame changing conditions of exposure, enclosure, wind, and mist. The project does not reconstruct a singular historical image; it lets the military terrain recede into an everyday landscape experienced through movement and weather.",
    body: "Xiju sits at Taiwan's maritime edge, roughly an hour by boat from Nangan and Beigan. That distance has shaped its ecology and its culture, and the island reads as an island inside an island, with spatial and social conditions unlike the rest of the Matsu archipelago.\n\nFormer Military Outpost No. 32 holds the westernmost tip, on hilly ground where sandstone cliffs drop into the sea. The landscape here was made by military necessity, laid down by soldiers stationed on the island 40 to 50 years ago, so vegetation and ecology still change with elevation and with the defensive job each level once had.\n\nThe project treats that inheritance as structure rather than ruin. The outpost already carries a sectional logic of protection, enclosure and layered material. That logic is kept and given new work to do: drainage, insulation and half-buried rooms set into the terrain. Military construction becomes landscape infrastructure.\n\nThree layers organise the proposal. Plant at +240M, where new planting reinterprets Matsu's military landscape and covers the rear hillside with newly formed terrain. Stone at ±0M, where stacked stone separates the programmes so the rooms feel cut out of the mountain. Water at −400M, where water is drained into the tunnel system to form public and private bathing spaces, which also settles the damp that has always sat inside the rock.\n\nAbove all of it, 'Orienteering' works as a brand for the island. Five routes, one each for sight, sound, smell, taste and touch, take travellers through Matsu's battlefield culture on their own legs. The visit becomes a journey rather than a destination, and no two visits have to read the same way. As the stronghold retires from military duty it merges back into the earth. As one disappears, one emerges.\n\nInstructors: Shu-Chang Kung, Ling-Li Tseng. 5 weeks, Summer 2022.",
    cover: "images/orienteering/冷戰島嶼重生%20-%20馬祖戰地轉譯.mp4",
    coverHD: "images/orienteering/冷戰島嶼重生%20-%20馬祖戰地轉譯-1080.mp4",
    coverSpeed: 2,
    gallery: [
      { src: "images/orienteering/Portfolio_260131_selected10%20-%20Copy.webp", cap: "The real Xiju. Abandoned stone villages, granite shores and agave on the slopes. Very few people come out this far, and that emptiness is the material the project works with.", wide: true },
      { src: "images/orienteering/Portfolio_260131_selected7.webp", cap: "Three landscape layers, Plant at +240M, Stone at ±0M and Water at −400M. The divisions are not arbitrary. Vegetation and ecology on Xiju already vary with elevation and with the defensive job each level once had." },
      { src: "images/orienteering/1%20(1).webp", cap: "Arrival. Terraced contour planting curves down a misty hillside toward the buried outpost. The approach is long on purpose, so the weather and the ground register before the building does." },
      { src: "images/orienteering/1%20(2)-png.webp", cap: "The stronghold entrance keeps the old garrison motto on a wall set into the green berm." },
      { src: "images/orienteering/1%20(11).webp", cap: "Grass-covered terraces fold over a stone chamber buried in the slope. The old section still protects and encloses, but now it carries drainage and insulation instead of a garrison. As one disappears, another emerges." },
      { src: "images/orienteering/1%20(3).webp", cap: "Interiors feel carved from the mountain. Stacked stone sets one programme apart from the next, and a long floor channel takes water down into the tunnels, which is also how the damp inside the rock gets handled." },
      { src: "images/orienteering/1%20(6).webp", cap: "Late light reaches deep into a sheltered stone hall of columns and stepped seating." },
      { src: "images/orienteering/1%20(9).webp", cap: "Organic stone stairways stitch the outpost's levels together; a visitor rests on the landing." },
      { src: "images/orienteering/1%20(10).webp", cap: "A narrow cut between concrete walls releases onto the sea and the setting sun. Sound and salt reach you before the view does." },
      { src: "images/orienteering/1%20(2).webp", cap: "Twilight. A single weathering-steel wall holds the edge between hillside and sea." },
      { src: "images/orienteering/site/IMG_12221.webp", cap: "Site: the island's deserted stone settlement above the bay. Xiju belongs to Juguang Township, about an hour from Nangan and Beigan." },
      { src: "images/orienteering/site/IMG_2369.webp", cap: "Site: the existing outpost today, stone walls and a round pillbox over the offshore rocks." },
      { src: "images/orienteering/site/IMG_1066.webp", cap: "Site: a stone-capped bunker embedded in the miscanthus hillside, a radar post on the ridge." },
      { src: "images/orienteering/site/IMG_1045.webp", cap: "Site: a concrete gun apron and drainage channel left by the garrison." },
      { src: "images/orienteering/site/IMG_1070.webp", cap: "Site: weathered bunker blocks and the trench path along the rampart." },
      { src: "images/orienteering/site/IMG_18277.webp", cap: "Site: sandstone cliffs and rockfall dropping to the sea below the outpost." },
      { src: "images/orienteering/site/IMG_2251.webp", cap: "Site: inside a round pillbox, light slipping through a single embrasure." },
      { src: "images/orienteering/site/IMG_2290.webp", cap: "Site: a narrow concrete passage within the tunnel system." },
      { src: "images/orienteering/site/IMG_2302.webp", cap: "Site: a firing embrasure framing nothing now but the open sea." }
    ]
  },
  "02": {
    title: "1 House for All", cat: "Housing / Community", year: "2022", tag: "Housing",
    period: "Fall 2021 – Spring 2022", status: "International competition · 1:1 demonstration unit", orgLabel: "Studio",
    team: "30-person team",
    award: "Solar Decathlon Europe 21/22, Architecture First Prize",
    role: "Contributed to design development and BIM coordination, integrating the mass-timber structure, modular façade, shared service core, and full-scale prototype documentation.",
    client: "NYCU / TDIS · international competition",
    services: "Sustainable housing, mass timber",
    intro: "Taipei's urban-renewal process often takes more than a decade, leaving cleared properties vacant and residents in prolonged uncertainty. House for All treats these temporary gaps as sites for stable mid-way housing rather than as periods of inactivity. Modular units provide housing while contributing shared energy, mobility, and community services to the surrounding neighborhood, and as redevelopment advances they can be disassembled, relocated, and adapted to another site. A reversible kit of timber, CLT, and GLT components separates long-life foundations and frames from shorter-life partitions, insulated walls, and facades, so each layer can be repaired, replaced, or relocated independently. The environmental strategy reduces demand before producing energy, pairing an airtight envelope and heat-recovery ventilation with roof-mounted solar thermal and photovoltaic systems.",
    body: "Taiwan's average building lifespan is only 35-40 years, and urban renewal takes a decade on average, which leaves demolished gaps across the city while complex ownership stalls rebuilding. '1 House for All' fills those gaps with mid-way buildings. Each one is a net-zero transitional house and also a social-enterprise housing and energy-sharing hub, and the model can be replicated across different sites. Built from mass timber (CLT and GLT) with a modular, adaptable façade, the system is designed to be fast-built, fully disassembled and reused in the next construction. A shared ground floor and party-core wall let the plan flex for different residents, bringing together elderly people, families and temporary occupants, while adding e-bike and e-cargo charging to the neighbourhood. The final outcome was a 1:1 demonstration unit the team built themselves. 30-person teamwork · 8 months, 2021F-2022S.",
    cover: "images/1-house-for-all/work-02.webp",
    gallery: [
      { src: "images/1-house-for-all/building%20life%20cycle.webp", cap: "Building life cycle. Each layer is designed to be replaced on its own timeline.", wide: true },
      { src: "images/1-house-for-all/Portfolio_260131_selected16.webp", cap: "Plans and section: shared ground floor, dwelling units and a rooftop day care.", wide: true },
      { src: "images/1-house-for-all/construction%20system.webp", cap: "Construction system: mass timber (CLT and GLT) wrapped in a reusable steel-framed skin.", wide: true },
      { src: "images/1-house-for-all/pipeline%20plan.webp", cap: "Energy systems: water, active and passive climate control sharing one core.", wide: true }
    ]
  },
  "03": {
    title: "Banqiao Station", cat: "Public / Practice", year: "2023", tag: "Public",
    period: "2023", status: "Professional project · design development", orgLabel: "Practice",
    team: "3-person team",
    role: "Contributed to schematic design and construction detailing, including code review, consultant coordination, coordination with an external documentation team, and development of the entrance, canopy, and envelope systems.",
    client: "Professional practice · MRT Banqiao Station",
    services: "Transit infrastructure, detailing",
    intro: "The lifted entrance volume preserves visibility and pedestrian continuity, while the branching canopy creates a sheltered public edge. The ground floor extends the surrounding landscape into the station and keeps the ground open and elevated, so the entrance reads as a visible civic threshold rather than a service door. Envelope section studies set the louver extension and the 30 degree shielding angle that keep wind-driven rain off the ground-level entrance. The work ran from schematic design through construction detailing, within the constraints of a live project.",
    body: "A new entrance for Banqiao Station in New Taipei City, developed in professional practice with an outsourced team in India, where design decisions constantly had to adjust to construction constraints. Landscape motifs are translated into arched structures that prolong a natural atmosphere and form a continuous urban green corridor. An open, double-height ground level enhances spatial permeability, while the loop line's signature colour gives covered circulation and clearer entry points for daily commuters. A cantilevered 2 m extension and rain-screen louvers optimise wind and rain protection. 885 m² · NT$29,920,000.",
    cover: "images/banqiao-station/work-03.webp?v=20260921",
    gallery: [
      { src: "images/banqiao-station/work-03-02.webp?v=20260921", cap: "Night view. The loop line colour lights the covered circulation.", wide: true },
      { src: "images/banqiao-station/work-03-01.webp", cap: "Entrance plaza and arched canopy at grade." },
      { src: "images/banqiao-station/work-03-03.webp", cap: "Arched structure forming a continuous urban green corridor." },
      { src: "images/banqiao-station/work-03-04.webp", cap: "Circulation through the open, double-height ground level." },
      { src: "images/banqiao-station/work-03-05.webp?v=20260921", cap: "Cantilevered 2 m extension with rain-screen louvers." },
      { src: "images/banqiao-station/%E5%9C%BA%E6%99%AF%2010.webp", cap: "Night view beneath the lit canopy, stairs descending to the concourse.", wide: true },
      { src: "images/banqiao-station/fl1_plan.webp", cap: "Ground floor plan: entrance, escalator core and landscaped forecourt.", wide: true },
      { src: "images/banqiao-station/section.webp", cap: "Long section. The metal-clad roof lifts over a double-height concourse.", wide: true },
      { src: "images/banqiao-station/escalator-section.webp", cap: "Escalator section. Circulation threads between street and platform.", wide: true },
      { src: "images/banqiao-station/escalator-section-2.webp", cap: "Detailed section through the station's underground level and escalator.", wide: true }
    ]
  },
  "04": {
    title: "Earthen", cat: "Climate / Housing", year: "2025", tag: "Climate",
    period: "Fall 2025 · 15 weeks", status: "Academic research · half-scale prototype", orgLabel: "Studio",
    team: "7-person team",
    role: "Developed and tested the envelope system through structural design, robotic ceramic printing, glaze studies, assembly details, and half-scale prototype fabrication.",
    client: "SCI-Arc · Herwig Baumgartner",
    services: "Post-disaster housing, ceramic fabrication",
    intro: "Developed in response to post-wildfire displacement in Southern California, Earthen proposes a transitional ADU system combining rammed earth with robotically printed ceramic components. The envelope works as a living water-distribution system rather than a static barrier: printed ridges capture rainfall, carved channels redirect it, concealed irrigation lines feed planting pockets, and excess water returns to the ground. The ceramic units also act as permanent formwork, with rammed earth compacted inside them in successive lifts while steel reinforcement and irrigation lines are integrated into the assembly. Each unit is robotically printed, glazed, and fired before stacking, and layered glazes pool along the printed ridges to produce controlled variation across the finished surface.",
    body: "Earthen responds to the increasing frequency of California wildfires and the prolonged displacement that follows. Rather than treating temporary housing as disposable, it frames shelter as part of a longer recovery process, a system of transitional ADUs that can be deployed quickly yet remain useful as people return to stability. Sited at 3328 N Fair Oaks Avenue in Altadena, a lot left in ruin after the Eaton Fire, it pairs housing with a community bathhouse to form a small-scale recovery infrastructure for daily life and collective healing. Using 3D-printed ceramics and rammed earth, the design explores construction that is locally grounded and thermally resilient. A robotically 3D-printed ceramic façade collects, channels and retains rainwater through algorithmic growth patterns. Each module is printed in clay, then glazed and fired into an earth-toned palette, so the architectural skin works as a ‘living’ mediator rather than a static barrier. 7-person teamwork · 15 weeks, Fall 2025.",
    cover: "images/earthen/work-04-01.webp",
    gallery: [
      { src: "images/earthen/DSC03168.webp", cap: "Fired ceramic façade. Printed clay glazed into an earth-toned palette.", wide: true },
      { src: "images/earthen/DSC03170.webp", cap: "Glaze detail. Reactive whites and chrome pool between the printed layers." },
      { src: "images/earthen/work-04-04.webp", cap: "Robotic 3D printing of the ceramic units." },
      { src: "images/earthen/work-04-05.webp", cap: "Wall-chunk mock-up of the printed ceramic skin." },
      { src: "images/earthen/window%20lower.webp", cap: "Installed mock-up. The window sill meets the printed ceramic wall." },
      { src: "images/earthen/window%20upper.webp", cap: "Installed mock-up. The window head and the rainwater channel above." },
      { src: "images/earthen/work-04-07.webp", cap: "Prototype chunk, plan and elevation at half scale." },
      { src: "images/earthen/Ceramic%20Unit%20Schematics.webp", cap: "Ceramic unit schematics, the catalogue of printed modules at body scale.", wide: true },
      { src: "images/earthen/facade%20zone.webp", cap: "Façade performance zones. Extrusions and pockets channel and hold rainwater." },
      { src: "images/earthen/glazing.webp", cap: "Glaze study. Chrome, palladium, reactive white and edge colours layered to melt and pool." },
      { src: "images/earthen/wall%20section.webp", cap: "Wall section. Glazing carried on rammed earth and 3D-printed ceramic." },
      { src: "images/earthen/window%20detail.webp", cap: "Window and planter details, with irrigation feeding the succulent pockets." }
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
    body: "DreamStudio is a design competition at NYCU exploring how an AI image generator can drive program definition and design concepts. Building on Edward Tolman's 1948 theory of cognitive maps, the mental, first-person representations of space built from both objective spatial features and subjective experience, the team developed a methodology that transforms collective memory into virtual spaces, generating layered conceptual experiences. Conceptual, emotional and contextual prompts are fed through neural networks (DreamStudio → Rhino → Unreal Engine) to deconstruct and recombine existing spaces into a playable virtual world. As an electronic extension of the body, the resulting space is navigated with simple keyboard and mouse, its discontinuous scales and atmospheres producing an uncanny experience distinct from physical space. 5-person team · 10 days, Fall 2022.",
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
    period: "2026", status: "Academic project · working prototypes", orgLabel: "Type", team: "Independent work",
    role: "Developed the end-to-end workflow from site capture and point-cloud processing to AI-generated massing, architectural rationalization, product prototyping, visualization, and fabrication studies.",
    client: "Flagship store concept · independent study",
    services: "Generative AI workflow, wearable design, soft robotics, ETFE flagship store",
    intro: "The project begins with a 3D scan of the existing site. The captured point cloud is cleaned, registered, and processed into a spatial reference model that preserves the surrounding building fabric, setbacks, and street conditions, and AI-generated masses are positioned within this measured context as spatial propositions rather than finished architecture. Selected forms are translated into operations of stacking, inflation, rotation, and overlap, then rationalized through a regular timber frame, with translucent enclosures forming display rooms and suspended galleries above an open ground-floor threshold. The wearable collar built on the same logic responds when neck flexion exceeds a set range of motion, moving from a tactile reminder to inflation that limits movement, and finally to a stiffened collar that guides the neck back toward neutral.",
    body: "THRESHLD starts from product design and lets the architecture follow. The product, THRESHLD, is a wearable ornament for poor posture and muscle tension: when the body slips into a wrong position, it responds by softly inflating. It runs a three-step intervention. Inner 'fingers' first give a gentle Remind signal, then gradually inflate to Warn, and if still ignored, fully inflate into a rigid mode that forces the body to rest. The mechanism is triggered by the frequency and angle of movement and calibrated against range-of-motion theory, then adapted into versions for other parts of the body; before buying, customers are scanned in a body-scanning booth so each piece fits perfectly. Material studies push the inflatable aesthetic, with hydro-dipping colour tests and experiments in material opacity, with a texture map applied across the orange and mint-blue parts. The flagship store carries the same idea from body to building: wrapped in a translucent ETFE skin, its inflatable façade responds to its visitors' posture, swelling whenever the people inside slip out of alignment, so the store reminds, corrects and breathes exactly as the product does. The whole project, from wearable to materials to store, is built through a generative pipeline: Blender driven through an MCP agent, with ComfyUI, LoRA and ControlNet steering form, texture and image so every iteration stays consistent across product and architecture. Product, fabrication & spatial study, 2026.",
    cover: "images/THRESHLD/THRESHLD.mp4",
    coverHD: "images/THRESHLD/THRESHLD-1080.mp4",
    gallery: [
      { src: "images/THRESHLD/16_9_2.mp4", cap: "The wearable in motion, inflating as posture slips.",
        left: [
          { src: "images/THRESHLD/Product-2.webp", cap: "Product render of the translucent inflatable ornament." },
          { src: "images/THRESHLD/work-02-03.webp", cap: "ETFE-wrapped interior. The façade breathes with the bodies inside." }
        ] },
      { src: "images/THRESHLD/timelapse_noVoice.mp4", cap: "Fabrication timelapse." },
      { src: "images/THRESHLD/mvLYsvfeKxzzeysLGpoI3_844fd4faae1c40de9c0b257b125353bb.mp4", cap: "Three-step intervention: Remind, Warn, then rigid rest." }
    ]
  },
  "archive": {
    title: "Archive", cat: "Early Experiments", year: "Various", tag: "Archive",
    period: "2019–2021", status: "Academic studies · full-scale prototypes", orgLabel: "Type", team: "Individual + team work",
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
    body: "HiYou is a real-time interactive installation that transforms passersby into participants through AI-powered social interaction. Using a live camera feed, the system detects people, tracks their attention, and begins the experience after a three-second gaze.\n\nParticipants can answer a short series of spoken questions, which are transcribed using OpenAI Whisper. The system then analyzes facial features with MediaPipe Face Mesh (468 landmarks), together with behavioral metrics including head movement, eye activity, smile intensity, rhythm, and pitch variation.\n\nHiYou compares these visual and behavioral characteristics with other participants collected during the event to find the closest match. It generates a composite portrait blending the two faces and guides participants to meet each other in the physical space.\n\nBuilt with a Unity front end and a Python back end, the installation uses HTTP and OSC/UDP for real-time communication. The entire pipeline runs locally with MediaPipe, Whisper, and ArcFace, enabling fast, offline operation without cloud services.",
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
    intro: "For the 2025 SCI-Arc Gala, I worked with M. Casey Rehm on image sequences, motion transitions, and projection output for the Los Angeles Central Library façade. Architectural drawings and generated imagery were edited into a continuous film for the building-scale installation.",
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
const ORDER_V3 = ["03", "04", "voro", "02", "hiyou", "threshld", "01", "sciarc-gala", "05", "archive"];

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
function initVideoObserver() {
  const vids = document.querySelectorAll("video[data-lazyplay]");
  const responsiveVids = [...vids].filter((v) => v.dataset.portraitSrc && v.dataset.landscapeSrc);
  const portraitQuery = matchMedia("(orientation: portrait)");
  const syncResponsiveSources = () => {
    responsiveVids.forEach((v) => {
      const nextSrc = portraitQuery.matches ? v.dataset.portraitSrc : v.dataset.landscapeSrc;
      if (!nextSrc || v.getAttribute("src") === nextSrc) return;
      const resume = !v.paused;
      v.pause();
      v.setAttribute("src", nextSrc);
      v.load();
      if (resume) {
        v.addEventListener("loadeddata", () => {
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        }, { once: true });
      }
    });
  };
  syncResponsiveSources();
  if (portraitQuery.addEventListener) portraitQuery.addEventListener("change", syncResponsiveSources);
  else if (portraitQuery.addListener) portraitQuery.addListener(syncResponsiveSources);
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
