/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-09-08 12:51:54
 */
'use strict';

import React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';

export default class ViewTest extends React.Component {
    constructor() {
        super();
        console.log('ViewTest_constructor()');
    }

    render() {
        console.log('ViewTest_render()');
        let width = Dimensions.get('window').width;
        return (
            <SafeAreaView>
                <View
                    style={{width: 374, height: 300, backgroundColor: 'orange'}}
                />
                <Text>{width}</Text>
            </SafeAreaView>
        );
    }
}
