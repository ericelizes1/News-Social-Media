import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainArticleScreen from './ArticleScreen/MainArticleScreen';
import PostListScreen from './ArticleScreen/PostListScreen';
const ArticleScreen:FC = () => {
  const ArticleNavigator = createMaterialTopTabNavigator();

  return(
    <ArticleNavigator.Navigator
      initialRouteName='MainArticleScreen'
    >
      <ArticleNavigator.Screen
        name='MainArticleScreen'
        component={MainArticleScreen}
      />
      <ArticleNavigator.Screen
        name='PostListScreen'
        component={PostListScreen}
      />
    </ArticleNavigator.Navigator>
  );
}

export default ArticleScreen;