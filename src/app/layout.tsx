import type {Metadata} from "next";

import "./globals.scss";
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";

import {BaseHubThemeProvider} from "../context/basehub-theme-provider";

import {Providers} from "./providers";
import {Header} from "./_components/header";
import {Footer} from "./_components/footer";

export const metadata: Metadata = {
  title: "SaaS-template",
  description: "Template for SaaS applications",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`min-h-svh bg-surface-primary text-text-primary dark:bg-dark-surface-primary dark:text-dark-text-primary ${GeistMono.variable} ${GeistSans.variable} font-sans`}
      >
        <Providers>
          <BaseHubThemeProvider />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
