import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'

export default class SpinningRecord extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rotation: new Animated.Value(0)
    }
  }

  componentDidMount () {
    this.rotate()
  }

  rotate () {
    Animated.timing(
      this.state.rotation,
      {
        toValue: 1,
        duration: 1,
        easing: Easing.linear
      }
    ).start((finished) => {
      if (finished) {
        this.state.rotation.setValue(0)
        this.rotate()
      }
    })
  }

  render () {
    return (
      <Animated.View
        style={{
          width: 80,
          height: 80,
          alignSelf: 'center',
          borderRadius: 40,
          overflow: 'hidden',
          position: 'absolute',
          top: 10,
          left: 10
        }}
      >
        <Animated.Image
          source={this.props.image}
          style={{
            width: 133,
            height: 80,
            borderRadius: 5,
            alignSelf: 'center',
            transform: [
              {rotate: this.state.rotation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"]
              })}
            ]
          }}
        />
      </Animated.View>

    )
  }
}
