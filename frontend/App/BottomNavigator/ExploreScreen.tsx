import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainExploreScreen from './ExploreScreen/MainExploreScreen';
import ProfileScreen from '../ProfileScreen';
import PostScreen from '../PostScreen';
import FollowersScreen from '../FollowersScreen';
import FollowingScreen from '../FollowingScreen';

const ExploreScreen:FC = () => {
  const ExploreNavigator = createStackNavigator();

  return(
    <ExploreNavigator.Navigator
      initialRouteName='MainExploreScreen'
    >
      <ExploreNavigator.Screen
        name='MainExploreScreen'
        component={MainExploreScreen}
        options={{ 
          title: 'Explore',
          header: () => (null)}}
      />
      <ExploreNavigator.Screen
        name='ProfileScreen'
        component={ProfileScreen}
      />
      <ExploreNavigator.Screen
        name='PostScreen'
        component={PostScreen}
      />
      <ExploreNavigator.Screen
        name='FollowersScreen'
        component={FollowersScreen}
      />
      <ExploreNavigator.Screen
        name='FollowingScreen'
        component={FollowingScreen}
      />      
    </ExploreNavigator.Navigator>
  );
}

export default ExploreScreen;