import React, { FC } from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Text, Header, Icon, Badge } from 'react-native-elements';
import { Caption } from 'react-native-paper';
import ForYouMiniCard from './RecommendedScreen/ForYouMiniCard';
import StackMiniCard from './RecommendedScreen/StackMiniCard';

const RecommendedScreen:FC = ({navigation}:any) => {
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
            <Icon name='bookmark-multiple-outline' 
              type='material-community' 
              color='black' 
              size={28} 
              style={styles.subIcon}
              tvParallaxProperties={false}
            />
            <Badge
              status="error"
              containerStyle={{ position: 'absolute', top: 0, right: 2 }}
            />
          </Pressable>
        }
      />
      <ScrollView style={styles.container}>
        <ForYouMiniCard/>
        <StackMiniCard 
          size={3} 
          title='Mobile Device Reviews' 
          username='linustechtips'
          imgUrl='https://cdn.pocket-lint.com/r/s/1200x/assets/images/157961-phones-review-hands-on-samsung-galaxy-z-fold-3-review-image1-coz70vermc.jpg'
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
          title='Petri Dish Delights'
          username='lablover69'
          imgUrl='https://i.natgeofe.com/n/e4c5cbc4-0f19-4ee6-afdb-e8c1141f5b6a/70099_4x3.jpg'
          topics={['Science', 'Food']}
          subscribed={false}
        />
        <StackMiniCard
          size={2}
          title='The Future of Fintech'
          username='thebostonbroker'
          imgUrl='https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k='
          topics={['Investment', 'Fintech']}
          subscribed={false}
        />
        <StackMiniCard
          size={2}
          title="Autumn Viva Italy"
          username='sausagesanghavi'
          imgUrl='https://media.istockphoto.com/photos/traditional-grilled-sausages-with-multicolored-peppers-onions-and-picture-id1165572252?k=20&m=1165572252&s=612x612&w=0&h=iy_6PnUIlFz-um-sumhkjpUwnPxxQw9pVuRjE34xlgc='
          topics={['Food']}
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
          title='Beyond Barbells'
          username='shayan'
          imgUrl='https://onnitacademy.imgix.net/2016/02/pullups.png'
          topics={['Fitness']}
          subscribed={false}
        />
        <StackMiniCard 
          size={2}
          title='Sends of the Week'
          username='sam'
          imgUrl='https://www.planetmountain.com/img/1/47417.jpg'
          topics={['Sports', 'Climbing']}
          subscribed={false}
        />
        {/*<CardFlip 
          style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'relative',
            width: "100%"}} 
          ref={(card) => card = card} 
        >
            <Pressable 
              style={{    
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        backfaceVisibility: 'hidden',
                    }} 
              onPress={() => {}} 
            > 
              <Text>AB</Text>
            </Pressable>
            <Pressable 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backfaceVisibility: 'hidden',
              }} 
              onPress={() => {}}
            > 
              <Text>CD</Text>
            </Pressable>
        </CardFlip>*/}
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
    position: 'relative',
    padding:10,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  subIcon: {
    margin: -2,
  }
})
export default RecommendedScreen;