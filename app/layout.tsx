import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import SanityUIProvider from "./providers/SanityUI";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "CP Elkendi",
  description:
    "The participation committee (PC) is a staff representative body made compulsory in all companies with more than 20 employees.",
  icons: {
    icon: "/logo.png",
  },
};

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 60;

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
