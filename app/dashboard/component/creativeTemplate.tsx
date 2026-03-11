import { ResumeData } from "@/app/types/resumedata";
import React from "react";


export type Props = {
  data: ResumeData;
};

export default function CreativeResumeTemplate({ data }: Props) {
//   if (!data) return null;

  const {
    personal,
    summary,
    skills,
    experience,
    projects,
    education,
    certifications,
    languages,
    achievements,
  } = data;

  const renderDescription = (desc: string | string[]) => {
    if (Array.isArray(desc)) {
      return (
        <ul className="list-disc ml-4 space-y-1 text-[13px] text-slate-700 leading-relaxed">
          {desc.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-[13px] text-slate-700 leading-relaxed">{desc}</p>;
  };

  return (
    <div className="bg-slate-100 min-h-screen py-8 print:py-0 print:bg-white flex justify-center font-sans text-slate-900">
      {/* A4 Page Container */}
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl print:shadow-none overflow-hidden flex flex-col relative">
        {/* Creative Header */}
        <header className="relative bg-indigo-900 text-white px-10 pt-12 pb-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-bl-full opacity-20 -z-0"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400 rounded-tr-full opacity-20 -z-0"></div>

          <div className="relative z-10">
            <h1 className="text-5xl font-black tracking-tight mb-2 uppercase">
              {personal.name}
            </h1>
            {personal.headline && (
              <p className="text-xl font-light text-indigo-200 tracking-wide mb-6">
                {personal.headline}
              </p>
            )}

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-indigo-100 font-medium">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                {personal.email}
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                {personal.phone}
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                {personal.location}
              </span>
              {personal.linkedin && (
                <span className="flex items-center gap-1">
                  <span className="font-bold">in/</span>{" "}
                  {personal.linkedin.replace(
                    /^https?:\/\/(www\.)?linkedin\.com\/in\//,
                    "",
                  )}
                </span>
              )}
              {personal.github && (
                <span className="flex items-center gap-1">
                  <span className="font-bold">git/</span>{" "}
                  {personal.github.replace(
                    /^https?:\/\/(www\.)?github\.com\//,
                    "",
                  )}
                </span>
              )}
              {personal.portfolio && (
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    ></path>
                  </svg>
                  {personal.portfolio.replace(/^https?:\/\/(www\.)?/, "")}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* 2-Column Body */}
        <div className="flex flex-1 grid-cols-12 md:grid print:grid">
          {/* Main Content Column */}
          <main className="col-span-8 p-10 space-y-7">
            {/* Summary */}
            {summary && (
              <section>
                <h2 className="text-xl font-bold text-indigo-900 border-b-2 border-indigo-100 pb-1 mb-3">
                  Profile
                </h2>
                <p className="text-[14px] leading-relaxed text-slate-700 font-medium">
                  {summary}
                </p>
              </section>
            )}

            {/* Experience */}
            {experience && experience.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-indigo-900 border-b-2 border-indigo-100 pb-1 mb-4">
                  Experience
                </h2>
                <div className="space-y-5">
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-4 border-l-2 border-indigo-200"
                    >
                      <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-[5px] top-1.5"></div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-base font-bold text-slate-900">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>
                      <div className="text-[14px] font-semibold text-slate-600 mb-2">
                        {exp.company}
                      </div>
                      {renderDescription(exp.description)}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {projects && projects.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-indigo-900 border-b-2 border-indigo-100 pb-1 mb-4">
                  Projects
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 p-4 rounded-lg border border-slate-100"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[15px] font-bold text-slate-900">
                          {project.title}
                        </h3>
                        {project.link && (
                          <a
                            href={project.link}
                            className="text-xs text-indigo-600 hover:underline break-all ml-2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            View Link
                          </a>
                        )}
                      </div>
                      <div className="mb-3">
                        {renderDescription(project.description)}
                      </div>
                      {project.techStack && project.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] uppercase tracking-wider font-bold bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Sidebar Column */}
          <aside className="col-span-4 bg-slate-50 p-10 space-y-7 border-l border-slate-200 print:bg-slate-50/50">
            {/* Skills */}
            {skills && skills.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-1 mb-4">
                  Skills
                </h2>
                <div className="space-y-4">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-1.5">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[12px] font-medium bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {education && education.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-1 mb-4">
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="text-[14px] font-bold text-slate-900 leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-[13px] text-slate-600 mt-0.5">
                        {edu.institution}
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs font-semibold text-slate-500">
                          {edu.year}
                        </span>
                        {edu.score && (
                          <span className="text-xs font-bold text-indigo-600">
                            {edu.score}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-1 mb-4">
                  Certifications
                </h2>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index}>
                      <h3 className="text-[13px] font-bold text-slate-800 leading-tight">
                        {cert.title}
                      </h3>
                      <div className="flex justify-between text-xs text-slate-500 mt-0.5">
                        <span>{cert.issuer}</span>
                        <span className="font-semibold">{cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {languages && languages.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-1 mb-3">
                  Languages
                </h2>
                <ul className="text-[13px] font-medium text-slate-700 space-y-1">
                  {languages.map((lang, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
                      {lang}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Achievements */}
            {achievements && achievements.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-1 mb-3">
                  Achievements
                </h2>
                <ul className="text-[13px] text-slate-700 space-y-2">
                  {achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 leading-tight"
                    >
                      <svg
                        className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
