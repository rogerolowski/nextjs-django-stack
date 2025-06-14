import React from "react";
import { Button } from "@shadcn/ui";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-2xl font-bold text-center text-green-600 p-10">
        ✅ Hello from Next.js 14 + Tailwind + pnpm
      </div>
      <Button variant="default">ShadCN Button</Button>
    </div>
  );
}