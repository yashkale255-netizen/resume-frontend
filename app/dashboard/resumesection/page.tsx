"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Printer } from "lucide-react";
import ModernResume from "../component/modernresume";
import TraditionalTemplate from "../component/traditionalresume";
import NeoModernTemplate from "../component/neomodern";
import ModernCorporate from "../component/modernCorporate";
import TechMinimal from "../component/TechMinimal";
import SwissGrid from "../component/SwissGrid";
import SilliconValleyTemplate from "../component/siliconValleyTemmplate";

const ResumePage = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "My_Resume",
  });

  return (
    <div className="bg-slate-200 min-h-screen py-10">
      <div className="max-w-4xl mx-auto mb-6 flex justify-end">
        <button
          onClick={() => handlePrint()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg"
        >
          <Printer size={20} />
          Download One-Page PDF
        </button>
      </div>

      <div ref={componentRef} className="print-container">
        {/* <ModernResume /> */}
        {/* <TraditionalTemplate/> */}
        {/* <NeoModernTemplate/> */}
        {/* <ModernCorporate /> */}
        {/* <TechMinimal/> */}
        {/* <SwissGrid/> */}
        <SilliconValleyTemplate data={{
          personal: {
            name: "",
            email: "",
            phone: "",
            location: "",
            headline: "",
            linkedin: "",
            github: "",
            portfolio: ""
          },
          achievements: [],
          certifications: [],
          education: [],
          experience: [],
          projects: [],
          skills: [],
          summary: "",
          languages: []
        }} />
      </div>
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0 !important; /* Removes browser-added white space */
          }
          body {
            margin: 0 !important;
            -webkit-print-color-adjust: exact; /* Required for the dark sidebar background */
          }
          .print-container {
            width: 210mm !important;
            height: 297mm !important; /* Matches physical A4 paper exactly */
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;
