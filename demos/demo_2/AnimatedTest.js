/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-27 15:54:18
 */
'use strict';

import React from 'react';
import {SafeAreaView} from 'react-native';
import Ani_1 from './Ani_1';
import Ani_2 from './Ani_2';
import Ani_3 from './Ani_3';
import Ani_4 from './Ani_4';
import Ani_5 from './Ani_5';
import Ani_6 from './Ani_6';
import Ani_7 from './Ani_7';
import Ani_8 from './Ani_8';
import Ani_9 from './Ani_9';
import Ani_10 from './Ani_10';

export default class AnimatedTest extends React.Component {
    render() {
        console.log('AnimatedTest_render()');
        return (
            <SafeAreaView>
                {/* 基础动画实现 */}
                {/* <Ani_1 /> */}
                {/* useNativeDriver的使用范围 */}
                {/* <Ani_2 /> */}
                {/* 三种动画配置方式对比：decay,spring,timing */}
                {/* <Ani_3 /> */}
                {/* timing是如何使用Easing的 */}
                {/* <Ani_4 /> */}
                {/* 最常见的两种组合播放 */}
                {/* <Ani_5 /> */}
                {/* 缩放的实现  */}
                {/* <Ani_6 /> */}
                {/* 循环播放 */}
                {/* <Ani_7 /> */}
                {/* 旋转的实现 */}
                {/* <Ani_8 /> */}
                {/* 颜色变换 */}
                {/* <Ani_9 /> */}
                {/* 动画停止的3种方法 */}
                <Ani_10 />
            </SafeAreaView>
        );
    }
}
