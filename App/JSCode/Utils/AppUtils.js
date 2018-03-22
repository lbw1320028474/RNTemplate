import React, { Component } from 'react';
import {
    Dimensions,
    PixelRatio,
    Platform
} from 'react-native';
module.exports = {
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    pixel: 1 / PixelRatio.get(),
    textScale: PixelRatio.getFontScale(),
}