import React, { FC } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Header, Text, Icon } from 'react-native-elements';

const StackScreen:FC = ({navigation}:any) => {
  return(
    <View>
      <Header 
        backgroundColor='white'
        containerStyle={styles.headerContainer}
        centerComponent={
          //Copperplate-Bold
          //Palatino
          <Text h4 style={{fontFamily: 'Copperplate-Bold'}}>Stack Name</Text>
        }
        leftComponent={
          <Pressable
            onPress={() => navigation.goBack()}
          >
            <Icon name='close' 
              type='material-community' 
              color='black' 
              size={35} 
              tvParallaxProperties={false}
            />
          </Pressable>
        }
      />
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

export default StackScreen;