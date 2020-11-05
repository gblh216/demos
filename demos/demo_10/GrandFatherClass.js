/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-10-10 10:09:28
 * @LastEditors: hekn
 * @LastEditTime: 2020-10-29 21:34:04
 */
'use strict';

import React from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';

export default class GrandFatherClass extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderText()}
                <Button title={'BUTTON'} onPress={this.onButtonPress} />
            </View>
        );
    }

    renderText() {
        return <Text style={styles.textStyle}>GRANDFATHER</Text>;
    }

    onButtonPress() {
        console.log('LOG GRANDFATHER');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    textStyle: {
        textAlign: 'center',
    },
});
