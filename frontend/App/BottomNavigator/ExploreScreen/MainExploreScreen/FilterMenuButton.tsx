import React, { FC, useState } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Caption } from 'react-native-paper';

interface FilterMenuButtonProps {
    title: string,
    desc: string,
    isTop: boolean,
    isBottom: boolean,
    category: string,
    categoryState: any,
    setCategoryState: any
}

const FilterMenuButton:FC<FilterMenuButtonProps> = (props:FilterMenuButtonProps) => {

    const toggleCategoryState = () => {
        if (allUncheckedCategories()) {
            //error message?
        } else {
            props.setCategoryState({
                ...props.categoryState,
                [props.category]: !props.categoryState[props.category]
            })
        }
    }

    const allUncheckedCategories = () => {
        return Object.keys(props.categoryState).every((k) => {
            if (k == props.category) {
                return props.categoryState[k]
            } else {
                return !props.categoryState[k];
            }
        })
    }

    const isSelected = () => {
        return props.categoryState[props.category]
    }

    return (
        <Pressable
            style={[styles.filterMenuButtonContainer, 
                    {//backgroundColor: isSelected() ? 'white' : '#f5f5f5',
                    backgroundColor: 'white',
                    borderTopRightRadius: props.isTop ? 10 : 0,
                    borderTopLeftRadius: props.isTop ? 10 : 0,
                    //zIndex: isSelected() ? 2 : 0,
                    //elevation: isSelected() ? 1 : 0
                    }]}
            onPress={toggleCategoryState}
        >
            <View style={styles.leftContainer}>
                <Text style={styles.buttonTitleText}>{props.title}</Text>
                <Caption style={styles.buttonCaptionText}>{props.desc}</Caption>
            </View>
            <View style={styles.rightContainer}>
                <Icon name='check' 
                    type='material-community' 
                    color={isSelected() ? 'purple' : 'white'} 
                    size={35}
                    tvParallaxProperties={false}
                />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    filterMenuButtonContainer: {
        width: '100%',
        borderColor: '#dedede',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80, 
        alignItems: 'flex-start', 
        borderBottomWidth: 1,
        paddingLeft: 20,
    },
    leftContainer: {
        width: '80%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    rightContainer: {
        width: '20%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitleText: {
        fontSize: 17,
        paddingBottom: 5,
        color: 'black'
    },
    buttonCaptionText: {
        fontSize: 13,
        lineHeight: 13,
        color: '#696969'
    }

})
export default FilterMenuButton