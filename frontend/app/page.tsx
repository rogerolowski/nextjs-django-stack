import React from "react";
import { Button } from "@shadcn/ui";

export default async function Page() {
  let backendMessage = "(no backend response)";
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
    if (!apiUrl) {
      backendMessage = "NEXT_PUBLIC_API_URL not set.";
      throw new Error("NEXT_PUBLIC_API_URL not set");
    }
    const res = await fetch(`${apiUrl}/api/hello`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      backendMessage = data.message || JSON.stringify(data);
    } else {
      backendMessage = `Backend error: ${res.status}`;
    }
  } catch (e) {
    backendMessage = "Failed to fetch from backend.";
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-2xl font-bold text-center text-green-600 p-10">
        ✅ Hello from Next.js 14 + Tailwind + pnpm
      </div>
      <div className="text-lg text-center text-blue-700 p-4">
        Backend says: {backendMessage}
      </div>
      <Button variant="default">ShadCN Button</Button>
    </div>
  );
}