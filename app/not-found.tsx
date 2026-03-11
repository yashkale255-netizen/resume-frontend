"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col selection:bg-black selection:text-white">
      {/* Structural Top Border */}
      <div className="h-2 w-full bg-black" />

      <main className="flex-grow flex flex-col items-center justify-center px-10 relative overflow-hidden">
        {/* Subtle Background 404 Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[25vw] font-black text-slate-50 opacity-[0.03] select-none">
            404
          </h2>
        </div>

        <div className="relative z-10 text-center space-y-8">
          {/* Animated Error Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 border border-slate-200 px-4 py-2 rounded-full">
              Error Code: Page_Missing
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl md:text-[120px] font-black tracking-tighter leading-none"
          >
            LOST IN <br />
            <span className="italic text-slate-300">SPACE.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-md mx-auto text-slate-500 font-light text-lg leading-relaxed"
          >
            The page you are looking for has been moved, deleted, or never existed in our grid.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/">
              <button className="group bg-black text-white px-8 py-4 flex items-center gap-3 hover:bg-zinc-800 transition-all">
                <Home size={16} />
                <span className="font-bold uppercase tracking-widest text-[10px]">Return Home</span>
              </button>
            </Link>

            <button 
              onClick={() => window.history.back()}
              className="group border border-slate-200 bg-transparent text-black px-8 py-4 flex items-center gap-3 hover:bg-slate-50 transition-all"
            >
              <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold uppercase tracking-widest text-[10px]">Go Back</span>
            </button>
          </motion.div>
        </div>
      </main>

      {/* Modular Bottom Detail */}
      <footer className="p-10 border-t border-slate-100 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="w-2 h-2 bg-black animate-pulse" />
          <div className="w-2 h-2 bg-slate-200" />
          <div className="w-2 h-2 bg-slate-200" />
        </div>
        <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase italic">
          ResuMi System Offline
        </p>
      </footer>
    </div>
  );
}