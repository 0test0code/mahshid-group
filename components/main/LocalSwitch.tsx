'use client';
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

const LocalSwitch = () => {  const t = useTranslations('LocalSwitcher');
                               const router = useRouter();
                               const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) =>{  
                                const nextLanguage = e.target.value; 
                                router.replace(`/${nextLanguage}`);
                                                                            }
  return (
    <label className="border-2 rounded text-white">
      <p className="sr-only text-white bg-black"> {t('ToggleLanguage')} : </p>
          <select className="bg-black text-white py-2" onChange={changeLanguage}>
              <option value="en" className="text-lg">{t('English')}</option>
              <option value="fa" className="text-lg">{t('Persian')}</option>
          </select>

    </label>
  )
}
export default LocalSwitch



