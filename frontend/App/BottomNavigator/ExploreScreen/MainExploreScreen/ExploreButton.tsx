import React, { FC } from 'react';
import { View, Pressable, StyleSheet, Button } from 'react-native'
import { Text } from 'react-native-elements'

interface ButtonProps {
    title: string,
    topic: number,
    dynamicTopic: any,
    setDynamicTopic: any,
    scrollToIndex: any
  }
  
  const ExploreButton:FC<ButtonProps> = (props:ButtonProps, {navigation}:any) => {
    const isSelected = props.dynamicTopic == props.topic;

    return(
        <Pressable 
            style={styles.exploreButtonContainer}
            hitSlop={5}
            onPress={() => {
              props.setDynamicTopic(props.topic);
              props.scrollToIndex();
            }}
        >   
            <View style={styles.textContainer}>
              <Text
                style={[styles.text, {fontWeight: isSelected ? 'bold' : 'normal',color: isSelected ? 'black' : '#696969'}]}
              >{props.title}</Text>
            </View>
            <View style={[styles.indicator, {backgroundColor: isSelected ? 'purple' : 'white'}]}/>
        </Pressable>
    )
  }
  
  const styles = StyleSheet.create({
    exploreButtonContainer: {
      backgroundColor: '#ffffff',
      height: 45,
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    textContainer: {
      height: 38, 
      justifyContent: 'center'
    },
    text: {
      fontSize: 16,
    },
    indicator: {
      width: '100%',
      height: 2,
      borderTopRightRadius: 2,
      borderTopLeftRadius: 2,
    }
  })
export default ExploreButton;