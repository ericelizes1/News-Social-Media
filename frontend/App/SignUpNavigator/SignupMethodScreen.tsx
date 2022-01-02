import React, { FC, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground, Pressable, useWindowDimensions, Platform, StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Text, Icon, Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';


const SignupMethodScreen:FC = ({navigation}:any) => {
    const window = useWindowDimensions()
    const [google, setGoogle] = useState(false);
    const [apple, setApple] = useState(false);
    const [next, setNext] = useState(false);
    const [accountIdentifier, setAccountIndentifier] = useState('');
    const [accountError, setAccountError] = useState(false);

    const verfiyPage = () => {
      //WRITE THE CONDITION TO VERIFY WHETHER THIS IS A PHONE OR EMAIL ADDRESS, OR VERIFY WHETHER THEY SELECTED GOOGLE OR APPLE
      const accountCondition = accountIdentifier.length > 0;
      
      setAccountError(!accountCondition);
      Keyboard.dismiss();

      return(accountCondition);
    }
    return(
      <SafeAreaView style={[styles.container, {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}]}>
        <ImageBackground
          source={{uri: 'https://images.unsplash.com/photo-1516905365385-7f89706faaf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VhdHRsZXxlbnwwfHwwfHw%3D&w=1000&q=80'}}
          style={styles.imageContainer}
        > 
          <LinearGradient
            colors={['rgba(128,0,128, 0.25)', 'rgba(128,0,128, 0)']}
            style={styles.imageContainer}
          >
            <View style={styles.logoContainer}>
              <Pressable
                onPress={() => navigation.navigate('LoginMenu')}
              >
                <Icon
                  name='chevron-left'
                  color='white'
                  type='material-community'
                  size={40}
                  tvParallaxProperties={false}
                />
              </Pressable>
            </View>
            <KeyboardAvoidingView 
              behavior={Platform.OS === "android" ? '' : 'padding'}
              style={[styles.menuContainer]}
            >
              <View style={styles.titleContainer}>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.title}>Create your account</Text>
                  <Text style={[styles.title, {paddingRight: 10}]}>1/4</Text>
                </View>
                <Text style={styles.description}>Breaking news and popular opinions await at your fingertips</Text>
              </View>
              <Input
                style={{width: '100%', marginTop: 10,}}
                placeholder='Phone or Email*' 
                onChangeText={value => setAccountIndentifier(value)}
                autoCompleteType={undefined}/>
              {accountError && 
                <View style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                  <Text style={{
                    paddingBottom: 20, 
                    paddingLeft: 10, 
                    marginTop: -25, 
                    color: 'red', 
                    fontSize: 14
                  }}>Please enter a valid phone or email address, or select one of the methods below</Text>
                </View>
              }
              <View style={styles.orContainer}>
                <View style={styles.line}/>
                <Text style={[styles.description, {paddingHorizontal: 10,}]}>or</Text>
                <View style={styles.line}/>
              </View>
                <Pressable
                  style={[styles.loginButton, {marginTop: 20, backgroundColor: google ? 'rgba(128, 0, 128, 0.2)' : 'rgba(128,0,128, 0)'}]}
                  onPress= {() => {}}     
                  onPressIn={()=>{setGoogle(true)}}
                  onPressOut={()=>{setGoogle(false)}}
                >
                  <Text style={[styles.loginText, {color: 'purple',}]}>Google</Text>
                </Pressable>
                <Pressable
                  style={[styles.loginButton, {marginTop: 10, backgroundColor: apple ? 'rgba(128, 0, 128, 0.2)' : 'rgba(128,0,128, 0)'}]}
                  onPress= {() => {}}   
                  onPressIn={()=>{setApple(true)}}
                  onPressOut={()=>{setApple(false)}}
                >
                  <Text style={[styles.loginText, {color: 'purple',}]}>Apple</Text>
                </Pressable>
                <Pressable
                  style={[styles.loginButton, {marginTop: 20, backgroundColor: next ? 'rgba(128,0,128, 0.8)' : 'rgba(128,0,128, 1)'}]}
                  onPress= {() => {if (verfiyPage()) {navigation.navigate('SignupPersonalScreen')}}}
                  onPressIn={()=>{setNext(true)}}
                  onPressOut={()=>{setNext(false)}}      
                >
                  <Text style={[styles.loginText, {color: 'white',}]}>Next</Text>
                </Pressable>
              </KeyboardAvoidingView>
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
  logoContainer: {
    width: '100%', 
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
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
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  description: {
    fontSize: 16,
    color: '#696969'
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
    marginTop: -5,
  },
  line: {
    height: 1,
    backgroundColor: '#f5f5f5',
    flex: 1,
  }
})

export default SignupMethodScreen;