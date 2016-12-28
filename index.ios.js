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
            <View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 15
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
      </ScrollView>
    );
  }
}


AppRegistry.registerComponent('Peaches', () => Peaches);
