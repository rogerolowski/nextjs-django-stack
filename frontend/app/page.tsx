import React from "react";
import { Button } from "@shadcn/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-6">Welcome to Next.js + Tailwind + ShadCN</h1>
      <Button variant="default">ShadCN Button</Button>
    </main>
  );
}