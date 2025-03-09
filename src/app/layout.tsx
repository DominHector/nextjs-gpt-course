import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Héctor | Next.js Course",
  description: "Explorando Next.js y la inteligencia artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header
        links={[
          {
            label: "Chatea conmigo",
            href: "/chatme",
          },
          {
            label: "Proyectos",
            href: "/projects",
          },
          {
            label: "Sobre Mí",
            href: "/about",
          },
        ]}
        />
        <main className="max-w-4xl mx-auto py-8 px-6">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
