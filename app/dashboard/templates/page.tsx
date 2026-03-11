"use client";
import React, {
  ReactComponentElement,
  ReactElement,
  ReactHTMLElement,
} from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import ModernResume from "../component/modernresume";
import NeoModernTemplate from "../component/neomodern";
import SwissGrid from "../component/SwissGrid";
import SilliconValleyTemplate from "../component/siliconValleyTemmplate";
import TechMinimal from "../component/TechMinimal";
import ModernCorporate from "../component/modernCorporate";
import TraditionalTemplate from "../component/traditionalresume";
import { INITIAL_DATA, ResumeData } from "@/app/types/resumedata";
import SidebarResume from "../component/sidebarprofessional";
import PromptionalTemplate from "../component/promotionalcertificate";
import CreativeResumeTemplate from "../component/creativeTemplate";

type TemplateType = {
  id: string;
  name: string;
  difficulty: string;
  component: (props: { data: ResumeData }) => ReactElement;
  componentName: string;
};
export default function TemplateChoice() {
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
      name: "Tech Minimal",
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

  const router = useRouter();

  const handleSelect = (id: string) => {
    router.push(`/dashboard/form?template=${id}`);
  };
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-blue-600 mb-4"
          >
            <Zap size={16} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              Step 01
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Select a <span className="text-slate-300">Framework.</span>
          </h1>
        </div>

        {/* Template Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TEMPLATES.map((tpl, index) => {
            // Assign to an uppercase variable so React recognizes it as a component
            const PreviewComponent = tpl.component;
            return (
              <motion.div
                key={tpl.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleSelect(tpl.id)}
                className="group cursor-pointer"
              >
                {/* 2. THE MINIATURE PREVIEW CONTAINER */}
                <div className="relative aspect-[3/4] bg-white border border-slate-100 overflow-hidden mb-6 transition-all duration-500 group-hover:border-black group-hover:shadow-2xl">
                  {/* FIXED SCALING LOGIC */}
                  <div className="absolute top-10 inset-0 origin-top-left scale-[0.38] w-[265%] h-[265%] pointer-events-none select-none">
                    <PreviewComponent data={INITIAL_DATA} />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-3 translate-y-4 group-hover:translate-y-0 transition-transform">
                      Use This Framework <ArrowRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="flex justify-between items-start px-1">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-1">
                      {tpl.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                      {tpl.difficulty}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 size={20} className="text-blue-600" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
