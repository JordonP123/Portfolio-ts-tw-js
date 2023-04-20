import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import me from '../photos/me.jpg'
import nasa from '../photos/nasa.png'
import widget from '../photos/widget.png'
import ticTacToe from '../photos/tic-tac-toe.png'
import gitHubGoLinks from '../photos/golinksGitHub.png'

type Props = {}

export default function Projects({ }: Props) {
    const projects = [gitHubGoLinks, ticTacToe,widget, nasa]
    const d1 = ['Implemented a search bar, that routes you to different repos utilzing GitHubs API', `Created a reusable component, that updates its display based on UI`, 'Developed a widget in both Class and Functional Components, both with identical functionalities', 'Constructed a design spec, and utilized Nasa API to produce 10+ Stateful React Components from scratch']
    const d2 = ['Utilized react-router-dom to route to different commits based on API response', 'Designed a scoreboard that persists, updates, and can be reset through state management', `Utilized a RESTful API to POST data, depending on the state of the widget`, 'Manipulated Nasa API utilizing React Hooks and helper functions, to update the state of the application based on UI']
    const d3 = ['Implemented media queries for a responsive design', 'Implemented a switch that enables dark mode or light mode, with conditional rendering','Built tests using Jest and React Testing Library with Test-Driven Development to perform quality checks before production', 'Created component-specific routes using React Router, that directs user to correct component based on UI']
    const d4 = ['TRY ME', 'TRY ME', 'VIEW ME', 'TRY ME']
    const names = ['GitHub API','Tic Tac Toe', 'React Widget', 'Nasa API']
    const links = ['https://golinkstakehome.herokuapp.com/', 'https://tic-tac-toe-green-alpha.vercel.app', 'https://advanced-react-grid.herokuapp.com/', '#projects' ]
    return (
        <div className='h-screen relative flex overflow-hidden text-left md:flex-row max-w-full
    justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-20 xl:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
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
                           <Image height={350} width={450} src={e} alt='projects'/> 
                    </motion.div>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-3xl font-semibold text-center md:text-4xl'>
                            <span className='underline decoration-[#c52222]/50'>Project {i + 1} of {projects.length}: </span>
                            {names[i]}<br/>
                            <a className='text-gray-500/50 hover:text-[#c52222]' href={links[i]}>{d4[i]}</a>
                            </h4>


                            <div className='text-sm text-center md:text-left xl:text-lg'>
                                <p>1. {d1[i]}</p>
                                <p>2. {d2[i]}</p>
                                <p>3. {d3[i]}</p>
                            </div>
                    </div>
                    </div>

                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#c52222]/10 left-0 h-[500px] -skew-y-12' />
        </div>
    )
}