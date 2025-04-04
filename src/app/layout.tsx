import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsappButton from "@/components/WhatsappButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dhillon Dental Studio - Your Trusted Partner For Dental Health",
  description: "Professional dental services for your perfect smile",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <WhatsappButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

