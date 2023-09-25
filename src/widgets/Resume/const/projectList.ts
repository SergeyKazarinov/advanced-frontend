export interface IProjectItem {
  name: string;
  responsibilities: string[];
  link: string;
  site?: string;
  stacks: string[];
}

export const projectsList: IProjectItem[] = [
  {
    name: 'Advanced Frontend',
    responsibilities: [
      'Project for viewing and commenting on articles',
      'Uses Feature-Sliced ​​Design architecture',
      'set up a storybook',
      'Code coverage by Unit- and functional tests',
      'Added i18n internationalization',
    ],
    link: 'https://github.com/SergeyKazarinov/advanced-frontend',
    stacks: [
      'React',
      'TS',
      'Redux Toolkit',
      'RTK Query',
      'Axios',
      'Jest',
      'React-testing-library',
      'Cypress',
      'CI',
      'SCSS-module',
      'Webpack',
      'Vite',
      'FSD',
    ],
  },
  {
    name: 'Messenger',
    responsibilities: ['Application for real-time messaging'],
    link: 'https://github.com/SergeyKazarinov/messenger',
    site: 'https://messenger-mu-black.vercel.app/',
    stacks: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Prisma', 'Eslint'],
  },
  {
    name: 'Drag-and-Drop Calculator',
    responsibilities: ['The project is a drag-and-drop constructor with which you can build a calculator'],
    link: 'https://github.com/SergeyKazarinov/calculator',
    site: 'https://calculator-navy-seven.vercel.app/',
    stacks: ['React', 'TypeScript', 'React-dnd', 'Redux Toolkit', 'SCSS Modules', 'Eslint'],
  },
];
