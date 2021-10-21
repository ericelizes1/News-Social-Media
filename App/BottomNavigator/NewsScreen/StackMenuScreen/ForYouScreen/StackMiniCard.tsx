import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Pressable, Image, View } from 'react-native';
import { Text } from 'react-native-elements';

export interface PropType {
  size: number,
}

const StackMiniCard:FC<PropType> = (props: PropType) => {
  const navigation:any = useNavigation(); 

  var corr = {
    1 : 400,
    2 : 300,
    3 : 200,
  };
  var cardHeight = corr[props.size];

  return(
    <Pressable 
      style=  {({pressed}) => [{
        borderWidth: pressed ? 3 : 0,
        height: cardHeight},
        styles.container
      ]}
      onPress={() => {navigation.navigate('StackScreen')}}>
      <Image 
        source={require('../img/img2.jpg')}
        style={styles.image}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
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