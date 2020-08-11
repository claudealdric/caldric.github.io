export interface Project {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'COVID-19 Dashboard',
    description:
      'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
    imgSrc: './covid_dashboard.png',
  },
  {
    id: 2,
    name: 'Battleship',
    description:
      'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
    imgSrc: './battleship.png',
  },
  {
    id: 3,
    name: 'Pragmatic',
    description:
      'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
    imgSrc: './pragmatic.png',
  },
];

export { projects };
