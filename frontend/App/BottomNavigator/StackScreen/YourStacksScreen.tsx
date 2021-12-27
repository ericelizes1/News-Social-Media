import React, { FC, useRef, useState } from 'react';
import { Animated, SafeAreaView, View, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import { Text, Icon, Badge } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

import ForYouMiniCard from './YourStacksScreen/ForYouMiniCard';
import StackMiniCard from './YourStacksScreen/StackMiniCard';
import StackHeader from './YourStacksScreen/StackHeader';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
// import Header from '../../components/Header';

const {diffClamp} = Animated;
const headerHeight = 58 * 2;

const YourStacksScreen:FC = ({navigation}:any) => {
  const window = useWindowDimensions();

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const ref = useRef(null);

  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 2)],
  });

  const translateYNumber = useRef();

  translateY.addListener(({value}) => {
    translateYNumber.current = value;
  });

  const getCloser = (value, checkOne, checkTwo) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: scrollY.current},
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  const handleSnap = ({nativeEvent}) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight / 2
      )
    ) {
      if (ref.current) {
        ref.current.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
            -headerHeight / 2
              ? offsetY + headerHeight / 2
              : offsetY - headerHeight / 2,
        });
      }
    }
  };

  const [stackMiniCardData, setStackMiniCardData] = useState([
    {
      id: 1,
      size: 1, 
      title: 'For You', 
      user: 'stack', 
      img: 'https://e3.365dm.com/21/10/2048x1152/skynews-donald-trump-us-iowa_5554035.jpg', 
      desc: '', 
      isForYou: true
    },
    {
      id: 2,
      size: 3, 
      title: 'Mobile Device Reviews', 
      user: 'linustechtips', 
      img: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/157961-phones-review-hands-on-samsung-galaxy-z-fold-3-review-image1-coz70vermc.jpg', 
      desc: '', 
      isForYou: false
    },
    {
      id: 3,
      size: 3, 
      title: 'Exploring Modern Music', 
      user: 'thereal_lingling', 
      img: 'https://newyorkclassicalreview.com/wp-content/uploads/2019/10/10.7.2019-Concert-26_Photo-Zach-Mahone.jpg', 
      desc: '', 
      isForYou: false
    },
    {
      id: 4,
      size: 3, 
      title: 'The NFL Playoff Picture', 
      user: 'devendesai1', 
      img: 'https://s.abcnews.com/images/Politics/washington-01-as-gty-200723_1595528169605_hpMain_16x9_992.jpg', 
      desc: '', 
      isForYou: false
    },
    {
      id: 5,
      size: 3, 
      title: 'Plugging the Car Market', 
      user: 'elonmusk', 
      img: 'https://cdn.mos.cms.futurecdn.net/9fXs6VTtvcuokKj6zMW4WT-1024-80.jpg.webp', 
      desc: '', 
      isForYou: false
    },
    {
      id: 6,
      size: 2, 
      title: 'The Future of Football', 
      user: 'pff_analytics', 
      img: 'https://cdn.vox-cdn.com/thumbor/cPjWlf8RMOlmayfiHm8pM9on1Q8=/0x0:3000x2000/1220x813/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69998291/ChubbHunt_Getty_Ringer.0.jpg', 
      desc: '', 
      isForYou: false
    },
    {
      id: 7,
      size: 3, 
      title: 'Flying High', 
      user: 'linustechtips', 
      img: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/07/UAVs-help2.jpg', 
      desc: '', 
      isForYou: false
    },
    {
      id: 8,
      size: 3,
      title: 'Petri Dish Delights',
      user: 'drsamudra',
      img: 'https://i.natgeofe.com/n/e4c5cbc4-0f19-4ee6-afdb-e8c1141f5b6a/70099_4x3.jpg',
      desc: '',
      isForYou: false,
    },
    {
      id: 9,
      size: 2,
      title: 'Blockchain Bonanza',
      user: 'thebostonbroker',
      img: 'https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k=',
      desc: '',
      isForYou: false,
    },
    {
      id: 10,
      size: 2,
      title: 'La Cosa Nostra',
      user: 'sausagesanghavi',
      img: 'https://media.istockphoto.com/photos/traditional-grilled-sausages-with-multicolored-peppers-onions-and-picture-id1165572252?k=20&m=1165572252&s=612x612&w=0&h=iy_6PnUIlFz-um-sumhkjpUwnPxxQw9pVuRjE34xlgc=',
      desc: '',
      isForYou: false,
    },
    {
      id: 11,
      size: 2,
      title: 'Apple Updates',
      user: 'apple',
      img: 'https://www.techmoog.com/wp-content/uploads/2020/08/apple-shares.jpg',
      desc: '',
      isForYou: false,
    },
    {
      id: 12,
      size: 3,
      title: 'Beyond Barbells',
      user: 'shayan',
      img: 'https://onnitacademy.imgix.net/2016/02/pullups.png',
      desc: '',
      isForYou: false,
    },
    {
      id: 13,
      size: 2,
      title: 'Sends of the Week',
      user: 'samuel',
      img: 'https://www.planetmountain.com/img/1/47417.jpg',
      desc: '',
      isForYou: false,
    }
  ])

  const removeCard = (removeId) => {
    const arr = stackMiniCardData.filter((item) => item.id !== removeId);
    setStackMiniCardData(arr);
  }
  
  return(
    <SafeAreaView style={{flex: 1}}>
      {/* <Header elevated={false}>
        <View style={[styles.headerContainer]}>
        <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        autoCompleteType='off'
        icon={() => 
          <Icon 
                name='search' 
                type='feather' 
                color='#696969'
                size={20}
                tvParallaxProperties={false}
              />
            }
            style={{
              height: 35,
              width: window.width - 30,
              borderRadius: 20,
              backgroundColor: '#f5f5f5',
              elevation: 0,
            }}
            inputStyle={{
              fontSize: 17,
            }}
          />
        </View>
      </Header> */}
      <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
        <StackHeader {...{headerHeight}} />
      </Animated.View>
      <Animated.FlatList
        data={stackMiniCardData}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: headerHeight}}
        onScroll={handleScroll}
        ref={ref}
        onMomentumScrollEnd={handleSnap}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        renderItem={({item}) =>
          <Animated.View>
            <StackMiniCard
              id={item.id}
              size={item.size} 
              title={item.title}
              username={item.user}
              imgUrl={item.img}
              isForYou={item.isForYou}
              removeCard={removeCard}
            />
          </Animated.View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 40, //FIX THIS LATER BASED ON THE HEIGHT OF THE STATUS BAR
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
  container: {
    position: 'relative',
    marginTop: 40, //FIX THIS LATER BASED ON THE HEIGHT OF THE STATUS BAR
    padding: 10,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'white',
  },
})
export default YourStacksScreen;