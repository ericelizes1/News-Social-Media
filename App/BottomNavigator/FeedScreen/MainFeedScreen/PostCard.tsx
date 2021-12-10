import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Pressable, View, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { Icon, Avatar, Text } from 'react-native-elements';
import { Caption, Title, Subheading, Headline, Paragraph } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';


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
              alignItems: 'center',
            }}>
              <Text style={{fontSize:15}}>Deven Desai</Text>
              <Caption style={{marginLeft: 5}}>• 2h ago</Caption>
            </View>
            <Caption>@devendesai1</Caption>
          </View>
        </View>
        <Pressable 
          style=  {({pressed}) => [{
            opacity: pressed ? 0.8 : 1,
            borderRadius: 6,
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 10,
            justifyContent: 'center',
            height: 150,
            backgroundColor: 'purple',
          }]}>
          <ImageBackground
            source={{uri: 'https://mediacloud.theweek.com/image/upload/f_auto,t_primary-image-desktop@2/v1635189619/rolling%20stone%20jan%206.jpg'}}
            style={{
              flexDirection: 'column', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              width: '100%'
            }}
            imageStyle={{borderRadius: 6,}}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
              style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                padding: 5,
                paddingBottom: 10,
                borderRadius: 6,
              }}
            >
              <Subheading style={{flexShrink: 1, color: 'white'}}>
                Kick insurrectionists out of Congress
              </Subheading>
              <Caption style={{color: 'white'}}>The Week</Caption>
            </LinearGradient>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']}
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 5,
                borderRadius: 6,
              }}
            >
              <Text style={{flexShrink: 1, fontStyle: 'italic', color: 'white'}}>
                The Constitution has a consequence for seditious lawmakers: no more federal office
              </Text>
            </LinearGradient>
          </ImageBackground>
        </Pressable>
        <Text>
          I just saw that new HBO doc about this and no one will ever be able to convince me MTG wasn’t in on it.
          {"\n"}{"\n"}
          The way she was at ease was spine chilling…Smiling like a preachers wife at the Sunday BBQ and laughing, as others - her colleagues, called their loved ones to say what could possibly be their last words.
          {"\n"}{"\n"}
          Not Marjorie and the other Reps. They didn’t even seem inconvenienced.
          {"\n"}{"\n"}
          You could just feel it - it wasn’t even mentioned in the documentary or focused on at all. I just happened to notice it in the background during one scene and it was so obvious I had to rewind and rewatch to believe what I was seeing.
          {"\n"}{"\n"}
          She’s a traitor.
        </Text>
        <View style={{
          flexDirection: 'row',    
          justifyContent: 'flex-end',  
          alignItems: 'center'
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable>
              <Icon name='arrow-up' 
                type="material-community" 
                color='purple' 
                tvParallaxProperties={false}
              />
            </Pressable>
            <Text>32</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
            <Pressable>
              <Icon 
                name='pepper-hot' 
                type="font-awesome-5" 
                color='purple'
                tvParallaxProperties={false}
              />
            </Pressable>
            <Text>32</Text>
          </View>
        </View>
      </Pressable>
  );
}
const styles = StyleSheet.create({
  profilePic: {
    margin: 10,
  },
  card:{
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    justifyContent: 'center',
    flexDirection: 'column'
  }
})

export default PostCard;