"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { View } from '@react-three/drei';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const GalleryDataProvider = ({ src, width, height, index} : Props) => {
  const {ref, inView} = useInView({
    triggerOnce: true
})

const imageVariants = {
    hidden: {opacity: 0.1 , scale: 0.5},
    visible: {opacity: 0.9 , scale: 1, AnimationTimeline:View}
}

const animationDelay = 1.8

  return (
    <motion.div className='w-full h-full'
    ref={ref}
    initial="hidden"
    variants={imageVariants}
    animate={inView ? "visible" : "hidden"}
    custom={index}
    transition={{delay: index * animationDelay}}
    >
    <Image className='w-full h-full'
src={src}
width={width}
height={height}
alt=' '
    />

     </motion.div>
 
  )
}

export default GalleryDataProvider