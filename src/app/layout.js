import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "JyotishGuru - Clear Your Doubt, Connect to Guru",
  description: "Experience the profound insights of Vedic astrology with our expert Jyotish gurus. Get personalized readings, predictions, and guidance for your life's most important decisions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
