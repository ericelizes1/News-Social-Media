import React, { FC } from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import Header from '../../components/Header';

const MainActivityScreen:FC = ({navigation}:any) => {
  return(
    <SafeAreaView style={{height: '100%', width: '100%'}}> 
      <Header elevated={true}>
        <View style={styles.headerContainer}>
          <Text h4 style={{fontFamily: 'Palatino'}}>Activity</Text>
          <Pressable
            onPress={() => navigation.navigate('DMMenuScreen')}> 
            <Icon name='bell-outline' 
                  type='material-community' 
                  color='black' size={28}
                  tvParallaxProperties={false}/>
          </Pressable>
        </View>
      </Header>
      {/*BELOW */}
      <View style={{height: '100%', width: '100%', backgroundColor: 'red', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: 100, width: 100, backgroundColor: 'white', borderRadius: 75}}></View>
        <View style={{height: 125, width: 125, backgroundColor: 'white', borderRadius: 75}}></View>
        <View style={{height: 150, width: 150, backgroundColor: 'white', borderRadius: 75}}></View>
      </View>
      {/*ABOVE */}
    </SafeAreaView>
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