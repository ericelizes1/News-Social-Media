import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { Avatar, Text, Icon } from 'react-native-elements';

import StackFocusScreen from './StackScreen/StackFocusScreen';
import ProfileScreen from '../ProfileScreen';
import PostScreen from '../PostScreen';
import FollowersScreen from '../FollowersScreen';
import FollowingScreen from '../FollowingScreen';
import StackMenuScreen from './StackScreen/StackMenuScreen';


const StackScreen:FC = ({navigation}: any) => {
  const NewsNavigator = createStackNavigator();

  return(
    <NewsNavigator.Navigator
      initialRouteName='StackMenuScreen'
    >
      <NewsNavigator.Screen
        name='StackMenuScreen'
        component={StackMenuScreen}
        options={{header: () => (null)}}
      />
      <NewsNavigator.Screen
        name='StackFocusScreen'
        component={StackFocusScreen}
        options={{header: () => (null)}}
      />
      <NewsNavigator.Screen
        name='ProfileScreen'
        component={ProfileScreen}
      />
      <NewsNavigator.Screen
        name='PostScreen'
        component={PostScreen}
      />
      <NewsNavigator.Screen
        name='FollowersScreen'
        component={FollowersScreen}
      />
      <NewsNavigator.Screen
        name='FollowingScreen'
        component={FollowingScreen}
      />      
    </NewsNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  profilePic: {
    margin: 10,
  },
})
export default StackScreen;