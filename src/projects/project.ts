import { Assets } from "src/utilities/assets";

export type Projects = {
  id: number;
  image: string;
  name: string;
  projectLink: string;
  technology: string[];
  descriptions: string[];
  subImages?: string[];
};
export const projects: Projects[] = [
  {
    id: 1,
    image: Assets.ecommere,
    subImages: [
      Assets.EcommerceA,
      Assets.EcommerceB,
      Assets.EcommerceC,
      Assets.EcommerceD,
      Assets.EcommerceE,
    ],
    name: "Synzo Ecommerce site",
    projectLink: "https://ecommerce-site-two-drab.vercel.app/",
    technology: ["React", "Tailwind CSS", "React Router", "Vercel"],
    descriptions: [
      "1. Developed a full-featured e-commerce site with cart, product pages, and checkout.",
      "2. Integrated responsive design with Tailwind CSS.",
      "3. Utilized React hooks for state and side effect management.",
      "4. Deployed on Vercel for seamless hosting.",
    ],
  },
  {
    id: 2,
    image: Assets.hotel,
    name: "Hotel management",
    projectLink: "https://da-hotel-website.vercel.app/",
    technology: ["React", "Tailwind CSS", "Flexbox", "Grid"],
    descriptions: [
      "1. A hotel landing site with room and service listings.",
      "2. Fully responsive design with booking interface.",
      "3. Used Flexbox and Grid for layout.",
      "4. Optimized performance and image assets.",
    ],
  },
  {
    id: 3,
    image: Assets.project4,
    name: "TaskPro App",
    projectLink: "https://task-pro-app-three.vercel.app/",
    technology: ["React", "Tailwind CSS", "Drag and Drop", "React DnD"],
    descriptions: [
      "1. A Kanban-style task management application.",
      "2. Implemented drag and drop functionality.",
      "3. Organized tasks by boards and statuses.",
      "4. Designed with reusability and scalability in mind.",
    ],
  },
  {
    id: 5,
    image: Assets.cryptoland,
    name: "Cryptoland",
    projectLink: "https://cryptoland-chi.vercel.app/",
    technology: ["React", "Axios", "Chart.js", "Tailwind CSS"],
    descriptions: [
      "1. A cryptocurrency info dashboard using APIs.",
      "2. Fetches real-time coin prices and charts.",
      "3. Applied Axios for efficient API handling.",
      "4. Includes search and sorting capabilities.",
    ],
  },
  {
    id: 4,
    image: Assets.expense,
    name: "Expense Tracker",
    projectLink: "https://expense-tracker-mu-puce.vercel.app/",
    technology: ["React", "LocalStorage", "Tailwind CSS"],
    descriptions: [
      "1. Built a dynamic expense tracker with React.",
      "2. Used localStorage to persist user data.",
      "3. Added filtering by category and date.",
      "4. Focused on clean UI with real-time updates.",
    ],
  },

  {
    id: 6,
    image: Assets.project1,
    name: "NFT Market Place",
    projectLink: "https://nft-market-place-chi-eight.vercel.app/",
    technology: ["React", "Tailwind CSS", "Reusable Components"],
    descriptions: [
      "1. Designed an NFT marketplace front-end.",
      "2. UI showcases trending and recent NFTs.",
      "3. Created reusable React components.",
      "4. Prepared for Web3 integration (frontend only).",
    ],
  },
  {
    id: 7,
    image: Assets.project2,
    name: "Event Management System",
    projectLink: "https://frontend-eight-steel-19.vercel.app/",
    technology: [
      "React",
      "Tailwind CSS",
      "Form Handling",
      "Reusable Components",
    ],
    descriptions: [
      "1. Event listing and ticketing front-end system.",
      "2. Managed dynamic content with React state.",
      "3. Created modular components for reusability.",
      "4. Developed form validation and UI feedback.",
    ],
  },
  {
    id: 8,
    image: Assets.project3,
    name: "Education Landing page",
    projectLink: "https://education-site-henna.vercel.app/",
    technology: ["React", "Tailwind CSS", "Animations"],
    descriptions: [
      "1. A promotional landing page for online courses.",
      "2. Used animations to highlight key sections.",
      "3. Focused on modern educational layout.",
      "4. Responsive for mobile and tablet views.",
    ],
  },
  {
    id: 9,
    image: Assets.weather_og,
    name: "Weather App",
    projectLink: "https://react-weather-app-silk-five.vercel.app/",
    technology: ["React", "OpenWeatherMap API", "Tailwind CSS"],
    descriptions: [
      "1. React app to fetch and display weather data.",
      "2. Integrated OpenWeatherMap API.",
      "3. Included temperature, wind, and forecast info.",
      "4. Styled with minimalist weather-focused UI.",
    ],
  },
  {
    id: 10,
    image: Assets.youtube,
    name: "YouTube Clone, html/css",
    projectLink: "https://youtube-clone-eight-sable.vercel.app/",
    technology: ["HTML", "CSS", "Flexbox", "Grid"],
    descriptions: [
      "1. A static clone of YouTube UI using HTML/CSS.",
      "2. Pixel-perfect layout with responsive design.",
      "3. Used CSS Grid and Flexbox extensively.",
      "4. Aimed at mastering layout and component structure.",
    ],
  },
];
