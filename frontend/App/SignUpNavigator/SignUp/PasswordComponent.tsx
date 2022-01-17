import React, { FC, useState, useEffect, useRef } from 'react';
import { ScrollView, View, StyleSheet, Pressable, useWindowDimensions, Keyboard } from 'react-native';
import { Text, Icon, Input } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Props {
  fields: any,
  setFields: any,
  onSubmit: any
}

const HEADER_HEIGHT:number = 93;

const PasswordComponent:FC<Props> = (props: Props, {navigation}:any) => {
  const window = useWindowDimensions()

  const [next, setNext] = useState(false);

  // const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [check, setCheck] = useState(false);

  const [passwordChar, setPasswordChar] = useState(false);
  const [passwordCase, setPasswordCase] = useState(false);
  const [passwordNum, setPasswordNum] = useState(false);
  const [passwordSpecial, setPasswordSpecial] = useState(false);

  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showRetypePasswordError, setShowRetypePasswordError] = useState(false);
  const [showCheckError, setShowCheckError] = useState(false);

  const [passwordLayout, setPasswordLayout] = useState(null);
  const [retypeLayout, setRetypeLayout] = useState(null);

  //Keyboard Listener
  const scrollViewRef = useRef(null);

  const passwordRef = useRef(null);
  const retypeRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        console.log("o");
        if (scrollViewRef != null && scrollViewRef.current != null) {
          if (passwordRef != null && passwordRef.current != null && passwordRef.current.isFocused()) {
            if (passwordLayout != null) {
              console.log(passwordLayout);
              console.log("password focused");
              scrollViewRef.current.scrollToEnd();
            }
          } else if (retypeRef != null && retypeRef.current != null && retypeRef.current.isFocused()) {
            if (retypeLayout != null) {
              console.log(retypeLayout);
              console.log("retype password focused");
              scrollViewRef.current.scrollToEnd();
            }
          }
        }
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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
    
    // setPassword(value);
    props.setFields({
      ...props.fields,
      password: value
    });
  };

  const verifyPage = () => {
    const passwordCondition = passwordChar && passwordCase && passwordNum && passwordSpecial;
    const retypeCondition = props.fields.password === retypePassword

    setShowPasswordError(!passwordCondition);
    setShowRetypePasswordError(!retypeCondition);
    setShowCheckError(!check);
    Keyboard.dismiss();

    return (passwordCondition && retypeCondition && check);
  }

  const handleSignUpButtonPress = () => {
    if (verifyPage()) {
      console.log("verified :)");
      props.onSubmit();
    } else {
      console.log("denied >:(")
    }
  }

  return(
    <ScrollView
      // ref = {ref => scrollView.current = ref}
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
        ref={passwordRef}
        style={{marginTop: -5,}}
        placeholder='Password*' 
        autoCompleteType={undefined}
        secureTextEntry={true}
        onChangeText={value => {
          validatePassword(value);
          setShowPasswordError(false);
        }}
        onLayout={({nativeEvent}) => {
          setPasswordLayout({nativeEvent: nativeEvent.layout});
        }}
        // onLayout={(event) => {
        //   event.target.measure((x, y, width, height, pageX, pageY) => {
        //     doSomethingWithAbsolutePosition({
        //       x: x + pageX,
        //       y: y + pageY,
        //     });
        //   }
        // }}
        // onFocus={() => {
        //   if (passwordRef != null && passwordRef.current != null) {
        //     passwordRef.current.measure((fx, fy, width, height, px, py) => {
        //       let yOffset = py;
        //       console.log(yOffset);
        //       if (scrollViewRef != null && scrollViewRef.current != null) {
        //         scrollViewRef.current.scrollTo({x: 0, y: yOffset, animated: true});
        //       }
        //     })
        //   }
        // }}
      />
      {showPasswordError && 
        <View style={{width: '100%'}}>
          <Text style={{
              paddingBottom: 20, 
              paddingLeft: 10, 
              marginTop: -25, 
              color: 'red', 
              fontSize: 14
          }}>Please enter a password containing at least 8 characters: at least 1 uppercase, lowercase, numeric, and special character</Text>
        </View>
      }
      <Input
        ref={retypeRef}
        style={{marginTop: -5,}}
        placeholder='Retype Password*' 
        autoCompleteType={undefined}
        secureTextEntry={true}
        onChangeText={value => {
          setRetypePassword(value);
          setShowRetypePasswordError(false);
        }}
        onLayout={({nativeEvent}) => {
          setRetypeLayout({nativeEvent: nativeEvent.layout});
        }}
      />
      {showRetypePasswordError && 
        <View style={{width: '100%'}}>
          <Text style={{
              paddingBottom: 20, 
              paddingLeft: 10, 
              marginTop: -25, 
              color: 'red', 
              fontSize: 14
          }}>Please make sure your passwords match</Text>
        </View>
      }
      <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10}}>
        <Pressable
          style={{marginTop: 5}}
          hitSlop={30}
          onPress={() => {
            setCheck(!check);
            setShowCheckError(false);
          }}
        >
          <Icon
            name={check ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
            type='material-community'
            color='purple'
            size={27}
            tvParallaxProperties={false}
          />
        </Pressable>
        <View style={{display: "flex", flexDirection: "row", flex: 1, flexWrap: 'wrap', marginLeft: 10}}>
          <Text style={styles.description}>By clicking here, I state that I have read and agree to the{' '} 
            <Text style={[styles.description, {fontWeight: 'bold', color: 'purple', textDecorationLine: 'underline'}]}>Terms and Conditions</Text>
            {' '}and{' '}
            <Text style={[styles.description, {fontWeight: 'bold', color: 'purple', textDecorationLine: 'underline'}]}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
      {showCheckError &&
        <View style={{width: '100%'}}>
          <Text style={{
              paddingBottom: 20, 
              paddingLeft: 10, 
              color: 'red', 
              fontSize: 14
          }}>Please agree to the Terms and Conditions before signing up</Text>
        </View>
      }
      <Pressable
        style={[styles.loginButton, {marginTop: 20, backgroundColor: next ? 'rgba(128,0,128, 0.8)' : 'rgba(128,0,128, 1)'}]}
        onPress= {handleSignUpButtonPress}
        onPressIn={()=>{setNext(true)}}
        onPressOut={()=>{setNext(false)}}      
      >
        <Text style={[styles.loginText, {color: 'white',}]}>Sign Up</Text>
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
})

export default PasswordComponent;