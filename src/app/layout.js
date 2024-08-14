import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

const manrope_init = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-manrope",
});
export const metadata = {
  title: "Indian Ventures",
  description: "Innovating Web & Digital Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope_init.variable}`}>
        <Navbar />
        <div className="max-w-screen-2xl mx-auto">{children}</div>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
