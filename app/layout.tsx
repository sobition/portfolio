import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sobi - Portfolio",
  description:
    "Portfolio of Sobhan Aminnejad, a product engineer building web, backend, and mobile experiences with React, React Native, Expo, NestJS, and scalable platform architecture.",
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
          content="Portfolio of Sobhan Aminnejad, a product engineer building web, backend, and mobile experiences with React, React Native, Expo, NestJS, and scalable platform architecture."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
