/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-26 17:56:01
 */
'use strict';

import React from 'react';
import {StyleSheet, SafeAreaView, Button, Animated, Text} from 'react-native';

export default class Ani_5 extends React.Component {
    constructor() {
        super();
        console.log('Ani_5_constructor()');
        this.state = {
            width_1: new Animated.Value(10),
            height_1: new Animated.Value(10),
            width_2: new Animated.Value(10),
            height_2: new Animated.Value(10),
        };
    }

    render() {
        console.log('Ani_5_render()');
        return (
            <SafeAreaView>
                <Button title={'Start'} onPress={this.startAni} />
                <Text>sequence</Text>
                <Animated.View
                    style={[
                        {
                            width: this.state.width_1,
                            height: this.state.height_1,
                        },
                        styles.Ani,
                    ]}
                />
                <Text>parallel</Text>
                <Animated.View
                    style={[
                        {
                            width: this.state.width_2,
                            height: this.state.height_2,
                        },
                        styles.Ani,
                    ]}
                />
            </SafeAreaView>
        );
    }

    startAni = () => {
        console.log('Ani_5_startAni()');
        Animated.sequence([
            Animated.timing(this.state.width_1, {
                toValue: 300,
                duration: 3000,
                useNativeDriver: false,
            }),
            Animated.timing(this.state.height_1, {
                toValue: 300,
                duration: 3000,
                useNativeDriver: false,
            }),
        ]).start();
        Animated.parallel([
            Animated.timing(this.state.width_2, {
                toValue: 300,
                duration: 3000,
                useNativeDriver: false,
            }),
            Animated.timing(this.state.height_2, {
                toValue: 300,
                duration: 3000,
                useNativeDriver: false,
            }),
        ]).start();
    };
}

const styles = StyleSheet.create({
    Ani: {
        backgroundColor: 'cyan',
    },
});
