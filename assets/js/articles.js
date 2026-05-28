/**
 * ============================================================
 *  GEOPOLITICS IN A MINUTE — Article Data
 * ============================================================
 *  To add a new article:
 *    1. Add an object to the ARTICLES array below (newest first).
 *    2. Copy articles/_template.html → articles/your-slug.html
 *    3. That's it. The index page auto-updates.
 * ============================================================
 */

const ARTICLES = [
  {
    // ── identifiers ──────────────────────────────────────────
    slug:       "russia-kazakhstan-nuclear",
    url:        "articles/russia-kazakhstan-nuclear.html",

    // ── metadata ─────────────────────────────────────────────
    date:       "28 May 2026",
    dateISO:    "2026-05-28",
    location:   "Astana, Kazakhstan",
    readTime:   "3 min read",
    categories: ["Central Asia", "Energy"],
    tags:       ["Kazakhstan", "Russia", "Nuclear", "Rosatom", "Energy", "Central Asia", "Putin", "Tokayev"],

    // ── display content ──────────────────────────────────────
    image: {
      src: "https://vid.alarabiya.net/images/2026/05/28/6f010149-4a09-4269-a066-90535649c79a/6f010149-4a09-4269-a066-90535649c79a_16x9_1200x676.JPG?width=801",
      alt: "Putin and Tokayev at the Palace of Independence in Astana, Kazakhstan",
      caption: "Russian President Vladimir Putin and Kazakh President Kassym-Jomart Tokayev at the Palace of Independence in Astana, Kazakhstan — May 28, 2026. (Reuters)"
    },

    title:   "Russia Signs Deal to Build Nuclear Power Plant in Kazakhstan",
    deck:    "Vladimir Putin and Kassym-Jomart Tokayev sealed a landmark nuclear agreement in Astana, deepening Moscow's strategic presence in Central Asia while reshaping the region's energy future.",
    excerpt: "A deal signed at the Palace of Independence marks a pivotal shift — Moscow secures a nuclear foothold in Central Asia's largest nation.",

    // ── sidebar context bullets ───────────────────────────────
    context: [
      { term: "Kazakhstan", detail: "Central Asia's largest country by area and one of the world's top uranium producers." },
      { term: "Rosatom",    detail: "Russia's state nuclear corporation, active in nuclear construction on five continents." },
      { term: "2024 referendum", detail: "Kazakhstan approved nuclear energy development with roughly 72% in favour." },
      { term: "Astana",    detail: "The Kazakh capital (formerly Nur-Sultan), where this bilateral summit was held." }
    ],

    // ── body HTML ────────────────────────────────────────────
    // Use these helper classes inside the body:
    //   <div class="key-fact" icon="⚡" label="Why it matters">…</div>  ← NOT real HTML, see below
    //   Actual classes: .pull-quote  .key-fact  .source-note
    body: `
      <p>
        Russia and Kazakhstan have signed an agreement to build a nuclear power plant on Kazakh soil,
        with the deal formalised during a bilateral summit at the Palace of Independence in Astana on Wednesday.
        Russian President Vladimir Putin and Kazakh President Kassym-Jomart Tokayev presided over the signing ceremony
        in what both sides described as a strategic milestone for their partnership.
      </p>

      <div class="key-fact">
        <div class="key-fact-icon">⚡</div>
        <div class="key-fact-text">
          <strong>Why it matters</strong>
          Kazakhstan is Central Asia's largest country and a major global uranium producer,
          yet it has never operated a nuclear power plant. This deal changes that —
          and hands Russia's state nuclear corporation, Rosatom, a significant foothold
          in one of the world's most strategically contested regions.
        </div>
      </div>

      <p>
        The agreement grants Rosatom — Russia's state atomic energy corporation — the lead role in constructing
        the facility. Kazakhstan, which sits atop roughly 12% of the world's known uranium reserves,
        has debated nuclear energy for over a decade. A national referendum in 2024 returned a majority in favour
        of building a plant, clearing the political path for Wednesday's agreement.
      </p>

      <h2>A Strategic Calculation</h2>

      <p>
        For Moscow, the deal is more than a commercial contract. It extends Russian technical and economic influence
        into a country that has carefully managed its relationships with Russia, China, and Western powers since
        independence. Kazakhstan's multi-vector foreign policy has been tested since Russia's full-scale invasion
        of Ukraine in 2022, with Astana refusing to recognise Russian-occupied Ukrainian territories
        and publicly distancing itself from Moscow on several international platforms.
      </p>

      <div class="pull-quote">
        "Kazakhstan holds a fifth of the world's uranium but has never turned on a nuclear reactor.
        That is about to change — and Russia intends to be the one flipping the switch."
      </div>

      <p>
        That the agreement was signed now — with Putin travelling personally to Astana —
        signals Kazakhstan's willingness to deepen economic ties with Russia even as political tensions
        over Ukraine persist. For Tokayev, energy security and domestic development likely outweigh
        the optics of hosting Putin at a time of heightened geopolitical sensitivity.
      </p>

      <h2>The Energy Picture</h2>

      <p>
        Kazakhstan currently relies heavily on ageing Soviet-era coal plants for its electricity.
        Rolling blackouts and infrastructure strain have become recurring problems.
        A nuclear plant would provide significant baseload power for a rapidly growing economy
        that has ambitions to attract data centres, AI infrastructure, and industrial investment —
        all of which are power-hungry industries.
      </p>

      <div class="key-fact">
        <div class="key-fact-icon">🌍</div>
        <div class="key-fact-text">
          <strong>Context: Rosatom's global reach</strong>
          Rosatom is currently building or has built nuclear plants in Turkey, Egypt, Bangladesh, India, China,
          and Hungary — making it one of the world's most active nuclear construction firms.
          Each project comes with long-term fuel supply and maintenance contracts, creating durable
          geopolitical dependencies that extend well beyond the construction phase.
        </div>
      </div>

      <p>
        Critics — particularly in Western capitals — have long warned that Rosatom projects create
        structural dependencies: countries that build Russian reactors typically purchase Russian fuel,
        use Russian maintenance services, and train engineers inside Russia for decades.
        The nuclear supply chain becomes a durable thread of influence long after the facility opens.
      </p>

      <h2>What Comes Next</h2>

      <p>
        The agreement is a framework deal; detailed engineering, financing, and site selection
        still lie ahead. Earlier proposals pointed to a location near the town of Ulken, on the shores
        of Lake Balkhash in southern Kazakhstan. Construction timelines for comparable Rosatom projects
        have ranged from eight to fifteen years, meaning a Kazakh plant would not come online before
        the mid-2030s at the earliest.
      </p>

      <p>
        For now, Wednesday's handshake in Astana is the clearest signal yet of where Kazakhstan
        has chosen to turn for its energy future — and of Russia's determination to remain
        an indispensable partner in its own backyard, regardless of the turbulence elsewhere on the map.
      </p>

      <p class="source-note">
        Sources: Reuters, Al Arabiya, Rosatom public statements. Image: Reuters / Al Arabiya.
        This article reflects information available as of 28 May 2026.
      </p>
    `
  },

  // ── TEMPLATE FOR YOUR NEXT ARTICLE ──────────────────────────
  // Uncomment and fill in when you have a new story:
  //
  // {
  //   slug:       "your-article-slug",
  //   url:        "articles/your-article-slug.html",
  //   date:       "DD Mon YYYY",
  //   dateISO:    "YYYY-MM-DD",
  //   location:   "City, Country",
  //   readTime:   "X min read",
  //   categories: ["Category1", "Category2"],
  //   tags:       ["Tag1", "Tag2"],
  //   image: {
  //     src:     "https://...",
  //     alt:     "Image description",
  //     caption: "Full caption with credit."
  //   },
  //   title:   "Your Article Title",
  //   deck:    "One or two sentences summarising the story for the article page.",
  //   excerpt: "One sentence for the index card.",
  //   context: [
  //     { term: "Key term", detail: "Brief explanation." }
  //   ],
  //   body: `<p>Your article HTML here...</p>`
  // },

];
