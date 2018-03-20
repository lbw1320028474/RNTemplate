/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import { NavigationBar } from 'teaset'
import { Actions } from 'react-native-router-flux'


export default class Page4 extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <View>
        <NavigationBar statusBarStyle='light-content' statusBarInsets={true} style={{ position: 'relative' }} title='Teaset' />
        <Button
          title='打开页面5'

          onPress={() => {
            Actions.Page5();
          }}
        ></Button>
      </View>
    );
  }
}

