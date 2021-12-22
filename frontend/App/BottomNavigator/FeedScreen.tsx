import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';

import MainFeedScreen from './FeedScreen/MainFeedScreen';
import StoryMenuScreen from './FeedScreen/StoryMenuScreen';
import ProfileScreen from '../ProfileScreen';
import PostScreen from '../PostScreen';
import FollowersScreen from '../FollowersScreen';
import FollowingScreen from '../FollowingScreen';

const FeedScreen:FC = ({navigation}:any) => {
  const FeedNavigator = createStackNavigator();

  return(
    <FeedNavigator.Navigator
      initialRouteName='MainFeedScreen'
    >
      <FeedNavigator.Screen
        name='MainFeedScreen'
        component={MainFeedScreen}
        options={{header: () => (null)}}
      />
      <FeedNavigator.Screen
        name='StoryMenuScreen'
        component={StoryMenuScreen}
      />
      <FeedNavigator.Screen
        name='ProfileScreen'
        component={ProfileScreen}
      />
      <FeedNavigator.Screen
        name='PostScreen'
        component={PostScreen}
      />
      <FeedNavigator.Screen
        name='FollowersScreen'
        component={FollowersScreen}
      />
      <FeedNavigator.Screen
        name='FollowingScreen'
        component={FollowingScreen}
      />      
    </FeedNavigator.Navigator>
  );
}

export default FeedScreen;