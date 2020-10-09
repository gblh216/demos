import React from "react";
import { Button, Text, StyleSheet, StatusBar, View } from "react-native";

const styleTypes = ['default', 'dark-content', 'light-content'];

export default class StatusBarTest extends React.Component {
    constructor() {
        super();
        this.state = {
            isBarVisible: false,
            styleStatusBar: styleTypes[0],
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <StatusBar hidden={!this.state.isBarVisible} backgroundColor="blue" barStyle={this.state.styleStatusBar} />

                <Text style={styles.textStyle}>StatusBar Visibility: {this.state.isBarVisible ? 'Visible' : 'Hidden'}</Text>
                <Button title="Change StatusBar Visible" onPress={() => { this.setState({ isBarVisible: !this.state.isBarVisible }); }} />

                <Text style={styles.textStyle}>StatusBar Style: {this.state.styleStatusBar}</Text>
                <Button title="Change StatusBar Style" onPress={this.changeStyleStatusBar} />

            </View>
        );
    }

    changeStyleStatusBar = () => {
        let styleId = styleTypes.indexOf(this.state.styleStatusBar) + 1;
        if (styleId === styleTypes.length) {
            this.setState({ styleStatusBar: styleTypes[0] });
        } else {
            this.setState({ styleStatusBar: styleTypes[styleId] });
        }
    };


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'orange',
    },

    textStyle: {
        textAlign: 'center'
    }
});




