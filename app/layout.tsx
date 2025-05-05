// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeFusion AI",
  description: "Twórz aplikacje z pomocą AI – szybciej i lepiej",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="font-sans bg-white text-black">{children}</body>
    </html>
  );
}

