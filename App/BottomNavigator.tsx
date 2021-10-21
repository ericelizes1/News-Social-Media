import React, { FC } from 'react';
import { View } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import FeedScreen from './BottomNavigator/FeedScreen';
import ExploreScreen from './BottomNavigator/ExploreScreen';
import NewsScreen from './BottomNavigator/NewsScreen';
import ActivityScreen from './BottomNavigator/ActivityScreen';
import MainProfileScreen from './BottomNavigator/MainProfileScreen';

const BottomNavigator:FC = () => {
  const TabNavigator = createBottomTabNavigator();

  return(
    <TabNavigator.Navigator
      initialRouteName='FeedScreen'
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white', 
          borderTopWidth: 1, 
          borderColor: '#dedede', }
      }}

    >
      <TabNavigator.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          tabBarIcon: ({focused}:any) =>
            <Icon name={focused ? 'home' :'home-outline'} 
              type='material-community' 
              color={'black'} 
              size={33}/>
        }}
      />
      <TabNavigator.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}:any) => (
              <Icon name={focused ? 'compass' :'compass-outline'} 
                type='material-community' 
                color={'black'} 
                size={33}/>),        
        }}
      />
      <TabNavigator.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          tabBarIcon: ({focused}:any) =>
            <View>
              <Icon name={focused ? 'newspaper-variant' : 'newspaper-variant-outline'} 
                type='material-community' 
                color={'black'} 
                size={33}/>
            </View>
        }}
      />
      <TabNavigator.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({focused}:any) => 
          <View>
            <Icon name={focused ? 'bell' : 'bell-outline'} 
              type='material-community' 
              color={'black'} 
              size={33}/>
            <Badge
              status="error"
              containerStyle={{ position: 'absolute', top: 0, right: 2 }}
            />
          </View>
        }}
      />
      <TabNavigator.Screen
        name="MainProfileScreen"
        component={MainProfileScreen}
        options={{
          tabBarIcon: ({focused}:any) =>
              <Icon name={focused ? 'account' : 'account-outline'} 
                type='material-community' 
                color={'black'} 
                size={33}/>
        }}
      />
    </TabNavigator.Navigator>
  );
}

export default BottomNavigator;