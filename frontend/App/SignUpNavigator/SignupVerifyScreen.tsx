import React, { FC, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground, Pressable, useWindowDimensions, Platform, StatusBar } from 'react-native';
import { Text, Icon, CheckBox } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Recaptcha from 'react-native-recaptcha-that-works';

// What should we call you?
// Stack welcomes users from cultures across the globe
// Write FullName/Nickname/Pronouns/Birthday
const SignupVerifyScreen:FC = ({navigation}:any) => {
  const window = useWindowDimensions();
  const [check, setCheck] = useState(false);
  const [next, setNext] = useState(false);

  return(
    <SafeAreaView style={[styles.container, {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}]}>
      <ImageBackground
        source={{uri: 'https://images.unsplash.com/photo-1582120031356-35f21bf61055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyaiUyMGtoYWxpZmF8ZW58MHx8MHx8&w=1000&q=80'}}
        style={styles.imageContainer}
      >
        <LinearGradient
          colors={['rgba(128,0,128, 0.25)', 'rgba(128,0,128, 0)']}
          style={styles.imageContainer}
        >
          <View style={styles.logoContainer}>
            <Pressable
              onPress={() => navigation.navigate('SignupUserInfoScreen')}
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
          <View style={[styles.subContainer]}>
            <View style={styles.titleContainer}>
              <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={{width: '24%', height: 2, backgroundColor: 'purple'}}/>
                  <View style={{width: '24%', height: 2, backgroundColor: 'purple'}}/>
                  <View style={{width: '24%', height: 2, backgroundColor: 'purple'}}/>
                  <View style={{width: '24%', height: 2, backgroundColor: 'purple'}}/>
                </View>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                <Text style={styles.title}>You're almost done</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <View style={{justifyContent: 'center'}}>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10}}>
                  <Pressable
                    style={{marginTop: 5}}
                    hitSlop={100}
                    onPress={() => setCheck(!check)}
                  >
                    <Icon
                      name={check ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
                      type='material-community'
                      color='purple'
                      size={30}
                      tvParallaxProperties={false}
                    />
                  </Pressable>
                  <View style={{display: "flex", flexDirection: "row", flex: 1, flexWrap: 'wrap', marginLeft: 10}}>
                    <Text style={styles.description}>By clicking here, I state that I have read and agree to the{' '} 
                      <Text style={[styles.description, {fontWeight: 'bold', color: 'purple', textDecorationLine: 'underline'}]}>Terms and Conditions</Text>
                      {' '}and{' '}
                      <Text style={[styles.description, {fontWeight: 'bold', color: 'purple', textDecorationLine: 'underline'}]}>Privacy Policy.</Text>
                    </Text>

                  </View>
                </View>
              </View>
              <Pressable
                style={[styles.loginButton, {backgroundColor: next ? 'rgba(128,0,128, 0.8)' : 'rgba(128,0,128, 1)'}]}
                onPress= {() => navigation.navigate('BottomNavigator')}
                onPressIn={()=>{setNext(true)}}
                onPressOut={()=>{setNext(false)}}      
              >
                <Text style={[styles.loginText, {color: 'white',}]}>Sign Up</Text>
              </Pressable>
              
            </View>
          </View>
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
  subContainer: {
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
    fontSize: 23,
  },
  description: {
    fontSize: 16,
    color: '#696969',
  },
  buttonContainer: {
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
    fontSize: 17,
  },
  orContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingBottom: 30,
  },
  line: {
    height: 1,
    backgroundColor: '#f5f5f5',
    flex: 1,
  }
})


export default SignupVerifyScreen;