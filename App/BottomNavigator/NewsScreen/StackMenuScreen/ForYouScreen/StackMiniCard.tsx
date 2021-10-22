import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Pressable, ImageBackground, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export interface PropType {
  size: number,
  title: string,
  username: string,
  imgUrl: string,
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
      <ImageBackground
        source={{uri: props.imgUrl}}
        style={styles.image}
        imageStyle={{borderRadius: 6,}}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
          style={{
            paddingRight: 10,
            paddingLeft: 10,
            paddingBottom: 20,
            borderRadius: 6,
            width: '100%',
          }}>
          <Text style={{color: 'white'}} h2>{props.title}</Text>
        </LinearGradient>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingBottom: 5,
            paddingRight: 10,
            paddingTop: 10,
            borderRadius: 6,
          }}
        >
          <View>
            <Caption
              style={{
                color: 'white',
                fontSize: 15,
                fontFamily: 'Helvetica',
              }}>@{props.username}</Caption>
          </View>
        </LinearGradient>
      </ImageBackground>
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
    justifyContent: 'space-between',
  },
})

export default StackMiniCard;