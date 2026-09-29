export type LinkRef = {
  label: string;
  href: string;
  /** true when href is still a placeholder that must be replaced before launch */
  isPlaceholder?: boolean;
};

export type SkillGroup = {
  category: string;
  blurb: string;
  items: string[];
};

export type ProjectStatus = "Completed" | "In Progress";

export type SmallProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  githubUrl: LinkRef;
};

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type FeaturedProject = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  links: {
    github: LinkRef;
    liveDemo: LinkRef;
    demoVideo: LinkRef;
  };
  promptExamples: { sinhala: string; translation: string }[];
  caseStudy: CaseStudySection[];
  /** Real before/after screenshots. Leave paths empty to keep the illustrative mockup. */
  media: {
    before: string;
    after: string;
  };
};

export type ExperienceItem = {
  role: string;
  organisation: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type EducationItem = {
  qualification: string;
  institution: string;
  status: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  status: ProjectStatus;
};

export type ServiceItem = {
  title: string;
  description: string;
};
