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
const ModernCorporate = ({
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
    <div className="w-[210mm] h-[297mm] mx-auto bg-white flex overflow-hidden shadow-none border-none">
      {/* Sidebar - h-full ensures color reaches bottom */}
      <aside className="w-[75mm] bg-slate-900 text-white p-8 flex-shrink-0 h-full flex flex-col">
        <h1 className="text-3xl font-black uppercase leading-none mb-2 tracking-tighter">
          {resumeData.personal.name}
        </h1>
        <p className="text-blue-400 font-bold text-[11px] uppercase mb-10 tracking-widest">
          {resumeData.personal.headline}
        </p>

        <div className="space-y-10">
          <section>
            <h3 className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-[0.2em] border-b border-slate-800 pb-1">
              Contact
            </h3>
            <div className="text-[11px] space-y-3 text-slate-300">
              <p className="flex items-center gap-2">
                <Mail size={12} className="text-blue-400" />{" "}
                {resumeData.personal.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={12} className="text-blue-400" />{" "}
                {resumeData.personal.phone}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={12} className="text-blue-400" />{" "}
                {resumeData.personal.location}
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-[0.2em] border-b border-slate-800 pb-1">
              Expertise
            </h3>
            {resumeData.skills.map((s, i) => (
              <div key={i} className="mb-4">
                <p className="text-[9px] font-bold text-blue-400 uppercase mb-2">
                  {s.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-[9px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* This pushes to bottom of sidebar */}
        <div className="mt-auto">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            Education
          </p>
          <p className="text-[11px] text-white mt-1">
            {resumeData.education[0].degree}
          </p>
          <p className="text-[10px] text-slate-400">
            {resumeData.education[0].institution}
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-12 flex flex-col bg-white">
        <div className="flex-grow space-y-10">
          <section>
            <h2 className="text-sm font-black uppercase border-b-2 border-slate-900 pb-1 mb-4">
              Summary
            </h2>
            <p className="text-[12px] text-slate-600 leading-relaxed italic">
              "{resumeData.summary}"
            </p>
          </section>

          <section>
            <h2 className="text-sm font-black uppercase border-b-2 border-slate-900 pb-1 mb-5">
              Experience
            </h2>
            <div className="space-y-8">
              {resumeData.experience.map((exp, i) => (
                <div
                  key={i}
                  className="relative pl-4 border-l border-slate-100"
                >
                  <div className="absolute -left-[4.5px] top-1 h-2 w-2 rounded-full bg-blue-600"></div>
                  <div className="flex justify-between font-bold text-[13px] text-slate-900">
                    <span>{exp.role}</span>
                    <span className="text-slate-400 font-normal text-[11px]">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p className="text-blue-600 font-bold text-[11px] mb-2 uppercase tracking-wide">
                    {exp.company}
                  </p>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-black uppercase border-b-2 border-slate-900 pb-1 mb-5">
              Achievements
            </h2>
            <ul className="space-y-3">
              {resumeData.achievements.map((ach, i) => (
                <li
                  key={i}
                  className="text-[11px] flex items-start gap-3 text-slate-600"
                >
                  <span className="mt-1 h-1 w-1 rounded-full bg-blue-600"></span>
                  {ach}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="mt-auto pt-6 text-center border-t border-slate-50">
          <p className="text-[9px] text-slate-300 uppercase tracking-[0.4em]">
            One Page Resume Professional
          </p>
        </footer>
      </main>
    </div>
  );
};

export default ModernCorporate;
