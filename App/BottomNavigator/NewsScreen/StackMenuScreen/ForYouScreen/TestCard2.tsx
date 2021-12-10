import React, { Component, FC, ObjectHTMLAttributes, useState } from 'react';
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

export interface StateType {
  isFlipped: boolean
}

const stylesM = StyleSheet.create({
  cardWrapper: {
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: "dodgerblue",
    height: "200px"
  },
  cardPart: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    backfaceVisibility: 'hidden'
  }
});

/*export class TestCardMaris extends Component<PropType, StateType> {
  componentDidMount() {
    console.log("asdf");
  }

  render() {
    return (
      <>
      <View style={stylesM.cardWrapper}>
        <View style={stylesM.cardPart}>
          <Text>Hello fucker</Text>
        </View>
        <View style={stylesM.cardPart}>
          <Text>Goodbye cucker</Text>
        </View>
      </View>
      </>
    );
  }
}
*/
const TestCard2:FC<PropType> = (props: PropType) => {
  const navigation:any = useNavigation(); 
  const [subscribed, setSubscribed] = useState(props.subscribed);
  const [isFront, setIsFront] = useState(true);
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
  var cardHeight = corr[props.size];

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

  let x = false
  const flipCard = () => {
    /*setIsFront(x)
    console.log(isFront)
    x = !x*/
    if (val >= 90) {
      Animated.spring(animatedValue, {
        toValue:0, 
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
    Animated.spring(animatedValue, {
        toValue:180, 
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  }

  return(
    <View style={styles.container}>
      <Animated.View 
        style={[styles.cardStyle, 
                styles.frontCardStyle, 
                frontAnimatedStyle, 
                {height: cardHeight}]}>
        <Pressable 
          onPress={() => console.log('front')}
          //disabled={!isFront}
          style={{height: '100%', width: '100%', backfaceVisibility: 'hidden'}}>
          <Pressable 
            onPress={flipCard}
            //disabled={!isFront}
            style={{backgroundColor: 'blue', height: 50, width: 50, backfaceVisibility: 'hidden'}}
          >
          </Pressable>
        </Pressable>
      </Animated.View>
      <Animated.View 
      style={[styles.cardStyle, 
              styles.backCardStyle, 
              backAnimatedStyle, 
              {height: cardHeight}]}>
        <Pressable 
          onPress={flipCard}
          //disabled={true}
          style={{height: '100%', width: '100%', backfaceVisibility: 'hidden'}}
        >
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
    top: 0,
    position: 'absolute',
  }
})

export default TestCard2;