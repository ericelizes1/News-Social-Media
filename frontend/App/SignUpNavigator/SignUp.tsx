import React, { FC, useState, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Animated, SafeAreaView, View, StyleSheet, ScrollView, Pressable, useWindowDimensions, Platform, StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Text, Icon} from 'react-native-elements';
import PasswordComponent from './SignUp/PasswordComponent';

import UsernameComponent from './SignUp/UsernameComponent';

const HEADER_HEIGHT:number = 93;

const SignUp:FC = ({navigation}:any) => {
  const window = useWindowDimensions();
  const { firebaseSignUp } = React.useContext(AuthContext);
  const [isUsernameScreen, setIsUsernameScreen] = useState(true);
  const [fields, setFields] = useState({
    accountIdentifier: '',
    username: '',
    accountIdentifierType: 'email',
    birthdate: new Date(),
    password: ''
  });

  let animated = useRef(new Animated.Value(0));

  //Animates the indicator
  let opacity = animated.current.interpolate({ 
    inputRange: [0, 1], 
    outputRange: [0, 1] 
  })
  const animatedIndicatorStyle = {
    opacity: opacity,
  }

  //Animates the UsernameComponent and PasswordComponent
  let transformContent = animated.current.interpolate({ 
    inputRange: [0, 1], 
    outputRange: [0, -window.width] 
  })
  const animatedContentStyle = {
    transform: [
      { translateX: transformContent }
    ], 
  }

  const animateNext = () => {
    setIsUsernameScreen(false);
    Animated.spring(animated.current, {
      toValue: 1,
      friction:25,
      tension: 100,
      useNativeDriver: false,
    }).start();
  };
  const animatePrev = () => {
    setIsUsernameScreen(true);
    Animated.spring(animated.current, {
      toValue: 0,
      friction: 25,
      tension: 100,
      useNativeDriver: false,
    }).start();
  };

  const handleSignUp = () => {
    if (fields.accountIdentifierType === 'email') {
      // navigation.navigate('SignupVerifyScreen')
      // console.log(fields.accountIdentifier, fields.password);
      // firebaseSignUp(fields.accountIdentifier, fields.password)
      console.log(fields)
    }
  }

  return(
    <SafeAreaView 
      style={[
        styles.container, 
        {height: window.height + StatusBar.currentHeight, 
        width: window.width, 
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }]}
    >
      <KeyboardAvoidingView
        behavior={'padding'}
        contentContainerStyle={{height: '100%', width: '100%'}}
        style={{height: window.height, width: '100%', }}
      >
        <View style={styles.header}>
          <View style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                Keyboard.dismiss();
                if (isUsernameScreen) {
                  navigation.navigate('LoginMenu')
                } else {
                  animatePrev()
                }
              }}
            >
              <Icon
                name='chevron-left'
                color='purple'
                type='material-community'
                size={40}
                tvParallaxProperties={false}
              />
            </Pressable>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Create your account</Text>
            </View>
          </View>
          <View style={styles.indicatorContainer}>
            <View style={[styles.indicator, {backgroundColor: 'purple'}]}/>
            <View style={[styles.indicator, {backgroundColor: 'white', borderWidth: 2, borderColor: '#696969'}]}>
              <Animated.View style={[styles.indicator, animatedIndicatorStyle, {backgroundColor: 'purple'}]}/>
            </View>
          </View>
        </View>
        <View style={[styles.screenContainer, {maxHeight: window.height - (HEADER_HEIGHT * 2)}]}>
          <Animated.View style={[styles.screen, animatedContentStyle]}>
            <UsernameComponent next={animateNext} fields={fields} setFields={setFields} />
          </Animated.View>
          <Animated.View style={[styles.screen, animatedContentStyle]}>
            <PasswordComponent fields={fields} onSubmit={handleSignUp} setFields={setFields} />
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    width: '100%', 
    height: 93,
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    zIndex: 1,
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: -1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  indicatorContainer: {
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  indicator: {
    width: 10, 
    height: 10, 
    marginHorizontal: 5, 
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenContainer: {
    height: '80%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  screen: {
    height: '100%',
    width: '100%',
  }
})

export default SignUp;