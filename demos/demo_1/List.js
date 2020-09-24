/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-08-28 16:15:22
 */
'use strict';

import React from 'react';
import {FlatList, Button, SafeAreaView} from 'react-native';
import Item from './Item';

export default class List extends React.Component {
    constructor() {
        super();
        console.log('List_constructor()');
        this.state = {
            list: [
                {number: '11111111', data: {id: '1', name: 'aaa', age: 11}},
                {number: '22222222', data: {id: '2', name: 'bbb', age: 22}},
                {number: '33333333', data: {id: '3', name: 'ccc', age: 33}},
            ],
        };
    }

    render() {
        console.log('List_render()');
        return (
            <SafeAreaView>
                <Button title={'button'} onPress={this.onButtonPress} />
                <FlatList
                    data={this.state.list}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </SafeAreaView>
        );
    }

    renderItem = ({item}) => {
        console.log('List_renderItem({item})', item);
        return <Item itemData={item} />;
    };

    // keyExtractor = (item) => {
    //     // console.log('List_keyExtractor(item)', item);
    //     return item.data.id;
    // };

    keyExtractor = (item) => item.data.id;

    onButtonPress = () => {
        console.log('List_onButtonPress()');

        // 方法1（子组建生命周期函数判断失效）
        // let tempList = this.state.list.concat([]);
        // tempList[0].data.name = 'wtf';
        // this.setState({list: tempList});

        //方法2（子组建生命周期函数判断生效）
        // let tempList = this.state.list.concat([]);
        // tempList.shift();
        // tempList.unshift({
        //     number: '11111111',
        //     data: {id: '1', name: 'wtf', age: 11},
        // });
        // this.setState({list: tempList});

        //方法3（子组建生命周期函数判断失效）
        // let tempList = this.state.list.concat([]);
        // this.setState({
        //     list: tempList.map((item) => {
        //         if (item.data.name === 'aaa') {
        //             item.data.name = 'wtf';
        //         }
        //         return item;
        //     }),
        // });

        //方法4（子组建生命周期函数判断生效）
        let tempList = this.state.list.concat([]);
        this.setState({
            list: tempList.map((item) =>
                item.data.name === 'aaa'
                    ? {...item, data: {id: '1', name: 'wtf', age: 11}}
                    : item,
            ),
        });
    };
}
