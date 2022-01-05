import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  SafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});