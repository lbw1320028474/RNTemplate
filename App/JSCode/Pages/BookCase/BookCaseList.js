/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,
    Easing,
    BackHandler
} from 'react-native'
import { observable, computed, action, autorun } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import { NavigationBar } from 'teaset'
import FastImage from 'react-native-fast-image'
import ImageResource from '../../../Resource/ImageResource'
import Dpi from '../../Utils/Dpi'
import AppUtils from '../../Utils/AppUtils'
import AppTheme from '../../Themes/AppTheme'
import BookCaseItem from './BookCaseItem'
import AddNewBookItem from './AddNewBookItem'
//import NavigationBar from './NavigationBar'
/**
 * 书架页面
 */
@inject('rootStore')
@observer
export default class BookCaseList extends Component {
    constructor(props) {
        super(props);
        let that = this;
        this.backHandler = function () {
            if (that.props.rootStore.inSelect) {
                that.props.rootStore.setInSelect(false)
                return true;
            }
            return false;
        }

    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backHandler);
    }

    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
    }

    render() {
        let that = this;
        that.listData = that.props.data;
        let items = [];
        if (that.listData && that.listData.length > 0) {
            items = that.listData.map((item, index) => {
                return (
                    <BookCaseItem key={index} data={item}></BookCaseItem>
                )
            })
        }
        items.push(
            <AddNewBookItem
                key={items.length}
            ></AddNewBookItem>
        )
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    items
                }
            </View>
        )

    }
}

