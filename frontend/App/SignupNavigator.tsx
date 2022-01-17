import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import LoginMenu from './SignUpNavigator/LoginMenu';
import SignUp from './SignUpNavigator/SignUp';

const SignupNavigator:FC = () => {
  const SignupNavigator : any =  createMaterialTopTabNavigator();
  
  return(
    <SignupNavigator.Navigator
      initialRouteName='LoginMenu'
      screenOptions={{
        swipeEnabled: false

      }}
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
        name='SignUp' 
        component={SignUp}
      />  

    </SignupNavigator.Navigator>
  );
}

export default SignupNavigator;