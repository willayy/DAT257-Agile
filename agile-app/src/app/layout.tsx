import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header"; // Import the Header component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brottkollen.se",
  description: "Sveriges bästa brottssajt",
};
/**
 * The root layout of the entire application
 *  
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> 

        {children}
      </body>
    </html>
  );
}
