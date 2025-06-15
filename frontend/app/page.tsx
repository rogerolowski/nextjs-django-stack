"use client";
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";

const queryClient = new QueryClient();

function HelloMessage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const { data, error, isLoading } = useQuery({
    queryKey: ["hello-message"],
    queryFn: async () => {
      if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL not set");
      const res = await axios.get(`${apiUrl}/api/hello`);
      return res.data.message || JSON.stringify(res.data);
    },
    retry: false,
  });

  let backendMessage = "(no backend response)";
  if (isLoading) backendMessage = "Loading...";
  else if (error) backendMessage = error instanceof Error ? error.message : "Failed to fetch from backend.";
  else if (data) backendMessage = data;

  return (
    <>
      <Card className="max-w-md w-full mb-6">
        <CardHeader>
          <CardTitle>shadcn/ui Card</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg text-center text-blue-700 p-4">
            Backend says: {backendMessage}
          </div>
          <Input className="mt-2" placeholder="shadcn/ui Input" />
        </CardContent>
        <CardFooter>
          <Button variant="default">ShadCN Button</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="text-2xl font-bold text-center text-green-600 p-10">
          ✅ Hello from Next.js 14 + Tailwind + pnpm
        </div>
        <HelloMessage />
      </div>
    </QueryClientProvider>
  );
}