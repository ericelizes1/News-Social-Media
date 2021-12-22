import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Animated, StyleSheet, Pressable, ImageBackground, View, TouchableNativeFeedbackBase } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef } from 'react';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export interface PropType {
  size: number,
  title: string,
  username: string,
  imgUrl: string,
  topics: string[],
  subscribed: boolean,
}

const StackMiniCard:FC<PropType> = (props:PropType) => {
  const navigation:any = useNavigation(); 
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
    zIndex: frontOpacity
  }
  const backAnimatedStyle = {
    transform: [
      { rotateY: backInterpolate }
    ], 
    opacity: backOpacity,
    zIndex: backOpacity
  }


  const flipCard = () => {
    Animated.spring(animatedValue, {
      toValue: val >= 90 ? 0 : 180, 
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  }

  /*
  let subscribed = useRef(props.subscribed);
  let subVal = new Animated.Value(props.subscribed ? 1 : 0)

  let tempSubVal = subVal;
  subVal.addListener(({ value }) => {
    tempSubVal = value;
  })
  const switchSubscribed = () => {
    Animated.spring(subVal, {
      toValue: tempSubVal = 1 ? 0 : 1, 
      friction: 0,
      tension: 10,
      useNativeDriver: true,
    }).start(
      () => {subscribed.current = !subscribed.current}
    );
  }*/

  return(
    <View style={styles.container}>
      <Animated.View 
        style={[styles.cardStyle, 
                frontAnimatedStyle]}>
        <Pressable 
          style=  {({pressed}) => [{
            opacity: pressed ? 0.8 : 1,
            height: cardHeight},
            styles.container
          ]}
          onPress={() => {navigation.navigate('StackScreen')}}>
          <ImageBackground
            source={{uri: props.imgUrl}}
            style={[styles.image]}
            imageStyle={{borderRadius: 6}}>
            <View style={[styles.image, {height: '100%', backgroundColor: 'rgba(0,0,0,0)'}]}>
              <View style={{width: '100%'}}>
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0.60)', 'rgba(0, 0, 0, 0)']}
                  style={{
                    paddingLeft: 10,
                    paddingBottom: 30,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: '80%'}}>
                    <Text 
                      onLayout={(event) => {
                        var {x, y, width, height} = event.nativeEvent.layout;
                        getTitleFontSize({x, y, width, height}, isTitleFontSet);
                      }}
                      style={{
                        color: 'white'}} 
                      h2Style={{fontSize: titleFontSize}}
                      h2>{props.title}</Text>
                      <Caption style={{color:'white'}}>1hr ago</Caption>
                  </View>
                  <View style={{
                    justifyContent: 'flex-start', 
                    alignItems: 'flex-end',
                    width: '20%'}}>
                    <Pressable 
                      style={{ 
                        paddingTop: 10,
                        paddingRight: 10,
                      }}
                      onPress = {() => {switchSubscribed()}}
                      >
                      <AnimatedIcon
                        name={subscribed ? 'bookmark' : 'bookmark-outline'} 
                        type='material-community' 
                        color= 'white'
                        size={35}                
                        tvParallaxProperties={false}
                      />
                    </Pressable>
                  </View>
                </LinearGradient>
              </View>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.3)']}
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                  paddingTop: '10%',
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                }}
              >
                <Pressable 
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                  hitSlop={50}
                  onPress={() => flipCard()}
                >
                  <Icon 
                    name='information-outline' 
                    type='material-community' 
                    color= 'white'
                    size={25}                
                    tvParallaxProperties={false}
                  />
                </Pressable>
                <Pressable hitSlop={50}>
                  <Caption
                    style={{
                      color: 'white',
                      fontSize: 15,
                    }}>@{props.username}</Caption>
                </Pressable>
              </LinearGradient>
            </View>
          </ImageBackground>
        </Pressable>
      </Animated.View>
      <Animated.View 
        style={[styles.cardStyle, 
                styles.backCardStyle, 
                backAnimatedStyle]}>
        <Pressable 
          style=  {({pressed}) => [{
            opacity: pressed ? 0.8 : 1,
            height: cardHeight},
            styles.container,
          ]}
          onPress={() => {navigation.navigate('StackScreen')}}
        >
          <ImageBackground
            source={{uri: props.imgUrl}}
            imageStyle={{borderRadius: 6}}
            style={{    flex: 1,
              width: '100%',
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'space-between'}}
          >
            <View
              style={{    flex: 1,
                width: '100%',
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(0,0,0,0.5)'}}
            >
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  padding: 10,
                }}
              >
                <Pressable 
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                  hitSlop={50}
                  onPress={() => flipCard()}
                >
                  <Icon 
                    name='arrow-left' 
                    type='material-community' 
                    color= 'white'
                    size={35}                
                    tvParallaxProperties={false}
                  />
                </Pressable>
                <Text 
                  style={{
                    color: 'white',
                    paddingLeft: 10,
                  }} 
                  h2Style={{
                    fontSize: 20,
                  }}
                  ellipsizeMode='tail'
                  numberOfLines={1}
                  h2>{props.title}
                </Text>
              </View>
            </View>
          </ImageBackground>
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
    margin: 5,
  },
  cardStyle: {
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
  },
  backCardStyle: {
    top: 0,
    position: 'absolute',
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default StackMiniCard;