import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainActivityScreen from './ActivityScreen/MainActivityScreen';
import CreateMessageScreen from './ActivityScreen/CreateMessageScreen';
import ProfileScreen from '../ProfileScreen';
import PostScreen from '../PostScreen';
import FollowingScreen from '../FollowingScreen';
import FollowersScreen from '../FollowingScreen';

const ActivityScreen:FC = () => {
  const ActivityNavigator : any =  createStackNavigator();
  
  return(
    <ActivityNavigator.Navigator
      initialRouteName='MainActivityScreen'
    >
      <ActivityNavigator.Screen
        name='MainActivityScreen'
        component={MainActivityScreen}
        options={{ title: 'Activity' }}
      />
      <ActivityNavigator.Screen
        name='CreateMessageScreen'
        component={CreateMessageScreen}
      />
      <ActivityNavigator.Screen
        name='ProfileScreen'
        component={ProfileScreen}
      />
      <ActivityNavigator.Screen
        name='PostScreen'
        component={PostScreen}
      />
      <ActivityNavigator.Screen
        name='FollowersScreen'
        component={FollowersScreen}
      />
      <ActivityNavigator.Screen
        name='FollowingScreen'
        component={FollowingScreen}
      />      
    </ActivityNavigator.Navigator>
  );
}

export default ActivityScreen;