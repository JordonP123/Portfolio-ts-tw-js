import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import me from '../photos/me.jpg'

type Props = {}

export default function Projects({ }: Props) {
    const projects = [me,me,me]
    return (
        <div className='h-screen relative flex overflow-hidden text-left md:flex-row max-w-full
    justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='realtive w-full flex overflow-y-hidden overflow-x-scroll
             snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#c52222]'>
                {projects.map((e, i)=> (
                    <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.div
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}>
                           <Image height={400} width={400} src={e} alt=''/> 
                    </motion.div>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#c52222]/50'>Project {i + 1} of {projects.length}: </span>
                            Database
                            </h4>

                            <p className='text-lg text-center md:text-left'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore, at, in veniam architecto nulla quidem ex tempora sequi et voluptatibus nemo 
                                provident enim fugit? Ipsam quibusdam id mollitia necessitatibus.
                                Lorem ipsum dolor 
                            </p>
                    </div>
                    </div>

                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#c52222]/10 left-0 h-[500px] -skew-y-12' />
        </div>
    )
}