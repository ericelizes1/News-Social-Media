import React, { FC } from 'react';
import { Text } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

import PostCard from './MainFeedScreen/PostCard';


const MainFeedScreen:FC = () => {
  return(
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'white',
  },
})

export default MainFeedScreen;