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
          leftComponent={
            <Pressable
              onPress={() => navigation.navigate('StoryScreen')}>
              <Icon name='bell-outline' type='material-community' color='black' size={28} style={styles.storyIcon} />
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