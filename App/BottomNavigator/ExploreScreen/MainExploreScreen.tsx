import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Header } from 'react-native-elements';

const MainExploreScreen:FC = ({navigation}:any) => {
  return(
    <View>
      <Header 
        backgroundColor='white'
        containerStyle={styles.headerContainer}
        centerComponent={
          <Text h4>Explore</Text>
        }

      />
      <Text>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
})
export default MainExploreScreen;