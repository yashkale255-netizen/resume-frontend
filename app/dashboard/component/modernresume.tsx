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
const ModernResume = ({ data }: TraditionalTemplateProps): ReactElement => {
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
    <div className="w-[210mm] min-h-[296mm] mx-auto bg-white text-slate-800 p-12 flex flex-col justify-between">
      <div>
        {/* Header - Stays at top */}
        <header className="border-b-2 border-blue-600 pb-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 leading-none">
                {data?.personal?.name || resumeData.personal.name}
              </h1>
              <p className="text-xl text-blue-600 font-medium mt-2">
                {data?.personal?.headline || resumeData.personal.headline}
              </p>
            </div>
            <div className="text-right text-[12px] text-slate-600 space-y-1">
              <div className="flex items-center justify-end gap-1">
                <Mail size={13} />{" "}
                {data?.personal?.email || resumeData.personal.email}
              </div>
              <div className="flex items-center justify-end gap-1">
                <Phone size={13} />{" "}
                {data?.personal?.phone || resumeData.personal.phone}
              </div>
              <div className="flex items-center justify-end gap-1">
                <MapPin size={13} />{" "}
                {data?.personal?.location || resumeData.personal.location}
              </div>
              <div className="flex items-center justify-end gap-1 text-blue-600 font-bold">
                <Globe size={13} />{" "}
                {data?.personal?.portfolio || resumeData.personal.portfolio}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Grid - increased gap */}
        <main className="grid grid-cols-[1.8fr_1fr] gap-12">
          {/* Left Column - Increased section spacing */}
          <div className="space-y-10">
            <section>
              <h2 className="text-[14px] font-bold uppercase tracking-widest text-slate-900 mb-3 border-l-4 border-blue-600 pl-3">
                Summary
              </h2>
              <p className="text-[13px] text-slate-600 leading-relaxed italic">
                "{data?.summary || resumeData.summary}"
              </p>
            </section>

            <section>
              <h2 className="text-[14px] font-bold uppercase tracking-widest text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">
                Experience
              </h2>
              {data?.experience ? (
                <div className="space-y-6">
                  {data?.experience?.map((exp, i) => (
                    <div key={i} className="text-[13px]">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span className="text-sm">{exp?.role}</span>
                        <span className="text-slate-500 font-medium">
                          {exp?.startDate} - {exp?.endDate}
                        </span>
                      </div>
                      <p className="text-blue-600 font-bold mb-2 uppercase text-[11px] tracking-wide">
                        {exp?.company}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {exp?.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {resumeData?.experience?.map((exp, i) => (
                    <div key={i} className="text-[13px]">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span className="text-sm">{exp?.role}</span>
                        <span className="text-slate-500 font-medium">
                          {exp?.startDate} - {exp?.endDate}
                        </span>
                      </div>
                      <p className="text-blue-600 font-bold mb-2 uppercase text-[11px] tracking-wide">
                        {exp?.company}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {exp?.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section>
              <h2 className="text-[14px] font-bold uppercase tracking-widest text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">
                Projects
              </h2>
              <div className="space-y-4">
                {data?.projects?.map((project, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-50 border border-slate-100 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-[13px] text-slate-900">
                        {project?.title}
                      </h3>
                      <ExternalLink size={14} className="text-blue-600" />
                    </div>
                    <p className="text-[12px] text-slate-600 mb-3 leading-snug">
                      {project?.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project?.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-500 font-medium uppercase tracking-tighter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-10 border-l border-slate-100 pl-8">
            <section>
              <h2 className="text-[14px] font-bold uppercase tracking-widest text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">
                Skills
              </h2>
              <div className="space-y-5">
                {data?.skills?.map((skill, i) => (
                  <div key={i}>
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase mb-2 tracking-widest">
                      {skill?.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill?.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md font-medium tracking-wide"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-[14px] font-bold uppercase tracking-widest text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">
                Education
              </h2>
              {data?.education?.map((edu, i) => (
                <div key={i} className="mb-4 text-[12px]">
                  <p className="font-bold text-slate-900">{edu?.degree}</p>
                  <p className="text-slate-600">{edu?.institution}</p>
                  <p className="text-slate-400 font-medium">{edu?.year}</p>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-[14px] font-bold uppercase tracking-widest text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">
                Languages
              </h2>
              <div className="flex flex-wrap gap-2">
                {data?.languages?.map((l, i) => (
                  <span
                    key={i}
                    className="text-[12px] text-slate-600 font-medium bg-slate-50 px-2 py-1 rounded border border-slate-100"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Footer - This will now be forced to the very bottom */}
      <footer className="mt-8 pt-6 border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">
          References available upon request
        </p>
      </footer>
    </div>
  );
};

export default ModernResume;
