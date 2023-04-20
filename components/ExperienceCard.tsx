import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import knex from '../photos/knex.png'
import css from '../photos/CSS.webp'
import react from '../photos/React.png'
import node from '../photos/node2.png'
import git from '../photos/git.png'
import html from '../photos/HTML.png'
import js from '../photos/js.png'
import sql from '../photos/SQL.png'


type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[300px] md:w-[600px] xl:w-[900px] xl:h-[650px] 
        snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
        cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src='https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/408/original/Bloom_Institute_of_Technology_logo.png'
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
       object-cover object-center' alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Student At BloomTech</h4>
                <p className='font-bold text-2xl mt-1'>BloomTech</p>
                <div className='flex space-x-2 my-2'>
                    <Image height={50} width={50} className='rounded-full' src={js} alt='javascript'/>
                    <Image height={50} width={50} className='rounded-full' src={react} alt='javascript'/>
                    <Image height={50} width={50} className='rounded-full' src={node} alt='javascript'/>
                    <Image height={50} width={50} className='rounded-full' src={git} alt='javascript'/>
                    <Image height={50} width={50} className='rounded-full' src={html} alt='javascript'/>
                    <Image height={50} width={50} className='rounded-full' src={css} alt='javascript'/>
                    <Image height={50} width={50} className='rounded-full' src={sql} alt='javascript'/>
                    <Image height={50} width={50} className='rounded-full' src={knex} alt='javascript'/>
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    June 06 2022 - PRESENT
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Finishing up at a well known, 6 month intensive full-stack bootcamp, which specializes in the technologies listed above</li>
                    <li>Participated in weekly sprints thriving to achieve results at the end of the week</li>
                    <li>Here is a list of <a className='uppercase font-semibold hover:text-[#c52222]' href='#projects'>Projects</a></li>
                </ul>
            </div>
        </article>
    )
}