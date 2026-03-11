import React, { ReactElement } from "react";
import {
  Mail,
  Globe,
  Linkedin,
  Github,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import { ResumeData } from "@/app/types/resumedata";
type TraditionalTemplateProps = {
  data: ResumeData;
};
const TraditionalTemplate = ({
  data
}: TraditionalTemplateProps): ReactElement => {
  // This data mirrors your ResumeSchema structure
  const resumeData = {
    personal: {
      name: "Alex Rivera",
      email: "alex.rivera@devmail.com",
      phone: "+1 (555) 012-3456",
      location: "San Francisco, CA",
      headline: "Senior Full Stack Engineer",
      linkedin: "linkedin.com/in/arivera-dev",
      github: "github.com/arivera-codes",
      portfolio: "arivera.dev",
    },
    summary:
      "Strategic Full Stack Developer with 6+ years of experience building scalable web applications. Expert in React and Node.js ecosystems with a proven track record of optimizing performance by 40% and leading cross-functional teams to deliver high-impact products.",
    skills: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
      },
      {
        category: "Cloud/DevOps",
        items: ["AWS", "Docker", "CI/CD", "Vercel", "Terraform"],
      },
    ],
    experience: [
      {
        company: "TechFlow Systems",
        role: "Senior Software Engineer",
        startDate: "Jan 2021",
        endDate: "Present",
        description:
          "Architected a multi-tenant SaaS platform serving 50k+ active users. Improved API response times by 30% through Redis caching implementation.",
      },
      {
        company: "BrightPixel Agency",
        role: "Full Stack Developer",
        startDate: "Jun 2018",
        endDate: "Dec 2020",
        description:
          "Developed custom e-commerce solutions for enterprise clients. Integrated third-party payment gateways and automated inventory management.",
      },
    ],
    projects: [
      {
        title: "Omni-Task AI",
        techStack: ["Next.js", "OpenAI API", "Prisma"],
        description:
          "An AI-powered task management tool that prioritizes workflows based on deadline urgency and team capacity.",
        link: "https://omnitask.io",
      },
    ],
    education: [
      {
        degree: "B.S. in Computer Science",
        institution: "State University of Technology",
        year: "2018",
        score: "3.9 GPA",
      },
    ],
    certifications: [
      {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2023",
      },
      {
        title: "Professional Scrum Master I",
        issuer: "Scrum.org",
        year: "2022",
      },
    ],
    languages: [
      "English (Native)",
      "Spanish (Fluent)",
      "German (Conversational)",
    ],
    achievements: [
      "Winner of Global FinTech Hackathon 2022",
      "Published 'The Future of Serverless' in WebDev Magazine",
      "Mentored 10+ junior developers into mid-level roles",
    ],
  };

  return (
    <div className="w-[210mm] min-h-[296mm] mx-auto bg-white text-slate-900 p-12 shadow-sm border border-gray-200">
      {/* Header - Centered */}
      <header className="text-center border-b pb-6 mb-6">
        <h1 className="text-3xl font-serif font-bold uppercase tracking-tight">
          {resumeData.personal.name}
        </h1>
        <p className="text-blue-700 font-medium my-1">
          {resumeData.personal.headline}
        </p>
        <div className="flex justify-center gap-4 text-[11px] text-slate-500 mt-2">
          <span>{resumeData.personal.location}</span>
          <span>•</span>
          <span>{resumeData.personal.phone}</span>
          <span>•</span>
          <span className="text-blue-600 underline">
            {resumeData.personal.email}
          </span>
        </div>
        <div className="flex justify-center gap-3 text-[10px] mt-2 font-semibold text-slate-400">
          <span>LINKEDIN: {resumeData.personal.linkedin}</span>
          <span>GITHUB: {resumeData.personal.github}</span>
        </div>
      </header>

      <div className="space-y-6">
        {/* Professional Summary */}
        <section>
          <h2 className="text-sm font-bold border-b border-slate-800 mb-2 uppercase tracking-widest">
            Professional Profile
          </h2>
          <p className="text-[12px] leading-relaxed text-slate-700">
            {resumeData.summary}
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-sm font-bold border-b border-slate-800 mb-3 uppercase tracking-widest">
            Experience
          </h2>
          <div className="space-y-4">
            {resumeData.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between text-[12px] font-bold">
                  <span>{exp.company}</span>
                  <span className="font-normal italic">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="text-[12px] font-medium text-slate-600">
                  {exp.role}
                </p>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills - Grid layout inside traditional */}
        <section>
          <h2 className="text-sm font-bold border-b border-slate-800 mb-3 uppercase tracking-widest">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[11px]">
            {resumeData.skills.map((skill, i) => (
              <div key={i} className="flex gap-2">
                <span className="font-bold min-w-[80px]">
                  {skill.category}:
                </span>
                <span className="text-slate-600">{skill.items.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certs - Side by Side */}
        <div className="grid grid-cols-2 gap-8">
          <section>
            <h2 className="text-sm font-bold border-b border-slate-800 mb-2 uppercase tracking-widest">
              Education
            </h2>
            {resumeData.education.map((edu, i) => (
              <div key={i} className="text-[11px] mb-2">
                <p className="font-bold">{edu.institution}</p>
                <p>
                  {edu.degree} • {edu.year}
                </p>
              </div>
            ))}
          </section>
          <section>
            <h2 className="text-sm font-bold border-b border-slate-800 mb-2 uppercase tracking-widest">
              Languages
            </h2>
            <p className="text-[11px] text-slate-600 italic">
              {resumeData.languages.join(" | ")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TraditionalTemplate;
