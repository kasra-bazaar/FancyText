import { unicodeMap } from "~/components/unicode";

export function convertToFancy(text: string) {
  return text
    .split("")
    .map((char) => unicodeMap[char] ?? char)
    .join("");
}
