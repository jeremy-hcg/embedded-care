import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Embedded Care for Senior Communities — Nurses & Company",
  description:
    "Place a dedicated, trained care team inside your senior community at zero cost to your facility. In-house personal care and companion care operated by Nurses & Company. St. Louis, MO — since 1992.",
  openGraph: {
    title: "Embedded Care for Senior Communities — Nurses & Company",
    description:
      "In-house care for your residents. Zero cost to your facility. Nurses & Company places a dedicated care team inside your senior community.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Embedded Care for Senior Communities — Nurses & Company",
    description:
      "In-house care for your residents. Zero cost to your facility.",
  },
  other: {
    "theme-color": "#1a2744",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1a2744" />
      </head>
      <body
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
