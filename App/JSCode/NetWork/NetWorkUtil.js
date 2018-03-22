import React, { Component } from 'react';
import {
    Dimensions,
    PixelRatio
} from 'react-native';
module.exports = {
    /**
 * 基于fetch的get方法
 * @method get
 * @param {string} url
 * @param {function} callback 请求成功回调
 */
    getJsonByGet: function (url, successCallback, failCallback) {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch(function (err) {
                if (failCallback && failCallback !== null) {
                    failCallback(err);
                }
            });
    },
    /**
 * 基于fetch的get方法
 * @method POST
 * @param {string} url
 * @param {string}  paramsJson post请求的参数
 * @param {function} callback 请求成功回调
 */
    getJsonByPost: function (url, paramsJson, successCallback, failCallback, timeOut = 10000) {
        let isTimeout = false;
        let isFetchOver = false;
        let timer = null;
        console.log('开始请求了')
        if (timeOut <= 20000) {     //如果超时多余20秒，则直接等待网络的自动超时而无需处理
            timer = setInterval(() => {     //麻蛋，fetch没有超时属性，需要自己做一个定时器
                if (isFetchOver) {
                    return;
                } else {
                    isTimeout = true;
                    //console.log('请求超时了')
                    failCallback('请求超时');
                }
                if (timer && timer !== null) {
                    clearInterval(timer);
                }
            }, timeOut)
        }
        fetch(url, {
            method: 'POST',
            type: 'json',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'/*  */ },
            body: paramsJson
        })
            .then((response) => response.text())
            .then((responseText) => {
                isFetchOver = true;
                if (timer && timer !== null) {
                    clearInterval(timer);
                }
                if (!isTimeout) {
                    successCallback(JSON.parse(responseText));
                }
            })
            .catch(function (err) {
                isFetchOver = true;
                if (timer && timer !== null) {
                    clearInterval(timer);
                }
                if (!isTimeout) {
                    if (failCallback && failCallback !== null) {
                        failCallback(err);
                    }
                }
            });
    },



}