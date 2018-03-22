/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TeaNavigator, Theme } from 'teaset'
//import AppRouter from './TestApp/AppRouter'
// // 获取store实例
// import Mstore from './TestApp/MobxStore/Mstore'
import AppRouter from './App/JSCode/AppRouter'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.barref;
  }

  componentDidMount() {

  }

  render() {
    return (
      <AppRouter />
    );
  }
}

