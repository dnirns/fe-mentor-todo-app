import React, { useState } from 'react'

const Nav = ({ logo, link1, link2, link3, link4 }) => {
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

      <div className='flex md:hidden'>
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
        className={`${toggle} md:flex-1 md:flex md:w-full md:justify-end md:text-right`}
      >
        <a
          className='block md:inline-block px-4 py-2 text-neutral-gray'
          href='/'
        >
          Login
        </a>
        <a
          className='block md:inline-block bg-primary-cyan rounded-full py-2 px-6 text-white hover:opacity-90'
          href='/'
        >
          Sign Up
        </a>
      </div>
    </nav>
  )
}

export default Nav
