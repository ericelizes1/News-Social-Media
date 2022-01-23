import React, { FC } from 'react';
import { ScrollView, StyleSheet, Pressable, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import Header from '../../components/Header';
import PostCard from './MainFeedScreen/PostCard';

const MainFeedScreen:FC = ({navigation}:any) => {
  return(
    <View>
      <Header elevated={true}>
        <View style={styles.headerContainer}>
          <Text h4 style={{fontFamily: 'Palatino', color: 'purple'}}>Feed</Text>
          <Pressable
            onPress={() => navigation.navigate('StoryScreen')}> 
            <Icon name='bell-outline' type='material-community' color='black' size={28} tvParallaxProperties={false}/>
          </Pressable>
        </View>
      </Header>
      <ScrollView style={styles.container}>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <Text h4 style={{fontFamily: 'Palatino', alignSelf: 'center', margin: 25}}>Congrats! Your up to date</Text>
      </ScrollView>
      <Pressable
        style={{
          position: 'absolute',
          bottom: 93 + 20,
          right: 20,
          backgroundColor: 'purple',
          height: 70,
          width: 70,
          borderRadius: 50,
          justifyContent: 'center',
          elevation: 2,
        }}
      >
        <Icon
          name='plus' 
          type='material-community' 
          color='white' 
          size={30} 
          tvParallaxProperties={false}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  storyIcon: {

  }
})

export default MainFeedScreen;