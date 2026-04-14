import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nik Stagno Navarra — Digital Product Manager",
  description:
    "Digital Product Manager specialising in mobile, payments, and high-scale consumer platforms. Currently PM – Mobile at Prezzee, Melbourne.",
  openGraph: {
    title: "Nik Stagno Navarra — Digital Product Manager",
    description:
      "Turning ideas into products people love — at the intersection of mobile, payments, and scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}