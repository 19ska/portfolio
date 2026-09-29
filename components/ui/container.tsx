import type { ReactNode } from "react";

const WIDTH = {
  prose: "max-w-2xl",
  page: "max-w-3xl",
  wide: "max-w-5xl",
} as const;

/** The horizontal measures every page shares — three sizes, nothing bespoke. */
export function Container({
  children,
  className,
  size = "page",
}: {
  children: ReactNode;
  className?: string;
  size?: keyof typeof WIDTH;
}) {
  return <div className={`mx-auto w-full px-6 ${WIDTH[size]} ${className ?? ""}`}>{children}</div>;
}
