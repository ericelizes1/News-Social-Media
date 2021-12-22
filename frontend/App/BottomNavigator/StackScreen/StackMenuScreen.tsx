import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { Pressable, Image } from 'react-native';

import RecommendedScreen from './StackMenuScreen/RecommendedScreen';
import SubscriptionMenuScreen from './StackMenuScreen/SubscriptionMenuScreen';


const StackMenuScreen:FC = ({route}:any, {navigation}: any) => {
  const StackMenuNavigator = createMaterialTopTabNavigator();

  return(
    <StackMenuNavigator.Navigator
      initialRouteName='ForYouScreen'
      tabBar={() => null}>
      <StackMenuNavigator.Screen
        name='RecommendedScreen'
        component={RecommendedScreen}
        options={{ title: 'Recommended'}}
      />
      <StackMenuNavigator.Screen
        name='SubscriptionMenuScreen'
        component={SubscriptionMenuScreen}
        options={{ 
          title: 'Subscriptions'}}
      />
    </StackMenuNavigator.Navigator>
  );
}

export default StackMenuScreen;