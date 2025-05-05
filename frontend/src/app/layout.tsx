import localFont from "next/font/local";

import { AuthProvider } from "./contexts/AuthContext";

import type { Metadata } from "next";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UCSD Health | E-Bike Safety",
  description: "UCSD Health E-Bike Safety Certification Website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <Toaster
            toastOptions={{
              style: {
                boxShadow: "none",
                backgroundColor: "#FAFFEA",
                borderRadius: "16",
                maxWidth: "55ch",
                border: "1px solid #1c3a29",
              },
            }}
          />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
