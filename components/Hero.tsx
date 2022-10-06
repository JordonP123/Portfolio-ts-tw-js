import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import photoOfMe from '../photos/photoO.jpg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My Name's Jordon", '<Welcome To My Portfolio />'
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center
         justify-center text-center overflow-hidden
         '>
            <BackgroundCircles />
            <Image
                height={190}
                width={190}
                className="rounded-full relative mx-auto object-cover"
                src={photoOfMe}
                alt='photo of user'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]'>
                    Software Engineer
                </h2>
                <h1 className='text-5xl font-semibold px-10'>
                    <span className='ml-5'>{text}</span>
                    <Cursor cursorColor='#c52222' />
                </h1>
                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}