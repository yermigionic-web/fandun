import type { Metadata, Viewport } from "next";
import { Newsreader, Outfit } from "next/font/google";
import Script from "next/script";
import { EnteringToast } from "@/components/effects/EnteringToast";
import { ImageGate } from "@/components/layout/ImageGate";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ThemeStyle } from "@/components/layout/ThemeStyle";
import { ThemeProvider } from "@/context/ThemeProvider";
import { THEME_BOOT } from "@/lib/theme";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FAN:DUN",
    template: "%s · FAN:DUN",
  },
  description: "최애를 따라 들어온 곳, 팬던. Enter your fandom.",
};

export const viewport: Viewport = {
  themeColor: "#f3efe8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${outfit.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        {/* Root layout stylesheets apply to every route. */}
        {/* eslint-disable @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&family=Nanum+Myeongjo:wght@400;700&display=swap"
        />
        {/* eslint-enable @next/next/no-page-custom-font */}
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <ThemeStyle />
        <Script id="fandun-theme-boot" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        <ThemeProvider>
          <ImageGate />
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
          >
            본문으로 건너뛰기
          </a>
          <SiteHeader />
          <main id="content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <EnteringToast />
        </ThemeProvider>
      </body>
    </html>
  );
}
