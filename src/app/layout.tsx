import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Embedded Care — In-House Care for Senior Communities | Nurses & Company",
  description:
    "Place a dedicated, trained care team inside your senior community at zero cost. In-house personal care operated by Nurses & Company. St. Louis — since 1992.",
  openGraph: {
    title: "Embedded Care — Nurses & Company",
    description:
      "In-house care for your residents. Zero cost to your facility.",
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
    <html lang="en">
      <head>
        <meta name="theme-color" content="#4a6741" />
      </head>
      <body className={`${dmSans.variable} ${lora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
