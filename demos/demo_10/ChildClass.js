/*
 * @Description:
 * @Author: hekn
 * @Date: 2020-10-10 10:09:28
 * @LastEditors: hekn
 * @LastEditTime: 2020-10-29 21:43:18
 */
'use strict';

import FatherClass from './FatherClass';

export default class ChildClass extends FatherClass {
    constructor() {
        super();
    }

    renderText = () => {
        return super.renderText();
    };

    onButtonPress = () => {
        super.onButtonPress();
        console.log('LOG CHILD');
    };
}
