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
import { observer, inject } from 'mobx-react/native'
import FastImage from 'react-native-fast-image'
import ImageResource from '../../../Resource/ImageResource'
import Dpi from '../../Utils/Dpi'
import AppUtils from '../../Utils/AppUtils'
import AppTheme from '../../Themes/AppTheme';
//import NavigationBar from './NavigationBar'
/**
 * 书架页面
 */
@inject('rootStore')
@observer
export default class ActiveView extends Component {
    constructor(props) {
        super(props);
        this.lastReadBook;
        this.state = {
            translateX: new Animated.Value(0),
        };
    }

    _startAnim() {
        // let that = this;
        // that.state.translateX.setValue(0)
        // let animead = Animated.timing( // 从时间范围映射到渐变的值。
        //     that.state.translateX, {
        //         easing: Easing.out(Easing.linear),// 一个用于定义曲线的渐变函数
        //         toValue: -1 * AppUtils.size.width,
        //         duration: 15000,// 动画持续的时间（单位是毫秒），默认为500
        //         // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
        //         useNativeDriver: true, // <-- 加上这一行
        //     }).start((call) => {
        //         that._startAnim();
        //     });
    }

    componentDidMount() {
        this._startAnim();
    }

    render() {
        return (
            <View
                style={{
                    marginVertical: Dpi.d(20),
                    paddingHorizontal: Dpi.d(20),
                    alignSelf: 'center',
                    backgroundColor: AppTheme.bgHightColor,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: AppUtils.size.width - Dpi.d(80),
                    height: Dpi.d(60),
                    borderRadius: Dpi.d(30)
                }}
            >
                <FastImage tintColor={AppTheme.hightLightColor} style={{ width: Dpi.d(30), height: Dpi.d(30) }} source={ImageResource.searchIcon} ></FastImage>
                <Text style={{ color: AppTheme.hightLightColor }}>签到送纸质书啦！！！</Text>
                <Text style={{ padding: Dpi.d(5), fontSize: Dpi.s(24), backgroundColor: AppTheme.bgColor, color: AppTheme.hightLightColor, borderRadius: Dpi.d(20) }}>去签到</Text>
            </View>
        )
    }
}

