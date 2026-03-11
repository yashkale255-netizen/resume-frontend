import { ResumeData } from "@/app/types/resumedata";
import React from "react";

/**
 * Resume Builder SaaS Component
 * Focus: High ATS Parse-rate, Print-optimized, Modern SaaS Aesthetic
 */

type sidebarResume = {
  data: ResumeData;
};

export default function PromptionalTemplate({ data }: sidebarResume) {
  return (
    <div className="max-w-[800px] mx-auto bg-white p-[1in] text-slate-800 shadow-lg print:shadow-none print:p-0 font-sans leading-relaxed">
      {/* Header */}
      <header className="border-b-2 border-slate-900 pb-6 mb-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 uppercase">
          {data.personal.name}
        </h1>
        <p className="text-xl font-medium text-slate-600 mt-1">
          {data.personal.headline}
        </p>

        <div className="mt-4 flex flex-wrap gap-y-1 gap-x-4 text-sm text-slate-600">
          <span className="flex items-center">{data.personal.email}</span>
          <span className="flex items-center">{data.personal.phone}</span>
          <span className="flex items-center">{data.personal.location}</span>
          {data.personal.linkedin && <span>{data.personal.linkedin}</span>}
          {data.personal.github && <span>{data.personal.github}</span>}
          {data.personal.portfolio && <span>{data.personal.portfolio}</span>}
        </div>
      </header>

      <div className="space-y-6">
        {/* Summary */}
        {data.summary && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200">
              Professional Summary
            </h2>
            <p className="text-[15px] text-slate-700 leading-normal">
              {data.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-200">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {data.experience.map((exp, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900 text-base">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-slate-600">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs italic text-slate-500">
                      {exp.company}
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      {exp.description}
                    </span>
                  </div>
                  {/* <ul className="list-disc ml-5 space-y-1">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="text-[14px] text-slate-700 pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul> */}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-1">
              {data.skills.map((skillGroup, index) => (
                <p key={index} className="text-[14px]">
                  <span className="font-bold text-slate-800">
                    {skillGroup.category}:{" "}
                  </span>
                  <span className="text-slate-700">
                    {skillGroup.items.join(", ")}
                  </span>
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-200">
              Selected Projects
            </h2>
            <div className="space-y-4">
              {data.projects.map((project, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900 uppercase text-sm tracking-wide">
                      {project.title}{" "}
                      {project.link && (
                        <span className="text-xs font-normal lowercase italic ml-1">
                          ({project.link})
                        </span>
                      )}
                    </h3>
                  </div>
                  <p className="text-[14px] text-slate-700 mt-1 italic">
                    {project.description}
                  </p>
                  <p className="text-[13px] text-slate-600 mt-1 font-medium">
                    <span className="font-semibold italic text-slate-500">
                      Tech Stack:
                    </span>{" "}
                    {project.techStack.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-200">
              Education
            </h2>
            <div className="space-y-3">
              {data.education.map((edu, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start break-inside-avoid"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 text-[15px]">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-slate-700">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-slate-600 block">
                      {edu.score}
                    </span>
                    <span className="text-sm font-medium text-slate-600 block">
                      {edu.year}
                    </span>
                    {/* {edu.location && <span className="text-xs text-slate-500 italic">{edu.location}</span>} */}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Grid: Certifications, Achievements, Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* {data.certifications && data.certifications.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200">
                Certifications
              </h2>
              <ul className="list-disc ml-5 space-y-1">
                {data.certifications.map((cert, index) => (
                  <li key={index} className="text-[13px] text-slate-700">{cert}</li>
                ))}
              </ul>
            </section>
          )} */}

          {data.achievements && data.achievements.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200">
                Achievements
              </h2>
              <ul className="list-disc ml-5 space-y-1">
                {data.achievements.map((ach, index) => (
                  <li key={index} className="text-[13px] text-slate-700">
                    {ach}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {data.languages && data.languages.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200">
                Languages
              </h2>
              <p className="text-[13px] text-slate-700">
                {data.languages.join(" • ")}
              </p>
            </section>
          )}
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          @page {
            margin: 0;
          }
          .break-inside-avoid {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
