import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>
                <SocialIcon
                    url='https://www.linkedin.com/in/jordon-pruitt/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://github.com/JordonP123'
                    fgColor='gray'
                    bgColor='transparent'
                    />
            </motion.div>
            <Link href='#hero'>
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                y: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}>
             <i className="fa-brands fa-node-js scale-150 hover:text-[#c52222] hover:opacity-100 hover:cursor-pointer opacity-50"></i> 
            </motion.div>
            </Link>
            <Link href='#contact'>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-[#c52222]'>
                    Get In Touch
                </p>
            </motion.div>
            </Link>
        </header>
    )
}