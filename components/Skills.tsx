import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import me from '../photos/me.jpg'
import ts from '../photos/TS.png'
import knex from '../photos/knex.png'
import css from '../photos/CSS.webp'
import react from '../photos/React.png'
import node from '../photos/node2.png'
import git from '../photos/git.png'
import html from '../photos/HTML.png'
import js from '../photos/js.png'
import tw from '../photos/tailwind.jpg'
import sql from '../photos/SQL.png'

type Props = {
}

export default function Skills({ }: Props) {
    const skillPerc = ['70%', '70%', '60%', '80%', '85%', '55%', '75%', '40%', '45%', '50%']
    let skill = [react, js, node, css, html, sql, git, knex, ts, tw]
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative flex-col text-center md:text-leftxl:flex-row max-w-[2000px] xl:px-10 
        min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                Hover over a skill for current proficiency
            </h3>

            <div className='grid grid-cols-4 gap-5'>
                {skillPerc.map((e, i) => (
                    <Skill key = {i} skillPerc={e} imageSrc={skill[i]} />
                ))}
            </div>
        </motion.div>
    )
}