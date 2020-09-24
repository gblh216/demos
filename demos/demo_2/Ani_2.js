/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-25 17:39:14
 */
'use strict';

import React from 'react';
import {StyleSheet, SafeAreaView, Button, Animated} from 'react-native';

export default class Ani_2 extends React.Component {
    constructor() {
        super();
        console.log('Ani_2_constructor()');
        this.state = {
            opacity: new Animated.Value(0),
        };
    }

    render() {
        console.log('Ani_2_render()');
        return (
            <SafeAreaView>
                <Button title={'Start'} onPress={this.startAni} />
                <Animated.View
                    style={[{opacity: this.state.opacity}, styles.Ani]}
                />
            </SafeAreaView>
        );
    }

    startAni = () => {
        console.log('Ani_2_startAni()');
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 3000,
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
