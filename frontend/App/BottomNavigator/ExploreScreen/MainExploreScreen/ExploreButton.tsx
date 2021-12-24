import React, { FC } from 'react';
import { View, Pressable, StyleSheet, Button } from 'react-native'
import { Text } from 'react-native-elements'

interface ButtonProps {
    title: string,
    topic: number,
    dynamicTopic: any,
    setDynamicTopic: any,
  }
  
  const ExploreButton:FC<ButtonProps> = (props:ButtonProps, {navigation}:any) => {
  
    return(
        <Pressable 
            style={[styles.exploreButtonContainer,]}
            onPress={() => {
              props.setDynamicTopic(props.topic);
            }}
            hitSlop={5}
        >   
            <View
              style={{height: 38, justifyContent: 'center'}}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: props.dynamicTopic == props.topic ? 'bold' : 'normal',
                  color: props.dynamicTopic == props.topic ? 'black' : '#696969'
                }}
              >{props.title}</Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 2,
                borderTopRightRadius: 2,
                borderTopLeftRadius: 2,
                backgroundColor: props.dynamicTopic == props.topic ? 'purple' : 'white',
              }}
            >
            </View>
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
    }
  })
export default ExploreButton;