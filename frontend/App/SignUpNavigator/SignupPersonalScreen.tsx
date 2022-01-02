import React, { FC, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground, Pressable, useWindowDimensions, Platform, StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Text, Icon, Input, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';



// What should we call you?
// Stack welcomes users from cultures across the globe
// Write FullName/Nickname/Pronouns/Birthday
const SignupPersonalScreen:FC = ({navigation}:any) => {
  const window = useWindowDimensions()
  const [next, setNext] = useState(false);
  const [isDateSet, setIsDateSet] = useState(false);
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickname, setNickname] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [date, setDate] = useState(new Date());


  const [showFirstNameError, setShowFirstNameError] = useState(false);
  const [showLastNameError, setShowLastNameError] = useState(false);
  const [showBirthdayError, setShowBirthdayError] = useState(false);

  const getAge = () => {
    var today = new Date();
    var birthDate = date;
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
  }

  const verfiyPage = () => {
    const firstNameCondition = (firstName.length > 0) && (/^[a-z ]+$/i.test(firstName));
    const lastNameCondition = (lastName.length > 0) && (/^[a-z ]+$/i.test(lastName));
    const birthdayCondition = (isDateSet && getAge() > 12);

    setShowFirstNameError(!firstNameCondition);
    setShowLastNameError(!lastNameCondition);
    setShowBirthdayError(!birthdayCondition);
    Keyboard.dismiss();

    return(firstNameCondition && lastNameCondition && birthdayCondition);
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setIsDateSet(true);
  };


  const getCurrentDate = () =>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var birthDate = date.getDate();
    var birthMonth = monthNames[date.getMonth()];
    var birthYear= date.getFullYear();

    return birthMonth + ' ' + birthDate + ', ' + birthYear;
  };
  return(
    <SafeAreaView style={[styles.container, {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}]}>
      <ImageBackground
        source={{uri: 'https://i.pinimg.com/originals/c5/8d/9b/c58d9bac7b5bd11318b4a5ae63a96df9.jpg'}} 
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
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? 'padding': ''}
            style={[styles.menuContainer]}
           >
            <View style={styles.titleContainer}>
              <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>What should we call you?</Text>
                <Text style={[styles.title, {paddingRight: 10}]}>2/4</Text>
              </View>
              <Text style={styles.description}>Stack welcomes users from cultures across the globe</Text>
            </View>
            <Input
              style={{marginTop: -5,}}
              placeholder='First Name*' autoCompleteType={undefined}  
              onChangeText={value => setFirstName(value)}
              onPressIn={() => {
                setShow(false)
              }}
            />
            {showFirstNameError && 
              <View style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <Text style={{paddingBottom: 20, paddingLeft: 10, marginTop: -25, color: 'red', fontSize: 14}}>Invalid first name</Text>
              </View>
            }
            <Input
              style={{marginTop: -5,}}
              placeholder='Last Name*' autoCompleteType={undefined}  
              onChangeText={value => setLastName(value)}
              onPressIn={() => {
                setShow(false)
              }}
            />
            {showLastNameError && 
              <View style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <Text style={{paddingBottom: 20, paddingLeft: 10, marginTop: -25, color: 'red', fontSize: 14}}>Invalid last name</Text>
              </View>
            }
            <Input
              style={{marginTop: -5,}}
              placeholder='Nickname' autoCompleteType={undefined}
              onChangeText={value => setNickname(value)}
              onPressIn={() => {
                setShow(false)
              }}
            />
            <Input
              style={{marginTop: -5,}}
              placeholder='Pronouns' autoCompleteType={undefined}
              onChangeText={value => setPronouns(value)}
              onPressIn={() => {
                setShow(false)
              }}
            />
            <View style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
              <Pressable
                style={{marginTop: -5, width:'100%'}}
                onPress={() => {
                  setShow(true)
                  Keyboard.dismiss();
                }}>
                <View pointerEvents='none'>
                  <Input
                    placeholder='Birth Date*' autoCompleteType={undefined}
                    value={isDateSet ? getCurrentDate() : null} 
                  />
                </View>
              </Pressable>
              {showBirthdayError && <Text style={{
                paddingBottom: 20, 
                paddingLeft: 10, 
                marginTop: -25, 
                color: 'red', 
                fontSize: 14
              }}>Users must be at least 13 years of age</Text>}
            </View>
            {show && (
              <View style={{width: 320, height: '30%' ,justifyContent: 'center' }}>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'date'}
                  is24Hour={true}
                  display={Platform.OS === "ios" ? "spinner": "default"}
                  onChange={onChange}
                  />
              </View>
            )}
            <Pressable
              style={[styles.loginButton, {backgroundColor: next ? 'rgba(128,0,128, 0.8)' : 'rgba(128,0,128, 1)'}]}
              onPress= {() => {
                if (verfiyPage()) {setShow(false), navigation.navigate('SignupUserInfoScreen')};
              }}
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
    paddingBottom: 20,
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