import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

interface HeaderProps {
  elevated: boolean;
  children: any;
}

const Header:FC<HeaderProps> = (props:HeaderProps) => {
  return (
    <View style={[styles.headerContainer, {elevation: props.elevated ? 5 : 0}]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 93,
    width: '100%',
    borderBottomColor: '#dedede',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
})

export default Header;