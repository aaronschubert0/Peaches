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
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'transparent'
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
                    fontSize: 15,
                    color: 'white'
                  }}
                >
                  {'Aaron Schubert'}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'rgba(255, 255, 255, 0.75)'
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
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'transparent'
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
                  fontSize: 15,
                  color: 'white'
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
          <Image
            blurRadius={100}
            source={require('./img/theSound.png')}
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
                  source={require('./img/theSound.png')}
                  blurRadius={10}
                  style={{
                    width: 100,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    flexDirection: 'row'
                  }}
                >
                  <SpinningRecord image={require('./img/theSound.png')}/>
                  <View
                    style={{
                      backgroundColor: 'transparent',
                      position: 'absolute',
                      bottom: 5,
                      right: 5
                    }}
                  >
                    <Text style={{ color: '#FFC0CB', fontWeight: 'bold', fontSize: 6}}>{'The Sound'}</Text>
                    <Text style={{ color: '#FFC0CB', fontSize: 6 }}>{'4:08'}</Text>
                  </View>
                </Image>
              </View>
            </View>
            <Text
              style={{
                flex: 1,
                marginTop: 10,
                fontSize: 15,
                backgroundColor: 'transparent',
                color: 'white'
              }}
            >
              {'This song by the 1975 is really awesome!'}
              <Text
                style={{ fontWeight: 'bold'}}>
                {' #1975'}
              </Text>
              <Text
                style={{ fontWeight: 'bold'}}>
                {' #newAlbum'}
              </Text>
              <Text
                style={{ fontWeight: 'bold'}}>
                {' #cantStopListening'}
              </Text>
            </Text>
          </Image>
        </View>
        <View
          style={{
            marginHorizontal: 12,
            marginBottom: 50,
            overflow: 'hidden'
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
          <Image
            blurRadius={100}
            source={require('./img/watchTheThrone.jpg')}
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
                  source={require('./img/watchTheThrone.jpg')}
                  blurRadius={10}
                  style={{
                    width: 100,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    flexDirection: 'row'
                  }}
                >
                  <SpinningRecord image={require('./img/watchTheThrone.jpg')}/>
                  <View
                    style={{
                      backgroundColor: 'transparent',
                      position: 'absolute',
                      bottom: 5,
                      right: 5
                    }}
                  >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 6, textAlign: 'right'}}>{'No Church In The Wild'}</Text>
                    <Text style={{ color: 'white', fontSize: 6, textAlign: 'right' }}>{'4:32'}</Text>
                  </View>
                </Image>
              </View>
            </View>
            <Text
              style={{
                flex: 1,
                marginTop: 10,
                fontSize: 15,
                backgroundColor: 'transparent',
                color: 'white'
              }}
            >
              {'Such a good intro to an awesome album'}
              <Text
                style={{ fontWeight: 'bold'}}>
                {' #WTT'}
              </Text>
              <Text
                style={{ fontWeight: 'bold'}}>
                {' #Jay'}
              </Text>
              <Text
                style={{ fontWeight: 'bold'}}>
                {' #Kanye'}
              </Text>
            </Text>
          </Image>
        </View>
      </ScrollView>
    );
  }
}


AppRegistry.registerComponent('Peaches', () => Peaches);
