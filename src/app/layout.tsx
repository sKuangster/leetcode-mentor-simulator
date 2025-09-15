// src/app/layout.tsx
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Google SWE Simulator",
  description: "Code2Career practice app",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
    return (
        <html lang="en">
            <body className="h-screen w-screen bg-white text-black flex flex-col">
                <Navbar />
                {children}
            </body>
        </html>
    );
}