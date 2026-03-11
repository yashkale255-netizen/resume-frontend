"use client"; // This MUST be the very first line

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function FloatingSupport() {
  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end gap-4">
      {/* Tooltip Message */}
      <motion.div 
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="bg-white border border-slate-200 shadow-xl px-4 py-3 rounded-2xl rounded-br-none mb-2 max-w-[200px]"
      >
        <p className="text-[11px] font-medium leading-tight text-slate-800">
          Hey user! Need help building your profile? <span className="text-blue-600 font-bold">I'm online.</span>
        </p>
      </motion.div>

      {/* The Profile Trigger */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        {/* Pulsing Notification Ring */}
        <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
        
        {/* Profile Image / Icon Container */}
        <div className="relative w-14 h-14 bg-black rounded-full flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden">
          {/* You can replace this Icon with an <img src="/avatar.jpg" /> */}
          <div className="text-white">
             <MessageSquare size={22} fill="currentColor" />
          </div>
          
          {/* Green Online Dot */}
          <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
        </div>

        {/* Hover Label */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with Support
        </div>
      </motion.button>
    </div>
  );
}