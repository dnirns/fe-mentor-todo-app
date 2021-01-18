import React, { useState } from 'react'
import { shorten } from '../api/shorten'
import Spinner from '../common/Spinner'

const Search = () => {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState(null)
  const [searching, setSearching] = useState(false)

  const shortenApi = async () => {
    setSearching(true)
    try {
      const res = await shorten(url)
      setShortenedUrl(res.data.result.short_link)
      setSearching(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='m-4'>
      <input
        className='border-2 border-black rounded m-4 px-4 py-2 text-base'
        value={url}
        placeholder='Shorten a link here...'
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className='border-2 border-black rounded m-4 px-5 py-2 bg-gray-400 text-white text-base'
        onClick={shortenApi}
      >
        Shorten it!
      </button>

      {searching === true ? (
        <Spinner />
      ) : (
        <p className='text-2xl'>{shortenedUrl}</p>
      )}
    </div>
  )
}

export default Search
