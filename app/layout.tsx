import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sobhan Aminnejad | Fullstack Product Engineer",
  description:
    "Portfolio of Sobhan Aminnejad, a fullstack product engineer with strong frontend depth, backend experience, and AI-native delivery workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sobhan Aminnejad | Fullstack Product Engineer</title>
        <meta
          name="description"
          content="Portfolio of Sobhan Aminnejad, a fullstack product engineer with strong frontend depth, backend experience, and AI-native delivery workflows."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
