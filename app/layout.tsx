import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { site } from "@/data/site";

// FontAwesome's CSS is imported above, so stop it injecting a copy at runtime
// (which never happens for server-rendered icons and leaves them unstyled).
faConfig.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description: "Fullstack software engineer building web, mobile and IoT products with React, Next.js, React Native and NestJS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Dark-only site: the `dark` class is always on so existing `dark:` styles apply.
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-ink text-fg`}>
        <div aria-hidden className="grain" />
        <Toaster position="bottom-center" toastOptions={{ style: { background: '#18181b', color: '#ededef', border: '1px solid rgba(255,255,255,0.09)' } }} />
        <NavBar />
        <div className=" relative flex flex-col gap-12 w-full h-fit pt-16 ">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
