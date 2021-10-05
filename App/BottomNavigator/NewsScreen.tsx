import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StackMenuScreen from './NewsScreen/StackMenuScreen';
import StackScreen from './NewsScreen/StackScreen';
import ProfileScreen from '../ProfileScreen';
import PostScreen from '../PostScreen';
import FollowersScreen from '../FollowersScreen';
import FollowingScreen from '../FollowingScreen';

const NewsScreen:FC = () => {
  const NewsNavigator = createStackNavigator();

  return(
    <NewsNavigator.Navigator
      initialRouteName='StackMenuScreen'
    >
      <NewsNavigator.Screen
        name='StackMenuScreen'
        component={StackMenuScreen}
        options={{ title: 'Stacks'}}
      />
      <NewsNavigator.Screen
        name='StackScreen'
        component={StackScreen}
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

export default NewsScreen;