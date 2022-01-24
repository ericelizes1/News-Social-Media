import React, { FC, useState, useEffect, useRef } from 'react';
import { Animated, FlatList, View, StyleSheet, Pressable, useWindowDimensions, Keyboard } from 'react-native';
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

  const [keyboardOpen, setKeyboardOpen] = useState(false);

  //Keyboard Listener
  const flatListRef = React.useRef<FlatList>(null);

  const passwordRef = useRef(null);
  const retypeRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        moveUp();
        setKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        moveDown();
        setKeyboardOpen(false);
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

  const animatedVal = useRef(new Animated.Value(0));
  const gapHeight = (window.height - HEADER_HEIGHT - 400) / 2
  const translate = animatedVal.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -gapHeight]
  })

  const animatedStyle = {
    transform: [
      { translateY: translate }
    ], 
  }
  const moveUp = () => {
    Animated.spring(animatedVal.current, {
      toValue: 1,
      friction: 25,
      tension: 100,
      useNativeDriver: false,
    }).start();
  }
  const moveDown = () => {
    Animated.spring(animatedVal.current, {
      toValue: 0,
      friction: 25,
      tension: 100,
      useNativeDriver: false,
    }).start();
  }
  const flatListComponents = [
    <View style={{height: gapHeight}}/>,
    <Animated.View style={animatedStyle}>
      <Input
        ref={passwordRef}
        style={{marginTop: -5,}}
        placeholder='Password*' 
        autoCompleteType={undefined}
        secureTextEntry={true}
        onFocus={() => {
          flatListRef.current.scrollToIndex({index: 1, viewPosition: 0.4});
          //setKeyboardOpen(true);
        }}
        onChangeText={value => {
          validatePassword(value);
          setShowPasswordError(false);
        }}/>
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
    </Animated.View>,
    <Animated.View style={animatedStyle}>
      <Input
        ref={retypeRef}
        style={{marginTop: -5,}}
        placeholder='Retype Password*' 
        autoCompleteType={undefined}
        onFocus={() => {
          flatListRef.current.scrollToIndex({index: 2, viewPosition: 0.4});
          setKeyboardOpen(true);
        }}
        secureTextEntry={true}
        onChangeText={value => {
          setRetypePassword(value);
          setShowRetypePasswordError(false);
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
    </Animated.View>,
    <Animated.View style={animatedStyle}>
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
    </Animated.View>,
    <Animated.View style={animatedStyle}>
      <Pressable
        style={[styles.loginButton, {marginTop: 20, backgroundColor: next ? 'rgba(128,0,128, 0.8)' : 'rgba(128,0,128, 1)'}]}
        onPress= {handleSignUpButtonPress}
        onPressIn={()=>{setNext(true)}}
        onPressOut={()=>{setNext(false)}}      
      >
        <Text style={[styles.loginText, {color: 'white',}]}>Sign Up</Text>
      </Pressable>
    </Animated.View>,
    <Animated.View style={[animatedStyle, {height: keyboardOpen ? 50 : (window.height - HEADER_HEIGHT - 400) / 2, backgroundColor: 'red'}]} />,
  ]

  const renderItem = ({item}) => item;
  
  return(
    <FlatList
      data={flatListComponents}
      ref={flatListRef}
      style={[styles.menuContainer]}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
    />
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