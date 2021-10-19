import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './App/ProfileScreen';
import BottomNavigator from './App/BottomNavigator';
import FollowersScreen from './App/FollowersScreen';
import FollowingScreen from './App/FollowingScreen';
import ShareScreen from './App/ShareScreen';
import WritePostScreen from './App/WritePostScreen';
import EditProfileScreen from './App/EditProfileScreen';
import PostScreen from './App/PostScreen';
import ArticleScreen from './App/ArticleScreen';
import StoryScreen from './App/StoryScreen';
import Login from './App/Login';

const App:FC = () => {
  const MainNavigator : any =  createStackNavigator();
  
  return(
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="white"/>
      <MainNavigator.Navigator
        initialRouteName='BottomNavigator'
      >
        <MainNavigator.Screen
          name='BottomNavigator'
          component={BottomNavigator}
          options={{
            headerShown: false
          }}
        />
        <MainNavigator.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <MainNavigator.Screen
          name='ProfileScreen'
          component={ProfileScreen}
        />
        <MainNavigator.Screen
          name='EditProfileScreen'
          component={EditProfileScreen}
        />
        <MainNavigator.Screen
          name='FollowingScreen'
          component={FollowingScreen}
        />      
        <MainNavigator.Screen
          name='FollowersScreen'
          component={FollowersScreen}
        />
        <MainNavigator.Screen
          name='StoryScreen'
          component={StoryScreen}
        />
        <MainNavigator.Screen
          name='ArticleScreen'
          component={ArticleScreen}
        />
        <MainNavigator.Screen
          name='PostScreen'
          component={PostScreen}
        />
        <MainNavigator.Screen
          name='WritePostScreen'
          component={WritePostScreen}
        />
        <MainNavigator.Screen
          name='ShareScreen'
          component={ShareScreen}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;