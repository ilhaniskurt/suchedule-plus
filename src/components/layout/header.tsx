import { cn } from "@/lib/utils";
import { ThemeSelector } from "@/components/theme-selector";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2">
        {/* Mobile Sidebar only visible on small screens */}
        <div className={cn("block lg:!hidden")}>{/* <MobileSidebar /> */}</div>
        {/* Spacing and other elements aligned to the right */}
        <div className="ml-auto flex items-center gap-2">
          <ThemeSelector />
        </div>
      </nav>
    </header>
  );
}
