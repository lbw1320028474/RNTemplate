/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import FastImage from 'react-native-fast-image'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import Page5 from './Pages/Page5'
import ImageResource from './Resource/ImageResource'
import Tabicon from './Componet/Tabicon';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import AppTheme from './Themes/AppTheme'
import TabBarItem from './Componet/tabBarItem'
const onBackPress = () => {
    console.log(Actions.state);
    if (Actions.state.index === 0) {
        return false
    }
    Actions.pop()
    return true
}
// const Tab = TabNavigator(
//     {
//         Page1Screen: {
//             screen: Page1,
//             navigationOptions: ({ navigation }) => (
//                 {
//                     tabBarLabel: '书架',
//                     tabBarIcon: ({ focused, tintColor }) =>
//                         (
//                             <TabBarItem
//                                 tintColor={tintColor}
//                                 focused={focused}
//                                 selectedImage={ImageResource.tabBookCaseImageNormal}
//                                 normalImage={ImageResource.tabBookCaseImageSelected}
//                             />
//                         )
//                 }
//             )
//         },

//         Page2Screen: {
//             screen: Page2,
//             navigationOptions: ({ navigation }) => (
//                 {
//                     tabBarLabel: '分类',
//                     tabBarIcon: ({ focused, tintColor }) => (
//                         <TabBarItem
//                             tintColor={tintColor}
//                             focused={focused}
//                             selectedImage={ImageResource.tabBookRoomImageNormal}
//                             normalImage={ImageResource.tabBookRoomImageSelected}
//                         />
//                     )
//                 }
//             )
//         },
//         Page3Screen: {
//             screen: Page3,
//             navigationOptions: ({ navigation }) => (
//                 {
//                     tabBarLabel: '购物车',
//                     tabBarIcon: ({ focused, tintColor }) => (
//                         <TabBarItem
//                             tintColor={tintColor}
//                             focused={focused}
//                             selectedImage={ImageResource.tabFindImageNormal}
//                             normalImage={ImageResource.tabFindImageSelected}
//                         />
//                     )
//                 }
//             )
//         },

//         Page4Screen: {
//             screen: Page4,
//             navigationOptions: ({ navigation }) => (
//                 {
//                     tabBarLabel: '我的',
//                     tabBarIcon: ({ focused, tintColor }) => (
//                         <TabBarItem
//                             tintColor={tintColor}
//                             focused={focused}
//                             selectedImage={ImageResource.tabPersonImageNormal}
//                             normalImage={ImageResource.tabPersonImageSelected}
//                         />
//                     )
//                 }
//             )
//         }
//     },

//     // tabScreen配置
//     {
//         tabBarComponent: TabBarBottom, // 自定义  
//         tabBarPosition: 'bottom',
//         swipeEnabled: false,
//         animationEnabled: true,
//         lazy: true,
//         tabBarOptions: {
//             activeTintColor: AppTheme.color,
//             inactiveTintColor: '#979797',
//             labelStyle: {
//                 fontSize: 12, // 文字大小  
//             },
//         }

//     }
// )


// const navigator = StackNavigator(

//     {
//         Tab: { screen: Tab },
//     },

//     {
//         navigationOptions: {
//             // 开启动画 
//             animationEnabled: true,
//             // 开启边缘触摸返回
//             gesturesEnabled: true
//         },
//         mode: 'card',
//         transitionConfig: () => ({
//             // 统一安卓和苹果页面跳转的动画
//             screenInterpolator: CardStackStyleInterpolator.forHorizontal,
//         })
//     }
// );

const mRouter = (...props) => (
    <Router
        backAndroidHandler={onBackPress}
    >
        <Stack hideNavBar key='rootTabView' headerMode='screen' >
            <Tabs
                animationEnabled={false}
                key='tabBar'
                wrap={true}
                showLabel={false}
                swipeEnabled={true}
                headerMode='none'
                icon={Tabicon} // 自定义Icon显示方式
                lazy={false}
                tabBarPosition={'bottom'} // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
            >
                <Stack key="Page1"
                    title='书架'
                    image={ImageResource.tabBookCaseImageNormal}
                    selectedImage={ImageResource.tabBookCaseImageSelected}
                >
                    <Scene component={Page1} key="Page1" />
                </Stack>
                <Stack key="Page2"
                    title='书库'
                    image={ImageResource.tabBookRoomImageNormal}
                    selectedImage={ImageResource.tabBookRoomImageSelected}
                >
                    <Scene component={Page2} key="Page2" />
                </Stack>
                <Stack key="Page3"
                    title='发现'
                    image={ImageResource.tabFindImageNormal}
                    selectedImage={ImageResource.tabFindImageSelected}
                >
                    <Scene component={Page3} key="Page3" />
                </Stack>
                <Stack key="Page4"
                    title='我的'
                    image={ImageResource.tabPersonImageNormal}
                    selectedImage={ImageResource.tabPersonImageSelected}
                >
                    <Scene component={Page4} key="Page4" />
                </Stack>
            </Tabs>
            <Scene component={Page5} key="Page5" />
        </Stack>
    </Router>
)

export default mRouter;
//export default navigator;

