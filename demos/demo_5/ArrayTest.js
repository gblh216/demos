/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-09-08 10:00:35
 */
'use strict';

import React from 'react';
import {SafeAreaView, Button} from 'react-native';

export default class ArrayTest extends React.Component {
    constructor() {
        super();
        console.log('ViewTest_constructor()');
        this.array = [1, 2, 3];
    }

    render() {
        console.log('ViewTest_render()');
        return (
            <SafeAreaView>
                <Button title={'changeArray'} onPress={this.changeArray} />
            </SafeAreaView>
        );
    }

    changeArray = () => {
        console.log('before', this.array[0]);
        let tempArray = this.array;
        tempArray[0] = 0;
        console.log('after', this.array[0]);
    };
}
