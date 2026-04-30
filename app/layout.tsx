import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import WhatsAppButton from "./src/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Bandan Sweets - Premium Handcrafted Sweets",
  description: "Experience luxury gifting with our handcrafted premium sweets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-dark text-softwhite font-body antialiased">
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}