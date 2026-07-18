import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Ehi Spell Caster | Professional Spiritual Services",
  description: "Experience transformative spiritual guidance and spell casting services from Dr Ehi Spell Caster. Expert mystical services for life's challenges.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="text-text">{children}</body>
    </html>
  );
}
