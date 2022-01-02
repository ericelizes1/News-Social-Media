import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Animated } from 'react-native';

import { AuthProvider } from './App/context/AuthContext';

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
import SignupNavigator from './App/SignupNavigator';

const App:FC = () => {
  const MainNavigator : any =  createStackNavigator();
  const isLoggedIn:boolean = false;
  
  const SlideFromTop = ({ current, next, inverted, layouts: { screen } }) => {
    const progress = Animated.add(
        current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        }),
        next
            ? next.progress.interpolate({
                inputRange: [1, 2],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            })
            : 0
    );
    
    return {
        cardStyle: {
            transform: [
                {
                    translateY: Animated.multiply(
                        progress.interpolate({
                            inputRange: [0, 1, 2],
                            outputRange: [
                              -screen.height,
                              0,
                              -screen.height,
                            ],
                            extrapolate: 'clamp',
                        }),
                        inverted
                    ),
                },
            ],
        },
    };
  };
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor='white'
        />
        <MainNavigator.Navigator
          initialRouteName= {isLoggedIn ? 'BottomNavigator' : 'SignupNavigator'}
        >
          <MainNavigator.Screen
            name='BottomNavigator'
            component={BottomNavigator}
            options={{
              headerShown: false,
              gestureEnabled: false
            }}
          />        
          <MainNavigator.Screen
            name='SignupNavigator'
            component={SignupNavigator}
            options={{
              headerShown: false,
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
            options={{
              headerShown: false,
              cardStyleInterpolator: SlideFromTop,
              }
            }
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
    </AuthProvider>
  );
}

export default App;