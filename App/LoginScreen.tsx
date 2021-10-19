import React, { FC, Fragment, useState } from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Button, Input, Text, Icon } from 'react-native-elements';

const LoginScreen:FC = ({navigation}:any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmail = (e) => {
      setEmail(e.target.value);
    }
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      alert("User Added")
      const userData = {
        email: email,
        password: password,
      }
  
     try{
      const add = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
    console.log(add)
     }catch(err){
       console.error()
     }
    }

    return(
      <View>
          <Text h1 style={styles.topText}>
              Login
          </Text>
          <Input
              placeholder='Username'
              style={styles.userName}
              onChange = {handleEmail}
          />
          <Input
              placeholder='Password'
              onChange = {handlePassword}
          />
          <View>
            <Button 
              onPress= {() => navigation.navigate('BottomNavigator')}
              title='Login'/>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    topText: {
        marginTop: 25,
        marginRight: Platform.OS === 'ios' ? 100 : 200,
    },
    userName: {
        marginTop: 150
    },
    loginButton: {
        height: 200
    }
})

export default LoginScreen;