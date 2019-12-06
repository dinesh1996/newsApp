import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainTabNavigation from './navigation/MainTabNavigation'

class App extends React.Component {
  render() {
    return <MainTabNavigation />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
