import React from 'react'
// import { shorten } from '../api/shorten'

const Search = ({ shortenUrl, currentUrl, setCurrentUrl }) => {
  // const [url, setUrl] = useState('')
  // const [shortenedUrl, setShortenedUrl] = useState(null)
  // const [searching, setSearching] = useState(false)

  // const shortenApi = async () => {
  //   setSearching(true)
  //   setUrl('')
  //   try {
  //     const res = await shorten(url)
  //     setShortenedUrl(res.data.result.short_link)
  //     setSearching(false)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <div className='container mx-auto'>
      <div className='bg-primary-dark-violet rounded-lg'>
        <div className='flex flex-wrap flex-1 bg-desktop-search-bg bg-cover bg-no-repeat bg-center rounded-lg py-10 px-0 sm:px-3'>
          <input
            className='rounded-md mx-4 py-3 px-3 flex-1 flex w-100 text-base'
            value={currentUrl}
            placeholder='Shorten a link here...'
            onChange={(e) => setCurrentUrl(e)}
          />
          <button
            className='rounded-md mx-4 mt-6 sm:mt-0 px-5 py-3 bg-primary-cyan text-white text-base hover:opacity-90 flex-1 sm:flex-none'
            onClick={shortenUrl}
          >
            Shorten it!
          </button>
        </div>
      </div>

      {/* {searching === true ? (
        <div className='loader' />
      ) : (
        <p className='text-2xl'>{shortenedUrl}</p>
      )} */}
    </div>
  )
}

export default Search
