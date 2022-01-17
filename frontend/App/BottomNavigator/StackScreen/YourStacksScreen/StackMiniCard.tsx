import React, { FC, useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Animated, StyleSheet, Pressable, ImageBackground, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export interface PropType {
  id: number,
  size: number,
  title: string,
  username: string,
  imgUrl: string,
  isForYou: boolean,
  removeCard: any,
  recentlyDeleted: boolean,
  activateUndoBar: any,
  
}

const StackMiniCard:FC<PropType> = (props:PropType) => {
  const navigation:any = useNavigation(); 
  /*
  useEffect(() => {
    if (props.recentlyDeleted) {
      undoRemoveAnimation();
    }
  })*/

  let titleFontSize = 35;
  const getTitleFontSize = (height:number) => {
    if (height > 100) titleFontSize = 30;
    else if (height > 90) titleFontSize = 35;
    else titleFontSize = 40;
  }

  var corr = {1:400, 2:300, 3:250};
  var cardHeight = corr[props.size];

  /* Below includes all coded related to the flipping animation. The state isFlipped 
  ** and ref animatedFlip describe the flip animation, which is called by the flipCard()
  ** function. The variables frontOpacity and frontInterpolate describe the movement of the
  ** front of the card, while backOpacity and backInterpolate describe the back. These are
  ** both used in frontAnimatedStyle and backAnimated style, which apply directly to 
  ** the correlating Animated.View components.
  */ 
  const [isFlipped, setIsFlipped] = useState(false);
  let animatedFlip = useRef(new Animated.Value(0));
  let frontOpacity = animatedFlip.current.interpolate({ 
    inputRange: [89, 90], 
    outputRange: [1, 0] 
  })
  let backOpacity = animatedFlip.current.interpolate({ 
    inputRange: [89, 90], 
    outputRange: [0,1] 
  })
  let frontInterpolate = animatedFlip.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  })
  let backInterpolate = animatedFlip.current.interpolate({
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
    setIsFlipped(!isFlipped);
    Animated.spring(animatedFlip.current, {
      toValue: isFlipped ? 0 : 180, 
      friction: 8,
      tension: 30,
      useNativeDriver: true,
    }).start();
  }

  /* 
  ** Below includes all coded related to the onPress scale animation. 
  */ 
  let animatedPress = useRef(new Animated.Value(0));
  let scaleVal = animatedPress.current.interpolate({ 
    inputRange: [0, 1], 
    outputRange: [1, 0.97] 
  })
  const pressScaleStyle = {
    transform: [
      { scale: scaleVal }
    ], 
  }
  const pressInAnimation = () => {
    Animated.spring(animatedPress.current, {
      toValue: 1,
      friction: 7,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }
  const pressOutAnimation = () => {
    Animated.spring(animatedPress.current, {
      toValue: 0,
      friction: 7,
      tension: 100,
      useNativeDriver: true,
    }).start()
  }

  /* 
  ** Below includes all coded related to the remove animation. 
  */ 
  let animatedRemove = useRef(new Animated.Value(props.recentlyDeleted ? 1 : 0));
  let removeOpacity = animatedRemove.current.interpolate({
    inputRange: [0, 1], 
    outputRange: [1, 0] 
  })
  let removeX = animatedRemove.current.interpolate({
    inputRange: [0, 1], 
    outputRange: [0, 200] 
  })
  let removeHeight = animatedRemove.current.interpolate({
    inputRange: [0, 1],
    outputRange: [cardHeight, 0]
  })
  let removeMargin = animatedRemove.current.interpolate({
    inputRange: [0, 1],
    outputRange: [5, 0]
  })

  const removeTransformStyle = {
    transform: [
      { translateX: removeX },
    ],
    opacity: removeOpacity
  }

  const removeAnimation = () => {
    props.activateUndoBar();
    Animated.spring(animatedRemove.current, {
      toValue: 1,
      friction: 20,
      tension: 50,
      useNativeDriver: false,
    }).start(() => {props.removeCard(props.id);})
  }
  
  return(
    <Animated.View style={[styles.container, removeTransformStyle, { maxHeight: removeHeight, margin: removeMargin,}]}>
      <Animated.View style={[pressScaleStyle, {height: '100%', width: '100%'}]}>
        <Animated.View style={[styles.cardStyle, frontAnimatedStyle]}>
          <Pressable
            style= {() => [styles.cardStyle]}
            onPress={() => {
              navigation.navigate('StackFocusScreen')
            }}
            onPressIn={() => { pressInAnimation() }}
            onPressOut={() => { pressOutAnimation() }}
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
                      var {height} = event.nativeEvent.layout;
                      getTitleFontSize(height);
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
                      removeAnimation();
                    }}
                    onPressIn={() => { pressInAnimation() }}
                    onPressOut={() => { pressOutAnimation() }}
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
                  hitSlop={20}
                  onPress={() => flipCard()}
                  onPressIn={() => { pressInAnimation() }}
                  onPressOut={() => { pressOutAnimation() }}
                >
                  <Icon 
                    name='information-outline' 
                    type='material-community' 
                    color= 'white'
                    size={25}                
                    tvParallaxProperties={false}
                  />
                </Pressable>
                <Pressable 
                  hitSlop={20}
                  onPress={() => navigation.navigate('ProfileScreen')}
                  onPressIn={() => { pressInAnimation() }}
                  onPressOut={() => { pressOutAnimation() }}
                >
                  <Caption style={styles.username}>@{props.username}</Caption>
                </Pressable>
              </LinearGradient>
            </ImageBackground>
          </Pressable>
        </Animated.View>
        <Animated.View style={[styles.cardStyle, styles.backCardStyle, backAnimatedStyle]}>
          <Pressable 
            style=  {() => [styles.container, {height: cardHeight}]}
            onPress={() => {navigation.navigate('StackFocusScreen')}}
            onPressIn={() => {pressInAnimation()}}
            onPressOut={() => {pressOutAnimation()}}
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
                    onPressIn={() => { pressInAnimation() }}
                    onPressOut={() => { pressOutAnimation() }}
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
      </Animated.View>
    </Animated.View>
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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