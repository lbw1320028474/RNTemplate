/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { BoxShadow } from 'react-native-shadow'
import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,
    Easing,
    TouchableOpacity,

} from 'react-native'
import { observable, computed, action, autorun } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import FastImage from 'react-native-fast-image'
import ImageResource from '../../../Resource/ImageResource'
import Dpi from '../../Utils/Dpi'
import AppUtils from '../../Utils/AppUtils'
import AppTheme from '../../Themes/AppTheme';
import LastReadBean from './Data/LastReadBean';

const shadowOpt = {
    width: Dpi.d(158),
    height: Dpi.d(227),
    border: 5,
    radius: 1,
    opacity: 0.1,
    x: 2,
    y: 2,
}

//import NavigationBar from './NavigationBar'
/**
 * 书架页面
 */
@inject('rootStore')
@observer
export default class BookCaseItem extends Component {
    constructor(props) {
        super(props);
        let that = this;
        this.lastReadBook;
        this.pressTime = 0;
        this.pressTimer;        //长按计时器
        this.pressState = 0;        //手势状态， 0：五点击, 1:按下， 2：抬起, 3:长按了

    }


    _setLastReadBook(itemData) {
        if (itemData) {
            let that = this;
            let timer = setInterval(() => {
                let lastBook = new LastReadBean();
                lastBook.bookCover = itemData.bookCover;
                lastBook.bookName = itemData.bookName;
                that.props.rootStore.bookCaseDataBean.lastReadBook.setLastBookInfo(lastBook);
                if (timer) {
                    clearInterval(timer)
                }
            }, 1000);
        } else {
            alert('图书错误')
        }

    }

    render() {
        let that = this;
        that.itemData = that.props.data;
        return (
            // <View>
            //     <Text>雷帮文</Text>
            // </View>
            <TouchableOpacity
                onLongPress={() => {
                    if (that.props.rootStore.inSelect) {
                        that.props.rootStore.bookCaseDataBean.setInSelect(false)
                        that.props.rootStore.isHiddenNavbar = false;
                    } else {
                        that.props.rootStore.bookCaseDataBean.setInSelect(true)
                        that.props.rootStore.isHiddenNavbar = true;
                    }
                }}
                onPress={() => {
                    if (that.props.rootStore.bookCaseDataBean.inSelect) {
                        that.itemData.isSelected = !(that.itemData.isSelected);
                    } else {
                        that._setLastReadBook(that.itemData);
                    }
                }}
                activeOpacity={0.8}

                style={{
                    paddingVertical: Dpi.d(15),
                    paddingHorizontal: Dpi.d(20),
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    width: AppUtils.size.width / 3 - Dpi.d(10),
                }}
            >
                <BoxShadow
                    setting={shadowOpt}
                >
                    <FastImage

                        opacity={(that.props.rootStore.bookCaseDataBean.inSelect) ? 0.4 : 1}
                        onError={() => {
                            alert('加载失败')
                        }}
                        style={{
                            resizeMode: FastImage.resizeMode.stretch,
                            width: Dpi.d(158),
                            height: Dpi.d(227)
                        }}
                        source={{ uri: that.itemData.bookCover }}
                    ></FastImage>
                </BoxShadow>
                <Text style={{ fontSize: Dpi.s(25), color: AppTheme.mainTextColor, marginTop: Dpi.d(10) }}>{that.itemData.bookName}</Text>
                {
                    (that.props.rootStore.bookCaseDataBean.inSelect) ?
                        <FastImage
                            style={{
                                resizeMode: FastImage.resizeMode.stretch,
                                width: Dpi.d(30),
                                height: Dpi.d(30),
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

            </TouchableOpacity >
        )

    }
}

