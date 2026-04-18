import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MotionProvider from "./motionProvider/motionprovider";
import { Navbar } from "./components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import Loading from "./loadingComponent/loading";
import SmoothScroll from "./components/smoothscroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ResuMaii",
  description: "Created By Yash Kale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MotionProvider>
          <SmoothScroll>
            <Navbar />
            {/* <div className="h-[cal(100vh - var(--navheight))]">{children}</div> */}
            <div className="mainheight">
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <Toaster />
            </div>
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
