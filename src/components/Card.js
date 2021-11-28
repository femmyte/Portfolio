import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'
const Card = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col justify-center max-w-sm mx-auto bg-white shadow-xl rounded-xl p-5 hover:shadow-2xl'>
        <div className=''>
          <img
            src='./images/fm.png'
            alt='femmyte'
            className='w-32 h-32 rounded-full mx-auto shadow-xl drop-shadow-sm hover:shadow-2xl'
          />
        </div>
        <div className='text-center mt-5'>
          <p className='text-xl sm:text-2xl text-gray-900'>Sanyaolu Adefemi</p>
          <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
            Frontend Developer
          </p>
          <div className='flex align-center justify-center mt-4'>
            <a
              href='#'
              className='text-xl m-1 p-1 sm:p-2 text-gray-800 hover:bg-gray-500 rounded-full hover:text-white transition-colors duration-300'
            >
              <FaGithub className='animate-spin' />
              <span class='sr-only'>Github</span>
            </a>
            <a
              href='#'
              className='text-xl m-1 p-1 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300'
            >
              <FaTwitter className='animate-bounce' />
              <span class='sr-only'>Twitter</span>
            </a>
            <a
              href='#'
              className='text-xl m-1 p-1 sm:p-2 text-green-300 hover:bg-green-300 rounded-full hover:text-white transition-colors duration-300'
            >
              <FaEnvelope className='animate-pulse' />
              <span class='sr-only'>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
