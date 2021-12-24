import React, { FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import Header from '../../components/Header';

const MainActivityScreen:FC = ({navigation}:any) => {

  return(
    <Header elevated={true}>
      <View style={styles.headerContainer}>
        <Text h4 style={{fontFamily: 'Palatino'}}>Activity</Text>
        <Pressable
          onPress={() => navigation.navigate('DMMenuScreen')}> 
          <Icon name='bell-outline' type='material-community' color='black' size={28}/>
        </Pressable>
      </View>
    </Header>
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
})

export default MainActivityScreen;