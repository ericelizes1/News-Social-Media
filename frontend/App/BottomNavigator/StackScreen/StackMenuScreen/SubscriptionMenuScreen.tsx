import React, { FC, useState } from 'react';
import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

import Header from '../../../components/Header';

const SubscriptionMenuScreen:FC = ({navigation}:any) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return(
    <View>
      <Header elevated={false}>
        <View style={styles.headerContainer}>
          <Pressable
            onPress={() => navigation.navigate('RecommendedScreen')}>
            <Icon name='arrow-left' 
              type='material-community' 
              color='black' 
              size={35}
              tvParallaxProperties={false}
            />
          </Pressable>
          <Text h4 style={{fontFamily: 'Palatino'}}>Subscriptions</Text>
        </View>
      </Header>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        autoCompleteType='off'
      />
      <ScrollView style={styles.container}>

      </ScrollView>
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
    backgroundColor: 'white',
  },
})
export default SubscriptionMenuScreen;