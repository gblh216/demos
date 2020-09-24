/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-26 20:59:56
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

export default class Ani_8 extends React.Component {
    constructor() {
        super();
        console.log('Ani_8_constructor()');
        this.state = {
            deg: new Animated.Value(0),
        };
    }

    render() {
        console.log('Ani_8_render()');

        let deg = this.state.deg.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg'],
        });
        return (
            <SafeAreaView>
                <Button title={'Start'} onPress={this.startAni} />
                <View style={styles.wrapper}>
                    <Animated.View
                        style={[{transform: [{rotate: deg}]}, styles.ani]}
                    />
                    <Animated.View
                        style={[
                            {
                                transform: [
                                    {rotateX: deg},
                                    {rotateY: deg},
                                    {rotateZ: deg},
                                ],
                            },
                            styles.ani,
                        ]}
                    />
                </View>
            </SafeAreaView>
        );
    }

    startAni = () => {
        console.log('Ani_8_startAni()');
        Animated.loop(
            Animated.timing(this.state.deg, {
                toValue: 360,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
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
        backgroundColor: 'cyan',
    },
});
