import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Coupang',
  description: 'Coupang page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/">홈</Link>
          <Link href="/list">list</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
