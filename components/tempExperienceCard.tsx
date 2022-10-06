import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function TempExperienceCard({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            '<Processing... />'
        ],
        loop: true,
        delaySpeed: 1000,
    })
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] xl:h-[650px] 
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <p className='font-semibold mt-40 p-10 text-5xl'>
                {text}
                <Cursor cursorColor='#c52222' />
            </p>
        </article>
  )
}