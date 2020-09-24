/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-09-02 09:49:26
 */
'use strict';

import React from 'react';
import {StyleSheet, SafeAreaView, Button, Animated} from 'react-native';

export default class Ani_10 extends React.Component {
    constructor() {
        super();
        console.log('Ani_10_constructor()');
        this.state = {
            width: new Animated.Value(0),
        };
    }

    render() {
        console.log('Ani_10_render()');
        return (
            <SafeAreaView>
                <Button title={'StopAni'} onPress={this.stopAni} />
                <Button title={'StartAni'} onPress={this.startAni} />
                <Animated.View
                    style={[{width: this.state.width}, styles.Ani_1]}
                />
            </SafeAreaView>
        );
    }

    stopAni = () => {
        // Animated.timing(this.state.width).stop();
        // this.state.width.stopAnimation();
        console.log('hekn', 'setValue(200)', 'begin');
        this.state.width.setValue(200);
        console.log('hekn', 'setValue(200)', 'end');
    };

    startAni = () => {
        Animated.timing(this.state.width, {
            toValue: 300,
            duration: 2000,
            useNativeDriver: false,
        }).start(({finished}) => {
            if (finished === true) {
                console.log('hekn', 'setValue(0)', 'begin');
                this.state.width.setValue(0);
                console.log('hekn', 'setValue(0)', 'end');
            } else {
                console.log('hekn', 'setValue(100)', 'begin');
                this.state.width.setValue(100);
                console.log('hekn', 'setValue(100)', 'end');
            }
        });
    };
}

const styles = StyleSheet.create({
    Ani_1: {
        height: 100,
        backgroundColor: 'cyan',
    },
});
