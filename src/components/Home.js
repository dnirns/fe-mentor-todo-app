import React, { useState } from 'react'
import { shorten } from '../api/shorten'
import Search from './Search'
import Header from './Header'
import Result from './Result'
import AdvancedStats from './AdvancedStats'

const Home = () => {
  const [searching, setSearching] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')
  const [urls, setUrls] = useState([])

  //function for search component, saves input field to state
  const handleSetUrl = (e) => {
    setCurrentUrl(e.target.value)
  }

  //api request function for onclick of search component button
  const shortenApi = async () => {
    setSearching(true)
    try {
      const res = await shorten(currentUrl)

      setUrls([
        ...urls,
        { original: currentUrl, short: res.data.result.short_link },
      ])
      setSearching(false)
      setCurrentUrl('')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='text-neutral-v-dark-blue py-10 text-center md:text-left'>
      <Header />
      <Search
        shortenUrl={shortenApi}
        setCurrentUrl={handleSetUrl}
        currentUrl={currentUrl}
        searching={searching}
      />
      <div className='flex justify-center my-4 h-16'>
        {searching && <div className='loader m-4' />}
      </div>

      {urls.map((url) => {
        return (
          <Result
            originalUrl={url.original}
            shortUrl={url.short}
            searching={searching}
          />
        )
      })}
      <AdvancedStats />
    </div>
  )
}

export default Home
