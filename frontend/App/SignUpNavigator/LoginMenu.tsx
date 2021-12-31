import React, { FC, useState, useRef } from 'react';
import { Animated, SafeAreaView, View, StyleSheet, ImageBackground, Pressable, useWindowDimensions, Platform, StatusBar } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const LoginMenu:FC = ({navigation}:any) => {
    const window = useWindowDimensions()
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    let animatedHeader = useRef(new Animated.Value(0));
    let headerLocation = animatedHeader.current.interpolate({ 
      inputRange: [0, 1], 
      outputRange: [0, -100] 
    })

    let animatedMenu = useRef(new Animated.Value(0))
    let menuLocation = animatedMenu.current.interpolate({ 
      inputRange: [0, 1], 
      outputRange: [0, 400] 
    })

    let animatedContent = useRef(new Animated.Value(0));
    let contentLocation = animatedContent.current.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -500]
    })

    const animatedHeaderStyle = {
      transform: [
        { translateY: headerLocation }
      ], 
    }
    
    const animatedMenuStyle = {
      transform: [
        { translateY: menuLocation }
      ], 
    }

    const animatedContentStyle = {
      transform: [
        {translateY: contentLocation}
      ]
    }

    const headerAnimation = () => {
      Animated.spring(animatedHeader.current, {
        toValue: 1,
        friction: 25,
        tension: 100,
        useNativeDriver: true,
      }).start();
      Animated.spring(animatedHeader.current, {
        toValue: 0,
        friction: 25,
        tension: 100,
        useNativeDriver: true,
      }).start();
    }

    const menuExitAnimation = () => {
      Animated.spring(animatedMenu.current, {
        toValue: 1,
        friction:25,
        tension: 100,
        useNativeDriver: true,
      }).start();
      Animated.spring(animatedContent.current, {
        toValue: 1,
        friction:25,
        tension: 100,
        useNativeDriver: true,
      }).start();
    }
    const menuEnterAnimation = () => {
      Animated.spring(animatedContent.current, {
        toValue: 0,
        friction: 25,
        tension: 100,
        useNativeDriver: true,
      }).start();
      Animated.spring(animatedMenu.current, {
        toValue: 0,
        friction:25,
        tension: 100,
        useNativeDriver: true,
      }).start();
    }

    const animateToSignIn = () => {
      headerAnimation();
      menuExitAnimation()
    };
    const animateFromSignIn = () => {
      headerAnimation();
      menuEnterAnimation();
    };

    return(
      <SafeAreaView style={[styles.container, {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}]}> 


        <ImageBackground
          source={{uri: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'}}
          style={styles.imageContainer}
        >
          <LinearGradient
            colors={['rgba(128,0,128, 0.25)', 'rgba(128,0,128, 0)']}
            style={styles.imageContainer}
          >
            <Animated.View style={[animatedContentStyle, styles.signInContainer]}>
              <View
                style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}
              >
                <Pressable
                  onPressIn={() => {animateFromSignIn()}}
                >
                  <Icon
                    name='close'
                    type='material-community'
                    color='purple'
                    size={35}
                    tvParallaxProperties={false}
                  />
                </Pressable>
              </View>
            </Animated.View>
            <Animated.View style={[styles.headerContainer, animatedHeaderStyle]}>
              <Icon color='white' size={50} name='check' tvParallaxProperties={false}/>  
              <Text style={[styles.title, {color: 'white'}]}>stack</Text>           
            </Animated.View>
            <Animated.View style={[styles.menuContainer, animatedMenuStyle]}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.description}>Let's see what the world's up to today</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={[styles.loginButton, {backgroundColor: signIn ? 'rgba(128,0,128, 0.8)' : 'rgba(128,0,128, 1)'}]}
                  onPress= {() => animateToSignIn()}
                  onPressIn={()=>{setSignIn(true)}}
                  onPressOut={()=>{setSignIn(false)}}                 
                >
                  <Text style={[styles.loginText, {color: 'white',}]}>Sign In</Text>
                </Pressable>
                <View style={styles.orContainer}>
                  <View style={styles.line}/>
                  <Text style={[styles.description, {paddingHorizontal: 10,}]}>or</Text>
                  <View style={styles.line}/>
                </View>
                <Pressable
                  style={[styles.loginButton, {backgroundColor: signUp ? 'rgba(128,0,128, 0.2)' : 'rgba(128,0,128, 0)'}]}
                  onPress= {() => navigation.navigate('SignupMethodScreen')}
                  onPressIn={()=>{setSignUp(true)}}
                  onPressOut={()=>{setSignUp(false)}}      
                >
                  <Text style={[styles.loginText, {color: 'purple',}]}>Sign Up</Text>
                </Pressable>
              </View>
            </Animated.View>
          </LinearGradient>
        </ImageBackground>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    imageContainer: {
      height: '100%',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    signInContainer: {
      height: 500, 
      width: '100%', 
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: 'white', 
      borderTopLeftRadius: 20, 
      borderTopRightRadius: 20, 
      padding: 20,
      position: 'absolute', 
      bottom: -500
    },
    headerContainer: {
      width: '100%', 
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    menuContainer: {
      height: 325,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
    },
    titleContainer: {
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    description: {
      fontSize: 16,
      color: '#696969'
    },
    buttonContainer: {
      height: 170,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    loginButton: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      borderRadius: 35,
      borderWidth: 1,
      borderColor: 'purple',
    },
    loginText: {
      fontWeight: 'bold',
      fontSize: 17
    },
    orContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    line: {
      height: 1,
      backgroundColor: '#f5f5f5',
      flex: 1,
    }
})

export default LoginMenu;