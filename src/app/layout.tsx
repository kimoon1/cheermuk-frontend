
// import Script from 'next/script';

import "../styles/font/SUIT.css";
import '../styles/global.css';
import 'swiper/css';
import { Metadata } from "next"


export const metadata: Metadata = {
  title: {
    "template": "%s",
    "default": "Cheermuk"
  },
  description: 'Generated by Next.js',

}


// declare global {
//   interface Window {
//     kakao: any;
//   }
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>

        {children}
      </body>

    </html>
  )
}
