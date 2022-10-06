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
            <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.2 }}
            className='w-[400px] h-[400px] border-2 z-0 absolute left-6 bottom-62 rounded-md border-[#c52222] animate-pulse'></motion.div>
                <div className='w-[100px] h-[1px] mt-10 md:w-[3000px] md:h-[400px] xl:w-[3600px] xl:h-[500px]'>
               <Image height={2200} width={2200} src={photoOfMe} alt='photo of me'
                className="-mb-5 md:mb-0 flex-shrink-0 rounded-full md:rounded-2xl" />
                </div>

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#c52222]'>little</span> background
                </h4>
                <p className='text-sm md:text-[15px]'>
                Hey!  I am Full Stack Software Engineer
                and aspiring team leader driven by success and 
                happiness.  I strive in environments where I 
                have to get out of my comfort zone and reach new 
                limits. I have always been in sales, I was conducting life insurance sales 
                for a year at a company named Family First Life.  Although it paid, 
                I was unhappy as I was not able to get out of my comfort 
                zone, and learn new skills.  It was the same old boring 
                stuff every day.  I decided I wanted to stop and learn a new skill, 
                although I did not know what skill I wanted to learn.  I took a 
                few months to myself, picked up a job as a server, and I started 
                teaching myself how to code in this time.  I absolutely loved it!!!  
                I took the next few months to learn some things and decided to pursue 
                it at well known school, Bloomtech.  The last 6 months have completely 
                changed my life in many aspects and I am looking forward to my future in 
                web development! 
                </p>
            </div>
        </motion.div>
    )
}