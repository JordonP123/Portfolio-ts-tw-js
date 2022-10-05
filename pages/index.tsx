import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen 
    snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
      <Head>
        <title>Jordons Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/*  Contact Me */}




    </div>
  )
}

export default Home
