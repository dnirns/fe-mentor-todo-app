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
    <nav className='flex fixed w-full flex-wrap items-center p-4 '>
      <p className='text-4xl font-bold px-4'>Shortly</p>

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
          className='block md:inline-block hover:text-blue-500 px-4 py-2'
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
      <div className={`${toggle} md:flex-1 w-auto md:w-full md:text-right`}>
        <a className='block md:inline-block px-4 py-2' href='/'>
          Login
        </a>
        <a className='block md:inline-block px-4 py-2' href='/'>
          Sign Up
        </a>
      </div>
    </nav>
  )
}

export default Nav
