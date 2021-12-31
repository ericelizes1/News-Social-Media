import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import LoginMenu from './SignUpNavigator/LoginMenu';
import SignupMethodScreen from './SignUpNavigator/SignupMethodScreen';
import SignupPersonalScreen from './SignUpNavigator/SignupPersonalScreen';
import SignupUserInfoScreen from './SignUpNavigator/SignupUserInfoScreen';
import SignupVerifyScreen from './SignUpNavigator/SignupVerifyScreen';

const SignupNavigator:FC = () => {
  const SignupNavigator : any =  createMaterialTopTabNavigator();
  
  return(
    <SignupNavigator.Navigator
      initialRouteName='LoginMenu'
      screenOptions={false}
      tabBar={() => {}}
    >
      <SignupNavigator.Screen
        name='LoginMenu'
        component={LoginMenu}
        options={{ 
          headerShown: false
        }}
      />
      <SignupNavigator.Screen // Select Phone/Email/Google/Apple
        name='SignupMethodScreen' 
        component={SignupMethodScreen}
      />  
      <SignupNavigator.Screen // Write FullName/Nickname/Pronouns/Birthday
        name='SignupPersonalScreen'
        component={SignupPersonalScreen}
      />  
      <SignupNavigator.Screen // Write Username/Password
        name='SignupUserInfoScreen'
        component={SignupUserInfoScreen}
      />  
      <SignupNavigator.Screen // Write Username/Password
        name='SignupVerifyScreen'
        component={SignupVerifyScreen}
      />  

    </SignupNavigator.Navigator>
  );
}

export default SignupNavigator;