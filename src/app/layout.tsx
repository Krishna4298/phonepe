import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhonePe Recharge - Mobile Recharge & Bill Payments",
  description: "Easy mobile recharge and bill payments with PhonePe. Get exclusive cashbacks and offers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="phonepe-container min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
