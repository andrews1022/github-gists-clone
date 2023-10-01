import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type ClassValue } from "clsx";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const getIso8601Date = () => {
  return new Date().toISOString().replace("T", " ").replace("Z", "");
};

export { cn, getIso8601Date };
