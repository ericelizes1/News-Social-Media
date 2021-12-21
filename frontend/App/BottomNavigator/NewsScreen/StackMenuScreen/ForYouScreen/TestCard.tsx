import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Animated, StyleSheet, Pressable, ImageBackground, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import FlipCard from 'react-native-flip-card';

export interface PropType {
  size: number,
  title: string,
  username: string,
  imgUrl: string,
  topics: string[],
  subscribed: boolean,
}

const TestCard:FC<PropType> = (props: PropType) => {
  const navigation:any = useNavigation(); 
  const [subscribed, setSubscribed] = useState(props.subscribed);

  const [titleFontSize, setTitleFontSize] = useState(35);
  var [isTitleFontSet, setIsTitleFontSet] = useState(false);

  const getTitleFontSize = ({x, y, width, height}, isTitleFontSet) => {
    if (!isTitleFontSet) {
      if (height > 100) setTitleFontSize(30)
      else if (height > 90) setTitleFontSize(35)
      else if (height > 20) setTitleFontSize(40)

      setIsTitleFontSet(true)
    }
  }
  
  var corr = {
    1 : 400,
    2 : 300,
    3 : 250,
  };
  let cardHeight = corr[props.size];

  var topicElements=[];
  for (let s of props.topics) {
    topicElements.push(  
      <View style={{
        backgroundColor: 'white',
        borderRadius: 10,
        paddingRight: 5,
        paddingLeft: 5,
        marginLeft: 7,
      }}>
        <Caption
          style={{
            color: 'black',
            fontSize: 15,
        }}>{s}</Caption>
      </View>)
  }

  // EVERYTHING ABOVE DOES NOT MATTER //
  // CODE BELOW IS FOR CREATING FLIP  //

  let animatedValue = new Animated.Value(0)
  let val = 0;
  animatedValue.addListener(({ value }) => {
    val = value;
  })
  let frontOpacity = animatedValue.interpolate({ 
    inputRange: [89, 90], 
    outputRange: [1, 0] 
  })
  let backOpacity = animatedValue.interpolate({ 
    inputRange: [89, 90], 
    outputRange: [0,1] 
  })
  let frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  })
  let backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  })

  const frontAnimatedStyle = {
    transform: [
      { rotateY: frontInterpolate }
    ], 
    opacity: frontOpacity,
  }
  const backAnimatedStyle = {
    transform: [
      { rotateY: backInterpolate }
    ], 
    opacity: backOpacity,
  }

  const [frontZ, setFrontZ] = useState(0);
  const [backZ, setBackZ] = useState(1);
  const [flipped, setFlipped] = useState(false);
  const displayOptions = ['flex', 'none']
  const [frontDisplay, setFrontDisplay] = useState(0);
  const [backDisplay, useBackDisplay] = useState(0);

  const flipCard = () => {
    console.log('Before: '+ frontZ + '   ' + backZ)
    const tempFrontZ = frontZ
    const tempBackZ = backZ

    if (!flipped) {
      console.log("SHOULD FLIP FRONT TO BACK");
      Animated.spring(animatedValue, {
        toValue:0, 
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      }).start();
    } else {
      console.log("SHOULD FLIP BACK TO FRONT");
      Animated.spring(animatedValue, {
        toValue:180, 
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      }).start();
    }
    
    /*setFrontZ(tempBackZ);
    setBackZ(tempFrontZ);*/
    console.log(frontZ);
    console.log(backZ);

    console.log("FLIPPED ", flipped, "->", !flipped);
  }

  return(
    <View style={[styles.container, {height: cardHeight}]}>
      <Animated.View 
        style={[styles.cardStyle, 
                styles.frontCardStyle, 
                frontAnimatedStyle]}>
          <Pressable 
            onPress={() => {
              console.log("FRONT CLICKED")
              flipCard()
              setFlipped(true)
            }}
            style={flipped ? styles.pressableOff : {backgroundColor: 'blue', height: 100, width: 100,}}
          >
            <Text>FLIPPY</Text>
        </Pressable>
      </Animated.View>
      <Animated.View 
      style={[styles.cardStyle, 
              styles.backCardStyle, 
              backAnimatedStyle, 
              {height: cardHeight}]}>
        <Pressable
          onPress={() => {
            console.log("BACK CLICKED")
            flipCard()
            setFlipped(false)

          }}
          style={flipped ? { position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'} : styles.pressableOff}
          >
            <Text>BACK FLIPPY</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  cardStyle: {
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
  },
  frontCardStyle: {
    backgroundColor: 'red',
  },
  backCardStyle: {
    backgroundColor: 'purple',
    position: 'absolute',
    top: 0,
  },
  pressableOff: {
    width: 0,
    height: 0
  }
})

export default TestCard;