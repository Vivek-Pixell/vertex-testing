import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Jost } from 'next/font/google';
import Navbar from './component/NavBar';
import Head from 'next/head';

const jost = Jost({
  weight: ['400', '700'], // Choose the weights you need
  subsets: ['latin'],
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Vertex',
  description: 'The Future of Smart and Stylish Signage',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.className}>
      <Head>
        <link rel="preload" as="image" href="/images/bg-image.webp" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// import { Jost } from "next/font/google";

// const jost = Jost({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-jost", // Custom CSS variable
// });

// export const metadata = {
//   title: "My Next.js App",
//   description: "Using Jost font in Next.js",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={jost.variable}>
//       <body className="font-jost">{children}</body>
//     </html>
//   );
// }
