import React from 'react'

const Result = ({ originalUrl, shortUrl }) => {
  return (
    <div className='p-4 my-6 bg-gray-50 flex justify-between'>
      <p className='text-base'>{originalUrl}</p>
      <div className='flex items-center'>
        <p className='text-primary-cyan text-base px-4'>{shortUrl}</p>
        <button className='text-sm bg-primary-cyan text-white px-6 py-2 rounded'>
          Copy
        </button>
      </div>
    </div>
  )
}

export default Result
