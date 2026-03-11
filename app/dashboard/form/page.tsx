"use client";

import React, { useState, useRef, useEffect, ReactElement } from "react";
import { useSearchParams } from "next/navigation";
import {
  ChevronRight,
  ChevronLeft,
  Save,
  ZoomIn,
  LayoutTemplate,
  Plus,
  Trash2,
  MoreVertical,
} from "lucide-react";

// --- YOUR COMPONENT IMPORTS ---
// Assuming these components accept a prop called `data`
import ModernResume from "../component/modernresume";
import NeoModernTemplate from "../component/neomodern";
import SwissGrid from "../component/SwissGrid";
import SilliconValleyTemplate from "../component/siliconValleyTemmplate";
import ModernCorporate from "../component/modernCorporate";
import TechMinimal from "../component/TechMinimal";
import TraditionalTemplate from "../component/traditionalresume";
import SidebarResume from "../component/sidebarprofessional";
import { INITIAL_DATA, ResumeData } from "@/app/types/resumedata";
import { toast } from "sonner";
import PromptionalTemplate from "../component/promotionalcertificate";
import CreativeResumeTemplate from "../component/creativeTemplate";
// --- ZOOM CONTAINER COMPONENT (Amazon Effect) ---
const ZoomPreview = ({ children }: { children: React.ReactNode }) => {
  const [transform, setTransform] = useState("translate(0%, 0%) scale(1)");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    // Calculate mouse position as percentage
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    // Pan the element opposite to mouse movement to create "Lens" effect
    // Scale 1.5x (Adjust scale for more/less zoom)
    setTransform(`translate(${50 - x}%, ${50 - y}%) scale(1.5)`);
  };

  const handleMouseLeave = () => {
    setTransform("translate(0%, 0%) scale(1)");
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full overflow-hidden bg-zinc-100 border border-zinc-200 rounded-xl cursor-crosshair group shadow-inner"
    >
      <div className="absolute top-4 right-4 z-20 bg-black/80 text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 pointer-events-none">
        <ZoomIn size={12} /> Hover to Zoom
      </div>

      {/* The Resume Container */}
      <div
        style={{ transform, transformOrigin: "center center" }}
        className="w-full h-full flex items-start justify-center p-8 transition-transform duration-100 ease-out origin-center"
      >
        {/* We scale this wrapper to fit the template in the view usually, but zoom overrides it */}
        <div className="bg-white shadow-2xl min-w-[210mm] min-h-[297mm] origin-top scale-[0.45] md:scale-[0.55] lg:scale-[0.65]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function page() {
  type TemplateType = {
    id: string;
    name: string;
    difficulty: string;
    component: (props: { data: ResumeData }) => ReactElement;
    componentName: string;
  };
  const [isdataload, setisdataload] = useState(true);
  // --- TEMPLATES ARRAY ---
  const TEMPLATES: TemplateType[] = [
    {
      id: "modern",
      name: "The Modernist",
      difficulty: "ATS Friendly",
      component: ModernResume,
      componentName: "ModernResume",
    },
    {
      id: "neomodern",
      name: "The Modern",
      difficulty: "High Readability",
      component: NeoModernTemplate,
      componentName: "NeoModernTemplate",
    },
    {
      id: "swiss",
      name: "Swiss Minimal",
      difficulty: "Design Heavy",
      component: SwissGrid,
      componentName: "SwissGrid",
    },
    {
      id: "silicon",
      name: "The Sillicon vallley template",
      difficulty: "ATS Friendly",
      component: SilliconValleyTemplate,
      componentName: "SilliconValleyTemplate",
    },
    {
      id: "corporate",
      name: "The Modern Corporate",
      difficulty: "High Readability",
      component: ModernCorporate,
      componentName: "ModernCorporate",
    },
    {
      id: "minimal",
      name: "Tech Minimal",
      difficulty: "Design Heavy",
      component: TechMinimal,
      componentName: "TechMinimal",
    },
    {
      id: "traditional",
      name: "Traditional",
      difficulty: "Design Heavy",
      component: TraditionalTemplate,
      componentName: "TraditionalTemplate",
    },
    {
      id: "sidebar professional",
      name: "sidebar professinal",
      difficulty: "Design Heavy",
      component: SidebarResume,
      componentName: "sidebar professional",
    },
    {
      id: "Promotional template",
      name: "Promotional template",
      difficulty: "best for promotion",
      component: PromptionalTemplate,
      componentName: "Promotional template",
    },
    {
      id: "Creative Template",
      name: "Creative Template",
      difficulty: "finding job",
      component: CreativeResumeTemplate,
      componentName: "Creative Template",
    },
  ];
  const [originalresumetdata, setOriginalresumedata] =
    useState<ResumeData | null>(null);
  const [resumeData, setResumeData] = useState<ResumeData>(INITIAL_DATA);

  const searchParams = useSearchParams();
  const templateId = searchParams.get("template") || "modern";
  const [dataload, setdataisload] = useState(true);
  useEffect(() => {
    async function getresumedata() {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_RESUMEAPI_OPERATIONS}/get`,
        {
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
        },
      );
      let resdata = await res.json();
      if (resdata) {
        setOriginalresumedata(resdata?.resumedata);
        if (resdata?.resumedata) {
          const safeData = {
            ...INITIAL_DATA,
            ...resdata.resumedata,
            personal: {
              ...INITIAL_DATA.personal,
              ...(resdata.resumedata.personal || {}),
            },
          };

          setResumeData(safeData);
        }
      }
      setdataisload(false);
    }
    getresumedata();
  }, []);
  useEffect(() => {
    if (dataload) return;
    let timetosave = setTimeout(async () => {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_RESUMEAPI_OPERATIONS}/create`,
        {
          method: "post",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ ...resumeData }),
        },
      );
      if (res.ok) {
        toast.success("Auto Saved", {
          position: "top-right",
        });
      }
    }, 1500);
    return () => {
      clearTimeout(timetosave);
    };
  }, [resumeData]);

  const currentTemplateObj =
    TEMPLATES.find((t) => t.id === templateId) || TEMPLATES[0];

  const TemplateComponent = currentTemplateObj.component;

  const [currentStep, setCurrentStep] = useState(0);
  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      personal: {
        ...(prev.personal || {}),
        [name]: value,
      },
    }));
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeData((prev) => ({ ...prev, summary: e.target.value }));
  };

  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  // console.log("active menu delete : ", activeMenu);

  function deleteExperience(idx: number) {
    let filtereddata = resumeData.experience.filter(
      (el: any, id: number) => id !== idx,
    );
    setResumeData((prev) => ({
      ...prev,
      experience: filtereddata,
    }));
  }

  const deleteEducation = (id: number) => {
    let FilterData = resumeData.education.filter(
      (el: any, idx: number) => id !== idx,
    );

    setResumeData((prev) => ({
      ...prev,
      education: FilterData,
    }));
  };

  const deleteSkills = (id: number) => {
    let filterdata = resumeData?.skills?.filter(
      (el: any, idx: number) => id !== idx,
    );

    setResumeData((prev) => ({
      ...prev,
      skills: filterdata,
    }));
  };
  // --- STEPS CONFIGURATION ---
  const steps = [
    {
      title: "Personal Details",
      description: "Let's start with your contact info.",
      content: (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Full Name"
              name="name"
              value={resumeData?.personal?.name}
              onChange={handlePersonalChange}
            />
            <Input
              label="Job Title / Headline"
              name="headline"
              value={resumeData?.personal?.headline}
              onChange={handlePersonalChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Email"
              name="email"
              value={resumeData?.personal?.email}
              onChange={handlePersonalChange}
            />
            <Input
              label="Phone"
              name="phone"
              value={resumeData?.personal?.phone}
              onChange={handlePersonalChange}
            />
          </div>
          <Input
            label="Location"
            name="location"
            value={resumeData?.personal?.location}
            onChange={handlePersonalChange}
          />
        </div>
      ),
    },
    {
      title: "Social Links & Summary",
      description: "Where can people find your work?",
      content: (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="grid grid-cols-1 gap-4">
            <Input
              label="LinkedIn URL"
              name="linkedin"
              value={resumeData?.personal?.linkedin}
              onChange={handlePersonalChange}
            />
            <Input
              label="GitHub URL"
              name="github"
              value={resumeData?.personal?.github}
              onChange={handlePersonalChange}
            />
            <Input
              label="Portfolio URL"
              name="portfolio"
              value={resumeData?.personal?.portfolio}
              onChange={handlePersonalChange}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Professional Summary
            </label>
            <textarea
              className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none min-h-[120px] text-sm"
              value={resumeData?.summary}
              onChange={handleSummaryChange}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Experience",
      description: "Your recent work history.",
      extra: (
        <button
          className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg text-sm font-bold hover:bg-zinc-800 hover:scale-105 transition-all shadow-lg shadow-zinc-200"
          onClick={() => {
            setResumeData((prev) => ({
              ...prev,
              experience: [
                ...(prev.experience || {}),
                {
                  company: "Tech Solutions Inc.",
                  role: "Frontend Developer",
                  startDate: "Jan 2022",
                  endDate: "Dec 2022",
                  description: "Developed responsive web apps.",
                },
              ],
            }));
          }}
        >
          Add Experience
        </button>
      ),
      content: (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
          {resumeData?.experience?.map((exp, idx) => (
            <div
              key={idx}
              className="p-4 border border-zinc-200 rounded-lg bg-zinc-50/50 relative" // Added relative here
            >
              {/* Menu Icon & Popover */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() =>
                    setActiveMenu((prev) => (prev === idx ? null : idx))
                  }
                  className="p-1 hover:bg-zinc-200 rounded-full transition-colors"
                >
                  <MoreVertical size={16} className="text-zinc-500" />
                </button>

                {/* Popover */}
                {activeMenu === idx && (
                  <>
                    {/* Invisible backdrop to close menu when clicking outside */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setActiveMenu(null)}
                    />
                    <div className="absolute right-0 mt-1 w-32 bg-white border border-zinc-200 rounded-md shadow-lg z-20 overflow-hidden">
                      <button
                        onClick={() => deleteExperience(idx)}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={14} />
                        Delete Experience
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-sm text-zinc-600">
                  Position {idx + 1}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <Input
                  label="Company"
                  value={exp.company}
                  onChange={(e) => {
                    const newExp = [...resumeData?.experience];
                    newExp[idx].company = e.target.value;
                    setResumeData({ ...resumeData, experience: newExp });
                  }}
                />
                <Input
                  label="Role"
                  value={exp.role}
                  onChange={(e) => {
                    const newExp = [...resumeData?.experience];
                    newExp[idx].role = e.target.value;
                    setResumeData({ ...resumeData, experience: newExp });
                  }}
                />
              </div>

              <textarea
                className="w-full p-2 text-xs border border-zinc-200 rounded bg-white focus:outline-none focus:ring-1 focus:ring-zinc-400"
                rows={3}
                placeholder="Describe your responsibilities..."
                value={exp.description}
                onChange={(e) => {
                  const newExp = [...resumeData?.experience];
                  newExp[idx].description = e.target.value;
                  setResumeData({ ...resumeData, experience: newExp });
                }}
              />
              <div className="grid grid-cols-2 gap-3 mb-3">
                <Input
                  label="startDate"
                  value={exp.startDate}
                  onChange={(e) => {
                    const newExp = [...resumeData?.experience];
                    newExp[idx].startDate = e.target.value;
                    setResumeData({ ...resumeData, experience: newExp });
                  }}
                  className="bg-white"
                />
                <Input
                  label="endDate"
                  value={exp.endDate}
                  onChange={(e) => {
                    const newExp = [...resumeData?.experience];
                    newExp[idx].endDate = e.target.value;
                    setResumeData({ ...resumeData, experience: newExp });
                  }}
                  className="bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Education",
      description: "Academic background.",
      extra: (
        <button
          className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg text-sm font-bold hover:bg-zinc-800 hover:scale-105 transition-all shadow-lg shadow-zinc-200"
          onClick={() => {
            setResumeData((prev) => ({
              ...prev,
              education: [
                ...(prev.education || {}),
                {
                  degree: "Bachelor of Science in CS",
                  institution: "Univ. of California",
                  year: "2021",
                  score: "3.8 GPA",
                },
              ],
            }));
          }}
        >
          Add Education
        </button>
      ),
      content: (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
          {resumeData?.education?.map((edu, idx) => (
            <div
              key={idx}
              className="p-4 border border-zinc-200 rounded-lg bg-zinc-50/50 relative"
            >
              {/* Menu Icon & Popover */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() =>
                    setActiveMenu((prev) => (prev === idx ? null : idx))
                  }
                  className="p-1 hover:bg-zinc-200 rounded-full transition-colors"
                >
                  <MoreVertical size={16} className="text-zinc-500" />
                </button>

                {/* Popover */}
                {activeMenu === idx && (
                  <>
                    {/* Invisible backdrop to close menu when clicking outside */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setActiveMenu(null)}
                    />
                    <div className="absolute right-0 mt-1 w-32 bg-white border border-zinc-200 rounded-md shadow-lg z-20 overflow-hidden">
                      <button
                        onClick={() => deleteEducation(idx)}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={14} />
                        Delete Education
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-sm text-zinc-600">
                  Position {idx + 1}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <Input
                  label="Institution"
                  value={edu.institution}
                  onChange={(e) => {
                    const newEdu = [...resumeData?.education];
                    newEdu[idx].institution = e.target.value;
                    setResumeData({ ...resumeData, education: newEdu });
                  }}
                />
                <Input
                  label="Degree"
                  value={edu.degree}
                  onChange={(e) => {
                    const newEdu = [...resumeData?.education];
                    newEdu[idx].degree = e.target.value;
                    setResumeData({ ...resumeData, education: newEdu });
                  }}
                />
                <Input
                  label="Year"
                  value={edu.year}
                  onChange={(e) => {
                    const newEdu = [...resumeData?.education];
                    newEdu[idx].year = e.target.value;
                    setResumeData({ ...resumeData, education: newEdu });
                  }}
                />
                <Input
                  label="Score/GPA"
                  value={edu.score}
                  onChange={(e) => {
                    const newEdu = [...resumeData?.education];
                    newEdu[idx].score = e.target.value;
                    setResumeData({ ...resumeData, education: newEdu });
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Skills & Languages",
      description: "What are you good at?",
      extra: (
        <button
          className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg text-sm font-bold hover:bg-zinc-800 hover:scale-105 transition-all shadow-lg shadow-zinc-200"
          onClick={() => {
            setResumeData((prev) => ({
              ...prev,
              skills: [
                ...(prev.skills || {}),
                {
                  category: "Frontend",
                  items: ["React", "Next.js", "Tailwind"],
                },
              ],
            }));
          }}
        >
          Add Skill
        </button>
      ),
      content: (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
          {resumeData?.skills?.map((skill, idx) => (
            <div className="p-4 border border-zinc-200 rounded-lg relative">
              <div className="absolute top-4 right-4">
                <button
                  onClick={() =>
                    setActiveMenu((prev) => (prev === idx ? null : idx))
                  }
                  className="p-1 hover:bg-zinc-200 rounded-full transition-colors"
                >
                  <MoreVertical size={16} className="text-zinc-500" />
                </button>

                {/* Popover */}
                {activeMenu === idx && (
                  <>
                    {/* Invisible backdrop to close menu when clicking outside */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setActiveMenu(null)}
                    />
                    <div className="absolute right-0 mt-1 w-32 bg-white border border-zinc-200 rounded-md shadow-lg z-20 overflow-hidden">
                      <button
                        onClick={() => deleteSkills(idx)}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={14} />
                        Delete Skill
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-2">
                  {skill?.category || " "}
                </label>
                <Input
                  label="Skill"
                  value={skill?.category}
                  onChange={(e) => {
                    const newSkill = [...resumeData?.skills];
                    newSkill[idx].category = e.target.value;
                    setResumeData({ ...resumeData, skills: newSkill });
                  }}
                  className="mb-2"
                />
                <textarea
                  className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded text-sm mt-4"
                  value={resumeData?.skills[idx]?.items?.join(", ")}
                  onChange={(e) => {
                    const newSkills = [...resumeData?.skills];
                    newSkills[idx].items = e.target.value.split(", ");
                    setResumeData({ ...resumeData, skills: newSkills });
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const totalSteps = steps.length;

  const handleNext = async () => {
    if (currentStep === totalSteps - 1) {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_RESUMEAPI_OPERATIONS}/create`,
        {
          method: "post",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ ...resumeData }),
        },
      );
      let resdata = await res.json();
      if (resdata?.status === 200) {
        toast.success(resdata?.msg, { position: "top-right" });
      }
      if (resdata?.status === 500) {
        toast.error(resdata?.msg, { position: "top-right" });
      }
    }
    if (currentStep < totalSteps - 1) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-black selection:text-white">
      <main className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* LEFT: FORM WIZARD */}
        <section className="w-full md:w-1/2 lg:w-[45%] xl:w-[40%] flex flex-col border-r border-zinc-200 h-full">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-zinc-100">
            <div
              className="h-full bg-black transition-all duration-300 ease-in-out"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>

          {/* Form Container */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-xl mx-auto">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    Step {currentStep + 1} of {totalSteps}
                  </span>
                  <h2 className="text-3xl font-bold mt-2 mb-1 text-black">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-zinc-500">
                    {steps[currentStep].description}
                  </p>
                </div>
                <div>{steps[currentStep]?.extra}</div>
              </div>

              {/* Step Content */}
              <div className="min-h-[400px]">{steps[currentStep].content}</div>
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="p-6 border-t border-zinc-200 bg-white flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all
                        ${
                          currentStep === 0
                            ? "text-zinc-300 cursor-not-allowed"
                            : "text-zinc-600 hover:bg-zinc-100 text-black"
                        }`}
            >
              <ChevronLeft size={16} /> Back
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg text-sm font-bold hover:bg-zinc-800 hover:scale-105 transition-all shadow-lg shadow-zinc-200"
            >
              {currentStep === totalSteps - 1 ? "Finish" : "Next Step"}
              {currentStep !== totalSteps - 1 && <ChevronRight size={16} />}
            </button>
          </div>
        </section>

        {/* RIGHT: PREVIEW */}

        <section className="hidden md:block flex-1 bg-zinc-50 relative overflow-hidden">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 bg-white/90 backdrop-blur border border-zinc-200 p-1.5 rounded-full shadow-sm">
            <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <LayoutTemplate size={12} /> Live Preview
            </div>
          </div>

          <ZoomPreview>
            {/* Pass the dynamic data to the selected component */}
            <TemplateComponent data={resumeData} />
          </ZoomPreview>
        </section>
      </main>
    </div>
  );
}

// --- REUSABLE INPUT COMPONENT ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">
        {label}
      </label>
      <input
        className={`w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-sm font-medium ${className}`}
        {...props}
      />
    </div>
  );
};

const ResumeSkeleton = () => {
  return (
    <div className="w-full h-full flex items-start justify-center p-8 overflow-hidden">
      {/* MATCHED SCALING: We use the exact same scale classes as your ZoomPreview content */}
      <div className="bg-white shadow-xl min-w-[210mm] min-h-[297mm] origin-top scale-[0.45] md:scale-[0.55] lg:scale-[0.65] p-12 md:p-16 animate-pulse border border-zinc-200">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center space-y-4 mb-12 border-b border-zinc-100 pb-8">
          <div className="h-12 w-1/2 bg-zinc-200 rounded-lg"></div> {/* Name */}
          <div className="h-5 w-1/4 bg-zinc-100 rounded-md"></div>{" "}
          {/* Job Title */}
          <div className="flex gap-6 mt-2">
            <div className="h-3 w-32 bg-zinc-50 rounded"></div>
            <div className="h-3 w-32 bg-zinc-50 rounded"></div>
            <div className="h-3 w-32 bg-zinc-50 rounded"></div>
          </div>
        </div>

        {/* Summary Skeleton */}
        <div className="space-y-4 mb-10">
          <div className="h-6 w-32 bg-zinc-200 rounded"></div>{" "}
          {/* Section Title */}
          <div className="space-y-2">
            <div className="h-3 w-full bg-zinc-100 rounded"></div>
            <div className="h-3 w-full bg-zinc-100 rounded"></div>
            <div className="h-3 w-3/4 bg-zinc-100 rounded"></div>
          </div>
        </div>

        {/* Experience Skeleton */}
        <div className="space-y-8 mb-10">
          <div className="h-6 w-32 bg-zinc-200 rounded"></div>{" "}
          {/* Section Title */}
          {/* Job 1 */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="h-5 w-48 bg-zinc-200 rounded"></div>
              <div className="h-4 w-24 bg-zinc-100 rounded"></div>
            </div>
            <div className="h-3 w-32 bg-zinc-50 rounded mb-2"></div>
            <div className="pl-4 border-l-2 border-zinc-100 space-y-2">
              <div className="h-3 w-full bg-zinc-50 rounded"></div>
              <div className="h-3 w-11/12 bg-zinc-50 rounded"></div>
              <div className="h-3 w-full bg-zinc-50 rounded"></div>
            </div>
          </div>
          {/* Job 2 */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="h-5 w-48 bg-zinc-200 rounded"></div>
              <div className="h-4 w-24 bg-zinc-100 rounded"></div>
            </div>
            <div className="h-3 w-32 bg-zinc-50 rounded mb-2"></div>
            <div className="pl-4 border-l-2 border-zinc-100 space-y-2">
              <div className="h-3 w-full bg-zinc-50 rounded"></div>
              <div className="h-3 w-11/12 bg-zinc-50 rounded"></div>
            </div>
          </div>
        </div>

        {/* Skills Grid Skeleton */}
        <div className="space-y-4">
          <div className="h-6 w-32 bg-zinc-200 rounded"></div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-8 bg-zinc-100 rounded-md"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
