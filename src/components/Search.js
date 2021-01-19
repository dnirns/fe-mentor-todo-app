import React, { useState } from 'react'
import { shorten } from '../api/shorten'

const Search = () => {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState(null)
  const [searching, setSearching] = useState(false)

  const shortenApi = async () => {
    setSearching(true)
    setUrl('')
    try {
      const res = await shorten(url)
      setShortenedUrl(res.data.result.short_link)
      setSearching(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='m-4 container mx-auto'>
      <div className='bg-primary-dark-violet rounded-lg'>
        <div className='flex flex-wrap flex-1 bg-desktop-search-bg bg-cover bg-no-repeat bg-center rounded-lg py-6'>
          <input
            className='rounded-md mx-6 flex-1 w-100 px-5 py-2 text-base'
            value={url}
            placeholder='Shorten a link here...'
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className='rounded-md sm:ml-0 sm:mr-6 ml-6 mr-6 mt-6 sm:mt-0 px-5 py-2 bg-primary-cyan text-white text-base hover:opacity-90 flex-1 sm:flex-none'
            onClick={shortenApi}
          >
            Shorten it!
          </button>
        </div>
      </div>

      {searching === true ? (
        <div className='loader' />
      ) : (
        <p className='text-2xl'>{shortenedUrl}</p>
      )}
    </div>
  )
}

export default Search
