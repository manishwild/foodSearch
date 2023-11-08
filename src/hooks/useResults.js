import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

const useResults = () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'hamburg',
        },
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage('Something Went Wrong')
    }
  }

  useEffect(() => {
    searchApi('burger')
  }, [])

  return [searchApi, results, errorMessage]
}

export default useResults
