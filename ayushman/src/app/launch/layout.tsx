import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We're Live — Ayushman Surgicare",
  description: "The new Ayushman Surgicare website is here.",
  robots: { index: false, follow: false },
};

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
