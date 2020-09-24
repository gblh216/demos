/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-08-25 11:33:20
 * @LastEditors: hekn
 * @LastEditTime: 2020-09-07 11:03:02
 */
'use strict';

import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default class FontTest extends React.Component {
    constructor() {
        super();
        console.log('FontTest_constructor()');
    }

    render() {
        console.log('FontTest_render()');
        let fontSize = 40; //字体大小
        let heigth = 40.5; //字体所占空间的高度
        let top = 6.5; //字体到所占空间的顶部的距离
        return (
            <SafeAreaView>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <View>
                        <View
                            style={{
                                top: top,
                                width: fontSize,
                                height: fontSize,
                                backgroundColor: 'black',
                                position: 'absolute',
                            }}
                        />
                        <Text
                            style={{
                                backgroundColor: 'rgba(255,140,0,0.8)',
                                fontSize: fontSize,
                            }}>
                            醯
                        </Text>
                    </View>
                    <View>
                        <View
                            style={{
                                marginTop: top,
                                width: fontSize,
                                height: fontSize,
                                backgroundColor: 'black',
                                position: 'absolute',
                            }}
                        />
                        <View
                            style={{
                                width: fontSize,
                                height: heigth,
                                backgroundColor: 'rgba(255,140,0,0.8)',
                            }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
