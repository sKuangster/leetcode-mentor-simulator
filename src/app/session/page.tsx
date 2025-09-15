"use client";

import LeetcodeLinkTextBox from "@/components/LeetcodeLinkTextBox"
import LeetcodeProblemDescriptionBox from "@/components/LeetcodeProblemDescriptionBox";
import TextEditorBox from "@/components/TextEditorBox";

// src/app/session/page.tsx
export default function SessionPage() {
  return (
    <div className="h-full m-5 grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Left side of screen, link input, description */}
      <div className="flex gap-1 min-h-0 flex-col p-4 border rounded">

        <div className="h-10 w-auto border rounded flex justify-start items-center space-x-4">
          <button className="bg-white hover:bg-gray-100 w-auto hover:bg-grey" type="button">Description</button>
          <button className="bg-white hover:bg-gray-100 w-auto hover:bg-grey" type="button">Analysis</button>
        </div>

        <div className="flex h-10 w-full overflow-auto">
          <LeetcodeLinkTextBox />
        </div>

        <div className="h-full w-full flex-1 overflow-auto border rounded">
          <LeetcodeProblemDescriptionBox leetcodeLink="" />
        </div>
      </div>

      {/* Right side, dedicated to text editor*/}
      <div className="min-h-0 p-4 border rounded flex flex-col">
        <div className="min-h-0 flex-1 overflow-auto">
          <TextEditorBox />
        </div>
      </div>
    </div>
  );
}