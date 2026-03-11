"use client";

import { RegisterForm } from "@/components/register-form";
import { GalleryVerticalEnd, CheckCircle2 } from "lucide-react";
import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function page() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div className="grid min-h-svh w-full lg:grid-cols-2 bg-background overflow-x-hidden">
      {/* Right Side (Visible on Desktop): Visual/Branding */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }} // Slides in from Left
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative hidden bg-muted lg:block overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent z-10" />
        
        <div className="absolute inset-0 flex flex-col justify-center p-12 z-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold leading-tight">
              Build your professional <br /> 
              <span className="text-primary-foreground bg-primary px-2">identity</span> in minutes.
            </h2>
            <ul className="space-y-4 text-lg opacity-90">
              {[
                "AI-powered resume optimization",
                "Real-time application tracking",
                "Premium recruiter-ready templates"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-6 w-6 fill-white" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
          alt="Professional Resume"
          className="absolute inset-0 h-full w-full object-cover grayscale brightness-50"
        />
      </motion.div>

      {/* Left Side: Form */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 p-6 md:p-10 border-l border-border/50"
      >
        <motion.div variants={itemVariants} className="flex justify-center gap-2 md:justify-end">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span>ResuMi<span className="text-primary">.</span></span>
          </Link>
        </motion.div>

        <div className="flex flex-1 items-center justify-center">
          <motion.div variants={itemVariants} className="w-full max-w-sm">
            <RegisterForm />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}