import React, { FC } from 'react';
import { ScrollView, StyleSheet, Pressable, View } from 'react-native';
import { Header, Text, Icon } from 'react-native-elements';

import PostCard from './MainFeedScreen/PostCard';
import StackMiniCard from '../NewsScreen/StackMenuScreen/ForYouScreen/StackMiniCard';

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
        <StackMiniCard 
            size={3}
            title='The Washington Football Team'
            username='devendesai1'
            imgUrl='https://s.abcnews.com/images/Politics/washington-01-as-gty-200723_1595528169605_hpMain_16x9_992.jpg'
            topics={['Sports', 'NFL']}
            subscribed={false}
        />
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