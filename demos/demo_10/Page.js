import React from "react";
import { StyleSheet, View } from "react-native";
import FatherClass from './FatherClass';
import ChildClass from './ChildClass';

export default class Page extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <FatherClass />
                <ChildClass />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});




