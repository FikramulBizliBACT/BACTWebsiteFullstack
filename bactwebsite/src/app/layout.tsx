  import type { Metadata } from "next";
  import { Open_Sans } from "next/font/google";
  import "./globals.css";
  import Navbar from "@/components/layout/Navbar";
  import Footer from "@/components/layout/Footer";

  const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    weight: ["400", "600", "700"],
  });

  export const metadata: Metadata = {
    title: "BACT - Batu Ampar Container Terminal",
    description: "Modernizing Batu Ampar Container Terminal - Moving Forward As One",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" style={{ height: '100%', margin: 0, padding: 0 }}>
        <body className={`${openSans.variable} antialiased font-sans`} style={{ margin: 0, padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    );
  }
