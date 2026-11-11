import type {
  CertificationItem,
  EducationItem,
  ExperienceItem,
  AesaProject,
  FeaturedProject,
  ServiceItem,
  SkillGroup,
  SmallProject,
} from "@/types";

/**
 * PROFILE.TS
 * ---------------------------------------------------------------------------
 * This is the single file you need to edit to keep the whole site up to date.
 * Search for "YOUR_" to find every placeholder that still needs a real value.
 * Nothing in this file is fabricated — anything not yet confirmed is marked
 * "In Progress" or left as a clearly named placeholder.
 * ---------------------------------------------------------------------------
 */

export const siteConfig = {
  name: "Shanuka B. Herath",
  shortName: "Shanuka Herath",
  initials: "SH",
  role: "Computer Science Graduate | Software & AI Developer",
  seoTitle: "Shanuka B. Herath | Computer Science Graduate & Software Developer",
  location: "Sri Lanka",
  email: "shanbhera@gmail.com",
  // Used for canonical URLs, sitemap.xml and Open Graph tags once the site has a domain.
  siteUrl: "https://shanukabherath.dev",
  cvUrl: "/cv/shanuka-herath-cv.pdf",
  social: {
    github: "https://github.com/shanukabherath-solutions",
    linkedin: "https://www.linkedin.com/in/shanuka-b-herath/",
    twitter: "",
  },
  heroHeadline: "Shanuka B. Herath",
  heroSubhead:
    "I build modern web applications, AI-powered tools, and practical software solutions with a focus on usability, performance, and clean design.",
  metaDescription:
    "Portfolio of Shanuka B. Herath, a Computer Science Graduate focused on software development, AI-powered applications, web development, and cybersecurity.",
  keywords: [
    "Software Developer Sri Lanka",
    "AI Developer",
    "Web Developer",
    "React Developer",
    "FastAPI Developer",
    "Python Developer",
    "AI Web Application Developer",
  ],
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a final-year BSc (Hons) Computer Science Graduate (Second Class Upper Division) at the University of Bedfordshire, focused on building practical software solutions across web development, artificial intelligence, and cybersecurity.",
    "My projects include Photosphere, an AI-powered photo editing web application with Sinhala language support, and AESA, an AI-assisted security-focused engineering agent designed to inspect repositories, propose code changes, and apply automated security and code-quality checks.",
    "With a background in graphic design and hands-on experience with full-stack development, APIs, Docker, and security tooling, I aim to build software that is functional, secure, and thoughtfully designed.",
  ],
  interests: [
    "Software Development",
    "Artificial Intelligence",
    "Web Development",
    "Cybersecurity",
    "UI/UX",
    "API Development",
    "DevSecOps",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Backend",
    blurb: "Core languages and backend work I use in my projects.",
    items: ["Python", "FastAPI", "REST APIs", "Swagger / OpenAPI"],
  },
  {
    category: "Frontend",
    blurb: "Interfaces for the web apps I build.",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML and CSS"],
  },
  {
    category: "AI & AI-Assisted Development",
    blurb: "Integrating AI services into working applications.",
    items: [
      "Gemini API integration",
      "AI-powered application development",
      "AI agent workflow design",
      "AI prompt processing",
      "Speech-to-text integration",
      "Image processing",
    ],
  },
  {
    category: "Cybersecurity & DevSecOps",
    blurb: "Fundamentals and security tooling I'm applying in projects and still learning.",
    items: [
      "Web security fundamentals",
      "Authentication",
      "Password hashing",
      "Encryption",
      "Burp Suite",
      "Bandit",
      "Gitleaks",
      "Trivy",
      "Secure coding practices",
      "Automated security testing",
      "Human approval workflows",
      "Security gates",
    ],
  },
  {
    category: "Databases",
    blurb: "Where application data lives.",
    items: ["MongoDB", "MongoDB Atlas", "SQLite"],
  },
  {
    category: "DevOps & Tools",
    blurb: "Practical project experience; still building depth.",
    items: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "CI/CD concepts",
      "pytest",
      "Ruff",
      "mypy",
      "VS Code",
    ],
  },
];

export const featuredProject: FeaturedProject = {
  title: "Photosphere",
  tagline: "AI-based photo editing web app with Sinhala language support",
  description:
    "Photosphere is an AI-powered photo editing web application built to help Sinhala-speaking users edit images using Sinhala text prompts, Sinhala voice input, and icon-based controls — without needing to know English editing terminology.",
  features: [
    "Sinhala text prompts",
    "Sinhala voice input",
    "Complex Sinhala prompt processing",
    "Icon-based editing controls",
    "AI-assisted photo editing",
    "Background removal",
    "Color enhancement",
    "Sharpening",
    "Noise reduction",
    "Image upscaling",
    "Before/after preview",
    "Undo/redo editing history",
    "Responsive web interface",
    "User authentication",
    "Gallery / export functionality",
    "REST API backend",
    "Swagger / OpenAPI documentation",
  ],
  technologies: [
    "React",
    "FastAPI",
    "Python",
    "MongoDB",
    "Gemini API",
    "U\u00B2-Net",
    "AI image-processing services",
  ],
  links: {
    github: { label: "GitHub", href: "YOUR_PHOTOSPHERE_GITHUB_URL", isPlaceholder: true },
    liveDemo: { label: "Live Demo", href: "YOUR_PHOTOSPHERE_DEMO_URL", isPlaceholder: true },
    demoVideo: { label: "Demo Video", href: "YOUR_PHOTOSPHERE_VIDEO_URL", isPlaceholder: true },
  },
  // Illustrative examples shown in the mockup. Replace with prompts you have actually tested in Photosphere.
  // Drop real screenshots in public/projects/photosphere/ and reference them here,
  // e.g. "/projects/photosphere/before.jpg". Leave either as "" to keep the
  // illustrative mockup (useful before you have final screenshots).
  media: {
    before: "/projects/photosphere/before.jpg",
    after: "/projects/photosphere/after.jpg",
  },
  promptExamples: [
    { sinhala: "පසුබිම ඉවත් කර වර්ණ වැඩි දියුණු කරන්න", translation: "Remove the background and enhance the colours" },
    { sinhala: "පින්තූරය තියුණු කරන්න සහ වර්ණ වැඩි දියුණු කරන්න", translation: "Sharpen the picture and enhance the colours" },
    { sinhala: "පින්තූරයේ වර්ණ වැඩි දියුණු කරන්න", translation: "Enhance the colours of the picture" },
  ],
  caseStudy: [
    {
      heading: "Problem",
      body: [
        "Most photo-editing tools use English-only menus and technical vocabulary. That's a real barrier for Sinhala-speaking users who are comfortable describing what they want in their own language but not in editing jargon.",
      ],
    },
    {
      heading: "Goal",
      body: [
        "Build a photo editor where a Sinhala-speaking user can describe an edit in their own words — typed or spoken — and have it applied correctly, while keeping a familiar icon-based toolbar for users who prefer direct manipulation.",
      ],
    },
    {
      heading: "Solution",
      body: [
        "A React frontend handles image upload, prompt input (text or voice), and the editing canvas, while a FastAPI backend interprets the prompt, routes it to the correct image-processing operation, and returns the result. User accounts, edit history, and exported images are stored in MongoDB.",
      ],
    },
    {
      heading: "Technical Architecture",
      body: [
        "The frontend communicates with the backend through a documented REST API (Swagger/OpenAPI). Editing operations — background removal, sharpening, noise reduction, upscaling, colour enhancement — are implemented as separate backend services so each can be tested and improved independently. Background removal uses U\u00B2-Net; other operations use standard image-processing techniques rather than a trained model, which is intentional — not every step in the pipeline is an AI model, and the project distinguishes between the two.",
      ],
    },
    {
      heading: "AI Integration",
      body: [
        "The Gemini API is used to interpret free-form Sinhala prompts and map them to one or more supported editing operations, including cases where a single sentence requests more than one change.",
      ],
    },
    {
      heading: "Sinhala Prompt Processing",
      body: [
        "Prompts can be typed directly in Sinhala or spoken and converted to text through speech-to-text before being sent to the interpretation step. This was one of the more time-consuming parts of the project, since everyday Sinhala phrasing for editing requests doesn't map neatly onto a fixed command list.",
      ],
    },
    {
      heading: "Complex Prompt Processing",
      body: [
        "Some prompts describe more than one edit at once (for example, brightening and sharpening in the same sentence). The backend breaks these down into an ordered sequence of operations rather than requiring one instruction per action.",
      ],
    },
    {
      heading: "Undo/Redo System",
      body: [
        "Every applied edit is stored as a step in a history stack tied to the user's session, so edits can be undone or redone without reprocessing the whole image from scratch.",
      ],
    },
    {
      heading: "Testing",
      body: [
        "Backend endpoints were tested individually through the Swagger UI during development, alongside manual end-to-end testing of the prompt-to-edit flow across the supported operations.",
      ],
    },
    {
      heading: "Results",
      body: [
        "Photosphere works as an end-to-end prototype: a user can sign in, upload a photo, describe an edit in Sinhala (typed or spoken) or use the icon toolbar, preview a before/after comparison, and export the result. No performance or accuracy figures are published here, as they haven't been formally benchmarked yet.",
      ],
    },
    {
      heading: "Future Improvements",
      body: [
        "Planned next steps include expanding the range of supported Sinhala phrasing, adding more editing operations, and running structured usability testing with Sinhala-speaking users.",
      ],
    },
  ],
};

export const aesaProject: AesaProject = {
  title: "AESA",
  fullName: "AI Execution Security Agent",
  categories: ["AI Agents", "Cybersecurity", "DevSecOps"],
  summary:
    "An AI-assisted engineering agent designed to inspect software repositories, propose code changes, and validate them through isolated execution, automated security checks, and human approval.",
  description:
    "AESA is a security-focused AI agent project that combines repository analysis, controlled code execution, and human oversight in a structured software engineering workflow. It uses a Docker-based sandbox to execute permitted commands and integrates automated code-quality and security tools to help identify issues before code changes are accepted.",
  featureGroups: [
    {
      group: "Controlled execution",
      items: [
        "Restricted command execution through an allowlisted command system",
        "Docker sandbox isolation for controlled testing",
        "Git feature branches for proposed modifications",
      ],
    },
    {
      group: "Quality and security checks",
      items: [
        "Code-quality checks using Ruff, mypy, and pytest",
        "Security scanning with Bandit, Gitleaks, and Trivy",
        "Security gates that can block progression when checks fail",
      ],
    },
    {
      group: "Oversight and workflow",
      items: [
        "Repository analysis and task-driven code-change proposals",
        "Human approval workflow before accepting proposed changes",
      ],
    },
    {
      group: "Interface and delivery",
      items: [
        "Backend API and frontend dashboard for managing tasks and reviewing results",
        "Dry-run deployment configuration (no production deployment is claimed)",
      ],
    },
  ],
  technologies: [
    "Python",
    "FastAPI",
    "React",
    "Docker",
    "SQLite",
    "Git",
    "pytest",
    "Ruff",
    "mypy",
    "Bandit",
    "Gitleaks",
    "Trivy",
  ],
  // Simplified, illustrative workflow shown as a CSS diagram (not a screenshot).
  // Check the order and wording against how AESA actually runs and adjust if needed.
  pipeline: [
    { label: "Repository analysis", detail: "Inspect the repository for a given task" },
    { label: "Proposed change", detail: "Changes proposed on a Git feature branch", tools: ["Git"] },
    { label: "Docker sandbox", detail: "Allowlisted commands run in isolation", tools: ["Docker"] },
    { label: "Quality checks", detail: "Lint, type and test checks", tools: ["Ruff", "mypy", "pytest"] },
    { label: "Security scans", detail: "Code, secrets and dependency/image scanning", tools: ["Bandit", "Gitleaks", "Trivy"] },
    { label: "Human approval", detail: "A person reviews before changes are accepted" },
  ],
  links: {
    github: { label: "View on GitHub", href: "YOUR_AESA_GITHUB_URL", isPlaceholder: true },
    documentation: { label: "View Documentation", href: "YOUR_AESA_DOCS_URL", isPlaceholder: true },
    // Optional: set to a real gallery/screenshots URL to show a "View Screenshots" button.
    screenshots: { label: "View Screenshots", href: "" },
  },
};

export const smallProjects: SmallProject[] = [
  {
    slug: "password-strength-analyzer",
    title: "Password Strength Analyzer",
    category: "Cybersecurity",
    description:
      "A Python-based application that evaluates password strength and gives feedback on how it could be improved.",
    technologies: ["Python"],
    status: "Completed",
    githubUrl: { label: "GitHub", href: "YOUR_PASSWORD_ANALYZER_GITHUB_URL", isPlaceholder: true },
  },
  {
    slug: "file-encryption-app",
    title: "File Encryption App",
    category: "Cybersecurity",
    description: "An application that demonstrates AES-based file encryption and decryption.",
    technologies: ["Python", "AES"],
    status: "Completed",
    githubUrl: { label: "GitHub", href: "YOUR_FILE_ENCRYPTION_GITHUB_URL", isPlaceholder: true },
  },
  {
    slug: "secure-login-system",
    title: "Secure Login System",
    category: "Cybersecurity",
    description:
      "A simple authentication system demonstrating password hashing and secure login concepts.",
    technologies: ["Python"],
    status: "Completed",
    githubUrl: { label: "GitHub", href: "YOUR_SECURE_LOGIN_GITHUB_URL", isPlaceholder: true },
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Graphic Designer",
    organisation: "Multimedia Studio",
    period: "April 2023 \u2013 October 2023",
    summary:
      "Worked on visual design and image editing for client projects, before moving into software development.",
    highlights: [
      "Visual design and layout for client projects",
      "Branding-related design work",
      "Image editing",
      "Client-oriented design work",
    ],
  },
  // Add further software-development or freelance experience here as new entries,
  // following the same shape as the item above.
];

export const graphicDesignNote =
  "This design background carries over into how I build interfaces today — I think about layout, hierarchy, and visual polish alongside functionality, not after it.";

export const education: EducationItem[] = [
  {
    qualification: "BSc (Hons) Computer Science",
    institution: "University of Bedfordshire",
    status: "Completed",
  },
  {
    qualification: "HND in IT",
    institution: "SCU \u2013 SLIIT City University",
    status: "Completed",
  },
];

export const certifications: CertificationItem[] = [
  { name: "Microsoft AI Concepts", issuer: "Microsoft", status: "Completed" },
  { name: "IBM Python 101", issuer: "IBM / Cognitive Class", status: "Completed" },
  { name: "Introduction to Machine Learning", issuer: "Kaggle", status: "Completed" },
  { name: "Certified Artificial Intelligence Security & Risk", issuer: "CAISR", status: "Completed" },
  { name: "Burp Suite (Web Security)", issuer: "PortSwigger", status: "In Progress" },
  { name: "AI concepts for developers and technology professionals", issuer: "Microsoft", status: "Completed" },
  { name: "Introduction to DevOps and Site Reliability Engineering ", issuer: "LFS162)", status: "Completed" },
];

export const services: ServiceItem[] = [
  {
    title: "Website development",
    description: "Modern, responsive websites built with React and Next.js.",
  },
  {
    title: "Frontend development",
    description: "React / Next.js interfaces focused on usability and clean UI.",
  },
  {
    title: "Backend & API development",
    description: "FastAPI backends and REST API integration.",
  },
  {
    title: "AI API integration",
    description: "Adding AI-powered features to existing or new web applications.",
  },
  {
    title: "Image-processing features",
    description: "Editing, enhancement, and processing tools built into web apps.",
  },
  {
    title: "Authentication systems",
    description: "Login, password hashing, and access-control implementation.",
  },
];

export const servicesNote =
  "I take on these as a junior developer / freelancer — happy to discuss scope before starting.";
