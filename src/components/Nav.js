import React, { useState } from 'react'

const Nav = () => {
  const [hidden, setHidden] = useState(true)
  const [toggle, setToggle] = useState('hidden')

  const handleHamburger = () => {
    setHidden(!hidden)
    if (hidden) {
      setToggle('hidden')
    } else {
      setToggle('')
    }
  }

  return (
    <nav className='container flex w-full flex-wrap items-center py-4 px-8 mx-auto'>
      <p className='text-3xl font-bold pr-4'>Shortly</p>

      <div className='flex flex-1 w-100 justify-end md:hidden'>
        <button id='hamburger' onClick={handleHamburger}>
          <img
            alt='icon'
            className={`block`}
            src='https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png'
            width='40'
            height='40'
          />
        </button>
      </div>
      <div
        className={`${toggle} md:flex text-neutral-gray w-full md:w-auto text-right text-bold mt-5 md:mt-0`}
      >
        <a
          href='/'
          className=' block md:inline-block hover:text-blue-200 px-4 py-2'
        >
          Features
        </a>
        <a
          href='/'
          className='block md:inline-block hover:text-blue-200 px-4 py-2'
        >
          Pricing
        </a>
        <a
          href='/'
          className='block md:inline-block hover:text-blue-200 px-4 py-2'
        >
          Resources
        </a>
      </div>
      <div
        className={`${toggle} flex flex-col md:flex md:flex-row flex-1 w-100 justify-end items-end text-right`}
      >
        <a
          className='block md:inline-block px-4 py-2 text-neutral-gray'
          href='/'
        >
          Login
        </a>
        <div className='bg-primary-cyan rounded-full w-auto'>
          <a
            className='block md:inline-block py-2 px-6 text-white hover:opacity-90'
            href='/'
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
