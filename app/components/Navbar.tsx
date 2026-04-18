"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  GalleryVerticalEnd,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  FileText,
  ShieldCheck,
  Briefcase,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const templateItems = [
  {
    title: "ATS Friendly",
    desc: "Optimized for automated tracking systems to ensure your resume reaches human recruiters every time.",
    icon: <ShieldCheck className="size-5 text-primary" />,
    link: '/dashboard/resume-analyzer'
  },
  {
    title: "Simple Resume",
    desc: "Clean, minimalist designs that focus on content clarity and readability for conservative industries.",
    icon: <FileText className="size-5 text-primary" />,
    link: '/dashboard/templates'
  },
  {
    title: "Industrial Recognition",
    desc: "Built based on data from top hiring managers across tech, finance, and healthcare sectors.",
    icon: <Briefcase className="size-5 text-primary" />,
    link: '/dashboard/templates'
  },
  {
    title: "Professional",
    desc: "Elegant layouts that highlight your career progression and leadership achievements effectively.",
    icon: <Star className="size-5 text-primary" />,
    link: '/dashboard/templates'
  },
];

interface LoggedInUser {
  exp?: number;
  role?: String;
  subscription?: String;
  userEmail: String;
  userId: String;
  userName: String;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isNavShown, setIsNavShown] = useState(true);
  const [loggedinuser, setLoggedinUser] = useState<LoggedInUser | null>(null);
  const pathname = usePathname();
  console.log("pathname is : ", pathname);

  const navbarNotShown = ["/login", "/register"];

  useEffect(() => {
    setIsNavShown(!navbarNotShown.includes(pathname));

    async function getData() {
      try {
        let res = await fetch("http://localhost:3000/api/me", {
          cache: "no-store",
        });

        if (!res.ok) {
          console.warn("/api/me returned non-OK status", res.status);
          setLoggedinUser(null);
          return;
        }

        let data = await res.json();
        console.log("navbar data  " + data);
        console.log("navbar res  " + res);


        if (data && data.user) {
          setLoggedinUser(data.user);
        } else {
          setLoggedinUser(null);
        }
      } catch (err) {
        console.error("Navbar getData fetch error:", err);
        setLoggedinUser(null);
      }
    }
    getData();
  }, [pathname]);

  console.log(loggedinuser);

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md isolate navheight", // ✅ navheight moved here
        isNavShown ? "" : "hidden",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {" "}
        {/* ✅ h-full */}
        <div className="flex justify-between items-center h-full">
          {" "}
          {/* ✅ h-full */}
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tighter"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span>
              ResuMaii<span className="text-primary">.</span>
            </span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-4">
                Resume Templates
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-200",
                    isHovered && "rotate-180",
                  )}
                />
              </button>

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="bg-white absolute top-full -left-20 w-[600px] bg-card border border-border rounded-xl shadow-xl p-6 grid grid-cols-2 gap-4"
                  >
                    {templateItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={`${item.link}`}
                        className="group p-3 rounded-lg hover:bg-muted transition-all"
                      >
                        <div className="flex items-center gap-3 mb-1">
                          {item.icon}
                          <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                          <ArrowRight className="size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/dashboard/templates"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Resume Examples
            </Link>
            <Link
              href="/faqs"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
          {loggedinuser !== null ? (
            <div className="hidden lg:flex items-center gap-6">
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Link
                  href="/dashboard/profile"
                  className="relative flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-sm transition-all duration-300 group-hover:border-black group-hover:shadow-md overflow-hidden"
                >
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-100/50 via-transparent to-transparent pointer-events-none" />

                  {/* The Initial */}
                  <span className="relative z-10 font-bold text-sm tracking-tighter text-slate-900 group-hover:text-black">
                    {loggedinuser?.userName?.charAt(0)?.toUpperCase() || "U"}
                  </span>

                  {/* Modern Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors" />
                </Link>

                {/* Status Indicator (Optional but looks premium) */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow-sm" />

                {/* Tooltip Label (Shows on Hover) */}
                <div className="absolute top-full right-0 mt-3 px-3 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                  Account Settings
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-6">
              {/* Modern Ghost Login Button */}
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/login"
                  className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors px-4 py-2"
                >
                  Sign In
                </Link>
              </motion.div>

              {/* Premium Shimmer Register Button */}
              <motion.div
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <Link
                  href="/register"
                  className="relative flex items-center justify-center overflow-hidden rounded-full bg-primary px-7 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_8px_16px_-6px_rgba(var(--primary),0.5)] transition-all hover:shadow-[0_12px_20px_-6px_rgba(var(--primary),0.6)]"
                >
                  {/* Animated Shimmer Effect */}
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "linear",
                      repeatDelay: 0.5,
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                  />

                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                {/* Subtle Outer Glow for SaaS feel */}
                <div className="absolute -inset-0.5 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
          )}
          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="lg:hidden border-t bg-background/95 backdrop-blur-xl px-6 py-8 overflow-hidden"
          >
            {/* Navigation Links with Staggered Slide-in */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="grid gap-4 text-xl font-semibold tracking-tight"
            >
              {["Templates", "Examples", "FAQs", "Contact Us", "Profile"].map(
                (item) => (
                  <motion.div
                    key={item}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={`/dashboard/${item.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-primary transition-colors flex items-center justify-between group"
                    >
                      {item}
                      <motion.span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="size-5 text-primary" />
                      </motion.span>
                    </Link>
                  </motion.div>
                ),
              )}
            </motion.div>

            {/* Modern SaaS Action Buttons */}
            <div className="flex flex-col gap-3 pt-8 mt-6 border-t border-border/50">
              {loggedinuser ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="/dashboard/profile"
                      className="flex w-full items-center justify-center rounded-xl border border-border bg-primary/10 py-4 text-sm font-bold transition-all active:scale-[0.98] hover:bg-primary/20"
                    >
                      Profile
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/logout"
                      className="flex w-full items-center justify-center rounded-xl border border-border bg-red-500/10 py-4 text-sm font-bold text-red-600 transition-all active:scale-[0.98] hover:bg-red-500/20"
                    >
                      Log out
                    </Link>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="/login"
                      className="flex w-full items-center justify-center rounded-xl border border-border bg-secondary/50 py-4 text-sm font-bold transition-all active:scale-[0.98] hover:bg-secondary"
                    >
                      Sign In
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/register"
                      className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary py-4 text-sm font-black text-primary-foreground shadow-[0_10px_20px_-10px_rgba(var(--primary),0.5)] active:scale-[0.98] transition-all"
                    >
                      {/* Animated Shimmer Overlay */}
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        Get Started for Free <ArrowRight className="size-4" />
                      </span>
                    </Link>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
