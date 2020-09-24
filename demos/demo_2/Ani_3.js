/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-25 20:07:26
 */
'use strict';

import React from 'react';
import {StyleSheet, SafeAreaView, Button, Animated, Text} from 'react-native';

export default class Ani_3 extends React.Component {
    constructor() {
        super();
        console.log('Ani_3_constructor()');
        this.state = {
            width_1: new Animated.Value(0),
            width_2: new Animated.Value(0),
            width_3: new Animated.Value(0),
        };
    }

    render() {
        console.log('Ani_3_render()');
        return (
            <SafeAreaView>
                <Button title={'Start'} onPress={this.startAni} />
                <Text style={styles.textStyle}>decay</Text>
                <Animated.View
                    style={[{width: this.state.width_1}, styles.Ani]}
                />
                <Text style={styles.textStyle}>spring</Text>
                <Animated.View
                    style={[{width: this.state.width_2}, styles.Ani]}
                />
                <Text style={styles.textStyle}>timing</Text>
                <Animated.View
                    style={[{width: this.state.width_3}, styles.Ani]}
                />
            </SafeAreaView>
        );
    }

    startAni = () => {
        console.log('Ani_3_startAni()');
        Animated.decay(this.state.width_1, {
            deceleration: 0.99,
            velocity: 2,
            useNativeDriver: false,
        }).start();
        Animated.spring(this.state.width_2, {
            toValue: 200,
            friction: 2,
            useNativeDriver: false,
        }).start();
        Animated.timing(this.state.width_3, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };
}

const styles = StyleSheet.create({
    Ani: {
        marginTop: 10,
        height: 100,
        backgroundColor: 'cyan',
    },
    textStyle: {
        fontSize: 25,
    },
});
