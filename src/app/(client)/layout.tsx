import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "../globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = localFont({
  src: "../fonts/Poppins.woff2",
  variable: "--font-poppins",
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  title: "Regalos Pro Dey",
  description: "Regalos personalizados ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body
          cz-shortcut-listen="true"
          className={`${poppins.variable} antialiased`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
