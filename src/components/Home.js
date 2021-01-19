import React from 'react'
import Search from './Search'
// import searchBgDesktop from '../assets/images/bg-shorten-desktop.svg'
const Home = () => {
  return (
    <div className='text-black text-4xl container py-10'>
      <div className='my-24'>
        <p className='text-6xl font-bold'>
          More than just <br />
          shorter links
        </p>
        <p className='text-lg text-neutral-gray'>
          Build your brand's recognition and get detailed <br />
          insights on how your links are performing.
        </p>

        <button className='text-base bg-primary-cyan rounded-full px-8 py-2 text-white my-8 hover:opacity-90'>
          Get Started
        </button>
      </div>
      <Search />
      {/* <div className='bg-desktop-search-bg h-full w-full' /> */}
    </div>
  )
}

export default Home
