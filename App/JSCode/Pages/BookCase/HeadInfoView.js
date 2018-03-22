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
import AppTheme from '../../Themes/AppTheme';
//import NavigationBar from './NavigationBar'
/**
 * 书架页面
 */
@observer
export default class HeadInfoView extends Component {
    constructor(props) {
        super(props);
        this.lastReadBook;
        this.state = {
            translateX1: new Animated.Value(0),
            translateX2: new Animated.Value(300),
            translateX3: new Animated.Value(400),
        };
    }

    _startAnim1() {
        let that = this;
        let animead = Animated.timing( // 从时间范围映射到渐变的值。
            that.state.translateX1, {
                easing: Easing.out(Easing.linear),// 一个用于定义曲线的渐变函数
                toValue: -1 * AppUtils.size.width,
                duration: 13000,// 动画持续的时间（单位是毫秒），默认为500
                // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
                useNativeDriver: true, // <-- 加上这一行
            }).start((call) => {
                that.state.translateX1.setValue(0)
                that._startAnim1();
            });
    }

    _startAnim2() {
        let that = this;
        let animead = Animated.timing( // 从时间范围映射到渐变的值。
            that.state.translateX2, {
                easing: Easing.out(Easing.linear),// 一个用于定义曲线的渐变函数
                toValue: -1 * AppUtils.size.width,
                duration: 17000,// 动画持续的时间（单位是毫秒），默认为500
                // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
                useNativeDriver: true, // <-- 加上这一行
            }).start((call) => {
                that.state.translateX2.setValue(0)
                that._startAnim2();
            });
    }

    _startAnim3() {
        let that = this;
        let animead = Animated.timing( // 从时间范围映射到渐变的值。
            that.state.translateX3, {
                easing: Easing.out(Easing.linear),// 一个用于定义曲线的渐变函数
                toValue: -1 * AppUtils.size.width,
                duration: 21000,// 动画持续的时间（单位是毫秒），默认为500
                // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
                useNativeDriver: true, // <-- 加上这一行
            }).start((call) => {
                that.state.translateX3.setValue(0)
                that._startAnim3();
            });
    }

    componentDidMount() {
        this._startAnim1();
        this._startAnim2();
        this._startAnim3();
    }

    _renderAnimView() {
        let that = this;
        return (
            <View style={{ position: 'absolute', bottom: 0 }}>


                <Animated.View
                    style={{ position: 'absolute', bottom: 0, transform: [{ translateX: that.state.translateX3 }] }}
                >
                    <FastImage
                        style={{ height: Dpi.d(50), width: AppUtils.size.width * 2, resizeMode: 'stretch' }}
                        source={ImageResource.bookCaseAnimimage3}>

                    </FastImage>
                </Animated.View>
                <Animated.View
                    style={{ position: 'absolute', bottom: 0, transform: [{ translateX: that.state.translateX2 }] }}
                >
                    <FastImage
                        style={{ height: Dpi.d(50), width: AppUtils.size.width * 2, resizeMode: 'stretch' }}
                        source={ImageResource.bookCaseAnimimage2}>

                    </FastImage>
                </Animated.View>
                <Animated.View
                    style={{ position: 'absolute', bottom: 0, transform: [{ translateX: that.state.translateX1 }] }}
                >
                    <FastImage
                        style={{ height: Dpi.d(50), width: AppUtils.size.width * 2, resizeMode: 'stretch' }}
                        source={ImageResource.bookCaseAnimimage1}>
                    </FastImage>
                </Animated.View>
            </View >

        )
    }

    render() {
        let that = this;

        that.lastReadBook = that.props.lastBook;
        return (
            <View style={{ height: Dpi.d(450), width: AppUtils.size.width }}>
                <FastImage
                    style={{ height: Dpi.d(450), width: AppUtils.size.width }}
                    source={ImageResource.bookCaseHeadBg}
                />
                {
                    that._renderAnimView()
                }
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: Dpi.d(30), top: Dpi.d(150) }}
                >
                    <FastImage
                        style={{ height: Dpi.d(250), width: Dpi.d(180), resizeMode: 'stretch' }}
                        source={ImageResource.testBookCover}
                    >

                    </FastImage>
                    <View
                        style={{ padding: Dpi.d(20) }}
                    >
                        <Text style={{ color: AppTheme.mainColor, fontSize: Dpi.s(30) }}>{that.lastReadBook.bookName}</Text>
                        <Text style={{ color: AppTheme.mainColor, fontSize: Dpi.s(28), marginTop: Dpi.d(30) }}>{that.lastReadBook.lastChapterName} 继续阅读</Text>
                    </View>
                </View>

            </View >
        );
    }
}

