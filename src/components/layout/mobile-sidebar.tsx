import { MenuIcon } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { navItems } from "@/constants/nav-items";
// import { DashboardNav } from "@/components/dashboard-nav";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="!px-0">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="mb-2 px-4 text-lg font-semibold tracking-tight">
              <SheetTitle>SUchedule +</SheetTitle>
              <SheetDescription>Course Search</SheetDescription>
            </div>
            <div className="space-y-1">
              {/* <DashboardNav
                  items={navItems}
                  isMobileNav={true}
                  setOpen={setOpen}
                /> */}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
