"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  ArrowUpRight,
  Star,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Designer @ Google",
    strategy:
      "HOW TO GET THE JOB: Use a 12pt font for body text. ATS scanners struggle with smaller sizes, and human eyes prefer the white space.",
    image: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Software Engineer",
    strategy:
      "HOW TO GET THE JOB: Group your tech stack by 'Frameworks' and 'Languages'. It makes your profile instantly searchable for recruiters.",
    image: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "HR Director",
    strategy:
      "HOW TO GET THE JOB: Always use a sidebar for contact info. It keeps the main column free for your impact metrics and achievements.",
    image: "https://i.pravatar.cc/150?u=3",
  },
  {
    id: 4,
    name: "David Park",
    role: "Financial Analyst",
    strategy:
      "HOW TO GET THE JOB: Quantify everything. Instead of 'Managed budgets', use 'Optimized $2M budget, reducing waste by 14%'.",
    image: "https://i.pravatar.cc/150?u=4",
  },
  {
    id: 5,
    name: "Julia Smith",
    role: "Marketing Specialist",
    strategy:
      "HOW TO GET THE JOB: Match your resume keywords to the job description 1:1. Our builder highlights where you can improve alignment.",
    image: "https://i.pravatar.cc/150?u=5",
  },
  {
    id: 6,
    name: "Arjun Mehta",
    role: "Startup Founder",
    strategy:
      "HOW TO GET THE JOB: Keep it to one page if you have under 10 years experience. Density shows authority and respect for the reader's time.",
    image: "https://i.pravatar.cc/150?u=6",
  },
];

export default function ExpansionGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-20 bg-white max-w-[1400px] mx-auto px-6 md:px-10">
      {/* Header - Responsive Layout */}
      <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-100 pb-8 gap-6">
        <div className="space-y-2">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">
            Standardized Success
          </h2>
          <p className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
            The Strategy Grid.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
          <ShieldCheck size={14} className="text-blue-600" />
          <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">
            ATS-Friendly Verified Templates
          </p>
        </div>
      </div>

      {/* RESPONSIVE CONTAINER:
          - Mobile: Column layout with fixed height per item
          - Desktop: Row layout with flex expansion
      */}
      <div className="relative flex flex-col md:flex-row gap-4 min-h-[600px] md:h-[500px] w-full">
        {testimonials.map((t) => {
          const isHovered = hoveredId === t.id;

          return (
            <motion.div
              key={t.id}
              // Handles Desktop Hover & Mobile Tap
              onMouseEnter={() => setHoveredId(t.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setHoveredId(hoveredId === t.id ? null : t.id)}
              layout
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 22,
              }}
              className={`relative cursor-pointer overflow-hidden border transition-all duration-300
                ${
                  isHovered
                    ? "flex-[4] bg-black border-black z-20 shadow-2xl"
                    : "flex-1 bg-white border-slate-100 z-10"
                }
                ${hoveredId !== null && !isHovered ? "opacity-40 md:blur-[1px]" : "opacity-100"}
                min-h-[100px] md:min-h-full
              `}
            >
              <div className="p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  {/* Top: Header Info */}
                  <div className="flex justify-between items-start">
                    <motion.div layout className="relative">
                      <img
                        src={t.image}
                        alt={t.name}
                        className={`transition-all duration-500 rounded-none object-cover grayscale
                          ${isHovered ? "w-16 h-16 md:w-24 md:h-24 border-2 border-blue-600 grayscale-0" : "w-10 h-10 border border-slate-200"}`}
                      />
                    </motion.div>

                    {/* Only show quote icon on desktop or expanded mobile */}
                    {(isHovered || hoveredId === null) && (
                      <Quote
                        className={`${isHovered ? "text-blue-600" : "text-slate-100"}`}
                        size={30}
                      />
                    )}
                  </div>

                  {/* Content Area */}
                  <motion.div layout className="mt-6 md:mt-10 space-y-4">
                    <div>
                      <h4
                        className={`font-black uppercase tracking-tighter text-lg md:text-xl transition-colors ${isHovered ? "text-white" : "text-black"}`}
                      >
                        {t.name}
                      </h4>
                      <p
                        className={`text-[9px] font-bold uppercase tracking-[0.2em] ${isHovered ? "text-blue-500" : "text-slate-400"}`}
                      >
                        {t.role}
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      {isHovered ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4"
                        >
                          <p className="text-base md:text-lg font-light leading-relaxed text-slate-300 italic">
                            "{t.strategy}"
                          </p>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={10}
                                fill="#2563eb"
                                className="text-blue-600"
                              />
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="hidden md:flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400"
                        >
                          Strategy <ArrowUpRight size={12} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Bottom Bar - Hidden on small unselected mobile cards to save space */}
                <div
                  className={`flex justify-between items-center border-t border-slate-50 pt-4 mt-4 transition-opacity ${!isHovered ? "md:opacity-100 opacity-0" : "opacity-100"}`}
                >
                  <span
                    className={`text-[9px] font-black tracking-widest ${isHovered ? "text-slate-700" : "text-slate-200"}`}
                  >
                    INDUSTRIAL_REF_{t.id}
                  </span>
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${isHovered ? "bg-blue-600" : "bg-slate-200"}`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
