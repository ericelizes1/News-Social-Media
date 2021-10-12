import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Pressable, Image, View } from 'react-native';
import { Text } from 'react-native-elements';

const StackMiniCard:FC = () => {
  const navigation = useNavigation(); 

  return(
    <Pressable 
      style=  {({pressed}) => [{borderWidth: pressed ? 3 : 0},
                styles.container
      ]}
      onPress={() => {navigation.navigate('StackScreen')}}>
      <Image 
        source={require('./img/img2.jpg')}
        style={styles.image}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 200,
    alignItems: 'center',
    borderColor: 'white',
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',

  }
})

export default StackMiniCard;