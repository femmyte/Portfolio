import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronCircleDown } from 'react-icons/fa'
const AboutUs = () => {
  return (
    <div className='max-w-3xl mt-10 mx-auto'>
      <p className='text-2xl text-black md:text-4xl font-bold text-center'>
        Hey{' '}
        <span className='text-yellow-600 animate-bounce inline-block'>👋 </span>
      </p>
      <p className='text-base sm:text-xl text-gray-600 text-center leading-relaxed mt-4'>
        My name is Sanyaolu Adefemi Mathew, A graduate of Library and
        Information Science. I am a self taught Developer who is passionate of
        solving the world biggest problem and always ready to do dificult
        things. I am Teachable, and always ready to learn from anybody.
      </p>

      <ScrollIntoView selector='#skills'>
        <div className='mx-auto p-20'>
          <FaChevronCircleDown className='animate-bounce mx-auto text-3xl text-blue-500' />
        </div>
      </ScrollIntoView>
    </div>
  )
}

export default AboutUs
