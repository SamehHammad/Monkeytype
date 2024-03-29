import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const Navbar = React.lazy(() => import("../components/navbar/Navbar"));
const TestProvider = React.lazy(() => import("../context/TestContext"));
const ThemeProvider = React.lazy(() => import("../context/ThemeContext"));
const AuthContext = React.lazy(() => import("../context/AuthContext"));
const SplashPovider = React.lazy(() => import("../context/AppContext"));
const ShortCuts = React.lazy(() => import("../components/shortCuts/ShortCuts"));
const Footer = React.lazy(() => import("../components/footer/Footer"));
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monkeytype Clone",
  description: "Generated by Sameh Hammad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthContext>
        <TestProvider>
          <SplashPovider>
            <ThemeProvider>
              <body className={inter.className} suppressHydrationWarning={true}>
                <div className="w-full  min-h-screen bg-bgColor px-8 ">
                  <Navbar />
                  <div className="container min-w-full ">
                    {children}
                    <ShortCuts />
                    <Footer />
                  </div>
                </div>
              </body>
            </ThemeProvider>
          </SplashPovider>
        </TestProvider>
      </AuthContext>
    </html>
  );
}
