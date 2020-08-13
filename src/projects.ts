export interface Project {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'COVID-19 Dashboard',
    description:
      'A responsive U.S. COVID-19 dashboard showing the total confirmed SARS-CoV-2 infected cases and deaths; total confirmed and deaths by state; U.S. choropleth map timeline from February to the most recent day; and an SIR (Susceptible-Infected-Recovered) mathematical model and fit. The website was built using HTML, CSS, JavaScript, and jQuery; the data was obtained through external APIs; and the SIR model was built using Python, NumPy, Pandas, and SciPy.',
    imgSrc: './covid_dashboard.png',
    github: 'https://github.com/caldric/COVID-19',
  },
  {
    id: 2,
    name: 'Battleship',
    description:
      'Battleship is a clone of the strategy game of the same name built with the MERN (MongoDB, Express.js, React.js, Node.js) stack and Bootstrap with two other collaborators. Our team adopted the Agile Scrum framework with Jira where I served as the Product Owner.',
    imgSrc: './battleship.png',
    github: 'https://github.com/caldric/battleship-client',
  },
  {
    id: 3,
    name: 'Pragmatic',
    description:
      'Pragmatic is an agile project management app modeled after Jira and made with the following technologies: Node.js, Express.js, EJS (Embedded JavaScript), jQuery, MongoDB, CSS, Bootstrap, and Heroku.',
    imgSrc: './pragmatic.png',
    github: 'https://github.com/caldric/pragmatic',
  },
  {
    id: 4,
    name: 'Tic Tac Toe',
    description:
      'A Tic Tac Toe clone made with HTML, CSS, JavaScript, and jQuery.',
    imgSrc: './pragmatic.png',
    github: 'https://github.com/caldric/tic-tac-toe',
  },
];

export { projects };
