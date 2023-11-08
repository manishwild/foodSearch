import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()
  // console.log(results)

  const filterResultsByPrice = (price) => {
    //  price === '€' || '€€' || '€€€'
    return results.filter((result) => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermchange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('€')}
          title="Best Rates"
        />
        <ResultsList
          results={filterResultsByPrice('€€')}
          title="Medium Expensive"
        />
        <ResultsList
          results={filterResultsByPrice('€€€')}
          title="Expensive"
        />
      </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: '#fff',
    flex: 1,
  },
})

export default SearchScreen
