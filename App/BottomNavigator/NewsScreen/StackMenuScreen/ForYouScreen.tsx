import React, { FC } from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Text, Header, Icon, Badge } from 'react-native-elements';
import { Caption } from 'react-native-paper';

import StackMiniCard from './ForYouScreen/StackMiniCard';

const ForYouScreen:FC = ({navigation}:any) => {
  return(
    <View>
      <Header 
        backgroundColor='white'
        containerStyle={styles.headerContainer}
        centerComponent={
          //Copperplate-Bold
          //Palatino
            <Text h4 style={{fontFamily: 'Copperplate-Bold'}}>Reccomended</Text>
        }
        rightComponent={
          <Pressable
            onPress={() => navigation.navigate('SubscriptionMenuScreen')}
          >
            <Icon name='bookmark-multiple-outline' type='material-community' color='black' size={28} style={styles.subIcon}/>
            <Badge
              status="error"
              containerStyle={{ position: 'absolute', top: 0, right: 2 }}
            />
          </Pressable>
        }
      />
      <ScrollView style={styles.container}>
        <StackMiniCard 
          size={2} 
          title='Mobile Device Reviews' 
          username='linustechtips'
          imgUrl='https://techcrunch.com/wp-content/uploads/2020/09/2020-09-10-083646924.jpg?w=1390&crop=1'
          topics={['Tech', 'Hardware']}
        />
        <StackMiniCard
          size={3}
          title='The Grandest Piano'
          username='lingling_og'
          imgUrl='https://newyorkclassicalreview.com/wp-content/uploads/2019/10/10.7.2019-Concert-26_Photo-Zach-Mahone.jpg'
          topics={['Music']}
        />
        <StackMiniCard 
          size={3}
          title='The Washington Football Team'
          username='devendesai1'
          imgUrl='https://s.abcnews.com/images/Politics/washington-01-as-gty-200723_1595528169605_hpMain_16x9_992.jpg'
          topics={['Sports', 'NFL']}
        />
        <StackMiniCard 
          size={3}
          title='When Cars Can Fly'
          username='officialelonmusk'
          imgUrl='https://cdn.mos.cms.futurecdn.net/9fXs6VTtvcuokKj6zMW4WT-1024-80.jpg.webp'
          topics={['Tech', 'Space']}
        />
        <View style={{padding: 50}}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 93,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  container: {
    padding:10,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  subIcon: {
    margin: -2,
  }
})
export default ForYouScreen;