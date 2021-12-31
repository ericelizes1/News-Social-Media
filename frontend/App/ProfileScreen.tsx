import React, { FC, useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Pressable, ImageBackground, useWindowDimensions } from 'react-native';
import { Avatar, Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';
import axios from 'axios';
import config from '../config';

import Header from './components/Header';

const ProfileScreen:FC = () => {
  const [userData, setUserData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const window = useWindowDimensions();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${config.SERVER_URL}/users/1`);
        setUserData(response.data.data.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUserData();
    // setUserData({
    //   user_id: 12345,
    //   first_name: 'Tom',
    //   last_name: 'Holland',
    //   username: 'spiderman',
    //   nickname: 'Peter Parker',
    //   num_followers: 587,
    //   num_following: 1024,
    //   num_stacks_created: 11,
    //   profile_img_url: 'https://cdn.vox-cdn.com/thumbor/SbX1VbxJhxijxD1tzRTJ8uq38P4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19101461/spider_man_far_from_home_peter_parker_1562394390.jpg',
    //   background_img_url: 'https://wallpapercave.com/wp/wp7806389.jpg'
    // })
  }, [])

  if (!userData) {
    //replace with loading animation
    return (
      <Text>Loading</Text>
    )
  }
  
  return(
    <SafeAreaView style={styles.container}>
      <Header elevated={false}>
        <Text style={styles.headerText}>{userData.nickname}</Text>
      </Header>
      <Pressable style={styles.backgroundImageContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={userData.background_img_url ? {uri: userData.background_img_url} : {}}
        >
          <View style={{borderTopLeftRadius: 6, borderTopRightRadius: 6, height: 6, backgroundColor: 'white'}}/>
        </ImageBackground>
      </Pressable>
      <View style={styles.infoContainer}> 
        <View style={styles.infoContainerTop}>
          <View style={styles.basicInfoContainer}>
            <Avatar
              source={userData.profile_img_url ? { uri: userData.profile_img_url } : {}}
              containerStyle={styles.profilePicContainer}
              avatarStyle={styles.profilePic}
            />
          </View>
          <View style={[styles.followContainer, {justifyContent: 'space-around', width: window.width - 170}]}>
            <View style={styles.followColumn}>
              <Text style={styles.followColumnNumber}>{userData.num_followers}</Text>
              <Caption style={styles.followColumnText}>{'Followers'}</Caption>    
            </View>
            <View style={styles.followColumn}>
              <Text style={styles.followColumnNumber}>{userData.num_following}</Text>
              <Caption style={styles.followColumnText}>{'Following'}</Caption>            
            </View>
          </View>
        </View>
        <View style={styles.infoContainerMiddle}>
          <View style={styles.nameContainer}>
            <Text style={styles.nickname}>{userData.nickname}</Text> 
            <Caption style={styles.username}>@{userData.username}</Caption>
          </View>
          <View style={[styles.followContainer, {justifyContent: 'center', width: window.width - 170}]}>
            <Pressable
              onPress={() => setIsFollowing(!isFollowing)}
              style={styles.followButton}
            >
              <View style={[styles.innerFollowButton, {backgroundColor: isFollowing ? 'purple' : 'rgba(255,255,255,0.5)'}]}>
                <Text style={styles.followButtonText}>{isFollowing ? 'Following' : 'Follow'}</Text>
              </View>
            </Pressable>
          </View>
        </View>           
      </View>
      <View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    color: 'black',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  backgroundImageContainer: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 6, 
    borderTopRightRadius: 6,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 6, 
    borderTopRightRadius: 6,
  },
  infoContainer: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infoContainerTop: {
    height: 75,
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
  },
  basicInfoContainer: {
    width: 170,  
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    top: -81
  },
  nameContainer: {
    width: 170,
    paddingLeft: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  nickname: {
    fontWeight: 'bold', 
    fontSize: 23, 
    marginBottom: -8
  },
  username: {
    fontSize: 15,
    color: '#696969'
  },
  profilePicContainer: {
    height: 150,
    width: 150,
    borderRadius: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    borderColor: 'white',
    borderWidth: 3,
  },
  profilePic: {
    height: '100%',
    width: '100%',
    borderRadius: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  followContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 6,
  },
  followColumn: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 15,
  },
  followColumnNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  followColumnText: {
    fontSize: 16,
    color: '#696969'
  },
  infoContainerMiddle: {
    flexDirection: 'row',
    width: '100%',
  },
  followButton: {
    height: 35,
    width: 115,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 10, 
    backgroundColor: 'purple'
  },
  innerFollowButton: {
    height: 30,
    width: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  followButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default ProfileScreen;