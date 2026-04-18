"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="text-2xl font-black tracking-tighter italic">
              RESUMI<span className="text-blue-600">.</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed font-light">
              Architecting the future of professional narratives.
              Built for high-growth individuals who value precision and design.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter size={16} />} href="#" />
              <SocialIcon icon={<Github size={16} />} href="#" />
              <SocialIcon icon={<Linkedin size={16} />} href="#" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Platform</h4>
            <ul className="space-y-4">
              <FooterLink href="/templates">Templates</FooterLink>
              <FooterLink href="/ats-check">ATS Optimizer</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
            </ul>
          </div>

          {/* Legal/Contact */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Support</h4>
            <ul className="space-y-4">
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              © {currentYear} ResuMi. All rights reserved.
            </p>
            <p className="text-[10px] font-black text-black uppercase tracking-[0.2em]">
              Created by <span className="text-blue-600">Yash Kale</span> — 2026
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">System Operational</span>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] font-bold uppercase tracking-widest hover:text-blue-600 transition-colors flex items-center gap-2 group"
            >
              Back to Top <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components for clean code
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-xs font-bold text-slate-600 hover:text-black transition-colors uppercase tracking-widest"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 border border-slate-100 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all duration-300"
    >
      {icon}
    </Link>
  );
}