import React, { FC, useState } from 'react';
import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import { Header, Icon, Text } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

const SubscriptionMenuScreen:FC = ({navigation}:any) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return(
    <View>
      <Header 
        backgroundColor='white'
        containerStyle={styles.headerContainer}
        leftComponent={
          <Pressable
            onPress={() => navigation.navigate('ForYouScreen')}>
            <Icon name='arrow-left' 
              type='material-community' 
              color='black' 
              size={35}
              tvParallaxProperties={false}
            />
          </Pressable>
        }
        centerComponent={<Text h4 style={{fontFamily: 'Copperplate-Bold'}}>Subscriptions</Text>}
      />
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
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  container: {
    backgroundColor: 'white',
  },
})
export default SubscriptionMenuScreen;