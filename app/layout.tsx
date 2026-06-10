import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biblio — Make every coding agent write like your best engineer",
  description:
    "Biblio is the knowledge base MCP server for engineering orgs. Ground every agent in your canonical standards, review code against the same knowledge, and turn every correction into shared team memory.",
  openGraph: {
    title: "Biblio by Wonderly",
    description:
      "The closed loop for AI coding quality: canonical docs ground generation, integrated reviews enforce them, and corrections become shared memory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
