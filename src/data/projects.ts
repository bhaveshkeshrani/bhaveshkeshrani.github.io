import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "custom-crm-platform",
    title: "Custom CRM Platform – CodeIgniter/jQuery to Laravel + React Migration",
    description:
      ["A social media mobile application developed using Flutter, GetX, Firebase Notifications and Hive."],
    icon: ["/skills/codeigniter.svg", "/skills/javascript.svg", "/skills/react.svg", "/skills/laravel.svg"],
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "/projects/crm/custom-crm-saas-platform.pdf",
    tags: ["CodeIgniter", "jQuery", "React", "Laravel"],
  },
  {
    id: "e-commerce-app-mern",
    title: "E-commerce App",
    description:
      ["An e-commerce web application developed using React.js, Material UI, Redux, and Stripe."],
    icon: ["/skills/react.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/ecommerce-web-reactjs",
    url: "https://nixlab-shop.vercel.app",
    tags: ["React.js", "Redux", "Material UI", "Stripe"],
  },
  {
    id: "video-calling-app-flutter",
    title: "Video Calling App",
    description:
      ["A video calling mobile application developed using Flutter and Agora SDK that allows users to call each other face to face."],
    icon: ["/skills/flutter.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/video-calling-app-flutter",
    url: "https://github.com/nixrajput/video-calling-app-flutter/releases",
    tags: ["Flutter", "Dart", "GetX", "Agora SDK"],
  },
  {
    id: "social-media-api-nodejs",
    title: "Social Media API",
    description:
      ["A RESTful API developed using Node.js, Express.js, and MongoDB to integrate backend and frontend with ease."],
    icon: ["/skills/nestjs.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/social-media-api-nodejs",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  },
  {
    id: "grocery-list-maker-app-flutter",
    title: "Grocery List Maker App",
    description:
      ["A grocery list maker mobile application developed using Flutter, BloC, Hive DB, and PDF."],
    icon: ["/skills/flutter.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/grocery-list-maker-flutter",
    url: "https://github.com/nixrajput/grocery-list-maker-flutter/releases/latest",
    tags: ["Flutter", "Dart", "BLoC", "PDF", "Hive"],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "E-commerce API",
    description:
      ["A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend."],
    icon: ["/skills/nodejs.svg"],
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/ecommerce-api-nodejs",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },
];
export default projects;
