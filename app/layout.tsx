import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { darker_grotesque, poppins } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${darker_grotesque.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
