import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Pressable, View, Image, TouchableHighlight } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import { Caption, Title, Subheading, Headline, Text, Paragraph } from 'react-native-paper';

const PostCard:FC = () => {
  const navigation:any = useNavigation(); 

  return(
      <Pressable
        onPress={() => {navigation.navigate('PostScreen')}}
        style={styles.card}
      >
        <View style={{
          flexDirection: 'row', 
          justifyContent: 'flex-start', 
          alignItems: 'center'}}>
            <Avatar
              rounded
              size='medium'
              source={require('./img/img2.jpg')}
              containerStyle={styles.profilePic}
            />
          <View style={{
            flexDirection: 'column', 
            justifyContent: 'center'}}>
            <View style={{
              flexDirection: 'row', 
              justifyContent: 'flex-start', 
              alignItems: 'flex-start',
              marginBottom: -5
            }}>
              <Text style={{fontSize:15}}>Deven Desai</Text>
              <Caption style={{marginLeft: 5}}>• 2h ago</Caption>
            </View>
            <Caption>@devendesai1</Caption>
          </View>
        </View>
        <Pressable style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#dedede',
          flexDirection: 'row'
        }}>
          <Image 
            source={require('./img/img2.jpg')}
            style={styles.image}/>
          <Text style={{flex: 1, flexWrap: 'wrap', margin: 5}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
        </Pressable>
        <View style={{
          flexDirection: 'row',    
          justifyContent: 'flex-end',  
          alignItems: 'center'
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable>
              <Icon name='arrow-up' type="material-community" color='purple' />
            </Pressable>
            <Text>32</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
            <Pressable>
              <Icon name='pepper-hot' type="font-awesome-5" color='purple' />
            </Pressable>
            <Text>32</Text>
          </View>
        </View>
      </Pressable>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 5,
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
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  }
})
const containerStyle = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#ffffff",
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
}); 


export default PostCard;