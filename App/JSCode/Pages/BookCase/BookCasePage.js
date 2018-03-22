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
import { observer } from 'mobx-react/native'
import FastImage from 'react-native-fast-image'
import ImageResource from '../../../Resource/ImageResource'
import HeadInfoView from './HeadInfoView'
import MyNavigationBar from './MyNavigationBar'
import Anim from './Data/BookCaseDataBean'
import BookCaseDataBean from './Data/BookCaseDataBean';
import LastReadBean from './Data/LastReadBean'
import ActiveView from './ActiveView'
import AppTheme from '../../Themes/AppTheme';
import BookCaseItem from './BookCaseItem'
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
      <View style={{ flex: 1, backgroundColor: AppTheme.bgColor }}>
        <ScrollView
          style={{ flex: 1 }}
          onScroll={(event) => {
            if (that.myNavigationBarRef) {
              that.myNavigationBarRef.scrollY(event.nativeEvent.contentOffset.y);
            }
          }}
        >
          <HeadInfoView lastBook={that.bookCaseData.lastReadBook} />
          <ActiveView></ActiveView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
            <BookCaseItem></BookCaseItem>
          </View>
        </ScrollView>
        <MyNavigationBar
          ref={ref => this.myNavigationBarRef = ref}
        ></MyNavigationBar>
      </View>
    );
  }
}

