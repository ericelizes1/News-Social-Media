import React, { Component, FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Animated, Easing, StyleSheet, Pressable, ImageBackground, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import FlipCard from 'react-native-flip-card';

export interface TestCardProp {
  // size: number,
  // title: string,
  // username: string,
  // imgUrl: string,
  // topics: string[],
  // subscribed: boolean,
}



export interface TestCardState {
  flipped: boolean,
  frontFlip: Animated.Value,
  backFlip: Animated.Value
}

export class TestCardMaris extends Component<TestCardProp, TestCardState> {


  constructor(props: TestCardProp) {
    super(props);

    // set default state
    this.state = {
      // front showing by defaault
      flipped: false,

      // no rotation
      frontFlip: new Animated.Value(0),
      backFlip: new Animated.Value(0.5)
    }

    this.styles = StyleSheet.create({
      cardWrapper: {
        position: 'relative',
        backgroundColor: "dodgerblue",
        height: 200,
        width: "100%",
        borderRadius: 20
      },
      cardPart: {

        backfaceVisibility: 'hidden',
        transform: [
          { perspective: 1000 }
        ]
      },
      frontCard: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: "#1D3557",
        // backfaceVisibility: 'hidden',
        transform: [
          { perspective: 1000 }
        ]
      },
      rearCard: {
        backgroundColor: "#44D492",
        backfaceVisibility: 'hidden',
        // display: 'none'
      },
      frontButton: {
        backgroundColor: "#457B9D",
        color: "#F1FAEE",
        width: 100,
        height: 100
      },
      backButton: {

        width: "100%",
        height: "100%"
      }
    });
  }

  styles: any

  componentDidMount() {
    console.log("Mounted MARIS CARD.");
    console.log("FLIPPED:", this.state.flipped);
  }

  componentDidUpdate() {
    console.log("CARD UPDATED.");
  }

  render() {
    return (
      <>
      <View style={this.styles.cardWrapper}>
        <Animated.View style={[this.styles.cardPart, this.styles.frontCard, {
          transform: [{
            rotateY: this.state.frontFlip.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }]
        }]}>
          <Pressable style={this.styles.frontButton} onPress={() => {
              // card is now flipped
              this.setState({
                flipped: true
              })

              // flip card
              Animated.timing(this.state.frontFlip, {
                toValue: 0.5,
                easing: Easing.ease,
                duration: 500,
                useNativeDriver: false
              }).start();
            }}>
           <Text>TO BACK</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={[this.styles.cardPart, this.styles.rearCard, {
          transform: [{
            rotateY: this.state.backFlip.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }]
        }]}>
          <Pressable style={this.styles.backButton}
          onPress={() => {
            console.log("BACK PRESS");
          }}>
            <Text>TO FRONT</Text>
          </Pressable>
        </Animated.View>
      </View>
      </>
    );
  }
}

export default TestCardMaris;