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
    TouchableOpacity
} from 'react-native'
import { observable, computed, action, autorun } from 'mobx'
import { observer } from 'mobx-react/native'
import { NavigationBar } from 'teaset'
import FastImage from 'react-native-fast-image'
import ImageResource from '../../../Resource/ImageResource'
import Dpi from '../../Utils/Dpi'
import AppUtils from '../../Utils/AppUtils'
import AppTheme from '../../Themes/AppTheme';
//import NavigationBar from './NavigationBar'
/**
 * 书架页面
 */
@observer
export default class BookCaseItem extends Component {
    constructor(props) {
        super(props);
        this.lastReadBook;
        this.pressTime = 0;
        this.pressTimer;        //长按计时器
        this.pressState = 0;        //手势状态， 0：五点击, 1:按下， 2：抬起, 3:长按了
        // this.state = {
        //     translateX: new Animated.Value(0),
        // };
    }
    componentDidMount() {
    }

    render() {
        let that = this;
        that.itemData = that.props.data;
        return (
            <TouchableOpacity
                onPressIn={() => {
                    that.pressState = 1;
                    that.pressTime = (new Date()).getTime();
                    if (that.pressTimer) {
                        clearInterval(that.pressTimer);
                    }
                    that.pressTimer = setInterval(() => {
                        if (that.pressState === 1) {
                            //alert('长按了')
                            that.pressState = 3;
                            that.itemData.inSelect = !(that.itemData.inSelect)
                        } else {
                            if (that.pressTimer) {
                                clearInterval(that.pressTimer);
                            }
                        }
                    }, 1000);
                }}
                onPressOut={() => {
                    if (that.pressTimer) {
                        clearInterval(that.pressTimer);
                    }
                    if (that.pressState === 3) {
                        that.pressState = 0;
                    } else {
                        if (that.itemData.inSelect) {
                            that.itemData.isSelected = !(that.itemData.isSelected);
                        } else {
                            alert('单击了')
                        }
                    }
                }}
                // onPress={() => {
                //     that.itemData.inSelect = true
                // }}
                activeOpacity={0.8}
                opacity={(that.itemData.inSelect === true) ? 0.6 : 1}
                style={{
                    marginVertical: Dpi.d(30),
                    paddingHorizontal: Dpi.d(20),
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    width: AppUtils.size.width / 3 - Dpi.d(10),
                }}
            >
                <FastImage
                    onError={() => {
                        alert('加载失败')
                    }}
                    style={{
                        width: Dpi.d(158),
                        height: Dpi.d(227),
                        resizeMode: 'stretch'
                    }}
                    source={{ uri: that.itemData.bookCover }}
                ></FastImage>
                <Text style={{ fontSize: Dpi.s(25), color: AppTheme.mainTextColor, marginTop: Dpi.d(10) }}>{that.itemData.bookName}</Text>
                {
                    (that.itemData.inSelect) ?
                        <FastImage
                            style={{
                                width: Dpi.d(30),
                                height: Dpi.d(30),
                                resizeMode: 'stretch',
                                position: 'absolute',
                                bottom: Dpi.d(50),
                                right: Dpi.d(50)
                            }}
                            source={(that.itemData.isSelected) ?
                                ImageResource.bookCaseItemSelected
                                : ImageResource.bookCaseItemNormal} >
                        </FastImage>
                        : null
                }

            </TouchableOpacity>
        )

    }
}

