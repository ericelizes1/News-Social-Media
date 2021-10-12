import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, Pressable, Image, StyleSheet } from 'react-native';

import StackMenuScreen from './NewsScreen/StackMenuScreen';
import StackScreen from './NewsScreen/StackScreen';
import ProfileScreen from '../ProfileScreen';
import PostScreen from '../PostScreen';
import FollowersScreen from '../FollowersScreen';
import FollowingScreen from '../FollowingScreen';

const NewsScreen:FC = ({navigation}: any) => {
  const NewsNavigator = createStackNavigator();

  return(
    <NewsNavigator.Navigator
      initialRouteName='StackMenuScreen'
    >
      <NewsNavigator.Screen
        name='StackMenuScreen'
        component={StackMenuScreen}
        options={{ title: 'Stacks'}}
      />
      <NewsNavigator.Screen
        name='StackScreen'
        component={StackScreen}
        options={{
          title: 'Deven\'s Stack',
          headerStyle: {height: Platform.OS === 'ios' ? 75 : 100},
          headerRight: () => (
            <Pressable
              onPress={() => {navigation.navigate('ProfileScreen')}}>
              <Image 
                  source={require('./NewsScreen/StackMenuScreen/img/img2.jpg')}
                  style={styles.profilePic}/>
            </Pressable>
          )
        }}
      />
      <NewsNavigator.Screen
        name='ProfileScreen'
        component={ProfileScreen}
      />
      <NewsNavigator.Screen
        name='PostScreen'
        component={PostScreen}
      />
      <NewsNavigator.Screen
        name='FollowersScreen'
        component={FollowersScreen}
      />
      <NewsNavigator.Screen
        name='FollowingScreen'
        component={FollowingScreen}
      />      
    </NewsNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  profilePic: {
    width: 44,
    height: 44,
    borderRadius: 25,
    marginRight: Platform.OS === 'ios' ? 5 : 20,
    marginBottom: 10,
    marginTop: 10,
  },
})
export default NewsScreen;