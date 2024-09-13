import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/layout/wrapper";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Magang Pertamina Hulu Rokan",
  description: "Program Magang Kerja PT Pertamina Hulu Rokan Wilayah Kerja Rokan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-[#7daed2]`}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
