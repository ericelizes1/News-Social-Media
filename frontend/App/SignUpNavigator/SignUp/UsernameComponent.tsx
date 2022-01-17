import React, { FC, useState } from 'react';
import { ScrollView, View, StyleSheet, Pressable, useWindowDimensions, Platform, Keyboard } from 'react-native';
import { Text, Icon, Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props {
  fields: any,
  setFields: any,
  next: any
}

const HEADER_HEIGHT:number = 93;


const UsernameComponent:FC<Props> = (props: Props, {navigation}:any) => {
  const window = useWindowDimensions()

  const [next, setNext] = useState(false);
  // const [accountIdentifier, setAccountIndentifier] = useState('');
  // const [username, setUsername] = useState('');
  const [accountIdentifierType, setAccountIndentifierType] = useState('email');
  const [date, setDate] = useState(new Date());

  const [accountError, setAccountError] = useState(false);
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [showBirthdayError, setShowBirthdayError] = useState(false);

  const [isDateSet, setIsDateSet] = useState(false);
  const [show, setShow] = useState(false);

  //Keyboard Listener
  const scrollViewRef = React.useRef(null);

  // React.useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     'keyboardDidShow',
  //     () => {
  //       if (scrollViewRef != null && scrollViewRef.current != null) {
  //         scrollViewRef.current.scrollToEnd();
  //         console.log('dont test me')
  //       }
  //       console.log('hello')
  //     }
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     () => {
  //       console.log('goodbye')
  //     }
  //   );

  //   return () => {
  //     keyboardDidHideListener.remove();
  //     keyboardDidShowListener.remove();
  //   };
  // }, []);

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

  const getCurrentDate = () =>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var birthDate = date.getDate();
    var birthMonth = monthNames[date.getMonth()];
    var birthYear= date.getFullYear();

    return birthMonth + ' ' + birthDate + ', ' + birthYear;
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setIsDateSet(true);
  };

  const verifyPage = () => {
    const accountCondition = props.fields.accountIdentifier.length > 0;
    const usernameCondition = (props.fields.username.length > 2) && (props.fields.username.length < 33) && (/^[a-z]+$/i.test(props.fields.username));
    const birthdayCondition = (isDateSet && getAge() > 12);

    setAccountError(!accountCondition);
    setShowUsernameError(!usernameCondition);
    setShowBirthdayError(!birthdayCondition);

    Keyboard.dismiss();

    return(accountCondition && birthdayCondition && usernameCondition);
  }

  return(
    <ScrollView
      ref={scrollViewRef}
      style={[styles.menuContainer]}
      contentContainerStyle={{
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        height: window.height - HEADER_HEIGHT * 2.5}}
      showsVerticalScrollIndicator={false}
    >
      <Input
        style={{width: '100%', marginTop: 10,}}
        placeholder='Phone or Email*' 
        onChangeText={value => {
          props.setFields({
            ...props.fields,
            accountIdentifier: value
          })
          // setAccountIndentifier(value); 
          setAccountError(false);
        }}
        autoCompleteType={undefined}/>
      {accountError && 
        <View style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <Text style={{
            paddingBottom: 20, 
            paddingLeft: 10, 
            marginTop: -25, 
            color: 'red', 
            fontSize: 14
          }}>Please enter a valid phone or email address</Text>
        </View>
      }
      <Input
        style={{marginTop: -5,}}
        placeholder='Username*' 
        autoCompleteType={undefined} 
        onChangeText={value => {
          props.setFields({
            ...props.fields,
            username: value
          })
          // setUsername(value);
          setShowUsernameError(false);
      }}/>
      {showUsernameError && 
      <View style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <Text style={{
              paddingBottom: 20, 
              paddingLeft: 10, 
              marginTop: -25, 
              color: 'red', 
              fontSize: 14
          }}>Please enter a username from 3 to 32 characters </Text>
        </View>
      }
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
      {showBirthdayError && 
      <View style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Text style={{
          paddingBottom: 20, 
          paddingLeft: 10, 
          marginTop: -25, 
          color: 'red', 
          fontSize: 14
        }}>Users must be at least 13 years of age</Text>
      </View>}
      <Pressable
        style={[styles.loginButton, {marginTop: 20, backgroundColor: next ? 'rgba(128,0,128, 0.8)' : 'rgba(128,0,128, 1)'}]}
        onPress= {() => {if (verifyPage()) {
          props.next()
          /*navigation.navigate('SignupPersonalScreen', {
          type: accountIdentifierType,
          email: accountIdentifier
        }
      )*/}}}
        onPressIn={()=>{setNext(true)}}
        onPressOut={()=>{setNext(false)}}      
      >
        <Text style={[styles.loginText, {color: 'white',}]}>Next</Text>
      </Pressable>
    </ScrollView>
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
  logoContainer: {
    width: '100%', 
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    zIndex: 1,
  },
  menuContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    position: 'absolute',
    padding: 20,
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: -1,
    paddingTop: 10
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

export default UsernameComponent;