import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sobhan Aminnejad - Portfolio",
  description:
    "Portfolio of Sobhan Aminnejad, a Software Engineer with a focus on front-end development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sobhan Aminnejad - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Sobhan Aminnejad, a Software Engineer with a focus on front-end development."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
