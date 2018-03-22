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
    Easing
} from 'react-native'
import { observable, computed, action, autorun } from 'mobx'
import { observer } from 'mobx-react/native'
import { NavigationBar } from 'teaset'
import FastImage from 'react-native-fast-image'
import ImageResource from '../../../Resource/ImageResource'
import Dpi from '../../Utils/Dpi'
import AppUtils from '../../Utils/AppUtils'
import AppTheme from '../../Themes/AppTheme'
import BookCaseItem from './BookCaseItem'
//import NavigationBar from './NavigationBar'
/**
 * 书架页面
 */
@observer
export default class BookCaseList extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     translateX: new Animated.Value(0),
        // };
    }
    componentDidMount() {
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
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    items
                }
            </View>
        )

    }
}

