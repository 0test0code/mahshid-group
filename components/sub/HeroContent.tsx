"use client";


import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => { const t = useTranslations('HeroContent');
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-52 w-full z-[20] mr-2"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-8 w-8 text-xl " />
          <h1 className="Welcome-text text-[14px]">
            Fullstack <i>Under</i> Developing Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className={`flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto mr-2 ${t('Font')}`}
        >
          <span>
            {t('Providing')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              {t('best')} {" "}
            </span>
            {t('project')}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          We&apos;'re a Full Stack Software group with experience in Website,
          Mobile, and Software development. Check out our projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className={`py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] ${t('blotus')} text-xl`}
        >
          {t('Learn')}
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
