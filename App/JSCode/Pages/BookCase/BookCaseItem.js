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
export default class ActiveView extends Component {
    constructor(props) {
        super(props);
        this.lastReadBook;
        // this.state = {
        //     translateX: new Animated.Value(0),
        // };
    }
    componentDidMount() {
    }

    render() {
        return (
            <View
                style={{
                    marginVertical: Dpi.d(30),
                    paddingHorizontal: Dpi.d(20),
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    width: AppUtils.size.width / 3 - Dpi.d(10),

                }}
            >
                <FastImage style={{ width: Dpi.d(158), height: Dpi.d(227), resizeMode: 'stretch' }} source={ImageResource.testBookCover} ></FastImage>
                <Text style={{ fontSize: Dpi.s(25), color: AppTheme.mainTextColor, marginTop: Dpi.d(10) }}>王者的板甲</Text>
            </View>
        )

    }
}

