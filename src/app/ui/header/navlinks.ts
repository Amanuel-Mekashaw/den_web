export type NavLink = {
  name: string;
  link?: string;
  decription?: string;
  submenus?: NavLink[];
  onOpen?: () => void;
};

export const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  // company submenu
  {
    name: "Company",
    submenus: [
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Contacts",
        link: "/about/contact",
      },
      {
        name: "Career at Denovo",
        link: "/about/career",
      },
      {
        name: "Partnership",
        link: "/about/partnership",
      },
      {
        name: "Founded by senior security experts",
        link: "/about",
      },
    ],
  },
  // Products submenu
  {
    name: "Products",
    submenus: [
      {
        name: "Overview",
        link: "/products",
      },
      {
        name: "Denovo Core Zero Trust",
        link: "/products/denovo-core-zero-trust",
      },
      {
        name: "Data Loss Prevention",
        link: "/products/data-loss-prevention",
      },
      {
        name: "AI-powered Threat Analysis",
        link: "/products/ai-powered-threat-analysis",
      },
      {
        name: "AI-Assisted Policy Gen",
        link: "/products/aa-policy-gen",
      },
    ],
  },
  // Resources submenu
  {
    name: "Resources",
    submenus: [
      {
        name: "Papers",
        link: "/papers",
      },
      {
        name: "Video Links",
        link: "/video-links",
      },
      {
        name: "Webinars",
        link: "/video-links",
      },
      {
        name: "Guidelines",
        link: "/privacy-policy",
      },
    ],
  },
];
