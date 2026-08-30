import { Header } from "@/components/layout/header";
import { Topbar } from "@/components/layout/topbar";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-[999] w-full bg-white shadow-[0_2px_20px_rgba(0,0,0,0.1)]">
      <Topbar />
      <Header />
    </div>
  );
}
