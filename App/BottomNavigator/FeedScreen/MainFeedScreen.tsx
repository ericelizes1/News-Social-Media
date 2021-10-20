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
            <Text h4>Feed</Text>
          }
          rightComponent={
            <Pressable
              onPress={() => navigation.navigate('StoryMenuScreen')}>
              <Icon name='bell-outline' type='material-community' color='black' size={35}/>
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
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  container: {
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'white',
  },
})

export default MainFeedScreen;