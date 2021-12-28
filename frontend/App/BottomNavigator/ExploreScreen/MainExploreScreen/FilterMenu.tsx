import React, { FC } from 'react';
import { View, Pressable, StyleSheet, Modal, useWindowDimensions, Platform, ToastAndroid, Alert } from 'react-native';
import { BottomSheet, Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';

import FilterMenuButton from './FilterMenuButton';

interface FilterMenuProps {
  isVisible: boolean,
  setIsVisible: any,
  categoryState: any,
  setCategoryState: any,
  tempCategoryState: any,
  setTempCategoryState: any
}

const FilterMenu: FC<FilterMenuProps> = (props: FilterMenuProps) => {

  const window = useWindowDimensions();

  const handleCloseMenu = () => {
    if (!allCategoriesUnchecked()) {
      props.setIsVisible(false);
      props.setCategoryState(props.tempCategoryState)
    } else {
      const msg = 'Please select at least (1) filter.'
      
      if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
      } else {
        Alert.alert(msg);
      }

    }
  }

  const allCategoriesUnchecked = () => {
    return Object.keys(props.tempCategoryState).every((k) => !props.tempCategoryState[k])
  }

  return (
    <View>
      <Modal animationType='fade' visible={props.isVisible} transparent={true}>
        <View style={styles.grayContainer}/>
      </Modal>
      <Modal animationType='slide' visible={props.isVisible} transparent={true} onRequestClose={handleCloseMenu}>
        <Pressable 
            style={{ height: window.height - 240 }} 
            onPress={handleCloseMenu}/>
        <View style={styles.filterMenuContainer}>
          <FilterMenuButton
            isTop={true}
            isBottom={false}
            category={"stacks"}
            categoryState={props.tempCategoryState}
            setCategoryState={props.setTempCategoryState}
            title='Stacks'
            desc='Search the latest collection of news, blogs, and more.' />
          <FilterMenuButton 
            isTop={false} 
            isBottom={false} 
            category={"posts"} 
            categoryState={props.tempCategoryState} 
            setCategoryState={props.setTempCategoryState} 
            title='Posts' 
            desc='See what opinions and commentary are popular.' />
          <FilterMenuButton 
            isTop={false} 
            isBottom={true} 
            category={"articles"} 
            categoryState={props.tempCategoryState} 
            setCategoryState={props.setTempCategoryState} 
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