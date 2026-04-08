import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Embedded Care | Nurses & Company",
  description:
    "In-house care for your residents. Zero cost to your facility. Nurses & Company places a dedicated care team inside your senior community. St. Louis — since 1992.",
  openGraph: {
    title: "Embedded Care | Nurses & Company",
    description: "In-house care for your residents. Zero cost to your facility.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#04122e" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSerif.variable} ${manrope.variable} font-body bg-background text-on-surface antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
