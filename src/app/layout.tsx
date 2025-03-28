import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: {
    media: "(prefers-color-scheme: light)",
    color: "#ffffff",
  },
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} dark h-full m-0 antialiased`}
        style={{
          colorScheme: "inherit",
        }}
      >
        <div className="flex flex-col h-full">
          <AppHeader />
          <main className="grow mt-16">{children}</main>
          <AppFooter />
        </div>
      </body>
    </html>
  );
}
