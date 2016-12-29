import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import SpinningRecord from './SpinningRecord'

export default class MusicPost extends Component {

  render () {
    const { albumArt, songTitle, songLength, tintColor, text, hashtags } = this.props
    return (
      <Image
        blurRadius={100}
        source={albumArt}
        style={{
          flexDirection: 'row',
          borderRadius: 5,
          marginTop: 10,
          width: 351,
          height: 100,
        }}
      >
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              marginRight: 10
            }}
          >
            <Image
              source={albumArt}
              blurRadius={10}
              style={{
                width: 100,
                height: 100,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                flexDirection: 'row'
              }}
            >
              <SpinningRecord image={albumArt}/>
              <View
                style={{
                  backgroundColor: 'transparent',
                  position: 'absolute',
                  bottom: 5,
                  right: 5,
                }}
              >
                <Text
                  style={{
                    color: tintColor,
                    fontWeight: 'bold',
                    fontSize: 6,
                    textAlign: 'right',
                  }}>
                  {songTitle}
                </Text>
                <Text
                  style={{
                    color: tintColor,
                    fontSize: 6,
                    textAlign: 'right'
                }}>
                  {songLength}
                </Text>
              </View>
            </Image>
          </View>
        </View>
        <Text
          style={{
            flex: 1,
            fontSize: 15,
            backgroundColor: 'transparent',
            color: 'white',
            alignSelf: 'center',
            paddingRight: 10
          }}
        >
          {text}
          {hashtags.map((hashtag, index) => {
              return (
                <Text
                  key={index}
                  style={{ fontWeight: 'bold'}}
                >
                  {` ${hashtag}`}
                </Text>
              )
          })}
        </Text>
      </Image>
    )
  }
}
