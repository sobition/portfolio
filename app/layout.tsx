import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sobi - Portfolio",
  description:
    "Portfolio of Sobi, a Software Engineer with a focus on front-end development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sobi - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Sobi, a Software Engineer with a focus on front-end development."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
