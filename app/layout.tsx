import type { Metadata } from "next";
import { Montserrat, Esteban, Nunito_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sharedComponents/NavBar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["200", "400", "700", "900"],
  subsets: ["latin"],
});
const esteban = Esteban({
  variable: "--font-esteban",
  weight: ["400"],
  subsets: ["latin"],
});
const nunito_sans = Nunito_Sans({
  variable: "--font-nunito_sans",
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KUN1E",
  description: "Explore my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${esteban.variable} ${nunito_sans.variable} h-full antialiased `}
    >
      <body className="min-h-full flex-col overflow-x-hidden bg-[#fff]">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
