import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";

const inter = Inter({
  weight: ['400', '800'],
  subsets: ["latin"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <main className='container'>
      <Header/>
      {children}
    </main>
    </body>
    </html>
  );
}
