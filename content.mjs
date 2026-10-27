// All the site's content lives here. Edit this file, then run `node build.mjs`.
// Translatable text is written as L(english, spanish, catalan). Plain strings are the same in every language.
// Gallery rows: each row is a list of images shown side by side at equal height.
// frame: 'screen' (web screenshot), 'phone' (app screen), 'print' (paper), 'plain'.

const L = (en, es, ca) => ({ en, es, ca });

export const languages = [
  ['en', 'EN', 'English'],
  ['es', 'ES', 'Español'],
  ['ca', 'CA', 'Català'],
];

// Order of projects on the home page (business and client work first)
export const order = [
  'sestrategic',
  'doctorate-in-design-upc',
  'porco-rosso',
  'antic-de-la-placa',
  'ohm',
  'fap-for-playmakers',
  'vigor-mood',
  'mistral-futsal',
  'ikea-skadis',
  'la-corona-del-rock',
  'the-art-of-risography',
];

export const site = {
  name: 'Arnau Valls Gorchs',
  shortName: 'Arnau Valls',
  // Once the site has a domain, put it here (e.g. 'https://arnauvalls.com') to add search-engine language tags
  url: '',
  role: L('Digital Designer & Web Developer', 'Diseño digital y desarrollo web', 'Disseny digital i desenvolupament web'),
  location: 'Sant Cugat · Barcelona',
  email: 'avallsgorchs@gmail.com',
  timeZone: 'Europe/Madrid',
  // Your photo for the About section, e.g. 'arnau.jpg' inside assets/img/. Leave '' to show a quote instead.
  portrait: '',
  status: L('Open to new projects', 'Disponible para nuevos proyectos', 'Disponible per a nous projectes'),
  currently: L('Web Developer at K·Factor', 'Desarrollador web en K·Factor', 'Desenvolupador web a K·Factor'),
  description: L(
    'Arnau Valls Gorchs — digital designer and web developer. Business-oriented websites, digital products and brands, from Sant Cugat (Barcelona).',
    'Arnau Valls Gorchs — diseño digital y desarrollo web. Webs, productos digitales y marcas orientados a negocio, desde Sant Cugat (Barcelona).',
    'Arnau Valls Gorchs — disseny digital i desenvolupament web. Webs, productes digitals i marques orientats a negoci, des de Sant Cugat (Barcelona).',
  ),
  tagline: L(
    'Design & technology that help businesses grow.',
    'Diseño y tecnología para que los negocios crezcan.',
    'Disseny i tecnologia perquè els negocis creixin.',
  ),
  intro: L(
    'I design and build websites and digital products for businesses — starting from how the company works, who it wants to reach and what it needs to grow.',
    'Diseño y desarrollo webs y productos digitales para empresas, partiendo de cómo funciona el negocio, a quién quiere llegar y qué necesita para crecer.',
    "Dissenyo i desenvolupo webs i productes digitals per a empreses, partint de com funciona el negoci, a qui vol arribar i què necessita per créixer.",
  ),
  quote: L('Design with<br>a purpose.', 'Diseño con<br>propósito.', 'Disseny amb<br>propòsit.'),
  // Images that play behind your name on the home page. Photos without big lettering work best.
  reel: ['ikea-skadis/opening.jpg', 'la-corona-del-rock/spread-ch1.jpg', 'ikea-skadis/banana.jpg'],
  marquee: [
    L('Web development', 'Desarrollo web', 'Desenvolupament web'),
    L('Digital products', 'Productos digitales', 'Productes digitals'),
    L('Brand identity', 'Identidad de marca', 'Identitat de marca'),
    'UX/UI',
    L('Business-oriented design', 'Diseño orientado a negocio', 'Disseny orientat a negoci'),
    L('Customer experience', 'Experiencia de cliente', 'Experiència de client'),
  ],
  // Your approach, in your own words (from your LinkedIn)
  questions: [
    L('Who are we trying to reach?', '¿A quién queremos llegar?', 'A qui volem arribar?'),
    L('What does the business need?', '¿Qué necesita el negocio?', 'Què necessita el negoci?'),
    L(
      'How can we make the offer clearer and the customer experience better?',
      '¿Cómo hacemos la oferta más clara y la experiencia de cliente mejor?',
      "Com fem l'oferta més clara i l'experiència de client millor?",
    ),
  ],
  services: [
    {
      icon: 'web',
      title: L('Websites for businesses', 'Webs para negocios', 'Webs per a negocis'),
      text: L(
        'Corporate and local-business websites, designed and coded so customers understand the offer and know how to get in touch.',
        'Webs corporativas y de negocio local, diseñadas y programadas para que el cliente entienda la oferta y sepa cómo contactar.',
        "Webs corporatives i de negoci local, dissenyades i programades perquè el client entengui l'oferta i sàpiga com contactar.",
      ),
    },
    {
      icon: 'app',
      title: L('Digital products & web apps', 'Productos digitales y apps web', 'Productes digitals i apps web'),
      text: L(
        'Interfaces, internal tools and web applications — from UX flows to development in PHP and Laravel.',
        'Interfaces, herramientas internas y aplicaciones web: de los flujos UX al desarrollo en PHP y Laravel.',
        'Interfícies, eines internes i aplicacions web: dels fluxos UX al desenvolupament en PHP i Laravel.',
      ),
    },
    {
      icon: 'mark',
      title: L('Brand identity', 'Identidad de marca', 'Identitat de marca'),
      text: L(
        'Logos, colour, type and brand guides so a business looks professional and consistent everywhere.',
        'Logo, color, tipografía y guía de marca para que el negocio se vea profesional y coherente en todas partes.',
        'Logotip, color, tipografia i guia de marca perquè el negoci es vegi professional i coherent a tot arreu.',
      ),
    },
    {
      icon: 'camera',
      title: L('Content & communication', 'Contenido y comunicación', 'Contingut i comunicació'),
      text: L(
        'Social media, photography, print and short video that keep a brand visible and recognisable.',
        'Redes sociales, fotografía, impresión y vídeo corto para que una marca se vea y se reconozca.',
        'Xarxes socials, fotografia, impressió i vídeo curt perquè una marca es vegi i es reconegui.',
      ),
    },
  ],
  experience: [
    {
      when: L('Sep 2026 — Present', 'Sept. 2026 — Actualidad', 'Set. 2026 — Actualitat'),
      role: L('Web Developer', 'Desarrollador web', 'Desenvolupador web'),
      org: 'K·Factor Technologies',
      where: L('Part-time · Hybrid · Barcelona', 'Jornada parcial · Híbrido · Barcelona', 'Jornada parcial · Híbrid · Barcelona'),
      text: L(
        'Design and development of digital products, internal tools and scalable web applications.',
        'Diseño y desarrollo de productos digitales, herramientas internas y aplicaciones web escalables.',
        "Disseny i desenvolupament de productes digitals, eines internes i aplicacions web escalables.",
      ),
      tags: ['PHP', 'Laravel'],
    },
    {
      when: L('May — Jul 2026', 'May. — jul. 2026', 'Maig — jul. 2026'),
      role: 'Web Developer',
      org: 'Centre de la Imatge i la Tecnologia Multimèdia — CITM (UPC)',
      where: L('Internship · Remote', 'Prácticas · En remoto', 'Pràctiques · En remot'),
      text: '',
      tags: [],
    },
    {
      when: L('Freelance', 'Freelance', 'Freelance'),
      role: L('Digital projects with clients', 'Proyectos digitales con clientes', 'Projectes digitals amb clients'),
      org: L('Independent', 'Por cuenta propia', 'Pel meu compte'),
      where: '',
      text: L(
        'Translating each client’s needs into practical solutions that reflect their business and goals.',
        'Traducir las necesidades de cada cliente en soluciones prácticas que reflejen su negocio y sus objetivos.',
        'Traduir les necessitats de cada client en solucions pràctiques que reflecteixin el seu negoci i els seus objectius.',
      ),
      tags: [],
    },
  ],
  bio: [
    L(
      "I'm a digital designer and web developer with a strong interest in business: understanding how companies work, spotting opportunities to improve and exploring how design and technology can help them attract customers and grow.",
      'Soy diseñador digital y desarrollador web con un fuerte interés por el mundo empresarial: entender cómo funcionan las empresas, detectar oportunidades de mejora y explorar cómo el diseño y la tecnología pueden ayudarlas a atraer clientes y crecer.',
      "Soc dissenyador digital i desenvolupador web amb un gran interès pel món empresarial: entendre com funcionen les empreses, detectar oportunitats de millora i explorar com el disseny i la tecnologia les poden ajudar a atraure clients i créixer.",
    ),
    L(
      'I study Digital Design and Multimedia Technologies at UPC and combine it with professional experience in web development. I also work with clients on digital projects.',
      'Estudio Diseño Digital y Tecnologías Multimedia en la UPC y lo combino con experiencia profesional en desarrollo web. También trabajo con clientes en proyectos digitales.',
      'Estudio Disseny Digital i Tecnologies Multimèdia a la UPC i ho combino amb experiència professional en desenvolupament web. També treballo amb clients en projectes digitals.',
    ),
    L(
      "I'm looking for opportunities to contribute creative and technical skills while going deeper into business analysis, digital strategy and customer needs.",
      'Busco oportunidades donde aportar mis capacidades creativas y técnicas mientras profundizo en análisis de negocio, estrategia digital y necesidades del cliente.',
      "Busco oportunitats on aportar les meves capacitats creatives i tècniques mentre aprofundeixo en anàlisi de negoci, estratègia digital i necessitats del client.",
    ),
  ],
  tools: ['Figma', 'Adobe Illustrator', 'Adobe InDesign', 'HTML · CSS · JavaScript', 'PHP · Laravel', L('Photo & video', 'Foto y vídeo', 'Foto i vídeo')],
  skills: [
    L('Web development', 'Desarrollo web', 'Desenvolupament web'),
    L('Web design', 'Diseño web', 'Disseny web'),
    L('User experience', 'Experiencia de usuario', "Experiència d'usuari"),
    L('Problem solving', 'Resolución de problemas', 'Resolució de problemes'),
    L('Client relationships', 'Relación con el cliente', 'Relació amb el client'),
  ],
  education: [
    [
      'Universitat Politècnica de Catalunya (UPC) · CITM',
      L(
        'Digital Design and Multimedia Technologies',
        'Diseño Digital y Tecnologías Multimedia',
        'Disseny Digital i Tecnologies Multimèdia',
      ),
    ],
  ],
  // Add your profiles, e.g. ['LinkedIn', 'https://www.linkedin.com/in/your-profile/']
  links: [['LinkedIn', 'https://www.linkedin.com/in/arnau-valls-gorchs-9a979b353/']],
};

// Interface text
export const ui = {
  skip: L('Skip to content', 'Saltar al contenido', 'Salta al contingut'),
  home: L('home', 'inicio', 'inici'),
  work: L('Work', 'Trabajos', 'Treballs'),
  approach: L('Approach', 'Enfoque', 'Enfocament'),
  approachTitle: L('Design that starts<br>with the <em>business</em>', 'Diseño que empieza<br>por el <em>negocio</em>', 'Disseny que comença<br>pel <em>negoci</em>'),
  approachNote: L(
    'These questions shape the way I approach design and development — before choosing a colour or writing a line of code.',
    'Estas preguntas marcan cómo abordo el diseño y el desarrollo, antes de elegir un color o escribir una línea de código.',
    "Aquestes preguntes marquen com abordo el disseny i el desenvolupament, abans de triar un color o escriure una línia de codi.",
  ),
  services: L('Services', 'Servicios', 'Serveis'),
  servicesTitle: L('How I can <em>help</em>', 'Cómo puedo <em>ayudarte</em>', 'Com et puc <em>ajudar</em>'),
  experience: L('Experience', 'Experiencia', 'Experiència'),
  experienceTitle: L('Where I <em>work</em>', 'Dónde <em>trabajo</em>', 'On <em>treballo</em>'),
  about: L('About', 'Sobre mí', 'Sobre mi'),
  contact: L('Contact', 'Contacto', 'Contacte'),
  letsTalk: L('Let’s talk', 'Hablemos', 'Parlem'),
  viewWork: L('View work', 'Ver trabajos', 'Veure treballs'),
  localTime: L('Local time', 'Hora local', 'Hora local'),
  status: L('Status', 'Estado', 'Estat'),
  currently: L('Currently', 'Ahora', 'Ara'),
  businessNeed: L('The business need', 'La necesidad del negocio', 'La necessitat del negoci'),
  mainNav: L('Main', 'Principal', 'Principal'),
  language: L('Language', 'Idioma', 'Idioma'),
  selectedWork: L('Selected <em>work</em>', 'Trabajos <em>seleccionados</em>', 'Treballs <em>seleccionats</em>'),
  filterLabel: L('Filter projects', 'Filtrar proyectos', 'Filtra els projectes'),
  hello: L('Hello, I’m', 'Hola, soy', 'Hola, soc l’'),
  tools: L('Tools', 'Herramientas', 'Eines'),
  skills: L('Skills', 'Aptitudes', 'Aptituds'),
  education: L('Education', 'Formación', 'Formació'),
  contactTitle: L('Let’s talk about<br>your <em>business</em>', 'Hablemos de<br>tu <em>negocio</em>', 'Parlem del<br>teu <em>negoci</em>'),
  contactText: L(
    'Need a clearer website, a digital product or a stronger brand? Tell me about your business and what you want to achieve.',
    '¿Necesitas una web más clara, un producto digital o una marca más sólida? Cuéntame tu negocio y qué quieres conseguir.',
    "Necessites una web més clara, un producte digital o una marca més sòlida? Explica'm el teu negoci i què vols aconseguir.",
  ),
  copyEmail: L('Copy email', 'Copiar email', 'Copia el correu'),
  copied: L('Copied ✓', 'Copiado ✓', 'Copiat ✓'),
  backToTop: L('Back to top ↑', 'Volver arriba ↑', 'Torna amunt ↑'),
  allWork: L('← All work', '← Todos los trabajos', '← Tots els treballs'),
  projectImages: L('Project images', 'Imágenes del proyecto', 'Imatges del projecte'),
  moreProjects: L('More projects', 'Más proyectos', 'Més projectes'),
  previous: L('← Previous', '← Anterior', '← Anterior'),
  nextProject: L('Next project →', 'Siguiente proyecto →', 'Següent projecte →'),
  printSpec: L('Print specification', 'Especificaciones de impresión', "Especificacions d'impressió"),
  playFilm: L('Play film', 'Ver el anuncio', "Mira l'anunci"),
  playVideo: L('Play video', 'Reproducir vídeo', 'Reprodueix el vídeo'),
  enlarge: L('Enlarge', 'Ampliar', 'Amplia'),
  viewer: L('Image viewer', 'Visor de imágenes', "Visor d'imatges"),
  close: L('Close', 'Cerrar', 'Tanca'),
  prevImage: L('Previous image', 'Imagen anterior', 'Imatge anterior'),
  nextImage: L('Next image', 'Imagen siguiente', 'Imatge següent'),
  projectBy: L('Project by', 'Proyecto de', 'Projecte de'),
};

// Labels used in each project's info table
export const metaLabels = {
  Skills: L('Skills', 'Habilidades', 'Habilitats'),
  Type: L('Type', 'Tipo', 'Tipus'),
  Scope: L('Scope', 'Alcance', 'Abast'),
  Team: L('Team', 'Equipo', 'Equip'),
  Tools: L('Tools', 'Herramientas', 'Eines'),
  Role: L('Role', 'Rol', 'Rol'),
  Format: L('Format', 'Formato', 'Format'),
  Pages: L('Pages', 'Páginas', 'Pàgines'),
  Languages: L('Languages', 'Idiomas', 'Idiomes'),
  Course: L('Course', 'Asignatura', 'Assignatura'),
  Client: L('Client', 'Cliente', 'Client'),
  Formats: L('Formats', 'Formatos', 'Formats'),
  Photography: L('Photography', 'Fotografía', 'Fotografia'),
  Deliverables: L('Deliverables', 'Entregables', 'Lliurables'),
  Guide: L('Guide', 'Guía', 'Guia'),
  Typeface: L('Typeface', 'Tipografía', 'Tipografia'),
  Includes: L('Includes', 'Incluye', 'Inclou'),
};

export const filters = [
  ['all', L('All', 'Todo', 'Tot')],
  ['web', 'Web'],
  ['uxui', 'UX/UI'],
  ['identity', L('Identity', 'Identidad', 'Identitat')],
  ['print', L('Editorial & Print', 'Editorial e impresión', 'Editorial i impressió')],
  ['media', L('Social & Video', 'Redes y vídeo', 'Xarxes i vídeo')],
];

const mobileHome = L('Mobile home', 'Portada en móvil', 'Portada al mòbil');
const homeHero = L('Home page hero', 'Portada', 'Portada');
const onePage = L('One-page website · responsive', 'Web de una página · responsive', "Web d'una pàgina · responsive");

export const projects = [
  {
    slug: 'ohm',
    goal: L(
      "Give diners a reason to trust restaurant reviews again — and give restaurants a fairer reputation.",
      "Dar a los comensales un motivo para volver a confiar en las reseñas, y a los restaurantes una reputación más justa.",
      "Donar als comensals un motiu per tornar a confiar en les ressenyes, i als restaurants una reputació més justa.",
    ),
    title: 'OhM',
    tags: ['uxui'],
    category: L('UX/UI Design · Mobile app', 'Diseño UX/UI · App móvil', 'Disseny UX/UI · App mòbil'),
    short: L(
      'A restaurant discovery app built on trusted reviews.',
      'Una app para descubrir restaurantes basada en reseñas de confianza.',
      'Una app per descobrir restaurants basada en ressenyes de confiança.',
    ),
    body: [
      L(
        'Online restaurant reviews are hard to trust. OhM answers with verified “Foodies” whose reviews are consistent and well argued.',
        'Las reseñas de restaurantes en internet son difíciles de creer. OhM responde con «Foodies» verificados, cuyas reseñas son coherentes y bien argumentadas.',
        'Costa fiar-se de les ressenyes de restaurants a internet. OhM hi respon amb «Foodies» verificats, amb ressenyes coherents i ben argumentades.',
      ),
      L(
        'As a team, we designed the full mobile experience: identity, map search with filters, restaurant profiles, reviews, favourites and social profiles. The logo merges a bowl of food with the Ω symbol — “Oh, mmm”.',
        'En equipo diseñamos toda la experiencia móvil: identidad, búsqueda en el mapa con filtros, perfiles de restaurante, reseñas, favoritos y perfiles sociales. El logo fusiona un bol de comida con el símbolo Ω — «Oh, mmm».',
        "En equip vam dissenyar tota l'experiència mòbil: identitat, cerca al mapa amb filtres, perfils de restaurant, ressenyes, preferits i perfils socials. El logotip fusiona un bol de menjar amb el símbol Ω — «Oh, mmm».",
      ),
    ],
    meta: [
      ['Skills', L('UX flows · UI design · App identity', 'Flujos UX · Diseño UI · Identidad de la app', "Fluxos UX · Disseny UI · Identitat de l'app")],
      ['Type', L('Mobile app concept · iOS', 'Concepto de app móvil · iOS', "Concepte d'app mòbil · iOS")],
      ['Scope', L('25 screens, logo, UI kit', '25 pantallas, logo, kit de UI', "25 pantalles, logotip, kit d'UI")],
      ['Team', L('With Lucía Sangüesa & Ainhoa Carayol', 'Con Lucía Sangüesa y Ainhoa Carayol', 'Amb Lucía Sangüesa i Ainhoa Carayol')],
      ['Tools', 'Figma'],
    ],
    card: { phones: ['ohm/home.jpg', 'ohm/restaurant.jpg', 'ohm/foodie.jpg'], bg: '#1F4B2E' },
    frame: 'phone',
    gallery: [
      [
        ['ohm/home.jpg', L('Home feed', 'Inicio', 'Inici')],
        ['ohm/map.jpg', L('Map search', 'Búsqueda en el mapa', 'Cerca al mapa')],
        ['ohm/restaurant.jpg', L('Restaurant profile', 'Perfil de restaurante', 'Perfil de restaurant')],
        ['ohm/review.jpg', L('New review', 'Nueva reseña', 'Nova ressenya')],
        ['ohm/foodie.jpg', L('Foodie profile', 'Perfil de Foodie', 'Perfil de Foodie')],
      ],
      [
        ['ohm/splash.jpg', L('Splash screen', 'Pantalla de bienvenida', 'Pantalla de benvinguda')],
        ['ohm/filters.jpg', L('Filters', 'Filtros', 'Filtres')],
        ['ohm/favourites.jpg', L('Favourites', 'Favoritos', 'Preferits')],
        ['ohm/become-foodie.jpg', L('Become a Foodie', 'Hazte Foodie', 'Fes-te Foodie')],
      ],
    ],
    palette: [
      [L('Orange', 'Naranja', 'Taronja'), '#F28B2C'],
      [L('Forest', 'Verde bosque', 'Verd bosc'), '#1F4B2E'],
      [L('White', 'Blanco', 'Blanc'), '#FFFFFF'],
    ],
  },
  {
    slug: 'porco-rosso',
    goal: L(
      "Show what makes the shop different — Italian DOP and IGP products sliced to order — and get people through the door.",
      "Mostrar qué hace diferente a la tienda —producto italiano DOP e IGP cortado al momento— y conseguir que la gente vaya.",
      "Mostrar què fa diferent la botiga —producte italià DOP i IGP tallat al moment— i aconseguir que la gent hi vagi.",
    ),
    title: 'Porco Rosso',
    tags: ['web'],
    category: L('Web design', 'Diseño web', 'Disseny web'),
    short: L(
      'Website for an artisan panini shop in Sant Cugat.',
      'Web para una paninoteca artesana de Sant Cugat.',
      'Web per a una paninoteca artesana de Sant Cugat.',
    ),
    lead: L('Website for an artisan panini shop.', 'Web para una paninoteca artesana.', 'Web per a una paninoteca artesana.'),
    body: [
      L(
        'One-page site for Porco Rosso, a panini shop in Sant Cugat that serves Italian DOP and IGP products sliced to order.',
        'Web de una sola página para Porco Rosso, una paninoteca de Sant Cugat que sirve productos italianos DOP e IGP cortados al momento.',
        "Web d'una sola pàgina per a Porco Rosso, una paninoteca de Sant Cugat que serveix productes italians DOP i IGP tallats al moment.",
      ),
      L(
        'A wide, bold display face, an elegant italic serif and an electric-blue palette give it a fresh Italian character. It covers the story, the menu with prices, the process, an Instagram gallery and how to visit.',
        'Una tipografía display ancha y potente, una serif cursiva elegante y una paleta azul eléctrico le dan un carácter italiano y fresco. Incluye la historia, la carta con precios, el proceso, una galería de Instagram y cómo llegar.',
        "Una tipografia display ampla i contundent, una serif cursiva elegant i una paleta blau elèctric li donen un caràcter italià i fresc. Inclou la història, la carta amb preus, el procés, una galeria d'Instagram i com arribar-hi.",
      ),
    ],
    meta: [
      ['Skills', L('Web design · Typography · Responsive UI', 'Diseño web · Tipografía · UI responsive', 'Disseny web · Tipografia · UI responsive')],
      ['Type', onePage],
    ],
    card: { img: 'porco-rosso/hero.jpg', pos: 'left top' },
    frame: 'screen',
    gallery: [
      [['porco-rosso/hero.jpg', homeHero]],
      [
        ['porco-rosso/menu.jpg', L('Menu section', 'Sección de la carta', 'Secció de la carta')],
        ['porco-rosso/shop.jpg', L('The shop and Instagram gallery', 'La tienda y la galería de Instagram', "La botiga i la galeria d'Instagram")],
        ['porco-rosso/mobile-home.jpg', mobileHome, 'phone'],
        ['porco-rosso/mobile-visit.jpg', L('Mobile visit section', 'Sección «cómo llegar» en móvil', 'Secció «com arribar-hi» al mòbil'), 'phone'],
      ],
    ],
  },
  {
    slug: 'la-corona-del-rock',
    goal: L(
      "Tell a long band history in a format that is easy and enjoyable to read.",
      "Contar la larga historia de una banda en un formato fácil y agradable de leer.",
      "Explicar la llarga història d'un grup en un format fàcil i agradable de llegir.",
    ),
    title: 'La Corona del Rock',
    tags: ['print'],
    category: L('Editorial design · Print', 'Diseño editorial · Impresión', 'Disseny editorial · Impressió'),
    short: L(
      'The complete story of Queen, as a printed book.',
      'La historia completa de Queen, en un libro impreso.',
      'La història completa de Queen, en un llibre imprès.',
    ),
    body: [
      L(
        "An illustrated book telling Queen's story in five chapters, from 1968 to today.",
        'Un libro ilustrado que cuenta la historia de Queen en cinco capítulos, desde 1968 hasta hoy.',
        'Un llibre il·lustrat que explica la història de Queen en cinc capítols, des de 1968 fins avui.',
      ),
      L(
        'Each chapter has its own colour and layout, mixing full-bleed photography and condensed display type with a classic serif for reading. Prepared for press in InDesign.',
        'Cada capítulo tiene su propio color y maquetación, y combina fotografía a sangre y tipografía display condensada con una serif clásica para la lectura. Preparado para imprenta en InDesign.',
        'Cada capítol té el seu propi color i maquetació, i combina fotografia a sang i tipografia display condensada amb una serif clàssica per a la lectura. Preparat per a impremta amb InDesign.',
      ),
    ],
    meta: [
      ['Skills', L('Editorial design · Typography · Prepress', 'Diseño editorial · Tipografía · Preimpresión', 'Disseny editorial · Tipografia · Preimpressió')],
      ['Role', L('Editor & graphic designer', 'Edición y diseño gráfico', 'Edició i disseny gràfic')],
      ['Team', L('With Ainhoa Carayol', 'Con Ainhoa Carayol', 'Amb Ainhoa Carayol')],
      ['Format', L('22 pages · printed & bound', '22 páginas · impreso y encuadernado', '22 pàgines · imprès i enquadernat')],
    ],
    card: { img: 'la-corona-del-rock/spread-ch1.jpg' },
    frame: 'print',
    gallery: [
      [
        ['la-corona-del-rock/cover.jpg', L('Book cover', 'Portada del libro', 'Coberta del llibre')],
        ['la-corona-del-rock/spread-ch3.jpg', L('Chapter 3 spread, La Coronación', 'Doble página del capítulo 3, La Coronación', 'Doble pàgina del capítol 3, La Coronación')],
      ],
      [
        ['la-corona-del-rock/contents.jpg', L('Contents spread', 'Doble página del índice', "Doble pàgina de l'índex")],
        ['la-corona-del-rock/spread-ch1.jpg', L('Chapter 1 spread', 'Doble página del capítulo 1', 'Doble pàgina del capítol 1')],
        ['la-corona-del-rock/spread-ch2.jpg', L('Chapter 2 spread', 'Doble página del capítulo 2', 'Doble pàgina del capítol 2')],
      ],
    ],
  },
  {
    slug: 'sestrategic',
    goal: L(
      "Explain an outsourced export service clearly enough for industrial SME directors to request a first meeting.",
      "Explicar un servicio de exportación externalizado con la claridad suficiente para que los directivos de pymes industriales pidan una primera reunión.",
      "Explicar un servei d'exportació externalitzat amb prou claredat perquè els directius de pimes industrials demanin una primera reunió.",
    ),
    title: 'Sestrategic',
    tags: ['web'],
    category: L('Web design · Responsive', 'Diseño web · Responsive', 'Disseny web · Responsive'),
    short: L(
      'Website for an export consultancy, with an interactive routes map.',
      'Web para una consultora de exportación, con un mapa de rutas interactivo.',
      "Web per a una consultora d'exportació, amb un mapa de rutes interactiu.",
    ),
    lead: L('Website for an export consultancy.', 'Web para una consultora de exportación.', "Web per a una consultora d'exportació."),
    body: [
      L(
        'Sestrategic acts as the outsourced export department of industrial SMEs.',
        'Sestrategic actúa como el departamento de exportación externo de pymes industriales.',
        "Sestrategic actua com el departament d'exportació extern de pimes industrials.",
      ),
      L(
        'The site turns that offer into a clear, sober structure — services, markets, success cases, about and contact — with an interactive map that visualises its export routes as the site’s signature. Responsive and multilingual.',
        'La web traduce esa oferta en una estructura clara y sobria —servicios, mercados, casos de éxito, quiénes somos y contacto— con un mapa interactivo que visualiza sus rutas de exportación como firma del sitio. Responsive y multilingüe.',
        "La web tradueix aquesta oferta en una estructura clara i sòbria —serveis, mercats, casos d'èxit, qui som i contacte— amb un mapa interactiu que visualitza les seves rutes d'exportació com a signatura del lloc. Responsive i multilingüe.",
      ),
    ],
    meta: [
      [
        'Skills',
        L(
          'Information architecture · Data visualisation · Responsive web',
          'Arquitectura de la información · Visualización de datos · Web responsive',
          'Arquitectura de la informació · Visualització de dades · Web responsive',
        ),
      ],
      ['Type', L('Corporate website', 'Web corporativa', 'Web corporativa')],
      ['Pages', L('6 pages · desktop & mobile', '6 páginas · escritorio y móvil', '6 pàgines · escriptori i mòbil')],
      ['Languages', L('Catalan · English · Spanish · French', 'Catalán · inglés · castellano · francés', 'Català · anglès · castellà · francès')],
    ],
    card: { img: 'sestrategic/home.jpg', pos: '15% center' },
    frame: 'screen',
    gallery: [
      [['sestrategic/home.jpg', L('Home page, English version', 'Portada, versión en inglés', 'Portada, versió en anglès')]],
      [
        ['sestrategic/services.jpg', L('Services page', 'Página de servicios', 'Pàgina de serveis')],
        ['sestrategic/map.jpg', L('Export routes map detail', 'Detalle del mapa de rutas de exportación', "Detall del mapa de rutes d'exportació")],
        ['sestrategic/mobile-home.jpg', mobileHome, 'phone'],
        ['sestrategic/mobile-menu.jpg', L('Mobile menu', 'Menú en móvil', 'Menú al mòbil'), 'phone'],
      ],
    ],
  },
  {
    slug: 'the-art-of-risography',
    goal: L(
      "Explain a printing technique to a general audience in a single, memorable piece.",
      "Explicar una técnica de impresión al gran público en una sola pieza memorable.",
      "Explicar una tècnica d'impressió al gran públic en una sola peça memorable.",
    ),
    title: L('The Art of Risography', 'El arte de la risografía', "L'art de la risografia"),
    tags: ['print'],
    category: L('Print design · Brochure', 'Diseño para impresión · Folleto', 'Disseny per a impressió · Fulletó'),
    short: L(
      'A tri-fold brochure about riso printing.',
      'Un tríptico sobre la impresión risográfica.',
      'Un tríptic sobre la impressió risogràfica.',
    ),
    body: [
      L(
        'An A4 tri-fold for Riso explaining what risography is, how the machine works and what artists say about it.',
        'Un tríptico A4 para Riso que explica qué es la risografía, cómo funciona la máquina y qué opinan los artistas.',
        'Un tríptic A4 per a Riso que explica què és la risografia, com funciona la màquina i què en diuen els artistes.',
      ),
      L(
        "The design borrows the technique's own language: overprinted fluorescent pink and yellow and oversized serif letters.",
        'El diseño toma prestado el lenguaje de la propia técnica: rosa y amarillo fluorescentes sobreimpresos y letras serif de gran tamaño.',
        'El disseny agafa el llenguatge de la mateixa tècnica: rosa i groc fluorescents sobreimpresos i lletres serif de mida gran.',
      ),
    ],
    meta: [
      [
        'Skills',
        L(
          'Print design · Colour · Production planning',
          'Diseño para impresión · Color · Planificación de producción',
          'Disseny per a impressió · Color · Planificació de la producció',
        ),
      ],
      ['Course', L('Graphic Design · UPC', 'Diseño Gráfico · UPC', 'Disseny Gràfic · UPC')],
      ['Tools', 'Adobe InDesign'],
    ],
    card: { img: 'risography/outside.jpg' },
    frame: 'print',
    gallery: [
      [['risography/outside.jpg', L('Outside of the tri-fold', 'Exterior del tríptico', 'Exterior del tríptic')]],
      [['risography/inside.jpg', L('Inside of the tri-fold', 'Interior del tríptico', 'Interior del tríptic')]],
    ],
    specs: [
      [
        L('Format', 'Formato', 'Format'),
        L('A4 · 2 folds at 97 & 197 mm · 6 panels', 'A4 · 2 pliegues a 97 y 197 mm · 6 caras', 'A4 · 2 plecs a 97 i 197 mm · 6 cares'),
      ],
      [L('Paper', 'Papel', 'Paper'), L('250 g/m² matte coated', 'Estucado mate de 250 g/m²', 'Estucat mat de 250 g/m²')],
      [
        L('Finish', 'Acabado', 'Acabat'),
        L(
          'Selective varnish on front & back cover, pre-scored folds',
          'Barniz selectivo en portada y contraportada, pliegues hendidos',
          'Vernís selectiu a la portada i la contraportada, plecs amb hendit',
        ),
      ],
      [L('Print run', 'Tirada', 'Tiratge'), L('5,000 units · offset', '5.000 unidades · offset', '5.000 unitats · òfset')],
    ],
  },
  {
    slug: 'antic-de-la-placa',
    goal: L(
      "Bring breakfasts, lunches and the evening menu together in one place and make booking a table easy.",
      "Reunir desayunos, comidas y la carta de noche en un solo sitio y facilitar la reserva de mesa.",
      "Reunir esmorzars, dinars i la carta de nit en un sol lloc i facilitar la reserva de taula.",
    ),
    title: "L'Antic de la Plaça",
    tags: ['web'],
    category: L('Web design · Hospitality', 'Diseño web · Restauración', 'Disseny web · Restauració'),
    short: L(
      'Website for a neighbourhood bar-restaurant.',
      'Web para un bar-restaurante de barrio.',
      'Web per a un bar-restaurant de barri.',
    ),
    lead: L('Website for a neighbourhood restaurant.', 'Web para un restaurante de barrio.', 'Web per a un restaurant de barri.'),
    body: [
      L(
        "Website for L'Antic de la Plaça, a small bar-restaurant in Sant Cugat.",
        "Web para L'Antic de la Plaça, un pequeño bar-restaurante de Sant Cugat.",
        "Web per a L'Antic de la Plaça, un petit bar-restaurant de Sant Cugat.",
      ),
      L(
        'Warm earthy tones, a classic serif and food photography set a homely mood. It covers breakfasts, the daily dish, the evening sharing-plates menu with prices, the kamado grill, bookings, opening hours with a map and reviews.',
        'Tonos cálidos y terrosos, una serif clásica y fotografía de cocina crean un ambiente acogedor. Incluye desayunos, el plato del día, la carta de noche para compartir con precios, el kamado, reservas, horarios con mapa y reseñas.',
        'Tons càlids i terrosos, una serif clàssica i fotografia de cuina creen un ambient acollidor. Inclou esmorzars, el plat del dia, la carta de nit per compartir amb preus, el kamado, reserves, horaris amb mapa i ressenyes.',
      ),
    ],
    meta: [
      [
        'Skills',
        L(
          'Web design · Content structure · Responsive UI',
          'Diseño web · Estructura de contenidos · UI responsive',
          'Disseny web · Estructura de continguts · UI responsive',
        ),
      ],
      ['Type', onePage],
    ],
    card: { img: 'antic/hero.jpg' },
    frame: 'screen',
    gallery: [
      [['antic/hero.jpg', homeHero]],
      [
        ['antic/about.jpg', L('About section', 'Sección «nosotros»', 'Secció «nosaltres»')],
        ['antic/kamado.jpg', L('Kamado grill section', 'Sección del kamado', 'Secció del kamado')],
        ['antic/mobile-home.jpg', mobileHome, 'phone'],
        ['antic/mobile-menu.jpg', L('Mobile evening menu', 'Carta de noche en móvil', 'Carta de nit al mòbil'), 'phone'],
      ],
    ],
  },
  {
    slug: 'mistral-futsal',
    goal: L(
      "Keep a club’s weekly social media consistent, recognisable and quick to produce.",
      "Mantener las redes semanales de un club coherentes, reconocibles y rápidas de producir.",
      "Mantenir les xarxes setmanals d'un club coherents, reconeixibles i ràpides de produir.",
    ),
    title: 'Mistral Futsal',
    tags: ['media'],
    category: L('Social media · Sports photography', 'Redes sociales · Fotografía deportiva', 'Xarxes socials · Fotografia esportiva'),
    short: L(
      'Instagram system and match photography for my futsal club.',
      'Sistema de Instagram y fotografía de partidos para mi club de fútbol sala.',
      "Sistema d'Instagram i fotografia de partits per al meu club de futbol sala.",
    ),
    lead: L(
      'Instagram content for my futsal team.',
      'Contenido de Instagram para mi equipo de fútbol sala.',
      "Contingut d'Instagram per al meu equip de futbol sala.",
    ),
    body: [
      L(
        "A recurring set of Instagram templates for the club's teams: match-day announcements, weekly results across every category and a “team of the season” line-up.",
        'Un conjunto recurrente de plantillas de Instagram para los equipos del club: anuncios de día de partido, resultados semanales de todas las categorías y el equipo ideal de la temporada.',
        "Un conjunt recurrent de plantilles d'Instagram per als equips del club: anuncis de dia de partit, resultats setmanals de totes les categories i l'equip ideal de la temporada.",
      ),
      L(
        'All the photography is my own: I photograph the matches and then design the posts. A consistent system — vintage display lettering, red accents and that match photography — keeps a weekly feed recognisable and quick to produce.',
        'Todas las fotografías son mías: fotografío los partidos y después diseño las publicaciones. Un sistema coherente —rotulación display vintage, acentos rojos y esa fotografía de partido— hace que un feed semanal sea reconocible y rápido de producir.',
        'Totes les fotografies són meves: fotografio els partits i després dissenyo les publicacions. Un sistema coherent —retolació display vintage, accents vermells i aquesta fotografia de partit— fa que un feed setmanal sigui reconeixible i ràpid de produir.',
      ),
    ],
    meta: [
      [
        'Skills',
        L(
          'Sports photography · Social media design · Templates',
          'Fotografía deportiva · Diseño para redes · Plantillas',
          'Fotografia esportiva · Disseny per a xarxes · Plantilles',
        ),
      ],
      ['Client', L('CE Fundació Collserola · futsal', 'CE Fundació Collserola · fútbol sala', 'CE Fundació Collserola · futbol sala')],
      ['Formats', L('Instagram posts 1:1 & 4:5 · carousels', 'Posts de Instagram 1:1 y 4:5 · carruseles', "Posts d'Instagram 1:1 i 4:5 · carrusels")],
      ['Photography', L('All photos taken by me', 'Todas las fotos son mías', 'Totes les fotos són meves')],
    ],
    card: { img: 'mistral/matchday-1.jpg', pos: 'center 40%' },
    frame: 'print',
    gallery: [
      [
        ['mistral/matchday-1.jpg', L('Match day post', 'Post de día de partido', 'Post de dia de partit')],
        ['mistral/matchday-2.jpg', L('Match day post', 'Post de día de partido', 'Post de dia de partit')],
        ['mistral/matchday-3.jpg', L('Match day post', 'Post de día de partido', 'Post de dia de partit')],
      ],
      [
        ['mistral/results-cover.jpg', L('Weekly results carousel, cover', 'Carrusel de resultados semanales, portada', 'Carrusel de resultats setmanals, portada')],
        ['mistral/results-scores.jpg', L('Weekly results carousel, scores', 'Carrusel de resultados semanales, marcadores', 'Carrusel de resultats setmanals, marcadors')],
        ['mistral/team-of-season.jpg', L('Team of the season line-up', 'Equipo ideal de la temporada', 'Equip ideal de la temporada')],
      ],
    ],
  },
  {
    slug: 'fap-for-playmakers',
    goal: L(
      "Give a new football player agency a professional, recognisable image to present to players and clubs.",
      "Dar a una nueva agencia de futbolistas una imagen profesional y reconocible ante jugadores y clubes.",
      "Donar a una nova agència de futbolistes una imatge professional i reconeixible davant de jugadors i clubs.",
    ),
    title: 'FAP — For Playmakers',
    tags: ['identity'],
    category: L('Logo design & visual identity', 'Diseño de logotipo e identidad visual', 'Disseny de logotip i identitat visual'),
    short: L(
      'Logo and identity for a football player agency.',
      'Logo e identidad para una agencia de futbolistas.',
      'Logotip i identitat per a una agència de futbolistes.',
    ),
    lead: L(
      'Logo and visual identity for a football player agency.',
      'Logo e identidad visual para una agencia de representación de futbolistas.',
      'Logotip i identitat visual per a una agència de representació de futbolistes.',
    ),
    body: [
      L(
        'I designed the FAP logotype — the letters with a ball at their centre and the “For Playmakers” descriptor — and built the identity around it.',
        'Diseñé el logotipo de FAP —las letras con un balón en el centro y el descriptor «For Playmakers»— y construí la identidad a su alrededor.',
        'Vaig dissenyar el logotip de FAP —les lletres amb una pilota al centre i el descriptor «For Playmakers»— i hi vaig construir la identitat al voltant.',
      ),
      L(
        'The deliverables include a brand guide with four logo versions, a palette where green links the brand to the pitch, Montserrat as typeface, clear space, minimum sizes, uses to avoid and which file to use for each medium. I also animated the logo.',
        'Los entregables incluyen una guía de marca con cuatro versiones del logo, una paleta en la que el verde vincula la marca con el campo, Montserrat como tipografía, área de respeto, tamaños mínimos, usos a evitar y qué archivo usar en cada medio. También animé el logo.',
        'Els lliurables inclouen una guia de marca amb quatre versions del logotip, una paleta on el verd vincula la marca amb el camp, Montserrat com a tipografia, àrea de respecte, mides mínimes, usos que cal evitar i quin fitxer fer servir a cada mitjà. També vaig animar el logotip.',
      ),
    ],
    meta: [
      ['Skills', L('Logo design · Visual identity · Brand guidelines', 'Diseño de logotipo · Identidad visual · Guía de marca', 'Disseny de logotip · Identitat visual · Guia de marca')],
      [
        'Deliverables',
        L(
          'Logotype · 4 colour versions · animated logo · brand guide',
          'Logotipo · 4 versiones de color · logo animado · guía de marca',
          'Logotip · 4 versions de color · logotip animat · guia de marca',
        ),
      ],
      ['Guide', L('A4 landscape · 7 pages', 'A4 apaisado · 7 páginas', 'A4 apaïsat · 7 pàgines')],
      ['Typeface', 'Montserrat'],
    ],
    card: { img: 'fap/guide-cover.jpg' },
    frame: 'print',
    hero: { svg: 'fap/logo-animated.svg', alt: L('Animated FAP logo', 'Logo animado de FAP', 'Logotip animat de FAP'), w: 1920, h: 1080 },
    gallery: [
      [
        ['fap/guide-cover.jpg', L('Brand guide cover', 'Portada de la guía de marca', 'Portada de la guia de marca')],
        ['fap/logo-versions.jpg', L('Logo versions', 'Versiones del logo', 'Versions del logotip')],
      ],
      [
        ['fap/typography.jpg', L('Typography and descriptor', 'Tipografía y descriptor', 'Tipografia i descriptor')],
        ['fap/uses-to-avoid.jpg', L('Uses to avoid', 'Usos a evitar', 'Usos que cal evitar')],
      ],
    ],
    palette: [
      [L('FAP Green', 'Verde FAP', 'Verd FAP'), '#1D6D29', 'CMYK 73/0/62/57'],
      [L('FAP Black', 'Negro FAP', 'Negre FAP'), '#101010', 'CMYK 0/0/0/94'],
      [L('White', 'Blanco', 'Blanc'), '#FFFFFF', 'CMYK 0/0/0/0'],
    ],
  },
  {
    slug: 'doctorate-in-design-upc',
    goal: L(
      "Turn a dense academic offer from three UPC centres into a site that future PhD candidates can navigate easily.",
      "Convertir una oferta académica densa de tres centros de la UPC en una web por la que los futuros doctorandos naveguen con facilidad.",
      "Convertir una oferta acadèmica densa de tres centres de la UPC en una web per on els futurs doctorands naveguin amb facilitat.",
    ),
    title: L('Doctorate in Design', 'Doctorado en Diseño', 'Doctorat en Disseny'),
    tags: ['web'],
    category: L('Web design & development · Institutional', 'Diseño y desarrollo web · Institucional', 'Disseny i desenvolupament web · Institucional'),
    short: L(
      "Website for UPC's PhD Programme in Design — designed and coded.",
      'Web del Programa de Doctorado en Diseño de la UPC — diseñada y programada.',
      'Web del Programa de Doctorat en Disseny de la UPC — dissenyada i programada.',
    ),
    lead: L(
      "Website for UPC's PhD Programme in Design.",
      'Web del Programa de Doctorado en Diseño de la UPC.',
      'Web del Programa de Doctorat en Disseny de la UPC.',
    ),
    body: [
      L(
        'I coded the entire website and took part in its design.',
        'Programé toda la web y participé en su diseño.',
        'Vaig programar tota la web i vaig participar en el disseny.',
      ),
      L(
        'Built for the doctoral programme run jointly by three UPC centres, it turns a dense academic offer — programme, research areas, team, news and research groups — into a clear information architecture and an editorial layout with a bold blue navigation band and large typographic headings.',
        'Creada para el programa de doctorado que imparten conjuntamente tres centros de la UPC, convierte una oferta académica densa —programa, líneas de investigación, equipo, noticias y grupos de investigación— en una arquitectura de la información clara y una maquetación editorial con una potente franja de navegación azul y grandes titulares tipográficos.',
        'Creada per al programa de doctorat que imparteixen conjuntament tres centres de la UPC, converteix una oferta acadèmica densa —programa, línies de recerca, equip, notícies i grups de recerca— en una arquitectura de la informació clara i una maquetació editorial amb una potent franja de navegació blava i grans titulars tipogràfics.',
      ),
    ],
    meta: [
      [
        'Role',
        L(
          'Front-end development (full site) · co-design',
          'Desarrollo front-end (web completa) · codiseño',
          'Desenvolupament front-end (web completa) · codisseny',
        ),
      ],
      [
        'Skills',
        L(
          'Web development · Information architecture · Web design',
          'Desarrollo web · Arquitectura de la información · Diseño web',
          'Desenvolupament web · Arquitectura de la informació · Disseny web',
        ),
      ],
      ['Client', 'Universitat Politècnica de Catalunya'],
      ['Type', L('Institutional website', 'Web institucional', 'Web institucional')],
    ],
    links: [[L('Visit disseny.phd.upc.edu', 'Visitar disseny.phd.upc.edu', 'Visita disseny.phd.upc.edu'), 'https://disseny.phd.upc.edu/']],
    card: { img: 'upc-doctorate/home.jpg', pos: 'left center' },
    frame: 'screen',
    gallery: [
      [['upc-doctorate/home.jpg', homeHero]],
      [
        ['upc-doctorate/about.jpg', L('About the programme', 'Sobre el programa', 'Sobre el programa')],
        ['upc-doctorate/team.jpg', L('Academic team', 'Equipo académico', 'Equip acadèmic')],
      ],
    ],
  },
  {
    slug: 'vigor-mood',
    goal: L(
      "Give a new drinks brand an identity that holds together from the can to signage.",
      "Dar a una nueva marca de bebidas una identidad que funcione de la lata a la señalética.",
      "Donar a una nova marca de begudes una identitat que funcioni de la llauna a la senyalètica.",
    ),
    title: 'Vigor Mood',
    tags: ['identity'],
    category: L('Brand identity · Packaging', 'Identidad de marca · Packaging', 'Identitat de marca · Packaging'),
    short: L(
      'Brand identity manual for a drinks brand.',
      'Manual de identidad para una marca de bebidas.',
      "Manual d'identitat per a una marca de begudes.",
    ),
    body: [
      L(
        'A complete identity for Vigor Mood: logotype and construction grid, a palette of deep and fresh greens, a type system, minimum sizes, correct and incorrect uses, stationery and applications from the can to signage.',
        'Una identidad completa para Vigor Mood: logotipo y retícula de construcción, una paleta de verdes profundos y frescos, un sistema tipográfico, tamaños mínimos, usos correctos e incorrectos, papelería y aplicaciones, de la lata a la señalética.',
        'Una identitat completa per a Vigor Mood: logotip i retícula de construcció, una paleta de verds profunds i frescos, un sistema tipogràfic, mides mínimes, usos correctes i incorrectes, papereria i aplicacions, de la llauna a la senyalètica.',
      ),
    ],
    meta: [
      ['Skills', L('Corporate design · Packaging · Mock-ups', 'Diseño corporativo · Packaging · Mock-ups', 'Disseny corporatiu · Packaging · Mock-ups')],
      ['Type', L('Identity manual · 10 pages', 'Manual de identidad · 10 páginas', "Manual d'identitat · 10 pàgines")],
      ['Includes', L('Logo, colour, type, stationery, mock-ups', 'Logo, color, tipografía, papelería, mock-ups', 'Logotip, color, tipografia, papereria, mock-ups')],
      ['Tools', 'Adobe Illustrator'],
    ],
    card: { img: 'vigor-mood/logo.jpg' },
    frame: 'print',
    gallery: [
      [
        ['vigor-mood/logo.jpg', L('Vigor Mood logo', 'Logo de Vigor Mood', 'Logotip de Vigor Mood')],
        ['vigor-mood/can.jpg', L('Can packaging', 'Packaging de la lata', 'Packaging de la llauna')],
      ],
      [
        ['vigor-mood/construction.jpg', L('Logo construction', 'Construcción del logo', 'Construcció del logotip')],
        ['vigor-mood/colours.jpg', L('Corporate colours', 'Colores corporativos', 'Colors corporatius')],
        ['vigor-mood/typefaces.jpg', L('Corporate typefaces', 'Tipografías corporativas', 'Tipografies corporatives')],
      ],
      [
        ['vigor-mood/correct-uses.jpg', L('Correct uses', 'Usos correctos', 'Usos correctes')],
        ['vigor-mood/stationery.jpg', L('Stationery', 'Papelería', 'Papereria')],
        ['vigor-mood/applications.jpg', L('Brand applications', 'Aplicaciones de marca', 'Aplicacions de marca')],
      ],
    ],
  },
  {
    slug: 'ikea-skadis',
    goal: L(
      "Show how a product solves a real storage problem, with humour that works on social media.",
      "Mostrar cómo un producto resuelve un problema real de orden, con un humor que funcione en redes.",
      "Mostrar com un producte resol un problema real d'ordre, amb un humor que funcioni a les xarxes.",
    ),
    title: 'IKEA SKÅDIS',
    tags: ['media'],
    category: L('Advertising · Video', 'Publicidad · Vídeo', 'Publicitat · Vídeo'),
    short: L(
      'A spec commercial for a pegboard, in 16:9 and 9:16.',
      'Un anuncio no oficial para un panel organizador, en 16:9 y 9:16.',
      'Un anunci no oficial per a un tauler organitzador, en 16:9 i 9:16.',
    ),
    lead: L(
      'A spec commercial for a pegboard.',
      'Un anuncio no oficial para un panel organizador.',
      'Un anunci no oficial per a un tauler organitzador.',
    ),
    body: [
      L(
        "Two friends stare at a banana duct-taped to an IKEA SKÅDIS pegboard — a wink at Cattelan's artwork. Then the board fills with real accessories, each with its name and price.",
        'Dos amigos contemplan un plátano pegado con cinta americana a un panel IKEA SKÅDIS —un guiño a la obra de Cattelan—. Después, el panel se llena de accesorios reales, cada uno con su nombre y su precio.',
        "Dos amics contemplen un plàtan enganxat amb cinta americana a un tauler IKEA SKÅDIS —una picada d'ullet a l'obra de Cattelan—. Després, el tauler s'omple d'accessoris reals, cadascun amb el seu nom i el seu preu.",
      ),
      L(
        'Shot and edited as a 16:9 film and a 9:16 cut for social media.',
        'Rodado y montado como una pieza 16:9 y un corte 9:16 para redes sociales.',
        'Rodat i muntat com una peça 16:9 i un tall 9:16 per a xarxes socials.',
      ),
    ],
    meta: [
      ['Skills', L('Concept · Filming · Editing · Motion graphics', 'Concepto · Rodaje · Montaje · Motion graphics', 'Concepte · Rodatge · Muntatge · Motion graphics')],
      ['Type', L('Spec ad · concept, shooting, editing', 'Anuncio no oficial · concepto, rodaje, montaje', 'Anunci no oficial · concepte, rodatge, muntatge')],
      ['Formats', '16:9 · 0:37 / 9:16 · 0:09'],
      [
        'Team',
        L(
          'With Lucía Sangüesa, Ainhoa Carayol & Paula Borregón',
          'Con Lucía Sangüesa, Ainhoa Carayol y Paula Borregón',
          'Amb Lucía Sangüesa, Ainhoa Carayol i Paula Borregón',
        ),
      ],
    ],
    links: [
      [L('Watch the 16:9 film', 'Ver la pieza 16:9', 'Mira la peça 16:9'), 'https://youtu.be/qHb3FvDwjXI'],
      [L('Watch the 9:16 cut', 'Ver el corte 9:16', 'Mira el tall 9:16'), 'https://youtube.com/shorts/qsDpDo6UkDw'],
    ],
    card: { img: 'ikea-skadis/banana.jpg' },
    frame: 'plain',
    video: {
      id: 'qHb3FvDwjXI',
      poster: 'ikea-skadis/banana.jpg',
      title: L('IKEA SKÅDIS spec commercial, 16:9', 'Anuncio IKEA SKÅDIS, 16:9', 'Anunci IKEA SKÅDIS, 16:9'),
    },
    gallery: [
      [
        ['ikea-skadis/opening.jpg', L('Still from the commercial', 'Fotograma del anuncio', "Fotograma de l'anunci")],
        ['ikea-skadis/vertical.jpg', L('Still from the 9:16 cut', 'Fotograma del corte 9:16', 'Fotograma del tall 9:16'), 'phone'],
      ],
      [
        ['ikea-skadis/board-filling.jpg', L('Still from the commercial', 'Fotograma del anuncio', "Fotograma de l'anunci")],
        ['ikea-skadis/product-price.jpg', L('Still from the commercial', 'Fotograma del anuncio', "Fotograma de l'anunci")],
      ],
    ],
  },
];
