export const projectCategories = [
  'All',
  'Feature Film',
  'TV Series',
  'Short Film',
  'Games',
] as const;

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
}

export const projectsHero = {
  eyebrow: 'Selected Work',
  title: 'PROJECTS',
  subtitle:
    'Feature films, episodic series, short films and interactive worlds built by the 7Mantle Studios team across 3D and 2D animation.',
  backgroundImage:
    'https://readdy.ai/api/search-image?query=Dark%20cinematic%20abstract%20animation%20studio%20background%20with%20glowing%20lime%20green%20light%20trails%2C%20floating%20film%20frames%20and%20storyboard%20panels%2C%20deep%20shadows%2C%20moody%20atmospheric%20contrast%2C%20wide%20panoramic%20composition&width=1920&height=1080&seq=projects-hero-bg-01&orientation=landscape',
};

export const projects: Project[] = [
  {
    id: 'the-stolen-princess',
    title: 'The Stolen Princess',
    category: 'Feature Film',
    year: '2023',
    description:
      'A sweeping CG feature following a fearless princess and a wandering artist on a quest across enchanted kingdoms.',
    image:
      'https://7mantlestudios.com/wp-content/uploads/2024/12/banner_The_Stolen_Princess_01_1080_COLOR.webp',
  },
  {
    id: 'morgan-and-the-little-whale',
    title: 'Morgan and the Little Whale',
    category: 'Feature Film',
    year: '2024',
    description:
      'A tender family adventure about a young girl and the stranded whale she helps return to the open ocean.',
    image:
      'https://7mantlestudios.com/wp-content/uploads/2024/12/banner_morgan_02_1080_COLOR.webp',
  },
  {
    id: 'mowgli-legend-of-the-jungle',
    title: 'Mowgli: Legend of the Jungle',
    category: 'Feature Film',
    year: '2022',
    description:
      'A lush, kinetic retelling of the classic jungle tale, packed with expressive animal characters and hand-crafted action.',
    image:
      'https://readdy.ai/api/search-image?query=Vibrant%203D%20animated%20feature%20film%20key%20art%20of%20a%20young%20boy%20running%20through%20a%20lush%20green%20jungle%20with%20wild%20animals%2C%20cinematic%20warm%20lighting%2C%20rich%20saturated%20colors%2C%20dramatic%20composition%2C%20family%20animation%20movie%20still&width=1200&height=675&seq=project-mowgli-01&orientation=landscape',
  },
  {
    id: 'paws-of-fury',
    title: 'Paws of Fury',
    category: 'Feature Film',
    year: '2023',
    description:
      'A slapstick martial-arts comedy where a scrappy feline hero is trained to defend his town from a ruthless warlord.',
    image:
      'https://readdy.ai/api/search-image?query=Colorful%203D%20animated%20movie%20key%20art%20of%20a%20samurai%20cat%20leaping%20through%20a%20bamboo%20forest%20at%20sunset%2C%20dynamic%20action%20pose%2C%20cinematic%20golden%20light%2C%20vibrant%20saturated%20colors%2C%20family%20animation%20still&width=1200&height=675&seq=project-paws-fury-01&orientation=landscape',
  },
  {
    id: 'jokie',
    title: 'Jokie',
    category: 'TV Series',
    year: '2024',
    description:
      'A bright preschool series following a curious little bird exploring friendship, music and the world around him.',
    image:
      'https://7mantlestudios.com/wp-content/uploads/2024/12/banner_jokie_01_1080_COLOR.webp',
  },
  {
    id: 'chhota-bheem',
    title: 'Chhota Bheem',
    category: 'TV Series',
    year: '2022',
    description:
      'Episodic 2D animation for one of India\u2019s best-loved kids\u2019 heroes, delivering consistent quality at broadcast pace.',
    image:
      'https://readdy.ai/api/search-image?query=Bright%202D%20animated%20TV%20series%20key%20art%20of%20a%20cheerful%20Indian%20village%20boy%20hero%20with%20his%20friends%2C%20vivid%20colors%2C%20festive%20town%20background%2C%20cheerful%20daylight%2C%20children%20cartoon%20still&width=1200&height=675&seq=project-chhota-bheem-01&orientation=landscape',
  },
  {
    id: 'yakari',
    title: 'Yakari',
    category: 'TV Series',
    year: '2021',
    description:
      'A gentle adventure series about a young boy who can speak with animals, told across sweeping prairie landscapes.',
    image:
      'https://readdy.ai/api/search-image?query=Warm%202D%20animated%20TV%20series%20key%20art%20of%20a%20native%20american%20boy%20and%20a%20wild%20horse%20on%20a%20vast%20prairie%20at%20golden%20hour%2C%20soft%20pastel%20sky%2C%20gentle%20adventure%20mood%2C%20children%20cartoon%20still&width=1200&height=675&seq=project-yakari-01&orientation=landscape',
  },
  {
    id: 'polska-wrona',
    title: 'Polska Wrona',
    category: 'Short Film',
    year: '2024',
    description:
      'A stylised award-season short blending folk illustration with modern 2D technique and a haunting original score.',
    image:
      'https://7mantlestudios.com/wp-content/uploads/2024/12/banner_Polska_02_1080_COLOR.webp',
  },
  {
    id: 'the-lighthouse-keeper',
    title: 'The Lighthouse Keeper',
    category: 'Short Film',
    year: '2023',
    description:
      'A moody painterly short about solitude, storms and the small rituals that keep a lonely keeper going.',
    image:
      'https://readdy.ai/api/search-image?query=Moody%20painterly%202D%20animated%20short%20film%20still%20of%20a%20lone%20lighthouse%20keeper%20on%20a%20stormy%20cliff%20at%20dusk%2C%20teal%20and%20amber%20palette%2C%20dramatic%20atmospheric%20lighting%2C%20artistic%20cinematic%20composition&width=1200&height=675&seq=project-lighthouse-01&orientation=landscape',
  },
  {
    id: 'skyforge-chronicles',
    title: 'Skyforge Chronicles',
    category: 'Games',
    year: '2024',
    description:
      'Character design, cinematic sequences and in-engine motion for a fantasy action game set among floating citadels.',
    image:
      'https://readdy.ai/api/search-image?query=Epic%20fantasy%20video%20game%20key%20art%20of%20an%20armored%20hero%20wielding%20a%20glowing%20sword%20before%20a%20floating%20sky%20citadel%2C%20dramatic%20emerald%20and%20gold%20lighting%2C%20highly%20detailed%20digital%20painting%2C%20game%20cover%20art&width=1200&height=675&seq=project-skyforge-01&orientation=landscape',
  },
  {
    id: 'ember-and-ash',
    title: 'Ember & Ash',
    category: 'Games',
    year: '2023',
    description:
      'Stylised elemental characters and FX animation for a competitive arena game with a hand-painted look.',
    image:
      'https://readdy.ai/api/search-image?query=Stylized%20video%20game%20key%20art%20of%20two%20elemental%20spirit%20characters%20facing%20each%20other%20with%20fire%20and%20smoke%20swirling%2C%20dramatic%20orange%20ember%20glow%2C%20dark%20cinematic%20background%2C%20digital%20game%20illustration&width=1200&height=675&seq=project-ember-ash-01&orientation=landscape',
  },
];

export const projectsCta = {
  heading: 'HAVE A STORY TO TELL?',
  text: 'From first pitch to final grade, we build animation pipelines that fit your story, schedule and budget.',
  ctaLabel: 'Start a Project',
  ctaPath: '/contact',
};