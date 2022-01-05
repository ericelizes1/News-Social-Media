import React, { FC, useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Input } from 'react-native-elements';

const EditProfileScreen:FC = () => {
  const [profileData, setProfileData] = useState({
    nickname: '',
    bio: '',
    website: '',
    profile_urk: '',
    background_url: '',
    pronouns: '',
  })

  setProfileData({
    ...profileData,
    nickname: 'eric'
  })
  
  const handleFormChange = (name, value) => {
    setProfileData({
      ...profileData,
      [name]: value
    })
  }
  
  return(
    <SafeAreaView>
      <Input
        style={{marginTop: -5,}}
        placeholder='Nickname' autoCompleteType={undefined}  
        onChangeText={value => {handleFormChange('nickname', value)}}
      />
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container: {

  },
})

export default EditProfileScreen;