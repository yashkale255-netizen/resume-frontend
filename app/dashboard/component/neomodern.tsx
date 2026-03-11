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
const NeoModernTemplate = ({
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
    <div className="w-[210mm] min-h-[296mm] mx-auto bg-slate-50 flex overflow-hidden border-4 border-slate-900 shadow-[20px_20px_0px_0px_rgba(15,23,42,1)]">
      {/* Dark Sidebar */}
      <aside className="w-1/3 bg-slate-900 text-slate-200 p-8 flex flex-col justify-between">
        <div>
          <div className="h-16 w-16 bg-blue-500 rounded-full mb-6 flex items-center justify-center text-3xl font-black italic">
            {resumeData.personal.name.charAt(0)}
          </div>
          <h1 className="text-2xl font-black uppercase leading-none mb-2">
            {resumeData.personal.name}
          </h1>
          <p className="text-blue-400 font-bold text-xs uppercase tracking-tighter mb-8">
            {resumeData.personal.headline}
          </p>

          <div className="space-y-4 text-[10px]">
            <div>
              <p className="text-slate-500 font-bold uppercase mb-1">Contact</p>
              <p>{resumeData.personal.email}</p>
              <p>{resumeData.personal.phone}</p>
              <p>{resumeData.personal.location}</p>
            </div>
            <div>
              <p className="text-slate-500 font-bold uppercase mb-1">Stack</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {resumeData.skills
                  .flatMap((s) => s.items)
                  .slice(0, 10)
                  .map((skill, i) => (
                    <span
                      key={i}
                      className="bg-slate-800 border border-slate-700 px-2 py-1 rounded-sm text-[9px]"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6">
          <p className="text-[10px] font-bold text-slate-500 mb-2 uppercase">
            Education
          </p>
          {resumeData.education.map((edu, i) => (
            <div key={i} className="mb-3">
              <p className="text-[11px] font-bold">{edu.degree}</p>
              <p className="text-[10px] text-slate-400">{edu.institution}</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-2/3 bg-white p-10">
        <section className="mb-8">
          <h2 className="text-lg font-black uppercase italic border-b-4 border-slate-900 inline-block mb-4">
            About Me
          </h2>
          <p className="text-[12px] text-slate-600 leading-relaxed">
            {resumeData.summary}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-black uppercase italic border-b-4 border-slate-900 inline-block mb-4">
            Work
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map((exp, i) => (
              <div
                key={i}
                className="relative pl-4 border-l-2 border-slate-100"
              >
                <div className="flex justify-between items-baseline">
                  <h3 className="font-black text-slate-800 uppercase text-xs">
                    {exp.role}
                  </h3>
                  <span className="text-[9px] font-bold bg-slate-100 px-2 py-0.5 rounded">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="text-[10px] text-blue-600 font-black mb-2 uppercase">
                  {exp.company}
                </p>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase italic border-b-4 border-slate-900 inline-block mb-4">
            Key Projects
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {resumeData.projects.map((project, i) => (
              <div
                key={i}
                className="border-2 border-slate-900 p-3 hover:bg-yellow-50 transition-colors"
              >
                <h3 className="font-black text-[11px] uppercase">
                  {project.title}
                </h3>
                <p className="text-[10px] text-slate-500 mb-2 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.techStack.map((t, idx) => (
                    <span key={idx} className="text-[9px] font-black underline">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NeoModernTemplate;
