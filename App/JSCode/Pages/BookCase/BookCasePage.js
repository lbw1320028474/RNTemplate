/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native'
//import { NavigationBar } from 'teaset'
import { observable, computed, action, autorun } from 'mobx'
import { observer, Provider } from 'mobx-react/native'
import FastImage from 'react-native-fast-image'
import ImageResource from '../../../Resource/ImageResource'
import HeadInfoView from './HeadInfoView'
import MyNavigationBar from './MyNavigationBar'
import Anim from './Data/BookCaseDataBean'
import BookCaseDataBean from './Data/BookCaseDataBean';
import LastReadBean from './Data/LastReadBean'
import ActiveView from './ActiveView'
import AppTheme from '../../Themes/AppTheme';
import BookCaseList from './BookCaseList'
/**
 * 书架页面
 */
@observer
export default class BookCasePage extends Component {
  constructor(props) {
    super(props);
    this.myNavigationBarRef;
    this.bookCaseData;
    this._initData();
  }

  componentDidMount() {
  }

  _initData() {
    this.bookCaseData = new BookCaseDataBean();
  }

  render() {
    let that = this;
    return (
      <Provider rootStore={this.bookCaseData}>
        <View style={{ flex: 1, backgroundColor: AppTheme.bgColor }}>
          <ScrollView
            style={{ flex: 1 }}
            onScroll={(event) => {
              that.bookCaseData.scrollViewScrollY = event.nativeEvent.contentOffset.y;
            }}
          >
            <HeadInfoView lastBook={that.bookCaseData.lastReadBook} />
            <ActiveView></ActiveView>
            <BookCaseList data={this.bookCaseData.bookCaseList} />
          </ScrollView>
          <MyNavigationBar></MyNavigationBar>
        </View>
      </Provider>
    );
  }
}

