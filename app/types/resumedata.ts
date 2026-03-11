// --- INITIAL DATA (From your prompt) ---
export const INITIAL_DATA = {
  personal: {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    headline: "Full Stack Developer",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    portfolio: "https://johndoe.dev",
  },
  achievements: [
    "Won Hackathon 2022",
    "Employee of the Month June 2023",
    "Open Source Contributor",
  ],
  certifications: [
    { title: "Full Stack Web Development", issuer: "Coursera", year: "2022" },
    { title: "React Developer Certification", issuer: "Udemy", year: "2023" },
  ],
  education: [
    {
      degree: "Bachelor of Science in CS",
      institution: "Univ. of California",
      year: "2021",
      score: "3.8 GPA",
    },
    {
      degree: "High School Diploma",
      institution: "Sunrise High School",
      year: "2017",
      score: "92%",
    },
  ],
  experience: [
    {
      company: "Tech Solutions Inc.",
      role: "Frontend Developer",
      startDate: "Jan 2022",
      endDate: "Dec 2022",
      description: "Developed responsive web apps.",
    },
    {
      company: "Innovatech Labs",
      role: "Full Stack Developer",
      startDate: "Jan 2023",
      endDate: "Present",
      description: "Worked on full stack projects using React.",
    },
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      techStack: ["React", "Node"],
      description: "Built a full-featured e-commerce platform.",
      link: "github.com/shop",
    },
    {
      title: "Social Media Clone",
      techStack: ["Next.js", "Mongo"],
      description: "Social media clone with auth.",
      link: "github.com/social",
    },
  ],
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Postgres"] },
  ],
  summary:
    "Highly motivated full stack developer with 3 years of experience...",
  languages: ["English", "Spanish", "Hindi"],
};

export type ResumeData = {
  personal: {
    name: string;
    email: string;
    phone: string;
    location: string;
    headline: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  achievements: string[];
  certifications: {
    title: string;
    issuer: string;
    year: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
    score: string;
  }[];
  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  projects: {
    title: string;
    techStack: string[];
    description: string;
    link: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  summary: string;
  languages: string[];
};
