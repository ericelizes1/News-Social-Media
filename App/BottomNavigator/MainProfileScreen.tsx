import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';

import ProfileScreen from '../ProfileScreen';
import SettingsMenuScreen from './MainProfileScreen/SettingsMenu';
import PostScreen from '../PostScreen';
import FollowingScreen from '../FollowingScreen';
import FollowersScreen from '../FollowersScreen';


const MainProfileScreen:FC = () => {
const MainProfileNavigator = createStackNavigator();

  return(
    <MainProfileNavigator.Navigator
      initialRouteName='ProfileScreen'
    >
      <MainProfileNavigator.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{ title: 'Your Profile'}}
      />
      <MainProfileNavigator.Screen
        name='SettingsScreen'
        component={SettingsMenuScreen}
      />
      <MainProfileNavigator.Screen
        name='PostScreen'
        component={PostScreen}
      />
      <MainProfileNavigator.Screen
        name='FollowersScreen'
        component={FollowersScreen}
      />
      <MainProfileNavigator.Screen
        name='FollowingScreen'
        component={FollowingScreen}
      />      
    </MainProfileNavigator.Navigator>
  );
}

export default MainProfileScreen;