import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen';

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     background: '#fff',
//   },
// }

const navigator = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <navigator.Navigator
        initialRouteName="BusinessSearch"
        screenOptions={{
          headerTitle: "Business Search" ,
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'lime' },
        }}
      >
        <navigator.Screen name="Search" component={SearchScreen} />
        <navigator.Screen name="ResultShow" component={ResultsShowScreen} />
      </navigator.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: '#fff',
  },
})
export default App
