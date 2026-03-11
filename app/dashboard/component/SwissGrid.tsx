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
const SwissGrid = ({ data }: TraditionalTemplateProps): ReactElement => {
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
    <div className="w-[210mm] h-[297mm] mx-auto bg-white p-[20mm] flex flex-col shadow-none border-none overflow-hidden font-sans text-slate-900">
      <div className="flex-grow">
        {/* Header Grid */}
        <header className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-8">
            <h1 className="text-6xl font-black leading-none tracking-tighter uppercase mb-4">
              {resumeData.personal.name.split(" ")[0]}
              <br />
              {resumeData.personal.name.split(" ")[1]}
            </h1>
            <div className="h-4 w-24 bg-red-600"></div>
          </div>
          <div className="col-span-4 text-[11px] font-bold uppercase tracking-widest pt-2">
            <p className="mb-1">{resumeData.personal.headline}</p>
            <p className="text-slate-400">{resumeData.personal.location}</p>
            <p className="mt-4">{resumeData.personal.email}</p>
            <p>{resumeData.personal.phone}</p>
          </div>
        </header>

        <main className="grid grid-cols-12 gap-4">
          {/* Summary / Left Col */}
          <div className="col-span-4 border-t-4 border-slate-900 pt-4">
            <h2 className="text-[10px] font-black uppercase tracking-widest mb-6 italic">
              About
            </h2>
            <p className="text-[12px] leading-snug font-medium text-slate-700">
              {resumeData.summary}
            </p>
          </div>

          {/* Experience / Right Col */}
          <div className="col-span-8 border-t-4 border-slate-900 pt-4">
            <h2 className="text-[10px] font-black uppercase tracking-widest mb-6 italic">
              Experience
            </h2>
            <div className="space-y-10">
              {resumeData.experience.map((exp, i) => (
                <div key={i} className="grid grid-cols-8 gap-2">
                  <div className="col-span-2 text-[10px] font-bold text-slate-400 uppercase">
                    {exp.startDate} — {exp.endDate}
                  </div>
                  <div className="col-span-6">
                    <h4 className="text-sm font-black uppercase mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-red-600 font-bold text-[10px] uppercase mb-2">
                      {exp.company}
                    </p>
                    <p className="text-[11px] leading-relaxed text-slate-600 pr-4">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Skills Section */}
        <div className="grid grid-cols-12 gap-4 mt-16 border-t border-slate-100 pt-8">
          <div className="col-span-4">
            <h2 className="text-[10px] font-black uppercase tracking-widest italic">
              Expertise
            </h2>
          </div>
          <div className="col-span-8 flex flex-wrap gap-x-8 gap-y-4">
            {resumeData.skills.map((skill, i) => (
              <div key={i} className="min-w-[120px]">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">
                  {skill.category}
                </p>
                <ul className="text-[11px] font-bold space-y-1">
                  {skill.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-auto flex justify-between items-end border-t-2 border-slate-900 pt-4">
        <p className="text-[9px] font-black uppercase">
          Standard A4 / 210x297mm
        </p>
        <p className="text-[9px] font-black uppercase text-red-600">
          CONFIDENTIAL 2026
        </p>
      </footer>
    </div>
  );
};

export default SwissGrid;
