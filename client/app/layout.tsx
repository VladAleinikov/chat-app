"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";
import { useRef } from "react";
import { AppStore } from "@/types/redux";

const inter = Inter({ subsets: ["latin", "cyrillic"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "p-4 h-screen flex items-center justify-center",
          inter.className
        )}
      >
        <Provider store={storeRef.current}>{children}</Provider>
      </body>
    </html>
  );
}
