import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ForYouScreen from './StackMenuScreen/ForYouScreen';
import SubscriptionMenuScreen from './StackMenuScreen/SubscriptionMenuScreen';

const StackMenuScreen:FC = () => {
  const StackMenuNavigator = createMaterialTopTabNavigator();

  return(
    <StackMenuNavigator.Navigator
      initialRouteName='ForYouScreen'
    >
      <StackMenuNavigator.Screen
        name='ForYouScreen'
        component={ForYouScreen}
        options={{ title: 'For You'}}
      />
      <StackMenuNavigator.Screen
        name='SubscriptionMenuScreen'
        component={SubscriptionMenuScreen}
        options={{ title: 'Subscriptions'}}
      />
    </StackMenuNavigator.Navigator>
  );
}

export default StackMenuScreen;