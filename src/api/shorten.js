import axios from 'axios'

export const shorten = (url) => {
  return axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
}
