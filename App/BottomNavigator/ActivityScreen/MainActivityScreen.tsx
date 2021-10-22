import React, { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Header, Text, Icon } from 'react-native-elements';

const MainActivityScreen:FC = ({navigation}:any) => {

  return(
    <Header 
      backgroundColor='white'
      containerStyle={styles.headerContainer}
      centerComponent={
        <Text h4 style={{fontFamily: 'Palatino'}}>Activity</Text>
      }
      rightComponent={
        <Pressable
          onPress={() => navigation.navigate('DMMenuScreen')}> 
          <Icon name='bell-outline' type='material-community' color='black' size={28} style={styles.dmIcon}/>
        </Pressable>
      }
    />
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 93,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  dmIcon:{
    margin: -2,
  }
})

export default MainActivityScreen;