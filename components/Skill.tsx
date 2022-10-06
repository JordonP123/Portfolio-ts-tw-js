import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
    skillPerc: string;
    imageSrc: string;
}

export default function Skill({ skillPerc, imageSrc }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
    <motion.div
    initial={{
        x: 200,
        opacity: 0
    }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    className='w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 '
    >
    <Image width={''} height={''} src={imageSrc}
    className='p-1 rounded-full border border-gray-500 object-cover 
    filter group-hover:grayscale transition duration-300 ease-in-out' alt='skills'/>
        </motion.div>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32
        rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100'>
                    {skillPerc}
                </p>
            </div>
        </div>
    </div>
  )
}