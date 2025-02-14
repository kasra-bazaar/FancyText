"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { handleConvert, handleCopy } from "~/lib/index";

export const dynamic = "force-static";

export default function FancyTextGenerator() {
  const [inputText, setInputText] = useState("");
  const [fancyText, setFancyText] = useState("");

  return (
    <div className="mx-auto flex max-w-md flex-col gap-4 p-6">
      <Textarea
        className="w-full rounded-xl bg-white p-2 text-blue-400"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="write your text here"
      />
      <Button
        className="rounded-xl bg-white p-2 text-blue-400 hover:bg-white"
        onClick={() => handleConvert({ setFancyText, inputText })}
      >
        Convert to fancy text
      </Button>
      <div className="min-h-[40px] w-full rounded-xl bg-white p-2 text-blue-400">
        {fancyText || " Your text will appear here"}
      </div>
      {fancyText && (
        <Button
          className="rounded-xl bg-blue-400 p-2 text-white"
          onClick={() => handleCopy({ fancyText })}
        >
          Copy
        </Button>
      )}
    </div>
  );
}
