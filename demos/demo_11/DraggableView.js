/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-10-10 18:01:51
 * @LastEditors: hekn
 * @LastEditTime: 2020-10-12 10:59:56
 */
'use strict';

import React from 'react';
import {Animated, PanResponder} from 'react-native';

export default class DraggableView extends React.Component {
    constructor() {
        super();
        this.state = {
            valueXY: new Animated.ValueXY(), // inits to zero
        };
        this.state.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                {
                    dx: this.state.valueXY.x, // x,y are Animated.Value
                    dy: this.state.valueXY.y,
                },
            ]),
            onPanResponderRelease: () => {
                Animated.spring(
                    this.state.valueXY, // Auto-multiplexed
                    {toValue: {x: 0, y: 0}}, // Back to zero
                ).start();
            },
        });
    }

    render() {
        return (
            <Animated.View {...this.state.panResponder.panHandlers} style={this.state.valueXY.getLayout()}>
                {this.props.children}
            </Animated.View>
        );
    }
}
