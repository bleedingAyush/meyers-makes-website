import "./globals.css";
import { Outfit } from "next/font/google";

const customFont = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Meyers Makes & Maintenance",
  description:
    "Meyers Makes and Maintenance is your premier source for top-notch handyman, roofing, and carpentry services in the beautiful province of Ontario, Canada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={customFont.className}>{children}</body>
    </html>
  );
}
