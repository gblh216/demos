/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-26 18:51:03
 */
'use strict';

import React from 'react';
import {StyleSheet, SafeAreaView, Button, Animated} from 'react-native';

export default class Ani_6 extends React.Component {
    constructor() {
        super();
        console.log('Ani_6_constructor()');
        this.state = {
            scale_1: new Animated.Value(0),
            scale_2: new Animated.Value(0),
        };
    }

    render() {
        console.log('Ani_6_render()');
        return (
            <SafeAreaView>
                <Button title={'Start'} onPress={this.startAni} />
                <Animated.View
                    style={[
                        {transform: [{scale: this.state.scale_1}]},
                        styles.Ani,
                    ]}
                />
                <Animated.View
                    style={[
                        {transform: [{scale: this.state.scale_2}]},
                        styles.Ani,
                    ]}
                />
            </SafeAreaView>
        );
    }

    startAni = () => {
        console.log('Ani_6_startAni()');
        Animated.timing(this.state.scale_1, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
        Animated.spring(this.state.scale_2, {
            toValue: 1,
            friction: 2,
            useNativeDriver: true,
        }).start();
    };
}

const styles = StyleSheet.create({
    Ani: {
        width: 300,
        height: 300,
        backgroundColor: 'cyan',
    },
});
