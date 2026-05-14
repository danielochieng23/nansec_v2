import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";

export const metadata: Metadata = {
  title: {
    default: "Nangsec Technologies | Cybersecurity Services & Training",
    template: "%s | Nangsec Technologies",
  },
  description:
    "Nangsec helps organizations across Africa design, test, and operate security programs—assessments, managed detection, training, and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-72px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
