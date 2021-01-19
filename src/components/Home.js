import React from 'react'
import Search from './Search'
import workingIllustration from '../assets/images/illustration-working.svg'

const Home = () => {
  return (
    <div className='text-black text-4xl py-10 text-center md:text-left'>
      <div className='my-20 flex flex-col md:flex-row '>
        <div className='flex-col'>
          <p className='text-6xl py-3 font-bold '>
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

        <div className='md:ml-4 ml-8 md:w-8/12 w-full my-8 sm:my-2'>
          <img src={workingIllustration} alt='person working at computer' />
        </div>
      </div>

      <Search />
    </div>
  )
}

export default Home
