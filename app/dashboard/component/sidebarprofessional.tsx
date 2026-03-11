import { ResumeData } from "@/app/types/resumedata";
import { div } from "framer-motion/client";
import React, { ReactElement } from "react";

type sidebarResume = {
  data: ResumeData;
};
const SidebarResume = ({ data }: sidebarResume): ReactElement => {
  return (
    <div className="bg-gray-100 min-h-screen p-0 sm:p-8 print:p-0">
      {/* A4 Container */}
      <div className="mx-auto bg-white shadow-xl w-full max-w-[210mm] min-h-[297mm] flex flex-row print:shadow-none print:w-[210mm] print:h-[297mm]">
        {/* LEFT SIDEBAR - 1/3 Width */}
        <aside className="w-1/3 bg-slate-800 text-slate-100 p-8 flex flex-col gap-8 print:bg-slate-800 print:text-white">
          {/* Contact Section */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-700 pb-1">
              Contact
            </h2>
            <div className="space-y-3 text-sm break-words">
              <p className="flex flex-col">
                <span className="font-semibold text-slate-300">Email</span>
                {data.personal.email}
              </p>
              <p className="flex flex-col">
                <span className="font-semibold text-slate-300">Phone</span>
                {data.personal.phone}
              </p>
              <p className="flex flex-col">
                <span className="font-semibold text-slate-300">Location</span>
                {data.personal.location}
              </p>
              {data.personal.linkedin && (
                <p className="flex flex-col">
                  <span className="font-semibold text-slate-300">LinkedIn</span>
                  <span className="truncate">
                    {data.personal.linkedin.replace("https://", "")}
                  </span>
                </p>
              )}
            </div>
          </section>

          {/* Skills Section */}
          {data.skills?.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-700 pb-1">
                Expertise
              </h2>
              <div className="space-y-4">
                {data.skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h3 className="text-xs font-bold text-slate-300 mb-1">
                      {skillGroup.category}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {skillGroup.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-700 pb-1">
                Languages
              </h2>
              <ul className="text-sm space-y-1 text-slate-300">
                {data.languages.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Education - Sidebar placement for balance */}
          {data.education?.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-700 pb-1">
                Education
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, idx) => (
                  <div key={idx} className="text-sm">
                    <p className="font-bold text-slate-200">{edu.degree}</p>
                    <p className="text-slate-400">{edu.institution}</p>
                    <p className="text-slate-400">{edu.score}</p>
                    <p className="text-xs text-slate-500 mt-1 italic">
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>

        {/* MAIN CONTENT - 2/3 Width */}
        <main className="w-2/3 p-10 flex flex-col gap-8">
          {/* Header */}
          <header>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2 leading-tight">
              {data.personal.name}
            </h1>
            <p className="text-xl font-medium text-slate-600 mb-2">
              {data.personal.headline}
            </p>
            <p className="text-base font-normal text-slate-600 mb-4">
              {data.personal.portfolio}
            </p>
            <div className="w-16 h-1 bg-slate-800 rounded"></div>
          </header>

          {/* Professional Summary */}
          {data.summary && (
            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide mb-3">
                Profile
              </h2>
              <p className="text-slate-600 leading-relaxed text-[0.95rem]">
                {data.summary}
              </p>
            </section>
          )}

          {/* Work Experience */}
          {data.experience?.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide mb-4 flex items-center">
                Experience
              </h2>
              <div className="space-y-6">
                {data.experience.map((job, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-slate-800 text-lg">
                        {job.role}
                      </h3>
                      <span className="text-sm font-semibold text-slate-500">
                        {job.startDate} - {job.endDate}
                      </span>
                    </div>
                    <p className="text-md font-medium text-slate-700 mb-2">
                      {job.company}{" "}
                      {/* <span className="text-slate-400 font-normal">
                        | {job.company}
                      </span> */}
                    </p>
                    <p className="text-md font-medium text-slate-700 mb-2">
                      {job.description}{" "}
                      {/* <span className="text-slate-400 font-normal">
                        | {job.description}
                      </span> */}
                    </p>
                    {/* <ul className="list-disc ml-5 space-y-1.5">
                      {job.description.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-slate-600 text-sm leading-relaxed"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul> */}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects?.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide mb-4">
                Key Projects
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {data.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="p-3 border border-slate-100 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-slate-800">
                        {project.title}
                      </h3>
                      {project.link && (
                        <span className="text-xs text-blue-600 underline">
                          {project.link}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-2">
                      {project.description}
                    </p>
                    {/* <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div> */}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Two-column Footer for Certificates/Achievements */}
          <div className="grid grid-cols-2 gap-8 mt-auto pt-4 border-t border-slate-100">
            {/* {data.certifications && data.certifications.length > 0 && (
              <section>
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                  Certifications
                </h2>
                <ul className="text-xs space-y-1 text-slate-600 list-inside list-disc">
                  {data.certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>
              </section>
            )} */}
            {data.achievements && data.achievements.length > 0 && (
              <section>
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                  Achievements
                </h2>
                <ul className="text-xs space-y-1 text-slate-600 list-inside list-disc">
                  {data.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </main>
      </div>

      {/* CSS for Print (A4 Specifics) */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .min-h-screen {
            min-height: auto;
          }
          .p-0 {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SidebarResume;
