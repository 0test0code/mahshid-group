import {setRequestLocale} from 'next-intl/server';
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
//import Image from "next/image";
import {useTranslations} from 'next-intl';
export default function Home({params: {locale}}) { setRequestLocale(locale);  
      const t = useTranslations('Home');
  return ( 
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      {t('title')}
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
