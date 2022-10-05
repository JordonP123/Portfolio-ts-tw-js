import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import photoOfMe from '../photos/me.jpg'
import Image from 'next/image'
import { relative } from 'path'

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
                height={180}
                width={180}
                className="rounded-full relative mx-auto object-cover"
                src={photoOfMe}
                alt='photo of user'
            />
            <div>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]'>Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='ml-5'>{text}</span>
                    <Cursor cursorColor='#c52222' />
                </h1>
            </div>
        </div>
    )
}