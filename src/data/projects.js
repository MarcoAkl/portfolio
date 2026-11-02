// Every project here is a real repository. `link` is the code (null for
// private repositories, which recruiters cannot open); `live` is the
// deployed site, if there is one. Every picture is a screenshot of the
// project itself.
export const projects = [
  {
    title: "Order & Inventory",
    description:
      "Two Spring Boot microservices, each with its own PostgreSQL database, that place orders and reserve stock over HTTP. The order id doubles as the reservation id, so a retry after a timeout or crash can never reserve stock twice. Tested with JUnit 5, Testcontainers and WireMock, with CI on GitHub Actions. Built as a take-home assignment.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    link: null,
    image: "/images/order-inventory-console.png",
    caption: "The operator console for placing orders and managing stock",
    position: "0% 0%",
  },
  {
    title: "PersonCardNav",
    description:
      "A people directory on the public DummyJSON API, built for a front-end brief: search, filter, sort and pagination, favourites, a detail page per person, light and dark themes, and unit tests with Vitest.",
    tags: ["React", "TypeScript", "React Query", "Vitest"],
    link: "https://github.com/MarcoAkl/PersonCardNav",
    live: "https://personcardnav.netlify.app",
    image: "/images/personcardnav.png",
    caption: "PersonCardNav, the live directory page",
    position: "0% 0%",
  },
  {
    title: "QA Test Case Writer",
    description:
      "A browser tool for writing QA test cases, with required proof for each one, that exports the finished report as a Word or PDF file. It runs as a static page on Netlify, with an optional Flask version.",
    tags: ["JavaScript", "Python", "Flask"],
    link: null,
    live: "https://qa-test-case-writer.netlify.app",
    image: "/images/qa-test-case-writer.png",
    caption: "QA Test Case Writer, the live report builder",
    position: "0% 0%",
  },
  {
    title: "This Portfolio",
    description:
      "This site: React and Vite, deployed on Netlify from GitHub, including the phishing-link checker further down the page.",
    tags: ["React", "Vite", "Netlify"],
    link: "https://github.com/MarcoAkl/portfolio",
    live: "https://thewhotomyi.netlify.app",
    image: "/images/portfolio.png",
    caption: "This portfolio's first screen",
    position: "0% 0%",
  },
];
