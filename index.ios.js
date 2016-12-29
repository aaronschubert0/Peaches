/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  Text,
  View,
  Image
} from 'react-native';

import SpinningRecord from './SpinningRecord'
import Header from './Header'
import MusicPost from './MusicPost'

export default class Peaches extends Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            marginLeft: 24,
            marginTop: 50
          }}
        >
          <Header />
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,
              marginRight: 24
            }}
          >
            {'So sad to hear, just finished Episode V & VI earlier! 😢 '}
            <Text
              style={{ fontWeight: 'bold'}}>
              {'#RIPCarrieFisher'}
            </Text>
          </Text>
          <View
            style={{
              marginTop: 8,
              marginLeft: 76
            }}
          >
            <Image
              source={require('./img/leftGradient.png')}
              style={{
                position: 'absolute',
                top: 0,
                left: -15,
                width: 46,
                height: 40,
                zIndex: 10
              }}
            />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Image
                source={require('./img/ht1.jpg')}
                style={{
                  width: 51,
                  height: 38,
                  borderRadius: 3,
                  marginRight: 5
                }}
              />
              <Image
                source={require('./img/ht2.jpg')}
                style={{
                  width: 54,
                  height: 38,
                  borderRadius: 3,
                  marginRight: 5
                }}
              />
              <Image
                source={require('./img/ht3.jpg')}
                style={{
                  width: 51,
                  height: 38,
                  borderRadius: 3,
                  marginRight: 5
                }}
              />
              <Image
                source={{uri: 'https://media.giphy.com/media/a5auAyjyCOf1S/giphy.gif'}}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 3,
                  marginRight: 5
                }}
              />
              <Image
                source={require('./img/ht4.jpg')}
                style={{
                  width: 28,
                  height: 38,
                  borderRadius: 3,
                  marginRight: 5
                }}
              />
              <Image
                source={require('./img/ht5.jpg')}
                style={{
                  width: 51,
                  height: 38,
                  borderRadius: 3,
                  marginRight: 5
                }}
              />
              <Image
                source={require('./img/ht6.jpg')}
                style={{
                  width: 54,
                  height: 38,
                  borderRadius: 3,
                  marginRight: 5
                }}
              />
              <Image
                source={require('./img/ht7.jpg')}
                style={{
                  width: 51,
                  height: 38,
                  borderRadius: 3,
                  marginRight: 5
                }}
              />
              <Image
                source={{uri: 'https://media.giphy.com/media/7DEQSZy355qZa/giphy.gif'}}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 3,
                  marginRight: 5
                }}
              />
              <Image
                source={require('./img/ht8.jpg')}
                style={{
                  width: 28,
                  height: 38,
                  borderRadius: 3,
                  marginRight: 5
                }}
              />
            </ScrollView>
            <Image
              source={require('./img/rightGradient.png')}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 46,
                height: 40,
                zIndex: 10
              }}
            />
          </View>

        </View>
        <Image
          source={{uri: 'https://media.giphy.com/media/7DEQSZy355qZa/giphy.gif'}}
          resizeMode="cover"
          style={{
            width: 375,
            marginTop: 20,
            height: 150,
          }}
        >
          <View
            style={{
              height: 150,
              padding: 24
            }}
          >
            <Header />
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                marginRight: 24,
                backgroundColor: 'transparent',
                color: 'white'
              }}
            >
              {'So sad to hear, just finished Episode V & VI earlier! 😢 '}
              <Text
                style={{ fontWeight: 'bold'}}>
                {'#RIPCarrieFisher'}
              </Text>
            </Text>
          </View>

        </Image>
        <Image
          source={require('./img/ht7.jpg')}
          blurRadius={20}
          resizeMode="cover"
          style={{
            width: 375,
            marginTop: 20,
            height: 150,
            padding: 24
          }}
        >
          <Header nameColor="white"/>
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,
              marginRight: 24,
              backgroundColor: 'transparent',
              color: 'white'
            }}
          >
            {'So sad to hear, just finished Episode V & VI earlier! 😢 '}
            <Text
              style={{ fontWeight: 'bold', color: 'black'}}>
              {'#RIPCarrieFisher'}
            </Text>
          </Text>
        </Image>
        <View
          style={{
            marginHorizontal: 12,
            marginTop: 50,
            marginBottom: 50,
            overflow: 'hidden'
          }}
        >
          <Header />
          <MusicPost
            albumArt={require('./img/theSound.png')}
            songTitle="The Sound"
            songLength="4:08"
            tintColor="#FFC0CB"
            text="This song by the 1975 is really awesome!"
            hashtags={["#1975", "#newAlbum", "#cantStopListening"]}
          />
        </View>
        <View
          style={{
            marginHorizontal: 12,
            marginBottom: 50,
            overflow: 'hidden'
          }}
        >
          <Header />
          <MusicPost
            albumArt={require('./img/watchTheThrone.jpg')}
            songTitle="No Church In The Wild"
            songLength="4:32"
            tintColor="white"
            text="Such a good intro to an awesome album"
            hashtags={["#WTT","#Jay","#Kanye"]}
          />
        </View>
        <View
          style={{
            marginHorizontal: 12,
            marginBottom: 50,
            overflow: 'hidden'
          }}
        >
          <Header />
          <MusicPost
            albumArt={require('./img/starboy.jpg')}
            songTitle="Starboy"
            songLength="3:50"
            tintColor="white"
            text="This is so dope"
            hashtags={["#Cinematic","#epic","#TheWeeknd"]}
          />
        </View>
      </ScrollView>
    );
  }
}


AppRegistry.registerComponent('Peaches', () => Peaches);
