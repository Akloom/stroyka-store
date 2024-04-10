import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./global.scss";
import { Suspense } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "@/providers/StoreProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  icons: "/img/website-icon.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <StoreProvider>
          <Header />
          <Suspense fallback="loading">{children}</Suspense>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
