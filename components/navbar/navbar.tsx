import { Menubar } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { MenuItemType, NavbarMenu } from "./menu-helpers";
import { ROUTES } from "@/app/constants/app-routes";

interface MenuConfig {
  trigger: React.ReactNode;
  submenuItems?: MenuItemType[];
  className?: string;
  navigateTo?: string;
}

const MENUS: MenuConfig[] = [
  { trigger: "Dashboard", navigateTo: ROUTES.DASHBOARD },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center p-4">
      <div className="flex w-full max-w-7xl items-center justify-between rounded-xl bg-[#1a1c20] px-6 py-3 shadow-lg">
        {/* Menu */}
        <Menubar className="border-none bg-transparent shadow-none">
          {MENUS.map((menu, index) => (
            <NavbarMenu
              key={index}
              trigger={menu.trigger}
              submenuItems={menu.submenuItems || []}
              navigateTo={menu.navigateTo}
              className="text-gray-300 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white cursor-pointer transition-colors border border-gray-300"
            />
          ))}
        </Menubar>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 border border-gray-600 rounded-md px-6"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
