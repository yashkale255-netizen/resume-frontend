"use client";

import { LoginForm } from "@/components/login-form";
import { GalleryVerticalEnd } from "lucide-react";
import React from "react";
import { motion, Variants } from "framer-motion"; // Added Variants type
import Link from "next/link";

export default function LoginPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
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
    // Added overflow-x-hidden here to prevent the scrollbar during animation
    <div className="grid min-h-svh w-full lg:grid-cols-2 bg-background overflow-x-hidden">
      {/* Left Side: Form */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 p-6 md:p-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center md:justify-start gap-2"
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span>
              ResuMi<span className="text-primary">.</span>
            </span>
          </Link>
        </motion.div>

        <div className="flex flex-1 items-center justify-center">
          <motion.div
            variants={itemVariants}
            className="w-full max-w-sm space-y-6"
          >
            <LoginForm />

            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side: Visual/Branding */}
      <motion.div
        initial={{ opacity: 0, x: 40 }} // Increased X slightly for better effect
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative hidden bg-muted lg:block overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

        <div className="absolute bottom-12 left-12 z-20 max-w-md text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <blockquote className="space-y-2">
              <p className="text-lg font-medium italic">
                "ResuMi has completely transformed how I track my applications.
                The AI insights are a game changer."
              </p>
              <footer className="text-sm opacity-80">
                — Alex Rivera, Senior Developer
              </footer>
            </blockquote>
          </motion.div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=1000"
          alt="Workspace"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.4]"
        />
      </motion.div>
    </div>
  );
}
