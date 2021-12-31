import React, { FC, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground, Pressable, Platform, StatusBar } from 'react-native';
import { Text, Icon, Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

// Write Username/Password
// Let's wrap things up
// Please guard your password close at hand.
const SignupUserInfoScreen:FC = ({navigation}:any) => {
  const [next, setNext] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordChar, setPasswordChar] = useState(false);
  const [passwordCase, setPasswordCase] = useState(false);
  const [passwordNum, setPasswordNum] = useState(false);
  const [passwordSpecial, setPasswordSpecial] = useState(false);

  const validatePassword = (value:string) => {
    // VALIDATE THAT PASSWORD INFO
    if (value.length >= 8) 
      setPasswordChar(true); 
    else 
      setPasswordChar(false);
    if (value !== value.toLowerCase() && value !== value.toUpperCase())
      setPasswordCase(true);
    else 
      setPasswordCase(false);
    if (/[a-zA-Z]/.test(value) && /\d/.test(value))
      setPasswordNum(true)
    else
      setPasswordNum(false)
    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value))
      setPasswordSpecial(true)
    else
      setPasswordSpecial(false)
    
    setPassword(value);
  };

  return(
    <SafeAreaView style={[styles.container, {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}]}>
      <ImageBackground
        source={{uri: 'https://wallpaperaccess.com/full/6719354.jpg'}}
        style={styles.imageContainer}
      >
        <LinearGradient
          colors={['rgba(128,0,128, 0.25)', 'rgba(128,0,128, 0)']}
          style={styles.imageContainer}
        >
          <View style={styles.logoContainer}>
            <Pressable
              onPress={() => navigation.navigate('SignupPersonalScreen')}
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
                <Text style={styles.title}>Secure your account</Text>
                <Text style={[styles.title, {paddingRight: 10}]}>3/4</Text>
              </View>
              <Text style={styles.description}>For your safety, please guard your password close at hand</Text>
            </View>
            <View style={styles.buttonContainer}>
              <View style={{justifyContent: 'space-evenly'}}>
                <Input
                  placeholder='Username*' 
                  autoCompleteType={undefined} />
                <Input
                  placeholder='Password*' 
                  autoCompleteType={undefined}
                  secureTextEntry={true}
                  onChangeText={value => {
                    validatePassword(value);
                  }}
                />
                <View style={{paddingLeft: 10, marginTop: -10}}>
                  <Text style={styles.description}>Your password should contain:</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.description, {paddingHorizontal: 10,}]}>- At least 8 characters</Text>
                    <Icon
                      name={passwordChar ? 'check' : 'close'}
                      type='material-community'
                      color='purple'
                      tvParallaxProperties={false}

                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.description, {paddingHorizontal: 10,}]}>- Uppercase and lowercase letters</Text>
                    <Icon
                      name={passwordCase ? 'check' : 'close'}
                      type='material-community'
                      color='purple'
                      tvParallaxProperties={false}
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.description, {paddingHorizontal: 10,}]}>- Letters and numbers</Text>
                    <Icon
                      name= {passwordNum ? 'check' : 'close'}
                      type='material-community'
                      color='purple'
                      tvParallaxProperties={false}
                    />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.description, {paddingHorizontal: 10,}]}>- At least 1 special character</Text>
                    <Icon
                      name= {passwordSpecial ? 'check' : 'close'}
                      type='material-community'
                      color='purple'
                      tvParallaxProperties={false}
                    />
                  </View>
                </View>
              </View>
              <Pressable
                style={[styles.loginButton, {backgroundColor: next ? 'rgba(128,0,128, 0.8)' : 'rgba(128,0,128, 1)'}]}
                onPress= {() => navigation.navigate('SignupVerifyScreen')}
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
    height: 380,
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
export default SignupUserInfoScreen;