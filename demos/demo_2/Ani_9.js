/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-27 15:04:59
 */
'use strict';

import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Button,
    Animated,
    View,
    Easing,
} from 'react-native';

export default class Ani_9 extends React.Component {
    constructor() {
        super();
        console.log('Ani_9_constructor()');
        this.state = {
            color: new Animated.Value(0),
        };
    }

    render() {
        console.log('Ani_9_render()');

        let color = this.state.color.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(255,0,0,1)', 'rgba(0,255,0,1)'],
        });
        return (
            <SafeAreaView>
                <Button title={'Start'} onPress={this.startAni} />
                <View style={styles.wrapper}>
                    <Animated.View
                        style={[{backgroundColor: color}, styles.ani]}
                    />
                </View>
            </SafeAreaView>
        );
    }

    startAni = () => {
        console.log('Ani_9_startAni()');
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.color, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
                Animated.timing(this.state.color, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
            ]),
        ).start();
    };
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ani: {
        margin: 20,
        height: 100,
        width: 100,
    },
});
