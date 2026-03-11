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
const TechMinimal = ({
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
    <div className="w-[210mm] h-[297mm] mx-auto bg-white p-12 flex flex-col shadow-none border-none overflow-hidden text-slate-800">
      {/* Top Section */}
      <div className="flex-grow">
        <header className="flex justify-between items-start border-b-4 border-slate-900 pb-8 mb-10">
          <div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
              ALEX RIVERA
            </h1>
            <p className="text-lg font-bold text-blue-600 tracking-widest uppercase mt-2">
              Senior Full Stack Engineer
            </p>
          </div>
          <div className="text-right space-y-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            <p>{resumeData.personal.location}</p>
            <p className="text-slate-900">{resumeData.personal.email}</p>
            <p>{resumeData.personal.phone}</p>
          </div>
        </header>

        <main className="grid grid-cols-[1.5fr_1fr] gap-16">
          <div className="space-y-12">
            <section>
              <h3 className="text-[12px] font-black uppercase mb-4 tracking-tighter bg-slate-900 text-white px-2 inline-block">
                Professional Summary
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                {resumeData.summary}
              </p>
            </section>

            <section>
              <h3 className="text-[12px] font-black uppercase mb-6 tracking-tighter bg-slate-900 text-white px-2 inline-block">
                Experience
              </h3>
              <div className="space-y-8">
                {resumeData.experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900 text-sm">
                        {exp.role}
                      </h4>
                      <span className="text-[10px] font-black text-slate-400 uppercase">
                        {exp.startDate} — {exp.endDate}
                      </span>
                    </div>
                    <p className="text-blue-600 font-bold text-[11px] mb-2 uppercase">
                      {exp.company}
                    </p>
                    <p className="text-[12px] text-slate-600">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="text-[12px] font-black uppercase mb-6 tracking-tighter bg-slate-900 text-white px-2 inline-block">
                Technical Expertise
              </h3>
              <div className="space-y-6">
                {resumeData.skills.map((skill, i) => (
                  <div key={i}>
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">
                      {skill.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="border border-slate-200 px-2 py-1 text-[10px] font-bold text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* FIXED FOOTER */}
      <footer className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-center">
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic pr-4">
          Generated via AI Resume Builder
        </span>
        <div className="h-2 w-24 bg-blue-600"></div>
      </footer>
    </div>
  );
};

export default TechMinimal;
