import React from 'react'
import { motion } from 'framer-motion'
import photoOfMe from '../photos/me.jpg'
import Image from 'next/image'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto 
    items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
                <div className='w-[300px] h-[150px] md:w-[1800px] md:h-80 xl:h-[400px]'>
               <Image height={2200} width={2200} src={photoOfMe} alt='photo of me'
                className="-mb-5 md:mb-0 flex-shrink-0 rounded-full md:rounded-2xl" />
                </div>

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#c52222]'>little</span> background
                </h4>
                <p className='text-md'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consectetur, accusamus vel. Quasi maiores tempora voluptatum 
                reiciendis delectus accusantium autem sint at vel repellat 
                fugit quos, id est dolorum aliquid vero. Lorem ipsum dolor 
                sit amet consectetur adipisicing elit. Voluptatem vero 
                error eaque. Dicta, doloremque. Ab ut animi molestias 
                consequatur commodi quis itaque, earum eius, fugiat corporis 
                amet rerum, voluptates non?
                </p>
            </div>
        </motion.div>
    )
}