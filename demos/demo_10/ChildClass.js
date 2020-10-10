import React from "react";
import { Text, StyleSheet } from "react-native";
import FatherClass from './FatherClass';

export default class ChildClass extends FatherClass {
    renderText = () => {
        return (<Text style={styles.textStyle}>CHILD</Text>);
    }

    onButtonPress = () => {
        console.log('LOG CHILD');
    }
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center'
    }
});




