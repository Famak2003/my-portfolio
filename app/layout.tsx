import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Famak Dev",
  description: "Welcome to my portfolio website, a portal to my craft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the theme script below adds the `dark` class before React hydrates
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('dark-mode')==='true')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-[#faeaea] dark:bg-black text-black dark:text-textGray`}
        style={{
            "backgroundImage": ` radial-gradient(circle at 20% 20%, rgb(116, 116, 116) .8px, transparent .5px) `, 
            "backgroundSize": "50px 50px"
        }}
      >
        <Toaster position="bottom-center" />
        <div className=" relative flex flex-col gap-12 w-full h-fit bg-transparent ">
          <div className=" w-full h-[65px] mobile:h-[75px] sm:h-[87px] " ></div>
          <NavBar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
