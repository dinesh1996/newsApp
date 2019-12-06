import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import NewsServices from '../services/NewsServices'
import ItemCategory from '../components/ItemCategory'
import { ActivityIndicator } from 'react-native-paper'

export default class HomeScreen extends Component {
  static navigationOptions = e => {
    return {
      title: 'NEWS'
    }
  }
  serviceNews = new NewsServices()
  state = { ReadNews: null, data: null }
  async update() {
    const categoris = JSON.parse(await AsyncStorage.getItem('CATEGORIES'))

    const news = await this.serviceNews.getNewByCategory(categoris[0])

    this.setState({ data: news })
  }
  componentDidMount() {
    this.update()
  }
  componentDidUpdate() {
    this.update()
  }

  render() {
    return (
      <></>
      // <View style={{ flex: 1 }}>
      //   <FlatList
      //     data={this.state.data}
      //     renderItem={e => (
      //       <ItemCategory
      //         key={e.item.name}
      //         news={e.item}
      //         onDelete={this.delete}
      //         onPress={this.props.navigation.navigate('ZoomNewsScreen')}
      //       />
      //     )}
      //   />
      //   )}
      // </View>
    )
  }
}
