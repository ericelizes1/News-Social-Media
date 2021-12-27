import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Icon } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

const StackHeader = (props) => {
  const {headerHeight} = props;
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
      <View
        style={[
          styles.subHeader,
          {
            height: headerHeight / 2,
            alignItems: 'center',
            justifyContent: 'center'
          },
        ]}>
        <Text style={styles.title}>Your Stacks</Text>
      </View>
      <View
        style={[
          styles.subHeader,
          {
            height: headerHeight / 2,
          },
        ]}>
        <View style={styles.searchBox}>
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
              // height: 35,
              // width: window.width - 30,
              borderRadius: 20,
              // backgroundColor: '#f5f5f5',
              // elevation: 0,
            }}
            inputStyle={{
              fontSize: 17,
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  searchText: {
    color: '#8B8B8B',
    fontSize: 17,
    lineHeight: 22,
    marginLeft: 8,
  },
  searchBox: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
export default StackHeader;