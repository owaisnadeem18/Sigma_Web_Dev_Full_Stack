import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook | Connect With World",
  description: "Through Facebook u can connect with the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container mx-auto min-h-[86.2vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
