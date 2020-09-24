/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-26 16:46:40
 */
'use strict';

import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Button,
    Animated,
    Easing,
    Text,
} from 'react-native';

export default class Ani_4 extends React.Component {
    constructor() {
        super();
        console.log('Ani_4_constructor()');
        this.state = {
            width_1: new Animated.Value(0),
            width_2: new Animated.Value(0),
            width_3: new Animated.Value(0),
            width_4: new Animated.Value(0),
            width_5: new Animated.Value(0),
            width_6: new Animated.Value(0),
            width_7: new Animated.Value(0),
            width_8: new Animated.Value(0),
        };
    }

    render() {
        console.log('Ani_4_render()');
        return (
            <SafeAreaView>
                <Button title={'Start'} onPress={this.startAni} />
                <Text style={styles.textStyle}>linear</Text>
                <Animated.View
                    style={[{marginLeft: this.state.width_1}, styles.Ani]}
                />
                <Text style={styles.textStyle}>sin</Text>
                <Animated.View
                    style={[{marginLeft: this.state.width_2}, styles.Ani]}
                />
                <Text style={styles.textStyle}>exp</Text>
                <Animated.View
                    style={[{marginLeft: this.state.width_3}, styles.Ani]}
                />
                <Text style={styles.textStyle}>
                    bezier(0.34, 1.56, 0.64, 1)
                </Text>
                <Animated.View
                    style={[{marginLeft: this.state.width_4}, styles.Ani]}
                />
                <Text style={styles.textStyle}>
                    bezier(0.36, -0.3, 0.98, 0.6)
                </Text>
                <Animated.View
                    style={[{marginLeft: this.state.width_5}, styles.Ani]}
                />
                <Text style={styles.textStyle}>
                    bezier(0.5, -1.22, 0.53, 1.81)
                </Text>
                <Animated.View
                    style={[{marginLeft: this.state.width_6}, styles.Ani]}
                />
                <Text style={styles.textStyle}>bezier(0, 0.69, 1, 0.32)</Text>
                <Animated.View
                    style={[{marginLeft: this.state.width_7}, styles.Ani]}
                />
                <Text style={styles.textStyle}>
                    bezier(0.05, 0.72, 0.34, 1.35)
                </Text>
                <Animated.View
                    style={[{marginLeft: this.state.width_8}, styles.Ani]}
                />
            </SafeAreaView>
        );
    }

    startAni = () => {
        console.log('Ani_4_startAni()');
        Animated.timing(this.state.width_1, {
            toValue: 300,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
        Animated.timing(this.state.width_2, {
            toValue: 300,
            duration: 3000,
            easing: Easing.sin,
            useNativeDriver: false,
        }).start();
        Animated.timing(this.state.width_3, {
            toValue: 300,
            duration: 3000,
            easing: Easing.exp,
            useNativeDriver: false,
        }).start();
        Animated.timing(this.state.width_4, {
            toValue: 300,
            duration: 3000,
            easing: Easing.bezier(0.34, 1.56, 0.64, 1),
            useNativeDriver: false,
        }).start();
        Animated.timing(this.state.width_5, {
            toValue: 300,
            duration: 3000,
            easing: Easing.bezier(0.36, -0.3, 0.98, 0.6),
            useNativeDriver: false,
        }).start();
        Animated.timing(this.state.width_6, {
            toValue: 300,
            duration: 3000,
            easing: Easing.bezier(0.5, -1.22, 0.53, 1.81),
            useNativeDriver: false,
        }).start();
        Animated.timing(this.state.width_7, {
            toValue: 300,
            duration: 3000,
            easing: Easing.bezier(0, 0.69, 1, 0.32),
            useNativeDriver: false,
        }).start();
        Animated.timing(this.state.width_8, {
            toValue: 300,
            duration: 3000,
            easing: Easing.bezier(0.05, 0.72, 0.34, 1.35),
            useNativeDriver: false,
        }).start();
    };
}

const styles = StyleSheet.create({
    Ani: {
        width: 60,
        height: 60,
        backgroundColor: 'cyan',
    },
    textStyle: {
        fontSize: 25,
    },
});
