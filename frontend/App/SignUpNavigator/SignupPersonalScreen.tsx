import React, { FC, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground, Pressable, useWindowDimensions, Platform, StatusBar } from 'react-native';
import { Text, Icon, Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

// What should we call you?
// Stack welcomes users from cultures across the globe
// Write FullName/Nickname/Pronouns/Birthday
const SignupPersonalScreen:FC = ({navigation}:any) => {
  const window = useWindowDimensions()
  const [next, setNext] = useState(false);

  return(
    <SafeAreaView style={[styles.container, {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}]}>
      <ImageBackground
        source={{uri: 'https://wallpaperaccess.com/full/5874.jpg'}}
        style={styles.imageContainer}
      >
        <LinearGradient
          colors={['rgba(128,0,128, 0.25)', 'rgba(128,0,128, 0)']}
          style={styles.imageContainer}
        >
          <View style={styles.logoContainer}>
            <Pressable
              onPress={() => navigation.navigate('SignupMethodScreen')}
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
                <Text style={styles.title}>What should we call you?</Text>
                <Text style={[styles.title, {paddingRight: 10}]}>2/4</Text>
              </View>
              <Text style={styles.description}>Stack welcomes users from cultures across the globe</Text>
            </View>
            <View style={styles.buttonContainer}>
              <View style={{justifyContent: 'center'}}>
                <Input
                  placeholder='Full Name*' autoCompleteType={undefined}  />
                <Input
                  placeholder='Nickname' autoCompleteType={undefined}
                />
                <Input
                  placeholder='Pronouns' autoCompleteType={undefined}
                />
                <View>
                  <Input
                    placeholder='Date of Birth*' autoCompleteType={undefined}                  />
                  <Text style={{paddingLeft: 10,marginTop: -25, color: '#696969', fontSize: 14}}>This will not be displayed publicly.</Text>
                </View>
              </View>
              <Pressable
                style={[styles.loginButton, {backgroundColor: next ? 'rgba(128,0,128, 0.8)' : 'rgba(128,0,128, 1)'}]}
                onPress= {() => navigation.navigate('SignupUserInfoScreen')}
                onPressIn={()=>{setNext(true)}}
                onPressOut={()=>{setNext(false)}}      
              >
                <Text style={[styles.loginText, {color: 'white',}]}>Next</Text>
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
    paddingHorizontal: 20,
    paddingTop: 20,
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
  buttonContainer: {
    height: 400,
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

    paddingBottom: 30,
  },
  line: {
    height: 1,
    backgroundColor: '#f5f5f5',
    flex: 1,
  }
})


export default SignupPersonalScreen;