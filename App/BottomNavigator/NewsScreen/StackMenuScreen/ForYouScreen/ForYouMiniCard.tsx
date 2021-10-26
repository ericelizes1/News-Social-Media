import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Pressable, ImageBackground, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';


const ForYouMiniCard:FC = () => {
  const navigation:any = useNavigation(); 

  return(
    <Pressable 
      style=  {({pressed}) => [{
        opacity: pressed ? 0.8 : 1},
        styles.container
      ]}
      onPress={() => {navigation.navigate('StackScreen')}}>
      <ImageBackground
        source={{uri: 'https://e3.365dm.com/21/10/2048x1152/skynews-donald-trump-us-iowa_5554035.jpg'}}
        style={styles.image}
        imageStyle={{borderRadius: 6,}}>
        <View style={{width: '100%'}}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.60)', 'rgba(0, 0, 0, 0.50)']}
            style={{
              paddingLeft: 10,
              paddingBottom: 0,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{
              color: 'white', 
              width: '80%'}} h2>For You</Text>
            <View style={{
              justifyContent: 'flex-start', 
              alignItems: 'flex-end',
              width: '20%'}}>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0)']}
            style={{
              paddingRight: 10,
              paddingLeft: 10,
              paddingBottom: 30,
              width: '100%',
            }}>
            <Caption style={{color:'white'}}>1hr ago</Caption>
          </LinearGradient>
        </View>
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
          <Caption
            style={{
              color: 'white',
              fontSize: 15,
            }}>@stack</Caption>
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
    height: 300,
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default ForYouMiniCard;