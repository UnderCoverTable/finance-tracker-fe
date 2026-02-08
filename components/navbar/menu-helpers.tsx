import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import * as React from "react"

export type MenuItemType =
  | {
      type: "item"
      label: React.ReactNode
      shortcut?: string
      disabled?: boolean
      inset?: boolean
      onSelect?: () => void
    }
  | {
      type: "checkbox"
      label: React.ReactNode
      checked?: boolean
      onCheckedChange?: (checked: boolean) => void
      disabled?: boolean
    }
  | {
      type: "radio"
      value: string
      options: { label: React.ReactNode; value: string }[]
      onValueChange?: (value: string) => void
    }
  | { type: "separator" }
  | { type: "label"; label: React.ReactNode; inset?: boolean }
  | {
      type: "submenu"
      label: React.ReactNode
      items: MenuItemType[]
      inset?: boolean
    }

function renderMenuItem(item: MenuItemType, index: number): React.ReactNode {
  switch (item.type) {
    case "item":
      return (
        <MenubarItem
          key={index}
          inset={item.inset}
          disabled={item.disabled}
          onSelect={item.onSelect}
        >
          {item.label}
          {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
        </MenubarItem>
      )
    case "checkbox":
      return (
        <MenubarCheckboxItem
          key={index}
          checked={item.checked}
          onCheckedChange={item.onCheckedChange}
          disabled={item.disabled}
        >
          {item.label}
        </MenubarCheckboxItem>
      )
    case "radio":
      return (
        <MenubarRadioGroup
          key={index}
          value={item.value}
          onValueChange={item.onValueChange}
        >
          {item.options.map((option) => (
            <MenubarRadioItem key={option.value} value={option.value}>
              {option.label}
            </MenubarRadioItem>
          ))}
        </MenubarRadioGroup>
      )
    case "separator":
      return <MenubarSeparator key={index} />
    case "label":
      return (
        <MenubarLabel key={index} inset={item.inset}>
          {item.label}
        </MenubarLabel>
      )
    case "submenu":
      return (
        <MenubarSub key={index}>
          <MenubarSubTrigger inset={item.inset}>{item.label}</MenubarSubTrigger>
          <MenubarSubContent>
            {item.items.map((subItem, subIndex) =>
              renderMenuItem(subItem, subIndex)
            )}
          </MenubarSubContent>
        </MenubarSub>
      )
    default:
      return null
  }
}

export function NavbarMenu({
  trigger,
  items,
  className,
}: {
  trigger: React.ReactNode
  items: MenuItemType[]
  className?: string
}) {
  return (
    <MenubarMenu>
      <MenubarTrigger className={className}>{trigger}</MenubarTrigger>
      <MenubarContent>
        {items.map((item, index) => renderMenuItem(item, index))}
      </MenubarContent>
    </MenubarMenu>
  )
}
