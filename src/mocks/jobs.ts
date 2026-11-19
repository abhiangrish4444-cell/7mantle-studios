export const jobsHero = {
  eyebrow: 'Careers',
  title: 'JOBS',
  subtitle:
    'We are always looking for artists, animators and production people who love bringing imagination to life. Explore the roles we are hiring for right now.',
  backgroundImage:
    'https://readdy.ai/api/search-image?query=Abstract%20dark%20cinematic%20art%20studio%20backdrop%20with%20glowing%20lime%20green%20and%20warm%20coral%20brush%20strokes%20flowing%20across%20deep%20charcoal%20space%2C%20floating%20pencil%20sketches%20and%20light%20particles%2C%20soft%20volumetric%20haze%2C%20bold%20contrast%20and%20clear%20negative%20space%20for%20large%20overlay%20typography%2C%20stylised%20artistic%20editorial%20composition&width=1920&height=1080&seq=jobs-hero-01&orientation=landscape',
};

export interface JobPoint {
  label?: string;
  text: string;
}

export interface JobSection {
  heading: string;
  points: JobPoint[];
}

export interface Job {
  id: string;
  title: string;
  experience: string;
  location: string;
  type: string;
  sections: JobSection[];
}

export const jobsIntro = {
  eyebrow: 'Open positions',
  heading: 'OPEN ROLES',
  text: 'Every project starts with people who care about the frame they are drawing. If that sounds like you, pick a role below and tell us about yourself.',
};

export const jobs: Job[] = [
  {
    id: '2d-animator-kawaii-brand',
    title: '2D Animator for Kawaii Brand',
    experience: '3–5 Years',
    location: 'Remote',
    type: 'Full-time / Contract',
    sections: [
      {
        heading: 'Your Role',
        points: [
          { label: 'Layout & Animation', text: 'Create the layout and animate them in a kawaii style.' },
          { label: 'Kawaii Aesthetic', text: 'Ensure all animations reflect the cute, colourful and playful nature of the brand.' },
          { label: 'Collaboration', text: 'Work closely with the creative team to align animations with brand guidelines.' },
        ],
      },
      {
        heading: 'You Bring',
        points: [
          { label: 'Experience', text: 'A proven track record in 2D animation with a focus on kawaii style.' },
          { label: 'Portfolio / Showreel', text: 'A strong portfolio showcasing past work in kawaii animation.' },
          { label: 'Software Skills', text: 'Proficiency in 2D animation software such as Toon Boom or Adobe Animate.' },
          { label: 'Attention to Detail', text: 'The ability to create charming, lively animations.' },
        ],
      },
      {
        heading: 'What We Offer',
        points: [
          { text: 'Work on a fun, vibrant kawaii brand.' },
          { text: 'Be part of a passionate, creative team from Chennai to Tokyo to Sao Paulo.' },
          { text: 'Opportunities for ongoing collaboration and growth.' },
        ],
      },
    ],
  },
  {
    id: 'clean-up-colouring-artist',
    title: 'Clean Up & Colouring Artist',
    experience: '1–2 Years',
    location: 'Remote',
    type: 'Full-time / Contract',
    sections: [
      {
        heading: 'Your Role',
        points: [
          { label: 'Clean Up', text: 'Refine rough animation sketches.' },
          { label: 'Colouring', text: 'Apply consistent, accurate colours to frames.' },
          { label: 'Collaboration', text: 'Work with the art lead to ensure seamless integration with the other departments.' },
          { label: 'Quality Assurance', text: 'Meet high standards and deadlines.' },
        ],
      },
      {
        heading: 'You Bring',
        points: [
          { text: 'Experience in animation clean-up and colouring.' },
          { text: 'A strong portfolio showcasing your work.' },
          { text: 'Proficiency in Photoshop, Toon Boom, Adobe Animate or similar tools.' },
          { text: 'Attention to detail and strong communication skills.' },
        ],
      },
      {
        heading: 'What We Offer',
        points: [
          { text: 'Exciting, diverse projects.' },
          { text: 'A supportive, creative team culture.' },
          { text: 'Work from home and hybrid options.' },
          { text: 'Opportunities for professional growth.' },
        ],
      },
    ],
  },
];

export const jobsPerks = {
  eyebrow: 'Why 7Mantle',
  heading: 'LIFE AT THE STUDIO',
  text: 'We are a distributed studio, which means you get the best of many worlds without giving up the craft.',
  items: [
    {
      id: 'remote',
      icon: 'ri-global-line',
      title: 'Work from anywhere',
      text: 'Teams across Chennai, Tokyo and Sao Paulo, with remote and hybrid options on every role.',
    },
    {
      id: 'stories',
      icon: 'ri-heart-3-line',
      title: 'Stories that travel',
      text: 'Films, series and worlds that reach families in dozens of languages around the world.',
    },
    {
      id: 'growth',
      icon: 'ri-line-chart-line',
      title: 'Room to grow',
      text: 'Long-term collaboration and mentorship across the full 2D and 3D pipeline.',
    },
    {
      id: 'craft',
      icon: 'ri-palette-line',
      title: 'Craft comes first',
      text: 'The time and tools to do the work properly, from first rough to final grade.',
    },
  ],
};

export const jobsApplyContent = {
  eyebrow: 'Apply',
  heading: 'TELL US ABOUT YOU',
  text: 'Send us a short introduction, your portfolio or showreel, and which role you are applying for. We read every application and reply to the ones that fit.',
  note: 'Not seeing your role? We are always open to meeting good artists.',
  email: 'business@7mantlestudios.com',
  generalRole: 'General application',
};