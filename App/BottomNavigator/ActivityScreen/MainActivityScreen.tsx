import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DMMenuScreen from './MainActivityScreen/DMMenuScreen';
import NotificationsScreen from './MainActivityScreen/NotificationsScreen';

const MainActivityScreen:FC = () => {
  const MainActivityNavigator = createMaterialTopTabNavigator();

  return(
    <MainActivityNavigator.Navigator
      initialRouteName='NotificationsScreen'
    >
      <MainActivityNavigator.Screen
        name='NotificationsScreen'
        component={NotificationsScreen}
        options={{ title: 'Notifications'}}
      />
      <MainActivityNavigator.Screen
        name='DMMenuScreen'
        component={DMMenuScreen}
        options={{ title: 'Messages'}}
      />      
    </MainActivityNavigator.Navigator>
  );
}

export default MainActivityScreen;