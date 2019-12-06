import React, { Component } from 'react'
import {
  StyleSheet,
  Alert,
  View,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native'

import NewsServices from '../services/NewsServices'

const categories = [
  //   { label: 'Apples', value: 'appls' },
  { title: 'Économie', id: 'business', actived: false },
  { title: 'Divertissement', id: 'entertainment', actived: false },
  { title: 'Santé', id: 'health', actived: false },
  { title: 'Science', id: 'science', actived: false },
  { title: 'Sports', id: 'sports', actived: false },
  { title: 'Technologie', id: 'technology', actived: false }
]

class SettingsScreen extends Component {
  serviceNews = new NewsServices()

  state = { category: '' }
  onChange = value => {
    this.setState({ category: value.toLowerCase() })
  }
  save = async () => {
    console.log(this.state.category)

    let news = await this.serviceNews.getNewByCategory(this.state.category)

    if (news != null) {
      let data = await AsyncStorage.getItem('CATEGORIES')
      let tab = []
      if (data != null) {
        tab = JSON.parse(data)
      }

      if (tab.includes(this.state.category)) {
        tab.push(this.state.category)
        await AsyncStorage.setItem('CATEGORIES', JSON.stringify(tab))
        this.props.navigation.goBack()
      }
    } else {
      Alert.alert('Oopss  ', 'Categorie non trouvé')
    }
  }
  render() {
    return (
      <>
        <View
          style={{
            flex: 1,

            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <TextInput
            onChangeText={this.onChange}
            style={{ backgroundColor: 'grey', width: 100 }}
          />
          <Button title="Ajouté" onPress={this.save} />
        </View>
      </>
    )
  }
}

const mapDispatchToProps = state => {
  return {
    categories: state.categories.initCategories
    // createUserCategory: userCategory => dispatch(createUserCategory)
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
})

export default SettingsScreen
