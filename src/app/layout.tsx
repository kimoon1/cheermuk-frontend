
// import Script from 'next/script';
import '../styles/global.css';
import { Metadata } from "next"


export const metadata: Metadata = {
  title: {
    "template": "%s",
    "default": "Cheermuk"
  },
  description: 'Generated by Next.js',
}


declare global {
  interface Window {
    kakao: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link href="/font/SUIT-woff2/SUIT.css"
          rel="stylesheet" />
        
      </head>
      <body>

        {children}
      </body>

    </html>
  )
}
