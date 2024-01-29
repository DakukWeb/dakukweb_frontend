import type { Metadata } from "next";
import { poppins } from "../utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dakuk",
  description: "Dakuk web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
