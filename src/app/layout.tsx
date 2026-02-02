import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NanoClaw - Lightweight Claude Assistant with Container Isolation",
  description: "NanoClaw is a minimalist, secure Claude assistant that runs in Apple containers. Just 500 lines of TypeScript, full filesystem isolation, WhatsApp integration. Built to be understood and customized.",
  keywords: ["nanoclaw", "claude assistant", "ai assistant", "apple container", "whatsapp bot", "claude code", "ai agent", "lightweight ai", "secure ai assistant"],
  authors: [{ name: "NanoClaw Team" }],
  openGraph: {
    title: "NanoClaw - Lightweight Claude Assistant with Container Isolation",
    description: "A minimalist, secure Claude assistant in ~500 lines. Container isolation, WhatsApp integration, fully customizable.",
    url: "https://nanoclaw.bot",
    siteName: "NanoClaw",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoClaw - Lightweight Claude Assistant",
    description: "A minimalist, secure Claude assistant in ~500 lines. Container isolation, WhatsApp integration.",
  },
  alternates: {
    canonical: "https://nanoclaw.bot",
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "NanoClaw",
              applicationCategory: "AI Assistant",
              operatingSystem: "macOS, Linux",
              description: "A lightweight, secure Claude assistant that runs in Apple containers. Built to be understood and customized for your own needs.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Person",
                name: "gavrielc",
              },
              softwareVersion: "1.0",
              url: "https://nanoclaw.bot",
              downloadUrl: "https://github.com/gavrielc/nanoclaw",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
