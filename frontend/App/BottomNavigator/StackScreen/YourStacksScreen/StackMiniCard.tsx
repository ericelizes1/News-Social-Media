import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Animated, StyleSheet, Pressable, ImageBackground, View, TouchableNativeFeedbackBase } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef } from 'react';

//const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export interface PropType {
  id: number,
  size: number,
  title: string,
  username: string,
  imgUrl: string,
  isForYou: boolean,
  removeCard: any
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

  return(
    <View style={styles.container}>
      <Animated.View style={[styles.cardStyle, frontAnimatedStyle]}>
        <Pressable 
          style= {({pressed}) => [styles.container, {opacity: pressed ? 0.8 : 1, height: cardHeight}]}
          onPress={() => {navigation.navigate('StackScreen')}}
        >
          <ImageBackground
            source={{uri: props.imgUrl}}
            style={styles.imageContainer}
            imageStyle={styles.image}
          >
            <LinearGradient //TOP GRADIENT
              colors={['rgba(0, 0, 0, 0.60)', 'rgba(0, 0, 0, 0)']}
              style={styles.topGradientStyle}>
              <View style={styles.frontHeader}>
                <Text 
                  onLayout={(event) => {
                    var {x, y, width, height} = event.nativeEvent.layout;
                    getTitleFontSize({x, y, width, height}, isTitleFontSet);
                  }}
                  h2Style={[styles.frontTitle, {fontSize: titleFontSize}]}
                  h2
                >{props.title}</Text>
                <Caption style={styles.lastUpdated}>1hr ago</Caption>
              </View>
              <View style={styles.subscribeIconContainer}>
                <Pressable 
                  hitSlop={20}
                  style={styles.subscribeIcon}
                  disabled={props.isForYou ? true : false}
                  onPress = {() => {
                    //REMOVE STACK
                    props.removeCard(props.id);
                  }}
                >
                  <Icon
                    name={'bookmark'} 
                    type='material-community' 
                    color= {props.isForYou ? 'rgba(0, 0, 0, 0)' : 'white'}
                    size={35}                
                    tvParallaxProperties={false}
                  />
                </Pressable>
              </View>
            </LinearGradient>
            <LinearGradient //BOTTOM GRADIENT
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.3)']}
              style={styles.bottomGradientStyle}
            >
              <Pressable 
                style={styles.infoIcon}
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
                <Caption style={styles.username}>@{props.username}</Caption>
              </Pressable>
            </LinearGradient>
          </ImageBackground>
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.cardStyle, styles.backCardStyle, backAnimatedStyle]}>
        <Pressable 
          style=  {({pressed}) => [styles.container, {opacity: pressed ? 0.8 : 1, height: cardHeight}]}
          onPress={() => {navigation.navigate('StackScreen')}}
        >
          <ImageBackground
            source={{uri: props.imgUrl}}
            imageStyle={styles.image}
            style={styles.imageContainer}
          >
            <View style={styles.translucentView}>
              <View style={styles.backHeader}>
                <Pressable 
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
                  h2Style={styles.backTitle}
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
  imageContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  image: {
    borderRadius: 6,
  },
  topGradientStyle: {
    paddingBottom: 30,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frontHeader: {
    paddingLeft: 10,
    width: '80%',
  },
  frontTitle: {
    color: 'white',
  },
  lastUpdated: {
    color:'white',
  },
  subscribeIconContainer: {
    height: '100%', 
    width: '20%',
    alignItems: 'flex-end'
  },
  subscribeIcon: {
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    height: 50,
    width: 50,
  },
  infoIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  username: {
    color: 'white',
    fontSize: 15,
  },
  bottomGradientStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: '10%',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  translucentView: {
    flex: 1,
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  backHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  backTitle: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 10,
  }

})

export default StackMiniCard;