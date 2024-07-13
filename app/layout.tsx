import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import {
  ClerkProvider
} from '@clerk/nextjs'
import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
 variable:'--font-poppins'
 });

export const metadata: Metadata = {
  title: "Evently",
  description: "evently for event management",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.variable}>{children}</body>
      </html>
      </ClerkProvider>
  );
}