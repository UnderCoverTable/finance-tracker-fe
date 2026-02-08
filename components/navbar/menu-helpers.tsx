"use client";

import { Conditional, Then } from "@/components/common/conditional/conditional";
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
} from "@/components/ui/menubar";
import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type MenuItemType =
  | {
      type: "item";
      label: React.ReactNode;
      shortcut?: string;
      disabled?: boolean;
      inset?: boolean;
      onSelect?: () => void;
    }
  | {
      type: "checkbox";
      label: React.ReactNode;
      checked?: boolean;
      onCheckedChange?: (checked: boolean) => void;
      disabled?: boolean;
    }
  | {
      type: "radio";
      value: string;
      options: { label: React.ReactNode; value: string }[];
      onValueChange?: (value: string) => void;
    }
  | { type: "separator" }
  | { type: "label"; label: React.ReactNode; inset?: boolean }
  | {
      type: "submenu";
      label: React.ReactNode;
      items: MenuItemType[];
      inset?: boolean;
    };

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
      );
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
      );
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
      );
    case "separator":
      return <MenubarSeparator key={index} />;
    case "label":
      return (
        <MenubarLabel key={index} inset={item.inset}>
          {item.label}
        </MenubarLabel>
      );
    case "submenu":
      return (
        <MenubarSub key={index}>
          <MenubarSubTrigger inset={item.inset}>{item.label}</MenubarSubTrigger>
          <MenubarSubContent>
            {item.items.map((subItem, subIndex) =>
              renderMenuItem(subItem, subIndex),
            )}
          </MenubarSubContent>
        </MenubarSub>
      );
    default:
      return null;
  }
}

export function NavbarMenu({
  trigger,
  submenuItems,
  className,
  navigateTo,
}: {
  trigger: React.ReactNode;
  submenuItems: MenuItemType[];
  className?: string;
  navigateTo?: string;
}) {
  const pathname = usePathname();
  const isActive = navigateTo && pathname === navigateTo;

  return (
    <MenubarMenu>
      <MenubarTrigger
        className={cn(
          className,
          isActive &&
            "border-l-2 border-emerald-400 text-emerald-400 data-[state=open]:text-emerald-400 focus:text-emerald-400"
        )}
      >
        <Link href={navigateTo || "/"}>{trigger}</Link>
      </MenubarTrigger>

      <Conditional condition={!!submenuItems?.length}>
        <Then>
          <MenubarContent>
            {submenuItems.map((item, index) => renderMenuItem(item, index))}
          </MenubarContent>
        </Then>
      </Conditional>
    </MenubarMenu>
  );
}
