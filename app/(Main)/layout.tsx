import type { Metadata } from "next";
import "../globals.css";
import { poppins } from "@/lib/font";

import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kaisel",
  description:
    "Kaisel is a modern fintech concept inspired by Brex and Wise, but built to go a step further.",
  icons: "/favicon.ico",
  openGraph: {
    title: "Kaisel",
    description:
      "Kaisel is a modern fintech concept inspired by Brex and Wise, but built to go a step further.",
    siteName: "kaisel",
    images: [
      {
        url: "/kaiselimage.avif",
        width: 1200,
        height: 630,
        alt: "Kaisel",
      },
    ],
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
