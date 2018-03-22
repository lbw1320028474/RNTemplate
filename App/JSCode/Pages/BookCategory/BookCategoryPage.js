/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { NavigationBar } from 'teaset'

/**
 * 分类页面
 */
export default class BookCategoryPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <NavigationBar statusBarStyle='light-content' statusBarInsets={true} style={{ position: 'relative' }} title='Teaset' />
        <Text>这是页面分类页面</Text>
      </View>
    );
  }
}

