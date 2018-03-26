import React, { Component } from 'react';
import { NavigationBar } from 'teaset'
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'

import { observable, computed, action, autorun } from 'mobx'
import { observer, inject } from 'mobx-react/native'

import FastImage from 'react-native-fast-image'
import ImageResource from '../../../Resource/ImageResource'
import Dpi from '../../Utils/Dpi'
import AppTheme from '../../../../TestApp/Themes/AppTheme';
import { Actions } from 'react-native-router-flux';
@inject('rootStore')
@observer
export default class MyNavigationBar extends Component {
    bgOpacity = 0;
    viewTintColor = AppTheme.mainColor
    maxHeight = 75;

    constructor(props) {
        super(props);
        this.topBarBgRef;
        this.searchRef;

    }

    componentDidMount() {
        let that = this;
        /**
         * 自动在滑动后运行
         */
        autorun(() => {
            that.scrollY(that.props.rootStore.bookCaseDataBean.scrollViewScrollY);
        })
    }

    scrollY(offY) {
        let that = this;
        if (offY < this.maxHeight) {
            that.bgOpacity = offY / that.maxHeight;       //使用了mobx，数据驱动UI，bgOpacity改变后ui自动改变
        } else {
            if (that.bgOpacity !== 1) {
                that.bgOpacity = 1
            }
        }
        if (that.bgOpacity > 0.5) {
            that.viewTintColor = AppTheme.hightLightColor;//+ '' + (that.bgOpacity * 99);
        } else {
            that.viewTintColor = AppTheme.mainColor;// + '' + ((1 - that.bgOpacity) * 99);
        }
        if (that.topBarBgRef) {
            that.topBarBgRef.setNativeProps({
                opacity: that.bgOpacity
            })
        }
        if (that.searchRef) {
            that.searchRef.setNativeProps({
                style: { tintColor: that.viewTintColor }
            })
        }
        //  this.viewTintColor = 'rgba(35, 179, 130,' + this.bgOpacity + ')'

    }

    render() {
        let that = this;
        return (
            <NavigationBar
                statusBarColor='#00000020'
                statusBarInsets={true}
                style={{ backgroundColor: '#00000000' }}
                title='书架'
                rightView={
                    <TouchableOpacity
                        onPress={() => {
                            Actions.BookCategoryPage();
                        }}
                    >
                        <Image

                            ref={ref => that.searchRef = ref}
                            source={ImageResource.searchIcon}
                            style={{ tintColor: AppTheme.mainColor, height: Dpi.d(40), width: Dpi.d(40) }}
                        />
                    </TouchableOpacity>
                }
                background={
                    <Image
                        opacity={0}
                        ref={ref => that.topBarBgRef = ref}
                        source={ImageResource.topBarIcon}
                        style={{ flex: 1 }}
                    />
                }
            />
        )
    }
}




// const mNavatationBar = (props) => (

// )

// export default mNavatationBar;