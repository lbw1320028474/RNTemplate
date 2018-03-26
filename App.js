/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import AppRouter from './TestApp/AppRouter'
import {
  View,
  Text
} from 'react-native'
// // 获取store实例
// import Mstore from './TestApp/MobxStore/Mstore'
import BookCasePage from './App/JSCode/Pages/BookCase/BookCasePage'
import { NavigationBar } from 'teaset'
import AppRouter from './App/JSCode/AppRouter'
import { observer, Provider } from 'mobx-react/native'
import AppStore from './App/JSCode/Store/AppStore'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.barref;
    this.appStore;
    this._initData();
    // this._initTheme();
  }


  _initTheme() {
    let that = this;
  }

  _initData() {
    this.appStore = new AppStore();
  }

  componentDidMount() {

  }

  render() {
    return (
      <Provider rootStore={this.appStore}>
        < AppRouter />
      </Provider>
    );
  }
}

