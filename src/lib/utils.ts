import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value?: number | bigint) {
  if (typeof value === "undefined") {
    return "";
  }

  return Intl.NumberFormat("en-US").format(value);
}

export function formatAbbreviate(value?: number | bigint) {
  if (!value) {
    return "0";
  }

  return Intl.NumberFormat("en-US", { notation: "compact" }).format(value);
}

export function pluralize(
  count: number | bigint,
  label: string,
  plural?: string
) {
  if (count > 1) {
    return `${formatAbbreviate(count)} ${plural ? plural : label + "s"}`;
  }

  return `${formatNumber(count)} ${label}`;
}
