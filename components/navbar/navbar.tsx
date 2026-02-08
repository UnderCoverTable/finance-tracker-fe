import { Menubar } from "@/components/ui/menubar"
import { Button } from "@/components/ui/button"
import { MenuItemType, NavbarMenu } from "./menu-helpers"

interface MenuConfig {
  trigger: React.ReactNode
  items?: MenuItemType[]
  className?: string
}

const MENUS: MenuConfig[] = [
  { trigger: "What are Property Blocks" },
  { trigger: "How it Works" },
  { trigger: "Properties" },
  { trigger: "Why MyZameen" },
  { trigger: "Proven Gains" },
  { trigger: "Return Calculator" },
  { trigger: "About Us" },
]

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center p-4">
      <div className="flex w-full max-w-7xl items-center justify-between rounded-xl bg-[#1a1c20] px-6 py-3 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-1 text-2xl font-bold text-white">
          <span>my</span>
          <span className="text-emerald-400">z</span>
          <span>ameen</span>
        </div>

        {/* Menu */}
        <Menubar className="border-none bg-transparent shadow-none">
          {MENUS.map((menu, index) => (
            <NavbarMenu
              key={index}
              trigger={menu.trigger}
              items={menu.items || []}
              className="text-gray-300 hover:bg-transparent hover:text-white data-[state=open]:bg-transparent data-[state=open]:text-white cursor-pointer transition-colors"
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
          <Button className="bg-[#00d084] text-black hover:bg-[#00b070] font-medium rounded-md px-6">
            Start Buying
          </Button>
        </div>
      </div>
    </div>
  )
}
