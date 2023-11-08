import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'


const SearchBar = ({ term, onTermchange,onTermSubmit }) => {
  return (
    <View style={styles.ViewBackground}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermchange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ViewBackground: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    marginHorizontal: 15,
    borderColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom:10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
})

export default SearchBar
