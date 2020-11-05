/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-10-10 10:09:28
 * @LastEditors: hekn
 * @LastEditTime: 2020-10-29 21:22:41
 */
'use strict';

import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChildClass from './ChildClass';

export default class Page extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <ChildClass />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
