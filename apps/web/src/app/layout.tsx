import type { Metadata } from "next";
import localFont from "next/font/local";
import ReduxProvider from "../components/ReduxRootProvider"
import { ToastProvider } from "../components/toast-provider";
import ThemeInitializer from "../components/theme-initializer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "payit",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} h-screen overflow-hidden bg-white dark:bg-background font-sans antialiased`}>
        <ReduxProvider>
          <ThemeInitializer>
            <ToastProvider>
              {children}
            </ToastProvider>
          </ThemeInitializer>
        </ReduxProvider>
      </body>
    </html>
  );
}
