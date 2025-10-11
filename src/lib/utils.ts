import clsx from "clsx";
//import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return clsx(inputs);
}

export default cn;