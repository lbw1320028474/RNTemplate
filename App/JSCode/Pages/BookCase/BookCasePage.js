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
import { NavigationBar } from 'teaset'
import { observable, computed, action, autorun } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import FastImage from 'react-native-fast-image'
import ImageResource from '../../../Resource/ImageResource'
import HeadInfoView from './HeadInfoView'
import MyNavigationBar from './MyNavigationBar'
import Anim from './Data/BookCaseDataBean'
import LastReadBean from './Data/LastReadBean'
import ActiveView from './ActiveView'
import AppTheme from '../../Themes/AppTheme';
import BookCaseList from './BookCaseList'
/**
 * 书架页面
 */
@inject('rootStore')
@observer
export default class BookCasePage extends Component {
  constructor(props) {
    super(props);
    this.myNavigationBarRef;
  }

  componentDidMount() {
  }



  render() {
    let that = this;
    return (
      <View style={{ flex: 1, backgroundColor: AppTheme.bgColor }}>
        <ScrollView
          style={{ flex: 1 }}
          onScroll={(event) => {
            that.props.rootStore.bookCaseDataBean.scrollViewScrollY = event.nativeEvent.contentOffset.y;
          }}
        >
          <HeadInfoView />
          <ActiveView></ActiveView>
          <BookCaseList />
        </ScrollView>
        <MyNavigationBar></MyNavigationBar>
      </View>
    );
  }
}

