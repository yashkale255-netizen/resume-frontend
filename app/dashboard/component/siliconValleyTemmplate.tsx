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
const SilliconValleyTemplate = ({
  data
}: TraditionalTemplateProps): ReactElement =>  {
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
    <div className="w-[210mm] h-[297mm] mx-auto bg-slate-50 flex flex-col shadow-none border-none overflow-hidden">
      {/* Dark Silicon Header */}
      <header className="bg-slate-900 text-white p-12">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-light tracking-tight">
              {resumeData.personal.name.split(" ")[0]}{" "}
              <span className="font-bold">
                {resumeData.personal.name.split(" ")[1]}
              </span>
            </h1>
            <p className="text-blue-400 font-mono text-sm mt-1">
              {resumeData.personal.headline}
            </p>
          </div>
          <div className="text-right font-mono text-[10px] text-slate-400 space-y-1">
            <p>{resumeData.personal.email}</p>
            <p>{resumeData.personal.phone}</p>
            <p className="text-white underline">{resumeData.personal.github}</p>
          </div>
        </div>
      </header>

      <main className="p-12 flex-grow">
        <div className="grid grid-cols-12 gap-12 h-full">
          {/* Main Content */}
          <div className="col-span-8 space-y-10">
            <section>
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">
                Background
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {resumeData.summary}
              </p>
            </section>

            <section>
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-6">
                Execution
              </h3>
              <div className="space-y-8">
                {resumeData.experience.map((exp, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg font-bold text-slate-800">
                        {exp.company}
                      </h4>
                      <span className="font-mono text-[10px] text-slate-400">
                        {exp.startDate} // {exp.endDate}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-500 mb-2 italic">
                      {exp.role}
                    </p>
                    <p className="text-sm text-slate-600 leading-snug">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="col-span-4 space-y-10">
            <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills[0].items.map((item, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 text-slate-700 text-[10px] px-2 py-1 rounded font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="pl-2">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">
                Impact
              </h3>
              <ul className="space-y-4">
                {resumeData.achievements.map((ach, i) => (
                  <li key={i} className="text-[11px] text-slate-500 flex gap-2">
                    <span className="text-blue-600 font-bold">#</span> {ach}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Futuristic Footer */}
      <footer className="mt-auto p-12 pt-0 flex justify-between items-center text-[10px] font-mono text-slate-300">
        <div className="flex items-center gap-4">
          <span>{resumeData.personal.location}</span>
          <span className="h-1 w-1 bg-slate-200 rounded-full"></span>
          <span>BUILD_V.2026</span>
        </div>
        <p>REDACTED // SV_BASE</p>
      </footer>
    </div>
  );
};

export default SilliconValleyTemplate;
