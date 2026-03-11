"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import {
  ArrowRight,
  MoveRight,
  Layers,
  Layout,
  Printer,
  Shield,
  Zap,
  Globe,
  Star,
  MousePointer2,
  Sparkles,
  Award,
  CircleCheck,
} from "lucide-react";
import ModernResume from "./component/modernresume";
import SilliconValleyTemplate from "./component/siliconValleyTemmplate";
import SwissGrid from "./component/SwissGrid";
import ModernCorporate from "./component/modernCorporate";
import NeoModernTemplate from "./component/neomodern";
import TechMinimal from "./component/TechMinimal";
import TraditionalTemplate from "./component/traditionalresume";
import { INITIAL_DATA } from "../types/resumedata";

export default function LandingPage() {
  const fadeInUp: MotionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
  };

  const [view, setView] = useState(false);
  const [showedtemmplate, setShowedTemplate] = useState(3);

  const components = [
    { template: ModernResume, title: "modernresume", type: "Minimalist" },
    {
      template: SilliconValleyTemplate,
      title: "silliconvalley",
      type: "Modernist",
    },
    { template: SwissGrid, title: "swissgrid", type: "ATS-Optimized" },
    // { template: ModernCorporate, title: "moderncorporate", type: "Minimalist" },
    // {
    //   template: NeoModernTemplate,
    //   title: "newmoderntemplate",
    //   type: "Modernist",
    // },
    // { template: TechMinimal, title: "techminimal", type: "ATS-Optimized" },
    // { template: TraditionalTemplate, title: "traditional", type: "ATS-Optimized" }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* 1. Subtle Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-12 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                <Sparkles size={12} className="text-blue-400" />
                Next-Gen AI Resume Builder
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-7xl md:text-[115px] font-bold leading-[0.85] tracking-tighter"
              >
                Design <br /> Your{" "}
                <span className="text-slate-300">Future.</span>
              </motion.h1>

              <motion.p
                {...fadeInUp}
                className="max-w-md text-xl text-slate-500 font-light leading-relaxed"
              >
                More than a builder. A strategic career asset designed to get
                you past the algorithm and into the interview room.
              </motion.p>

              <motion.div
                {...fadeInUp}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link
                  href="/dashboard/templates"
                  className="group relative overflow-hidden bg-black text-white px-10 py-6 flex items-center justify-center gap-4 transition-all"
                >
                  <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-[400ms] group-hover:w-full" />
                  <span className="relative z-10 font-black uppercase tracking-widest text-xs">
                    Choose Template
                  </span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 group-hover:translate-x-2 transition-transform"
                  />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative perspective-1000"
            >
              <ResumeMockup />
            </motion.div>
          </div>
        </section>

        {/* 2. TRUST BAR - MODERN STYLE */}
        <section className="py-20 bg-black text-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 opacity-50 text-center">
              Trusted by leads at
            </p>
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-70">
              {["Google", "Shopify", "Tesla", "Notion", "Linear"].map(
                (brand) => (
                  <span
                    key={brand}
                    className="text-2xl font-black italic tracking-tighter grayscale hover:grayscale-0 transition-all cursor-default"
                  >
                    {brand}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        <FeatureSlider />

        {/* 3. NEW SECTION: TEMPLATE PREVIEW */}
        <section className="max-w-[1400px] mx-auto px-10 py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4">
                Precision Engineering
              </h2>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter">
                Templates for every <br /> career stage.
              </h3>
            </div>
            <Link
              href="/dashboard/templates"
              className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-2 hover:text-blue-600 hover:border-blue-600 transition-all"
            >
              View all 7 templates
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
            {components.map((el, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] bg-white border-2 border-slate-100 overflow-hidden mb-6 transition-all duration-500 group-hover:border-black group-hover:shadow-2xl"
              >
                {/* FIXED SCALING LOGIC */}
                <div className="absolute top-10 inset-0 origin-top-left scale-[0.38] w-[265%] h-[265%] pointer-events-none select-none">
                  <el.template data={INITIAL_DATA}/>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-3 translate-y-4 group-hover:translate-y-0 transition-transform">
                    Use This Template <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="bg-slate-50 py-32 border-y border-slate-200">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="grid md:grid-cols-3 gap-16">
              <ProcessStep
                num="01"
                title="Deep Parsing"
                desc="Our AI reads between the lines of your experience to highlight hidden skills."
              />
              <ProcessStep
                num="02"
                title="Grid Alignment"
                desc="Every pixel is placed according to the golden ratio for maximum legibility."
              />
              <ProcessStep
                num="03"
                title="ATS Validation"
                desc="Instant checks against 50+ Common Applicant Tracking Systems."
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-40 text-center relative bg-white">
          <motion.div
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            className="space-y-10"
          >
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">
              Your dream job is <br />{" "}
              <span className="text-blue-600">one click away.</span>
            </h2>
            <Link
              href="/dashboard/templates"
              className="inline-block bg-black text-white px-16 py-8 text-sm font-bold uppercase tracking-[0.3em] hover:scale-105 transition-transform"
            >
              Start Building Now
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

function ProcessStep({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group">
      <div className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition-colors mb-6">
        {num}
      </div>
      <h4 className="text-xl font-bold mb-4 tracking-tighter uppercase">
        {title}
      </h4>
      <p className="text-slate-500 text-sm leading-relaxed font-light">
        {desc}
      </p>
    </div>
  );
}

function ResumeMockup() {
  return (
    <div className="w-full max-w-[500px] bg-white shadow-[50px_50px_100px_rgba(0,0,0,0.1)] border border-slate-100 p-12 font-serif relative group overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 -mr-16 -mt-16 rotate-45" />

      {/* Header */}
      <div className="border-b-[3px] border-black pb-8 mb-8">
        <h2 className="text-4xl font-black tracking-tighter font-sans uppercase leading-none mb-2">
          Alexander Voss
        </h2>
        <div className="flex justify-between items-center font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <span>Product Lead @ Meta</span>
          <span>Berlin, DE</span>
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-8">
        <div className="relative pl-6 border-l border-slate-200">
          <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-black rounded-full" />
          <h3 className="font-bold text-xl mb-1">Director of Product</h3>
          <p className="text-xs text-blue-600 font-sans font-bold uppercase tracking-widest mb-3">
            Stripe — 2021-2024
          </p>
          <p className="text-sm text-slate-600 leading-relaxed italic">
            Scaled the global payments infrastructure for 200k+ merchants.
            Reduced latency by 40% through localized edge computing.
          </p>
        </div>

        <div className="relative pl-6 border-l border-slate-200 opacity-40">
          <h3 className="font-bold text-xl mb-1">Senior Designer</h3>
          <p className="text-xs text-slate-400 font-sans font-bold uppercase tracking-widest mb-3">
            Vercel — 2018-2021
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12 flex flex-wrap gap-3">
        {["System Design", "FinTech", "AI/ML"].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-slate-50 border border-slate-200 text-[9px] font-black uppercase tracking-widest"
          >
            {skill}
          </span>
        ))}
      </div>

      <motion.div
        animate={{ x: [0, 60, -30, 0], y: [0, 120, 50, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow-2xl z-50"
      >
        <MousePointer2 size={12} fill="white" />
        <span className="text-[10px] font-bold uppercase tracking-widest">
          Live Editing
        </span>
      </motion.div>
    </div>
  );
}

// ... FeatureSlider and FeatureCard (Keep from previous but update styles slightly)
const features = [
  {
    icon: <Layout size={20} />,
    title: "Grid Perfection",
    desc: "Swiss-inspired layouts for maximum legibility.",
  },
  {
    icon: <Layers size={20} />,
    title: "Multi-Format",
    desc: "Silicon Valley and Tech-Minimalist templates.",
  },
  {
    icon: <Printer size={20} />,
    title: "Export Ready",
    desc: "Print-perfect A4 PDF generation in one click.",
  },
  {
    icon: <Zap size={20} />,
    title: "Live Preview",
    desc: "Real-time updates as you type your career data.",
  },
  {
    icon: <Shield size={20} />,
    title: "ATS Optimized",
    desc: "Built to pass through automated screening filters.",
  },
  {
    icon: <Globe size={20} />,
    title: "Global Standard",
    desc: "Standardized ISO formats recognized worldwide.",
  },
];

function FeatureSlider() {
  return (
    <div className="py-24 bg-white overflow-hidden border-y border-slate-100">
      <div className="max-w-[1400px] mx-auto px-10 mb-12">
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
          Core Capabilities
        </h2>
      </div>
      <div className="relative flex">
        <motion.div
          className="flex flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...features, ...features].map((item, idx) => (
            <div key={idx} className="w-[350px] flex-shrink-0 px-4">
              <FeatureCard {...item} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  const [cardNumber, setCardNumber] = useState<string | null>(null);
  useEffect(() => {
    setCardNumber(`0${Math.floor(Math.random() * 9) + 1}`);
  }, []);

  return (
    <div className="group h-full bg-white p-10 border border-slate-100 flex flex-col justify-between transition-all duration-500 hover:border-black hover:shadow-[20px_20px_0px_rgba(0,0,0,0.05)]">
      <div>
        <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-10 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform" />
          {title}
        </h3>
        <p className="text-sm text-slate-500 font-light leading-relaxed">
          {desc}
        </p>
      </div>
      <div className="mt-8 pt-6 border-t border-slate-50 flex justify-end">
        <span className="text-[10px] font-bold text-slate-300 group-hover:text-black transition-colors">
          {cardNumber || "--"}
        </span>
      </div>
    </div>
  );
}
