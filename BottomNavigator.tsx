import React, { FC } from 'react';
import { Icon, Text } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import FeedScreen from './BottomNavigator/FeedScreen';
import ExploreScreen from './BottomNavigator/ExploreScreen';
import NewsScreen from './BottomNavigator/NewsScreen';
import ActivityScreen from './BottomNavigator/ActivityScreen';
import MainProfileScreen from './BottomNavigator/MainProfileScreen';

const BottomNavigator:FC = () => {
  const TabNavigator : any = createMaterialBottomTabNavigator();

  return(
    <TabNavigator.Navigator
      initialRouteName='FeedScreen'
      options={{
        keyboardHidesTabBar: true,
      }}
      barStyle={{backgroundColor: 'white'}}
    >
      <TabNavigator.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}:any) =>
            <Icon name='home' type='material-community' color={'purple'} size={25}/>
        }}
      />
      <TabNavigator.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}:any) =>
            <Icon name='compass' type='material-community' color={'purple'} size={25}/>
        }}
      />
      <TabNavigator.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          tabBarLabel: 'Stacks',
          tabBarIcon: ({color}:any) =>
            <Icon name='newspaper-variant' type='material-community' color={'purple'} size={25}/>
        }}
      />
      <TabNavigator.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({color}:any) => 
            <Icon name='bell' type='material-community' color={'purple'} size={25}/>
        }}
      />
      <TabNavigator.Screen
        name="MainProfileScreen"
        component={MainProfileScreen}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({color}:any) =>
            <Icon name='account' type='material-community' color={'purple'} size={25}/>
        }}
      />
    </TabNavigator.Navigator>
  );
}

export default BottomNavigator;