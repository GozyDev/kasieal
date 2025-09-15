import type { Metadata } from "next";
import "../globals.css";
import { poppins } from "@/lib/font";

import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kaisel",
  description: "Manage your finances smarter with Kaisel",
  openGraph: {
    title: "Kaisel",
    description: "AI-powered financial tools",
    url: "https://kasieal.vercel.app/",
    siteName: "Kaisel",
    images: [
      {
        url: "/kaiselimage.png",
        width: 1200,
        height: 630,
        alt: "Kaisel preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaisel",
    description: "AI-powered financial tools",
    images: ["/kaiselimage.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-white">
            <section className="py-[10px] fixed w-full z-[999] left-0 ">
              <Navbar />
              <MobileNavbar />
            </section>
            {children}
            <section>
              <Footer />
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
