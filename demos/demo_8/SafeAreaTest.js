import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default class SafeAreaTest extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Page content</Text>
            </SafeAreaView>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
});



