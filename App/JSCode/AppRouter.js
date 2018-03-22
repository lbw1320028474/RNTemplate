/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import {
//     Scene,
//     Router,
//     Actions,
//     Tabs,
//     Stack,
// } from 'react-native-mobx';
import {
    Scene,
    Router,
    Actions,
    Tabs,
    Stack,
} from 'react-native-router-flux';
import FastImage from 'react-native-fast-image'

import BookCasePage from './Pages/BookCase/BookCasePage'
import BookChoicePage from './Pages/BookChoice/BookChoicePage'
import BookCategoryPage from './Pages/BookCategory/BookCategoryPage'
import BookCommunityPage from './Pages/BookCommunity/BookCommunityPage'

import ImageResource from '../Resource/ImageResource'
import Tabicon from './Components/Tabicon';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import AppTheme from './Themes/AppTheme'


const onBackPress = () => {
    if (Actions.state.index === 0) {
        return false
    }
    Actions.pop()
    return true
}


const mRouter = (...props) => (
    <Router
        backAndroidHandler={onBackPress}
    >
        <Stack
            transitionConfig={() => ({
                screenInterpolator: CardStackStyleInterpolator.forHorizontal
            })}
            hideNavBar key='rootTabView' headerMode='screen' >
            <Tabs
                animationEnabled={false}
                key='tabBar'
                wrap={true}
                showLabel={false}
                swipeEnabled={true}
                headerMode='none'
                icon={Tabicon}
                lazy={false}
                tabBarPosition={'bottom'}
            >
                <Stack key="BookCasePage"
                    title='书架'
                    image={ImageResource.tabBookCaseImageNormal}
                    selectedImage={ImageResource.tabBookCaseImageSelected}
                >
                    <Scene component={BookCasePage} key="BookCasePage" />
                </Stack>
                <Stack key="BookChoicePage"
                    title='精选'
                    image={ImageResource.tabBookRoomImageNormal}
                    selectedImage={ImageResource.tabBookRoomImageSelected}
                >
                    <Scene component={BookChoicePage} key="BookChoicePage" />
                </Stack>
                <Stack key="BookCategoryPage"
                    title='分类'
                    image={ImageResource.tabFindImageNormal}
                    selectedImage={ImageResource.tabFindImageSelected}
                >
                    <Scene component={BookCategoryPage} key="BookCategoryPage" />
                </Stack>
                <Stack key="BookCommunityPage"
                    title='发现'
                    image={ImageResource.tabPersonImageNormal}
                    selectedImage={ImageResource.tabPersonImageSelected}
                >
                    <Scene component={BookCommunityPage} key="BookCommunityPage" />
                </Stack>
            </Tabs>
            {/* <Scene component={Page5} key="Page5" /> */}
        </Stack>
    </Router>
)

export default mRouter;

