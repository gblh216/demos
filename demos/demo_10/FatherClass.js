import React from "react";
import { Button, Text, StyleSheet, View } from "react-native";

export default class FatherClass extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderText()}
                <Button title={'BUTTON'} onPress={this.onButtonPress} />
            </View>
        );
    }

    renderText = () => {
        return (<Text style={styles.textStyle}>FATHER</Text>);
    }

    onButtonPress = () => {
        console.log('LOG FATHER');
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    textStyle: {
        textAlign: 'center'
    }
});




