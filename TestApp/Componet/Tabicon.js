/**
 * Created by Rabbit 下午6:40
 */

import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import Dpi from '../Utils/Dpi'
import FastImage from 'react-native-fast-image'

const TabIcon = (props) => {
    // console.log(props);
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <FastImage
                source={!props.focused ? props.image : props.selectedImage}
                style={[{ height: 27, width: 27, marginTop: 5 }]}
            />
            <Text
                style={{ textAlign: 'center', color: props.tintColor, paddingLeft: Dpi.d(5), marginTop: Dpi.d(2), fontSize: Dpi.s(20) }}
            >
                {props.title}
            </Text>
        </View>
    )
};


export default TabIcon;