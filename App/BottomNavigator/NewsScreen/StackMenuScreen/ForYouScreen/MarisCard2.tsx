import React, { Component, FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Animated, Easing, StyleSheet, Pressable, ImageBackground, View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import CardFlip from 'react-native-card-flip';

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

export class MarisFlipCard extends Component<TestCardProp, TestCardState> {

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
        height: 200,
        width: "100%",
        borderRadius: 20
      },
      card: {
        width: "100%",
        height: 200,
        backfaceVisibility: 'hidden',
        backgroundColor: '#457B9D',
        transform: [
          { perspective: 1000 }
        ]
      },
      frontCard: {
        backgroundColor: "#1D3557",
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

  card

  render() {
    return (
      <>
      <CardFlip style={this.styles.cardWrapper} ref={(card) => this.card = card} >
        <TouchableOpacity activeOpacity={1} style={[this.styles.card, this.styles.frontCard]} onPress={() => {
            this.card.flip()
          }} >
            <Text>AB</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={[this.styles.card, this.styles.rearCard]} onPress={() => {
          this.card.flip()
          }} >
          <Text>CD</Text>
        </TouchableOpacity>
      </CardFlip>
      </>
    );
  }
}

export default MarisFlipCard;