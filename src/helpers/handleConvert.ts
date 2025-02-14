import { type SetStateAction, type Dispatch } from "react";
import { convertToFancy } from "./convertToFancy";

export const handleConvert = ({
  setFancyText,
  inputText,
}: {
  setFancyText: Dispatch<SetStateAction<string>>;
  inputText: string;
}) => {
  setFancyText(convertToFancy(inputText));
};
