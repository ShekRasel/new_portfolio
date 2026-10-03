import { Assets } from "src/utilities/assets";

type Bedge = "new" | "old" | "recent";

type technology = {
  Frontend: string[];
  Backend: string[];
};

export type Projects = {
  id: number;
  image: string;
  name: string;
  projectLink: string;
  technology: technology;
  descriptions: string[];
  subImages?: string[];
  githubLink: string;
  bedge: Bedge;
};

export const projects: Projects[] = [
  {
    id: 1,
    image: Assets.EcommerceA,
    subImages: [
      Assets.EcommerceA,
      Assets.EcommerceB,
      Assets.EcommerceC,
      Assets.EcommerceD,
      Assets.EcommerceE,
      Assets.EcommerceF,
      Assets.EcommerceG,
      Assets.EcommerceH,
    ],
    name: "Synzo Ecommerce site",
    bedge: "new",
    projectLink: "https://ecommerce-site-two-drab.vercel.app/",
    githubLink: "https://github.com/ShekRasel/ecommerce_site",
    technology: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity", "Clerk"],
      Backend: [],
    },
    descriptions: [
      "1. Built a scalable e-commerce platform with Next.js, TypeScript, and Tailwind CSS.",
      "2. Integrated Clerk Authentication and protected routes.",
      "3. Used Sanity CMS for dynamic product management.",
      "4. Created a responsive shopping interface and deployed the application on Vercel.",
    ],
  },
  {
    id: 2,
    image: Assets.MotorcycleRentA,
    subImages: [
      Assets.MotorcycleRentA,
      Assets.MotorcycleRentB,
      Assets.MotorcycleRentC,
      Assets.MotorcycleRentD,
      Assets.MotorcycleRentE,
      Assets.MotorcycleRentF,
      Assets.MotorcycleRentG,
    ],
    name: "Motorcycle Rent Application",
    bedge: "new",
    projectLink: "https://roam-moto-nu.vercel.app/",
    githubLink: "https://github.com/ShekRasel/Roam-Moto",
    technology: {
      Frontend: ["Next.js", "Tailwind CSS"],
      Backend: [],
    },
    descriptions: [
      "1. Developed a motorcycle rental frontend using Next.js.",
      "2. Designed clean page layouts and consistent UI components.",
      "3. Focused on frontend design without backend integration.",
    ],
  },
  {
    id: 2,
    image: Assets.ExpenseTrackerA,
    subImages: [
      Assets.ExpenseTrackerA,
      Assets.ExpenseTrackerB,
      Assets.ExpenseTrackerC,
      Assets.ExpenseTrackerD,
      Assets.ExpenseTrackerE,
      Assets.ExpenseTrackerF,
      Assets.ExpenseTrackerG,
      Assets.ExpenseTrackerH,
      Assets.ExpenseTrackerI,
    ],
    name: "Expense Tracker",
    bedge: "old",
    projectLink: "https://expense-tracker-mu-puce.vercel.app/",
    githubLink: "https://github.com/ShekRasel/expense-tracker",
    technology: {
      Frontend: ["Next.js", "Tailwind CSS"],
      Backend: ["NestJS"],
    },
    descriptions: [
      "1. Built a full-stack expense tracking application using Next.js and NestJS.",
      "2. Designed the user interface with Tailwind CSS.",
      "3. Implemented user authentication.",
      "4. Enabled users to record and manage their daily expenses.",
    ],
  },
  {
    id: 3,
    image: Assets.HotelA,
    subImages: [
      Assets.HotelA,
      Assets.HotelB,
      Assets.HotelC,
      Assets.HotelD,
      Assets.HotelE,
      Assets.HotelF,
      Assets.HotelG,
    ],
    name: "Hotel management",
    bedge: "old",
    projectLink: "https://da-hotel-website.vercel.app/",
    githubLink: "https://github.com/ShekRasel/DaHotel-website",
    technology: {
      Frontend: ["React.Js", "Tailwind CSS"],
      Backend: [],
    },
    descriptions: [
      "1. A hotel landing site with room and service listings.",
      "2. Fully responsive design with booking interface.",
      "3. Used Flexbox and Grid for layout.",
      "4. Optimized performance and image assets.",
    ],
  },
  {
    id: 4,
    image: Assets.Task_Pro_A,
    subImages: [
      Assets.Task_Pro_A,
      Assets.Task_Pro_B,
      Assets.Task_Pro_C,
      Assets.Task_Pro_D,
      Assets.Task_Pro_E,
      Assets.Task_Pro_F,
    ],
    name: "TaskPro App",
    bedge: "new",
    projectLink: "https://task-pro-app-six.vercel.app/",
    githubLink: "https://github.com/ShekRasel/Task_Pro_App",
    technology: {
      Frontend: ["React.js", "Tailwind CSS"],
      Backend: [],
    },
    descriptions: [
      "1. Built a responsive task management application using React.js.",
      "2. Added task creation to organize everyday work.",
      "3. Implemented dark and light modes.",
      "4. Designed a modern, responsive interface.",
    ],
  },
  {
    id: 5,
    image: Assets.cryptoland,
    subImages: [
      Assets.cryptolandA,
      Assets.cryptolandB,
      Assets.cryptolandC,
      Assets.cryptolandD,
      Assets.cryptolandE,
      Assets.cryptolandF,
      Assets.cryptolandG,
      Assets.cryptolandH,
    ],
    name: "Cryptoland",
    bedge: "old",
    projectLink: "https://cryptoland-chi.vercel.app/",
    githubLink: "https://github.com/ShekRasel/Cryptoland",
    technology: {
      Frontend: ["React.Js", "Tailwind CSS"],
      Backend: [],
    },
    descriptions: [
      "1. A cryptocurrency info dashboard using APIs.",
      "2. Fetches real-time coin prices and charts.",
      "3. Applied Axios for efficient API handling.",
      "4. Includes search and sorting capabilities.",
    ],
  },
  {
    id: 6,
    image: Assets.nft,
    subImages: [
      Assets.nftA,
      Assets.nftB,
      Assets.nftC,
      Assets.nftD,
      Assets.nftE,
      Assets.nftF,
      Assets.nftG,
    ],
    name: "NFT Market Place",
    bedge: "recent",
    projectLink: "https://nft-market-place-chi-eight.vercel.app/",
    githubLink: "https://github.com/ShekRasel/NFT-Market-Place",
    technology: {
      Frontend: ["React.Js", "Tailwind CSS"],
      Backend: [],
    },
    descriptions: [
      "1. Designed an NFT marketplace front-end.",
      "2. UI showcases trending and recent NFTs.",
      "3. Created reusable React components.",
      "4. Prepared for Web3 integration (frontend only).",
    ],
  },
  {
    id: 7,
    image: Assets.event,
    subImages: [
      Assets.eventA,
      Assets.eventB,
      Assets.eventC,
      Assets.eventD,
      Assets.eventE,
      Assets.eventF,
      Assets.eventG,
      Assets.eventH,
    ],
    name: "Event Management System",
    bedge: "old",
    projectLink: "https://frontend-eight-steel-19.vercel.app/",
    githubLink: "https://github.com/ShekRasel/Event-Management-System",
    technology: {
      Frontend: ["React.Js", "Tailwind CSS"],
      Backend: ["Node.js", "Express.js", "MongoDB"],
    },
    descriptions: [
      "1. Event listing and ticketing front-end system.",
      "2. Managed dynamic content with React state.",
      "3. Created modular components for reusability.",
      "4. Developed form validation and UI feedback.",
    ],
  },
  {
    id: 8,
    image: Assets.Education_UI,
    bedge: "old",
    name: "Education Landing page",
    subImages: [
      Assets.eduA,
      Assets.eduB,
      Assets.eduC,
      Assets.eduD,
      Assets.eduE,
      Assets.eduF,
      Assets.eduG,
      Assets.eduH,
    ],
    projectLink: "https://education-site-henna.vercel.app/",
    githubLink: "https://github.com/ShekRasel/Education-site",
    technology: {
      Frontend: ["React.Js", "Tailwind CSS"],
      Backend: [],
    },
    descriptions: [
      "1. A promotional landing page for online courses.",
      "2. Used animations to highlight key sections.",
      "3. Focused on modern educational layout.",
      "4. Responsive for mobile and tablet views.",
    ],
  },
];
