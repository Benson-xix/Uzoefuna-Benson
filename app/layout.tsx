import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uzoefuna Benson',
  description: 'A Portfolio Web-App for Uzoefuna Benson',
  keywords: ["Development", "Web", "Software Development", "Programming" , "Benson", "Uzoefuna", "chijioke", "tech","javascript" "Work", "Skill"]
}

  export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
