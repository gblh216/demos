/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-25 17:22:33
 */
'use strict';

import React from 'react';
import {StyleSheet, SafeAreaView, Button, Animated} from 'react-native';

export default class Ani_1 extends React.Component {
    constructor() {
        super();
        console.log('Ani_1_constructor()');
        this.state = {
            width: new Animated.Value(0),
        };
    }

    render() {
        console.log('Ani_1_render()');
        return (
            <SafeAreaView>
                <Button title={'Start'} onPress={this.startAni} />
                <Animated.View
                    style={[{width: this.state.width}, styles.Ani]}
                />
            </SafeAreaView>
        );
    }

    startAni = () => {
        console.log('Ani_1_startAni()');
        Animated.timing(this.state.width, {
            toValue: 300,
            duration: 5000,
            useNativeDriver: false,
        }).start();
    };
}

const styles = StyleSheet.create({
    Ani: {
        height: 100,
        backgroundColor: 'cyan',
    },
});
