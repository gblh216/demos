/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-28 16:00:28
 */
'use strict';

import React from 'react';
import {Text} from 'react-native';

export default class Item extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Item_shouldComponentUpdate(nextProps, nextState)');
        console.log(
            'this.props.itemData.data.name:',
            this.props.itemData.data.name,
            'nextProps.itemData.data.name',
            nextProps.itemData.data.name,
        );
        if (this.props.itemData.data.name !== nextProps.itemData.data.name) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        console.log('Item_render()');
        return <Text>{this.props.itemData.data.name}</Text>;
    }
}
