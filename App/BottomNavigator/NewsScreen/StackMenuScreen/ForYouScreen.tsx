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
          <Text h4 style={{fontFamily: 'Copperplate-Bold'}}>Recommended</Text>
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
          title='For You'
          username='stack'
          imgUrl='https://e3.365dm.com/21/10/2048x1152/skynews-donald-trump-us-iowa_5554035.jpg'
          topics={[]}
          subscribed={true}
        />
        <StackMiniCard 
          size={3} 
          title='Mobile Device Reviews' 
          username='linustechtips'
          imgUrl='https://techcrunch.com/wp-content/uploads/2020/09/2020-09-10-083646924.jpg?w=1390&crop=1'
          topics={['Tech', 'Hardware']}
          subscribed={false}
        />
        <StackMiniCard
          size={3}
          title='The Grandest Piano'
          username='lingling_og'
          imgUrl='https://newyorkclassicalreview.com/wp-content/uploads/2019/10/10.7.2019-Concert-26_Photo-Zach-Mahone.jpg'
          topics={['Music']}
          subscribed={false}
        />
        <StackMiniCard 
          size={3}
          title='The Washington Football Team'
          username='devendesai1'
          imgUrl='https://s.abcnews.com/images/Politics/washington-01-as-gty-200723_1595528169605_hpMain_16x9_992.jpg'
          topics={['Sports', 'NFL']}
          subscribed={false}
        />
        <StackMiniCard 
          size={3}
          title='When Cars Can Fly'
          username='officialelonmusk'
          imgUrl='https://cdn.mos.cms.futurecdn.net/9fXs6VTtvcuokKj6zMW4WT-1024-80.jpg.webp'
          topics={['Tech', 'Space']}
          subscribed={false}
        />
        <StackMiniCard
          size={2}
          title='The Anti-Steelers Network'
          username='nickchubbbb'
          imgUrl='https://cdn.vox-cdn.com/thumbor/cPjWlf8RMOlmayfiHm8pM9on1Q8=/0x0:3000x2000/1220x813/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69998291/ChubbHunt_Getty_Ringer.0.jpg'
          topics={['Sports', 'NFL']}
          subscribed={false}
        />
        <StackMiniCard
          size={3}
          title='Flying High'
          username='420drones'
          imgUrl='https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/07/UAVs-help2.jpg'
          topics={['Tech', 'Aerospace']}
          subscribed={false}
        />
        <StackMiniCard
          size={3}
          title='Billiards and Beer'
          username='lablover69'
          imgUrl='https://p2d7x8x2.stackpathcdn.com/content/uploads/2014/10/Billiards_and_snookers-640x425.jpg'
          topics={['Sports', 'Beverages']}
          subscribed={false}
        />
        <StackMiniCard
          size={3}
          title='Crypto Collector'
          username='bostonbeef'
          imgUrl='https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k='
          topics={['Investment', 'Fintech']}
          subscribed={false}
        />
        <StackMiniCard
          size={3}
          title='Sausage Galore!'
          username='sausagesanghavi'
          imgUrl='https://www.guinnessworldrecords.com/Images/Barry%20John%20Crowe%20-%20Most%20Sausages%20Made%20In%20A%20Minute-header_tcm25-540357.jpg'
          topics={['Pleasures', 'Meat']}
          subscribed={false}
        />
        <StackMiniCard
          size={2}
          title='Apple Announcements'
          username='apple'
          imgUrl='https://www.techmoog.com/wp-content/uploads/2020/08/apple-shares.jpg'
          topics={['Tech', 'Mobile', 'Computer']}
          subscribed={false}
        />
        <StackMiniCard
          size={3}
          title='Barbells and Bitches'
          username='shiftyshayan'
          imgUrl='data:image/jpeg;base64,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'
          topics={['Fitness', 'Women']}
          subscribed={false}
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