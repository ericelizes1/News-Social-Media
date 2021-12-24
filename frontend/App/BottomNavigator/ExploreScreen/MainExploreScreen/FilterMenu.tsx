import React, { FC } from 'react';
import { View, Pressable, StyleSheet, Modal, useWindowDimensions } from 'react-native';
import { BottomSheet, Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';

import FilterMenuButton from './FilterMenuButton';

interface FilterMenuProps {
  isVisible: boolean,
  setIsVisible: any,
  categoryState: any,
  setCategoryState: any
}

const FilterMenu: FC<FilterMenuProps> = (props: FilterMenuProps) => {

  const window = useWindowDimensions();

  return (
    <View>
      <Modal animationType='fade' visible={props.isVisible} transparent={true}>
        <View style={styles.grayContainer}/>
      </Modal>
      <Modal animationType='slide' visible={props.isVisible} transparent={true}>
        <Pressable 
            style={{ height: window.height - 240 }} 
            onPress={() => props.setIsVisible(false)}/>
        <View style={styles.filterMenuContainer}>
          <FilterMenuButton
            isTop={true}
            isBottom={false}
            category={"stacks"}
            categoryState={props.categoryState}
            setCategoryState={props.setCategoryState}
            title='Stacks'
            desc='Search the latest collection of news, blogs, and more.' />
          <FilterMenuButton 
            isTop={false} 
            isBottom={false} 
            category={"posts"} 
            categoryState={props.categoryState} 
            setCategoryState={props.setCategoryState} 
            title='Posts' 
            desc='See what opinions and commentary are popular.' />
          <FilterMenuButton 
            isTop={false} 
            isBottom={true} 
            category={"articles"} 
            categoryState={props.categoryState} 
            setCategoryState={props.setCategoryState} 
            title='Articles' 
            desc='Find the latest, breaking news from your favorite sources.' />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    borderWidth: 1,
    borderColor: '#dedede'
  },
  grayContainer: {
    height: '100%',
    width: '100%',
    opacity: 0.2,
    backgroundColor: 'black'
  },
  filterMenuContainer: {
    height: 240,
    width: '100%',
    zIndex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  filterMenuButtonContainer: {
    width: '100%',
    borderBottomColor: '#dedede',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
    zIndex: 2,
  },
  buttonTitleText: {
    fontSize: 15
  },
});

export default FilterMenu;