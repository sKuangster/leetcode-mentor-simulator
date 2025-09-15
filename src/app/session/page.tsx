import LeetcodeLinkTextBox from "@/components/LeetcodeLinkTextBox"
import LeetcodeProblemDescriptionBox from "@/components/LeetcodeProblemDescriptionBox";
import TextEditorBox from "@/components/TextEditorBox";

// src/app/session/page.tsx
export default function SessionPage() {
  return (
    <div className="h-full m-5 grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Left side of screen, link input, description */}
      <div className="flex min-h-0 flex-col p-4 border rounded">
        <div className="h-10 w-full overflow-auto">
          <LeetcodeLinkTextBox />
        </div>

        <div className="h-full w-full flex-1 overflow-auto">
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