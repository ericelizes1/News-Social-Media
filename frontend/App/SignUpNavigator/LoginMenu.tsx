import React, { FC, useState, useRef } from 'react';
import { Animated, SafeAreaView, View, StyleSheet, ImageBackground, Pressable, useWindowDimensions, Platform, StatusBar, KeyboardAvoidingView, Modal, Keyboard } from 'react-native';
import { Text, Icon, Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const LoginMenu:FC = ({navigation}:any) => {
    const window = useWindowDimensions()
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [resetButton, setResetButton] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [cancelButton, setCancelButton] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    let animatedForget = useRef(new Animated.Value(0));
    let forgetLocation = animatedContent.current.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -500]
    })
    
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


    const menuExitAnimation = () => {
      Animated.spring(animatedMenu.current, {
        toValue: 1,
        friction:25,
        tension: 100,
        useNativeDriver: false,
      }).start();
      Animated.spring(animatedContent.current, {
        toValue: 1,
        friction:25,
        tension: 100,
        useNativeDriver: false,
      }).start();
    }
    const menuEnterAnimation = () => {
      Animated.spring(animatedContent.current, {
        toValue: 0,
        friction: 25,
        tension: 100,
        useNativeDriver: false,
      }).start();
      Animated.spring(animatedMenu.current, {
        toValue: 0,
        friction:25,
        tension: 100,
        useNativeDriver: false,
      }).start();
    }

    const animateToSignIn = () => {
      menuExitAnimation()
    };
    const animateFromSignIn = () => {
      Animated.spring(animatedContent.current, {
        toValue: 0,
        friction: 25,
        tension: 100,
        useNativeDriver: false,
      }).start();
      Animated.spring(animatedMenu.current, {
        toValue: 0,
        friction:25,
        tension: 100,
        useNativeDriver: false,
      }).start();
    };

    return(
      <SafeAreaView style={[styles.container, {height: window.height + StatusBar.currentHeight, width: window.width, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? 'padding': 'position'}
          contentContainerStyle={{height: '100%', width: '100%'}}
          style={{height: window.height, width: '100%', flex: 1, }}
        >
          <Modal animationType='fade' visible={isModalVisible} transparent={true}>
            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'rgba(0,0,0,0.3)'}}>
              <View style={{width: '100%', backgroundColor: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20, borderRadius: 20}}>
                <Text style={[styles.title, {fontSize: 18}]}>Forgot your password?</Text>
                <Text style={[styles.description, {fontSize: 16}]}>Enter the phone number or email you used to sign up below.</Text>
                <Input
                  style={{width: '100%', marginTop: 10,}}
                  placeholder='Phone or Email*' 
                  autoCompleteType={undefined}
                />
                <Pressable
                  style={[styles.loginButton, {backgroundColor: resetButton ? 'rgba(128,0,128, 0.8)' : 'rgba(128,0,128, 1)'}]}
                  onPress= {() => {
                    setResetButton(false);
                    navigation.navigate('BottomNavigator');
                  }}                
                  onPressIn={()=>{setResetButton(true)}}
                  onPressOut={()=>{setResetButton(false)}}
                >
                  <Text style={[styles.loginText, {color: 'white',}]}>Reset Password</Text>
                </Pressable>
                <Pressable
                  style={[styles.loginButton, {marginTop: 10, backgroundColor: cancelButton ? 'rgba(128,0,128, 0.2)' : 'rgba(128,0,128, 0)'}]}
                  onPress= {() => {
                    setCancelButton(false)
                    setIsModalVisible(false);
                  }} 
                  onPressIn={()=>{setCancelButton(true)}}
                  onPressOut={()=>{setCancelButton(false)}} 
                >
                  <Text style={[styles.loginText, {color: 'purple',}]}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <ImageBackground
            source={{uri: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'}}
            style={styles.imageContainer}
          >
            <LinearGradient
              colors={['rgba(128,0,128, 0.25)', 'rgba(128,0,128, 0)']}
              style={styles.imageContainer}
            >
              <Animated.View style={[animatedContentStyle, styles.menuContainer,{position: 'absolute',bottom: -500}]}>
                <View
                  style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}
                >
                  <Pressable
                    onPress={() => {
                      Keyboard.dismiss()
                      animateFromSignIn()
                    }}
                  >
                    <Icon
                      name='chevron-down'
                      type='material-community'
                      color='purple'
                      size={35}
                      tvParallaxProperties={false}
                    />
                  </Pressable>
                </View>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Welcome back</Text>
                  <Text style={styles.description}>Sign in below to get started</Text>
                </View>
                <Input
                  style={{marginTop: -5,}}
                  placeholder='Username*' 
                  autoCompleteType={undefined} 
                />
                <Input
                  style={{marginTop: -5,}}
                  placeholder='Password*' 
                  autoCompleteType={undefined}
                  secureTextEntry={true}
                />
                <Pressable
                  style={[styles.loginButton, {backgroundColor: signIn ? 'rgba(128,0,128, 0.8)' : 'rgba(128,0,128, 1)'}]}
                  onPress= {() => {
                    navigation.navigate('BottomNavigator');
                  }}                
                  onPressIn={()=>{setSignIn(true)}}
                  onPressOut={()=>{setSignIn(false)}}
                >
                  <Text style={[styles.loginText, {color: 'white',}]}>Sign In</Text>
                </Pressable>
                <Pressable
                  style={[styles.loginButton, {marginTop: 10, backgroundColor: signUp ? 'rgba(128,0,128, 0.2)' : 'rgba(128,0,128, 0)'}]}
                  onPress= {() => {
                    //Navigate to sign in
                   setIsModalVisible(true);
                  }} 
                  onPressIn={()=>{setSignUp(true)}}
                  onPressOut={()=>{setSignUp(false)}} 
                >
                  <Text style={[styles.loginText, {color: 'purple',}]}>Forgot your password?</Text>
                </Pressable>
              </Animated.View>
              <Animated.View style={[styles.headerContainer]}>              
                <Text style={[styles.title, {color: 'white'}]}>stack</Text>           
              </Animated.View>
              <Animated.View style={[styles.menuContainer, animatedMenuStyle]}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Welcome</Text>
                  <Text style={styles.description}>Let's see what the world's up to today</Text>
                </View>
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
              </Animated.View>
            </LinearGradient>
          </ImageBackground>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
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
      width: '100%', 
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'white', 
      borderTopLeftRadius: 20, 
      borderTopRightRadius: 20, 
      padding: 20,
    },
    headerContainer: {
      width: '100%', 
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    menuContainer: {
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
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
      paddingBottom: 20,
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
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    line: {
      height: 1,
      backgroundColor: '#f5f5f5',
      flex: 1,
    }
})

export default LoginMenu;