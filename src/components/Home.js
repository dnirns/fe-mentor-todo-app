import React, { useState } from 'react'
import { shorten } from '../api/shorten'
import Search from './Search'
import Header from './Header'
import Result from './Result'

const Home = () => {
  const [searching, setSearching] = useState(false)

  const [currentUrl, setCurrentUrl] = useState('')

  const [urls, setUrls] = useState([])

  const handleSetUrl = (e) => {
    setCurrentUrl(e.target.value)
  }

  const shortenApi = async () => {
    setSearching(true)

    try {
      const res = await shorten(currentUrl)
      setSearching(false)
      setUrls([
        ...urls,
        { original: currentUrl, short: res.data.result.short_link },
      ])
      setCurrentUrl('')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='text-black py-10 text-center md:text-left'>
      <Header />
      <Search
        shortenUrl={shortenApi}
        setCurrentUrl={handleSetUrl}
        currentUrl={currentUrl}
        searching={searching}
      />

      {urls.map((url) => {
        return <Result originalUrl={url.original} shortUrl={url.short} />
      })}
    </div>
  )
}

export default Home
