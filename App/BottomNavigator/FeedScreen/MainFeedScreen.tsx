import React, { FC } from 'react';
import { ScrollView, StyleSheet, Pressable, View } from 'react-native';
import { Header, Text, Icon } from 'react-native-elements';

import PostCard from './MainFeedScreen/PostCard';


const MainFeedScreen:FC = ({navigation}:any) => {
  return(
    <View>
      <Header 
          backgroundColor='white'
          containerStyle={styles.headerContainer}
          centerComponent={
            <Text h4 style={{fontFamily: 'Palatino'}}>Feed</Text>
          }
          rightComponent={
            <Pressable
              onPress={() => navigation.navigate('StoryScreen')}>
              <Icon name='bell-outline' 
                type='material-community' 
                color='black' 
                size={28} 
                style={styles.storyIcon}
                tvParallaxProperties={false}
              />
            </Pressable>
          }
      />
      <ScrollView style={styles.container}>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <Text h4 style={{fontFamily: 'Palatino', alignSelf: 'center', margin: 25}}>Congrats! Your at the bottom</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 93,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  container: {
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  storyIcon: {
    marginTop: -2,
  }
})

export default MainFeedScreen;