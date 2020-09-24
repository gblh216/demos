/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:31:54
 * @LastEditors: hekn
 * @LastEditTime: 2020-09-08 10:02:13
 */
'use strict';

import React from 'react';
import List from './demos/demo_1/List';
import AnimatedTest from './demos/demo_2/AnimatedTest';
import FontTest from './demos/demo_3/FontTest';
import ViewTest from './demos/demo_4/ViewTest';
import ArrayTest from './demos/demo_5/ArrayTest';

export default class App extends React.Component {
    render() {
        return (
            // <List /> //列表数据变化对于子组件生命周期方法的影响
            // <AnimatedTest /> //动画展示
            // <FontTest /> //字体大小和尺寸关系的测试
            <ViewTest /> //测量rn中的宽高和屏幕宽高的比例
            // <ArrayTest /> //数组浅拷贝测试
        );
    }
}