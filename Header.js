import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class Header extends Component {
  static defaultProps = {
    nameColor: 'black'
  }
  render () {
    const { nameColor } = this.props
    return (
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Image
          source={require('./img/profilepic.jpeg')}
          style={{
            width: 50,
            height: 50,
            borderRadius: 3,
            marginRight: 10
          }}
        />
        <View
          style={{
            backgroundColor: 'transparent'
          }}
        >
          <Text
            style={{
              fontWeight: '500',
              fontSize: 15,
              color: nameColor
            }}
          >
            {'Aaron Schubert'}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: '#9B9B9B'
            }}
          >
            {'@aaron'}
          </Text>
        </View>
      </View>
    )
  }
}
