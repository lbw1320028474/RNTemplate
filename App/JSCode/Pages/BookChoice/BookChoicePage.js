/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { NavigationBar } from 'teaset'

/**
 * 精选页面
 */
export default class BookChoicePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>这是页面精选页面</Text>
      </View>
    );
  }
}

