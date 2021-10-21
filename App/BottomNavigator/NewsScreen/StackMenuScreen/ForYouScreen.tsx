import React, { FC } from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Text, Header, Icon, Badge } from 'react-native-elements';

import StackMiniCard from './ForYouScreen/StackMiniCard';

const ForYouScreen:FC = ({navigation}:any) => {
  return(
    <View>
      <Header 
        backgroundColor='white'
        containerStyle={styles.headerContainer}
        centerComponent={
          <Text h4>Your Stacks</Text>
        }
        rightComponent={
          <Pressable
            onPress={() => navigation.navigate('SubscriptionMenuScreen')}>
            <Icon name='bookmark-multiple-outline' type='material-community' color='black' size={35}/>
            <Badge
              status="error"
              containerStyle={{ position: 'absolute', top: 0, right: 2 }}
            />
          </Pressable>
        }
      />
      <ScrollView style={styles.container}>
      <StackMiniCard size={1}/>
        <StackMiniCard size={2}/>
        <StackMiniCard size={3}/>        
        <StackMiniCard size={3}/>
        <StackMiniCard size={2}/>
        <StackMiniCard size={2}/>
        <StackMiniCard size={2}/>
        
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
    padding:10,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'white',
  },
})
export default ForYouScreen;