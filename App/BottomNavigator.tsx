import React, { FC } from 'react';
import { Pressable } from 'react-native';
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
      screenOptions={{
        keyboardHidesTabBar: true,
      }}
      barStyle={{backgroundColor: 'white', borderTopWidth: 1, borderColor: '#dedede', height: '9.5%' }}
      shifting={false}
    >
      <TabNavigator.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({focused}:any) =>
            <Icon name={focused ? 'home' :'home-outline'} 
              type='material-community' 
              color={'black'} 
              size={25}/>
        }}
      />
      <TabNavigator.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({focused}:any) => (
              <Icon name={focused ? 'compass' :'compass-outline'} 
                type='material-community' 
                color={'black'} 
                size={25}/>),        
        }}
      />
      <TabNavigator.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({focused}:any) =>
            <Icon name={focused ? 'newspaper-variant' : 'newspaper-variant-outline'} 
              type='material-community' 
              color={'black'} 
              size={25}/>
        }}
      />
      <TabNavigator.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          tabBarLabel: false,
          tabBarBadge: true,
          tabBarIcon: ({focused}:any) => 
            <Icon name={focused ? 'bell' : 'bell-outline'} 
              type='material-community' 
              color={'black'} 
              size={25}/>
        }}
      />
      <TabNavigator.Screen
        name="MainProfileScreen"
        component={MainProfileScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({focused}:any) =>
            <Icon name={focused ? 'account' : 'account-outline'} 
              type='material-community' 
              color={'black'} 
              size={25}/>
        }}
      />
    </TabNavigator.Navigator>
  );
}

export default BottomNavigator;