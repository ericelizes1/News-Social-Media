import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import StackMiniCard from './StackMiniCard';

const ForYouScreen:FC = () => {
  return(
    <ScrollView style={styles.container}>
      <StackMiniCard/>
      <StackMiniCard/>
      <StackMiniCard/>
      <StackMiniCard/>
      <StackMiniCard/>
      <StackMiniCard/>
      <StackMiniCard/>
      <StackMiniCard/>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'white',
  },
})
export default ForYouScreen;