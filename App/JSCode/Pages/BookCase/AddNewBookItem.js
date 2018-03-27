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
    TouchableOpacity,
    BackHandler
} from 'react-native'
import { observable, computed, action, autorun } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import FastImage from 'react-native-fast-image'
import ImageResource from '../../../Resource/ImageResource'
import Dpi from '../../Utils/Dpi'
import AppUtils from '../../Utils/AppUtils'
import AppTheme from '../../Themes/AppTheme';
import LastReadBean from './Data/LastReadBean';
import BookBean from './Data/BookBean'
/**
 * 书架页面
 */
@inject('rootStore')
@observer
export default class AddNewBookItem extends Component {
    constructor(props) {
        super(props);
        let that = this;
        this.lastReadBook;
        this.pressTime = 0;
        this.pressTimer;        //长按计时器
        this.pressState = 0;        //手势状态， 0：五点击, 1:按下， 2：抬起, 3:长按了
    }

    render() {
        let that = this;
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    let bookBean = new BookBean();
                    bookBean.bookName = "麦田里的守望者"
                    bookBean.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521737908503&di=6b7840789d49493bbf8e29c3251faf5f&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dfe5ba490e6fe9925cb596154019872e9%2F6159252dd42a2834f0e98a5e5db5c9ea15cebf1c.jpg";
                    that.props.rootStore.bookCaseDataBean.bookCaseList.push(bookBean);
                }}
                style={{
                    marginVertical: Dpi.d(30),
                    paddingHorizontal: Dpi.d(20),
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    width: AppUtils.size.width / 3 - Dpi.d(10),
                }}
            >
                <FastImage
                    style={{
                        resizeMode: FastImage.resizeMode.stretch,
                        width: Dpi.d(158),
                        height: Dpi.d(227)
                    }}
                    source={ImageResource.testBookCover}
                ></FastImage>
                <Text style={{ fontSize: Dpi.s(25), color: AppTheme.hightLightColor, marginTop: Dpi.d(10) }}>添加新书</Text>

            </TouchableOpacity>
        )

    }
}

