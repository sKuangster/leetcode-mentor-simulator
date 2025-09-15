"use client";

export default function LeetcodeLinkTextBox() {
    
    return (<>
        <input
            type="text"
            placeholder="https://leetcode.com/problems/two-sum/"
            className="bg-white w-full h-full border border-black rounded p-2 text-xl"
        />
        <button type="button" className="border rounded">
            Submit
        </button>
    </>
    );
}
