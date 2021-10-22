import React, { FC } from 'react';
import { ScrollView, StyleSheet, Pressable, View } from 'react-native';
import { Header, Icon, Text } from 'react-native-elements';

const StoryScreen:FC = ({navigation}:any) => {
  return(
    <View>
      <Header
      backgroundColor='white'
          containerStyle={styles.headerContainer}
          centerComponent={
            <Text h4 style={{fontFamily: 'Palatino'}}>Stories</Text>
          }
          leftComponent={
            <Pressable
              onPress={() => navigation.navigate('MainFeedScreen')}>
              <Icon name='format-list-text' type='material-community' color='black' size={28} style={styles.storyIcon} />
            </Pressable>
          }
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 93,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  storyIcon: {
    marginTop: -2,
  }
})

export default StoryScreen;