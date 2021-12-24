import React, { FC, useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Pressable, useWindowDimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Header from '../../components/Header';
import ExploreButton from './MainExploreScreen/ExploreButton';
import ExploreScreenContent from './MainExploreScreen/ExploreScreenContent';
import FilterMenu from './MainExploreScreen/FilterMenu';

const MainExploreScreen:FC = ({navigation}:any) => {
  const window = useWindowDimensions();

  const Tab = createMaterialTopTabNavigator();

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const [categoryState, setCategoryState] = useState({
    articles: true,
    posts: true,
    stacks: true
  })

  const [topicState, setTopicState] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  return(
    <SafeAreaView style={{justifyContent: 'flex-start'}}>
      <Header elevated={false}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
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
              width: window.width - 65,
              borderRadius: 20,
              marginLeft: 10,
              backgroundColor: '#f5f5f5',
              elevation: 0,
            }}
            inputStyle={{
              fontSize: 17,
            }}
          />
          <Pressable
            hitSlop={30}
            style={{paddingRight: 10, paddingLeft: 10}}
            onPress={() => setIsVisible(true)}>
            <Icon name='tune' 
              type='material-community' 
              color='#696969'
              size={35}
              tvParallaxProperties={false}
            />
          </Pressable>
        </View>
        </Header>
      <ScrollView
        style={styles.exploreButtonListContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
          <ExploreButton 
            title='Recommended' 
            topic={1} 
            dynamicTopic={topicState} 
            setDynamicTopic={setTopicState}/>
          <ExploreButton 
            title='Trending' 
            topic={2} 
            dynamicTopic={topicState} 
            setDynamicTopic={setTopicState}/>
          <ExploreButton 
            title='COVID-19' 
            topic={3} 
            dynamicTopic={topicState} 
            setDynamicTopic={setTopicState}/>
          <ExploreButton 
            title='Politics' 
            topic={4} 
            dynamicTopic={topicState} 
            setDynamicTopic={setTopicState}/>
          <ExploreButton 
            title='Space' 
            topic={5}
            dynamicTopic={topicState} 
            setDynamicTopic={setTopicState}/>
          <ExploreButton 
            title='Science' 
            topic={6}
            dynamicTopic={topicState} 
            setDynamicTopic={setTopicState}/>     
          <ExploreButton 
            title='Fitness' 
            topic={7}
            dynamicTopic={topicState} 
            setDynamicTopic={setTopicState}/>       
          <View style={{width: 10}}></View>
      </ScrollView>
      <ExploreScreenContent
        topic={topicState}
        category={categoryState}
      />
      <FilterMenu 
        isVisible={isVisible} 
        setIsVisible={setIsVisible} 
        categoryState={categoryState} 
        setCategoryState={setCategoryState}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  exploreButtonListContainer: {
    backgroundColor: 'white', 
    paddingLeft: 5, 
    paddingRight: 5, 
    paddingTop: 2, 
  },
})

export default MainExploreScreen;