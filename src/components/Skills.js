import React, { useEffect } from 'react'
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
} from 'react-icons/si'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Skills = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
    // return () => {
    //  effect
    // };
  })
  return (
    <div
      className='max-w-4xl mx-auto justify-center py-10 text-center'
      id='skills'
    >
      <p className='text-2xl text-black sm:text-4xl'>Tech I Use</p>
      <div className='flex flex-wrap justify-center pt-2'>
        <article data-aos='flip-left' data-aos-duration='600'>
          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl bg-white rounded-xl sm:w-52'>
            <SiHtml5
              color='#2196f3'
              className='mx-auto text-4xl hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110'
            />
            <p className='mt-6 font-semibold text-center sm:text-2xl text-xl'>
              Html5
            </p>
          </div>
        </article>
        <div
          data-aos='flip-right'
          data-aos-duration='800'
          data-aos-delay='200'
          className='flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl bg-white rounded-xl sm:w-52'
        >
          <SiCss3
            color=''
            className='mx-auto text-red-500 text-4xl hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110'
          />
          <p className='mt-6 font-semibold text-center sm:text-2xl text-xl'>
            CSS3
          </p>
        </div>
        <div
          data-aos='slide-up'
          data-aos-duration='600'
          data-aos-delay='400'
          className='flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl bg-white rounded-xl sm:w-52'
        >
          <SiBootstrap
            color='#2196f3'
            className='mx-auto text-4xl hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110'
          />
          <p className='mt-6 font-semibold text-center sm:text-2xl text-xl'>
            Bootstrap
          </p>
        </div>
        <div
          data-aos='slide-down'
          data-aos-duration='800'
          data-aos-delay='600'
          className='flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl bg-white rounded-xl sm:w-52'
        >
          <SiTailwindcss
            color=''
            className='mx-auto text-green-400 text-4xl hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110'
          />
          <p className='mt-6 font-semibold text-center sm:text-2xl text-xl'>
            TailwindCss
          </p>
        </div>
        <div
          data-aos='zoom-in-down'
          data-aos-duration='800'
          data-aos-delay='800'
          className='flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl bg-white rounded-xl sm:w-52'
        >
          <SiJavascript
            color='#ffdf8d'
            className='mx-auto text-4xl hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110'
          />
          <p className='mt-6 font-semibold text-center sm:text-2xl text-xl'>
            JavaScript
          </p>
        </div>
        <div
          data-aos='zoom-out'
          data-aos-duration='800'
          data-aos-delay='1000'
          className='flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl bg-white rounded-xl sm:w-52'
        >
          <SiReact
            color='#2196f3'
            className='mx-auto text-4xl hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110'
          />
          <p className='mt-6 font-semibold text-center sm:text-2xl text-xl'>
            React.js
          </p>
        </div>
        <div
          data-aos='zoom-out-top'
          data-aos-duration='800'
          data-aos-delay='1000'
          data-aos-easing='ease-in-out'
          className='flex flex-col w-40 p-10 m-6 overflow-hidden shadow-2xl bg-white rounded-xl sm:w-52'
        >
          <SiRedux
            color='#2196f3'
            className='mx-auto text-4xl hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110'
          />
          <p className='mt-6 font-semibold text-center sm:text-2xl text-xl'>
            Redux
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
