import React, { FC } from 'react';
import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import { Header, Icon, SearchBar } from 'react-native-elements';

const SubscriptionMenuScreen:FC = ({navigation}:any) => {
  return(
    <View>
      <Header 
        backgroundColor='white'
        containerStyle={styles.headerContainer}
        leftComponent={
          <Pressable
          onPress={() => navigation.navigate('ForYouScreen')}>
            <Icon name='arrow-left' type='material-community' color='black' size={35}/>
          </Pressable>
        }
      />

      <ScrollView style={styles.container}>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
  },
  container: {
    backgroundColor: 'white',
  },
})
export default SubscriptionMenuScreen;