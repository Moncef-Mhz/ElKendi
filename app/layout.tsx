import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import SanityUIProvider from "./providers/SanityUI";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Elkendi",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SanityUIProvider>{children}</SanityUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
