import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Pressable, View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements';

const PostCard:FC = () => {
  const navigation = useNavigation(); 
  return(
      <TouchableOpacity onPress={() => {navigation.navigate('PostScreen')}}>
        <Card containerStyle={styles.card}> 
        <View style={containerStyle.rowContainer}>
          <Avatar
              rounded
              size='medium'
              source={require('./img/img2.jpg')}
              containerStyle={styles.profilePic}
            />
            <Text>Eric the terrorist
              Time
              Date
            </Text>
            </View>
          <Card.Image source={require('./img/img2.jpg')}
            style={styles.image}>
          </Card.Image>
          <Card.Divider/>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <View style={containerStyle.rowContainer}>
            <Button
            type='clear'
            icon={<Icon name='arrow-up' type="material-community" color='purple' />}
            buttonStyle={{borderRadius: 0, marginLeft: 290, marginRight: 0, marginBottom: 0}}/>
            <Button
            type='clear'
            icon={<Icon name='rocket' type="material-community" color='purple' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}} />
            </View>
        </Card>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  image: {
    marginRight: 200,
    marginBottom: 10, 
    alignItems: 'center',
  },
  post: {
    margin: 10,
    height: 200,
    alignItems: 'center',
  },
  profilePic: {
    margin: 10,
  },
  card:{
    paddingLeft: 0,
    margin: 0,
    marginBottom: 10,
  }
})
const containerStyle = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#ffffff",
  },
  rowContainer: {
    flexDirection: 'row'
  }
}); 


export default PostCard;