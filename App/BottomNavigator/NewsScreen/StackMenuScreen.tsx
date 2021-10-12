import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Pressable, Image } from 'react-native';

import ForYouScreen from './StackMenuScreen/ForYouScreen';
import SubscriptionMenuScreen from './StackMenuScreen/SubscriptionMenuScreen';

const StackMenuScreen:FC = ({navigation}: any) => {
  const StackMenuNavigator = createMaterialTopTabNavigator();

  return(
    <StackMenuNavigator.Navigator
      initialRouteName='ForYouScreen'
    >
      <StackMenuNavigator.Screen
        name='ForYouScreen'
        component={ForYouScreen}
        options={{ title: 'Reccomended'}}
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