import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='max-w-lg w-full mx-auto text-center pt-16 pb-10'>
      <h1 className='text-2xl sm:text-4xl capitalize'>
        Interested in working together
      </h1>
      <a href='mailto:me.sanyaoluadefemi@gmail.com'>
        <span className='mt-10 inline-block w-auto  bg-black text-white text-base md:text-xl py-4  px-7 cursor-pointer'>
          <div className='flex flex-row items-center'>
            <span className='mr-3'>Get in Touch</span>
            <FaArrowRight />
          </div>
        </span>
      </a>
    </div>
  )
}

export default Contact
