import React, { FC, useState, useRef } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, FlatList, Pressable, useWindowDimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Header from '../../components/Header';
import ExploreButton from './MainExploreScreen/ExploreButton';
import ExploreScreenContent from './MainExploreScreen/ExploreScreenContent';
import FilterMenu from './MainExploreScreen/FilterMenu';

const MainExploreScreen:FC = ({navigation}:any) => {
  const window = useWindowDimensions();
  const flatListRef = useRef<FlatList>(null);
  const Tab = createMaterialTopTabNavigator();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const exploreButtonData = [
    { id: 0, title: 'Recommended', },
    { id: 1, title: 'Trending', },
    { id: 2, title: 'COVID-19', },
    { id: 3, title: 'Politics', },
    { id: 4, title: 'Science', },
    { id: 5, title: 'Finance', },
    { id: 6, title: 'Sports', },
    { id: 7, title: 'Fitness', },
  ];

  const [categoryState, setCategoryState] = useState({
    articles: true,
    posts: true,
    stacks: true
  })

  const [tempCategoryState, setTempCategoryState] = useState({
    articles: true,
    posts: true,
    stacks: true
  })

  const [topicState, setTopicState] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  return(
    <SafeAreaView>
      <Header elevated={false}>
        <View style={styles.searchBarRow}>
          <Searchbar
              style={[styles.searchBar, {width: window.width - 65}]}
              inputStyle={styles.searchBarText}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            autoCompleteType='off'
            icon={() => <Icon name='search' type='feather' color='#696969'size={20} tvParallaxProperties={false}/>}
          />
          <Pressable
            hitSlop={10}
            style={styles.filterIcon}
            onPress={() => setIsVisible(true)}
          >
            <Icon name='tune' type='material-community' color='#696969'size={35} tvParallaxProperties={false}/>
          </Pressable>
        </View>
      </Header>
      <FlatList 
        style={styles.exploreButtonListContainer}
        ref={flatListRef}
        data={exploreButtonData}
        renderItem={({item}) =>           
          <ExploreButton 
            title={item.title}
            topic={item.id}
            dynamicTopic={topicState} 
            setDynamicTopic={setTopicState}
            scrollToIndex={() => flatListRef.current.scrollToIndex({index: item.id, viewPosition: 0.5})}
          />
        }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <ExploreScreenContent
        topic={topicState}
        category={categoryState}
      />
      <FilterMenu 
        isVisible={isVisible} 
        setIsVisible={setIsVisible} 
        categoryState={categoryState} 
        setCategoryState={setCategoryState}
        tempCategoryState={tempCategoryState}
        setTempCategoryState={setTempCategoryState}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBarRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  searchBar: { //dynamic width is located inline
    height: 35,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: '#f5f5f5',
    elevation: 0,
  },
  searchBarText: {
    fontSize: 17,
  },
  filterIcon: {
    paddingRight: 10, 
    paddingLeft: 10
  },
  exploreButtonListContainer: {
    backgroundColor: 'white', 
    paddingLeft: 5, 
    paddingRight: 5, 
    paddingTop: 2, 
  },
})

export default MainExploreScreen;