/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-10-10 10:09:28
 * @LastEditors: hekn
 * @LastEditTime: 2020-10-29 21:40:31
 */
'use strict';

import React from 'react';
import {Text, StyleSheet} from 'react-native';
import GrandFatherClass from './GrandFatherClass';

export default class FatherClass extends GrandFatherClass {
    constructor() {
        super();
    }

    renderText = () => {
        return <Text style={styles.textStyle}>FATHER</Text>;
    };

    onButtonPress() {
        console.log('LOG FATHER');
    }
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
    },
});
