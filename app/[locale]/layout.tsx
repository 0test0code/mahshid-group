import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@/app/globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { 
  title: "Mahshid group",
  description: "نخ کوه شایسته دلار عمان طلا بورس اخبار اقتصادstring yarn knit knitting wool thread Mount Mountain Mountaineer mountaineering mountainous area. Outdoor activity mountainous region Spindle spinning wheel lathe spindle woolen reel pulley spool thread",
};

interface RootLayoutProps {
  children:React.ReactNode;
  params: {
    locale:string
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<RootLayoutProps>
/* {
  children: React.ReactNode;
  params: {locale: string};
} */
) {                              
                       
                            const locale = await getLocale();
                            if (!routing.locales.includes(locale as any)) {
                              notFound();
                            }   
                          
                            // Providing all messages to the client
                            // side is the easiest way to get started
                            const messages = await getMessages();
  return (
    <html lang={locale}>
      <body    className={`bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
       
      
        <StarsCanvas />
      
        <NextIntlClientProvider messages={messages}>
        <Navbar />
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
