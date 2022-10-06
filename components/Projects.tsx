import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import me from '../photos/me.jpg'
import nasa from '../photos/nasa.png'
import widget from '../photos/widget.png'
import auth from '../photos/auth3.png'
import recipe from '../photos/recipe2.png'

type Props = {}

export default function Projects({ }: Props) {
    const projects = [nasa,widget, auth, recipe]
    const d1 = [`Constructed a design spec, and utilized Nasa API to produce 10+ Stateful React Components from scratch`, 'Developed a widget in both Class and Functional Components, both with identical functionalities', 'Developed a RESTful API that allows users to login, register, and retrieve data if given access, tested the endpoints using Postman', 'Crafted a RESTful API with CRUD functionality that allows users to retrieve recipes']
    const d2 = ['Manipulated Nasa API utilizing React Hooks and helper functions, to update the state of the application based on UI', `Utilized a RESTful API to POST data, depending on the state of the widget`, 'Utilized BcryptJS to has a users password,  as well as store the user in session upon successful login', 'Utilized foreign keys within created schema tables using Knex.js to ensure normalized data structure']
    const d3 = ['Created component-specific routes using React Router, that directs user to correct component based on UI','Built tests using Jest and React Testing Library with Test-Driven Development to perform quality checks before production', 'Applied Middleware to authenticate the login, registration, and logout endpoint', 'Extracted and organized data using SQLlite3 using Knex.js seeds and migrations']
    const d4 = ['DEPLOYING SOON', 'TRY ME', 'VIEW ME', 'VIEW ME']
    const d5 = [null, null, 'Constructed a model to access the database using Knex.js, involving seeds and migrations', null]
    const names = ['Nasa Photo Of The Day', 'React Widget']
    const links = ['#projects', 'https://advanced-react-grid.herokuapp.com/', 'https://github.com/JordonP123/Node-Auth', 'https://github.com/JordonP123/Node-Recipes' ]
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
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#c52222]/50'>Project {i + 1} of {projects.length}: </span>
                            {names[i]}<br/>
                            <a className='text-gray-500/50 hover:text-[#c52222]' href={links[i]}>{d4[i]}</a>
                            </h4>


                            <div className='text-sm text-center md:text-left xl:text-lg'>
                                <p>1. {d1[i]}</p>
                                <p>2. {d2[i]}</p>
                                <p>3. {d3[i]}</p>
                                <p>{d5[i] !== null ? `4. ${d5[i]}` : null}</p>
                            </div>
                    </div>
                    </div>

                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#c52222]/10 left-0 h-[500px] -skew-y-12' />
        </div>
    )
}