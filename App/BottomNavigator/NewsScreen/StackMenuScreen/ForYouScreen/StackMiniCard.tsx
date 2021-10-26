import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Pressable, ImageBackground, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export interface PropType {
  size: number,
  title: string,
  username: string,
  imgUrl: string,
  topics: string[],
  subscribed: boolean,
}

const StackMiniCard:FC<PropType> = (props: PropType) => {
  const navigation:any = useNavigation(); 
  const [subscribed, setSubscribed] = useState(props.subscribed);

  const [titleFontSize, setTitleFontSize] = useState(35);
  var [isTitleFontSet, setIsTitleFontSet] = useState(false);

  const getTitleFontSize = ({x, y, width, height}, isTitleFontSet) => {
    if (!isTitleFontSet) {
      if (height > 100) setTitleFontSize(30)
      else if (height > 90) setTitleFontSize(35)
      else if (height > 20) setTitleFontSize(40)

      setIsTitleFontSet(true)
    }
  }
  
  var corr = {
    1 : 400,
    2 : 300,
    3 : 250,
  };
  var cardHeight = corr[props.size];

  var topicElements=[];
  for (let s of props.topics) {
    topicElements.push(  
      <View style={{
        backgroundColor: 'white',
        borderRadius: 10,
        paddingRight: 5,
        paddingLeft: 5,
        marginLeft: 7,
      }}>
        <Caption
          style={{
            color: 'black',
            fontSize: 15,
        }}>{s}</Caption>
      </View>)
  }

  return(
    <Pressable 
      style=  {({pressed}) => [{
        opacity: pressed ? 0.8 : 1,
        height: cardHeight},
        styles.container
      ]}
      onPress={() => {navigation.navigate('StackScreen')}}>
      <ImageBackground
        source={{uri: props.imgUrl}}
        style={styles.image}
        imageStyle={{borderRadius: 6,}}>
        <View style={{width: '100%'}}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.60)', 'rgba(0, 0, 0, 0)']}
            style={{
              paddingLeft: 10,
              paddingBottom: 30,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '80%'}}>
              <Text 
                onLayout={(event) => {
                  var {x, y, width, height} = event.nativeEvent.layout;
                  getTitleFontSize({x, y, width, height}, isTitleFontSet);
                }}
                style={{
                  color: 'white'}} 
                h2Style={{fontSize: titleFontSize}}
                h2>{props.title}</Text>
                <Caption style={{color:'white'}}>1hr ago</Caption>
            </View>
            <View style={{
              justifyContent: 'flex-start', 
              alignItems: 'flex-end',
              width: '20%'}}>
              <Pressable 
                style={{ 
                  padding: 20,
                }}
                onPress = {() => {setSubscribed(!subscribed)}}
                >
                <Icon 
                  name={subscribed ? 'bookmark' : 'bookmark-outline'} 
                  type='material-community' 
                  color= 'white'
                  size={35}                
                  tvParallaxProperties={false}
                />
              </Pressable>
            </View>
          </LinearGradient>
        </View>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 5,
            paddingRight: 10,
            paddingTop: 10,
            borderRadius: 6,
          }}
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 5,
          }}>
            {topicElements}
          </View>
            <Caption
              style={{
                color: 'white',
                fontSize: 15,
                paddingRight: 5,
                paddingLeft: 5,
              }}>@{props.username}</Caption>
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