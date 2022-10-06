import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5]
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
                        <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                            src='data:image/png;base64,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' alt='' />
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