/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-26 20:24:04
 */
'use strict';

import React from 'react';
import {StyleSheet, SafeAreaView, Button, Animated, View} from 'react-native';

export default class Ani_7 extends React.Component {
    constructor() {
        super();
        console.log('Ani_7_constructor()');
        this.state = {
            width: new Animated.Value(100),
            height: new Animated.Value(300),
        };
    }

    render() {
        console.log('Ani_7_render()');
        return (
            <SafeAreaView>
                <Button title={'Start'} onPress={this.startAni} />
                <Animated.View
                    style={[
                        {width: this.state.width, height: this.state.height},
                        styles.ani,
                    ]}
                />
                <View style={styles.view} />
            </SafeAreaView>
        );
    }

    startAni = () => {
        console.log('Ani_7_startAni()');

        Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(this.state.width, {
                        toValue: 300,
                        duration: 2000,
                        useNativeDriver: false,
                    }),
                    Animated.timing(this.state.height, {
                        toValue: 100,
                        duration: 2000,
                        useNativeDriver: false,
                    }),
                ]),
                Animated.parallel([
                    Animated.timing(this.state.width, {
                        toValue: 100,
                        duration: 2000,
                        useNativeDriver: false,
                    }),
                    Animated.timing(this.state.height, {
                        toValue: 300,
                        duration: 2000,
                        useNativeDriver: false,
                    }),
                ]),
            ]),
        ).start();
    };
}

const styles = StyleSheet.create({
    view: {
        width: 300,
        height: 100,
        backgroundColor: 'orange',
    },
    ani: {
        backgroundColor: 'cyan',
    },
});
