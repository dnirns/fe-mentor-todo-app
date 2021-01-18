import React, { useState } from 'react'
import axios from 'axios'
import Spinner from './common/Spinner'

const App = () => {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState(null)
  const [searching, setSearching] = useState(false)

  const shortenApi = async () => {
    setSearching(true)
    try {
      const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      console.log(res.data.result.short_link)
      setShortenedUrl(res.data.result.short_link)
      setSearching(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='background h-screen w-screen text-black text-4xl'>
      <h1 className='text-light-gray-light-grayish-blue'> shorten url</h1>

      <input
        className='border rounded m-4'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className='border rounded m-4 p-3 bg-gray-400 text-white'
        onClick={shortenApi}
      >
        Sumbit
      </button>

      {searching === true ? (
        <Spinner />
      ) : (
        <p className='text-2xl'>{shortenedUrl}</p>
      )}
    </div>
  )
}

export default App
