import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { FloatingMenu } from "@/components/ui/floating-menu";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayushman Surgicare — Expert Surgical Care You Can Rely On",
  description:
    "Advanced treatments, trusted specialists, and compassionate care — all under one roof at Ayushman Surgicare.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        {children}
        <FloatingMenu />
      </body>
    </html>
  );
}
