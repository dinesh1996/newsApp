import React, { Component } from 'react'
import { View, Button, StyleSheet, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import { SwipeRow } from 'react-native-swipe-list-view'

class ItemCategory extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    news: PropTypes.any.isRequired
  }

  state = {}

  render() {
    return (
      <SwipeRow
        leftOpenValue={75}
        // rightOpenValue={-75}
        key={this.props.city.name}
      >
        <View style={styles.standaloneRowBack}>
          <Button
            style={styles.backTextWhite}
            title="Suppr."
            onPress={() => this.props.onDelete(this.props.city.name)}
          ></Button>
        </View>
        <View style={styles.standaloneRowFront}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text>{this.props.city.name}</Text>
            <View style={{ flex: 2, flexDirection: 'row' }}>
              <Text>{this.props.city.main.temp} °C</Text>
              <Image
                style={{ width: 80, height: 80 }}
                source={{
                  uri: `http://openweathermap.org/img/wn/${this.props.city.weather[0].icon}@2x.png`
                }}
              />
            </View>
          </View>
        </View>
      </SwipeRow>
    )
  }
}

export default ItemCategory

const styles = StyleSheet.create({
  standaloneRowFront: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#CCC'
    // justifyContent: 'center',
  },
  standaloneRowBack: {
    alignItems: 'center',
    backgroundColor: '#d11a2a',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  backTextWhite: {
    color: '#FFF'
  }
})
