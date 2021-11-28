import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='py-5 border-t-3'>
      <div className='flex justify-center mt-4'>
        <a
          href='#'
          className='text-xl m-1 p-1 sm:p-2 text-gray-800 hover:bg-gray-500 rounded-full hover:text-white transition-colors duration-300'
        >
          <FaGithub className='' />
          <span class='sr-only'>Github</span>
        </a>
        <a
          href='#'
          className='text-xl m-1 p-1 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300'
        >
          <FaTwitter className='' />
          <span class='sr-only'>Twitter</span>
        </a>
        <a
          href='#'
          className='text-xl m-1 p-1 sm:p-2 text-green-300 hover:bg-green-300 rounded-full hover:text-white transition-colors duration-300'
        >
          <FaEnvelope className='' />
          <span class='sr-only'>Email</span>
        </a>
      </div>
      <div className='flex justify-center mt-4'>
        <p className='text-black mb-4'>
          Made With{' '}
          <span role='link' aria-label='heart'>
            💖
          </span>
          By{' '}
          <a
            href='mailto:me.sanyaoluadefemi@gmail.com'
            className='text-blue-500'
          >
            Sanyaolu Adefemi
          </a>
        </p>
      </div>
      <ScrollIntoView selector='#up'>
        <div className='fixed bottom-0 right-2 z-10'>
          <FaChevronCircleUp className='text-2xl md:text-5xl animate-bounce text-red-400' />
        </div>
      </ScrollIntoView>
    </div>
  )
}

export default Footer
