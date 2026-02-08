import { ReactNode } from "react";

type ConditionalProps = {
  condition: boolean;
  children: ReactNode;
};

export function Conditional({ condition, children }: ConditionalProps) {
  const childrenArray = Array.isArray(children) ? children : [children];

  const thenChild = childrenArray.find(
    (child: any) => child.type.displayName === "Then"
  );

  const elseChild = childrenArray.find(
    (child: any) => child.type.displayName === "Else"
  );

  return <>{condition ? thenChild : elseChild ?? null}</>;
}

export function Then({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
Then.displayName = "Then";

export function Else({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
Else.displayName = "Else";
