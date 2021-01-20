import React from 'react'
import workingIllustration from '../assets/images/illustration-working.svg'

const Header = () => {
  return (
    <div className='md:my-20 flex flex-col-reverse md:flex-row '>
      <div className='flex-col'>
        <p className='text-5xl py-3 font-bold '>
          More than just <br />
          shorter links
        </p>
        <p className='text-lg text-neutral-gray py-3'>
          Build your brand's recognition and get detailed <br />
          insights on how your links are performing.
        </p>
        <button className='sm:text-base text-xl px-8 sm:py-4 py-6 text-white md:my-4 my-8 bg-primary-cyan rounded-full hover:opacity-90'>
          Get Started
        </button>
      </div>

      <div className='md:ml-4  my-8 sm:my-2'>
        <img
          className='md:w-8/12 w-full'
          src={workingIllustration}
          alt='person working at computer'
        />
      </div>
    </div>
  )
}

export default Header
