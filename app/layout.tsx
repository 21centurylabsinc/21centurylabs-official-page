import "./globals.css";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "21CenturyLabs - Web Development Company",
  description: "Web Development Development Company Based on Sri Lanka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-gray-50 dark:bg-background min-h-screen font-sans antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
