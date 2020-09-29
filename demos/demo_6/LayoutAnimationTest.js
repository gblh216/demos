import React from 'react';
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native';

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default class LayoutAnimationText extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
        }
    }

    render() {
        return (
            <View style={style.container}>
                {this.state.expanded && (
                    <View style={style.tile}>
                        <Text>I disappear sometimes!</Text>
                    </View>
                )}
                <TouchableOpacity
                    onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                        this.setState({ expanded: !this.state.expanded });
                    }}>
                    <Text>Press me to {this.state.expanded ? "collapse" : "expand"}!</Text>
                </TouchableOpacity>
            </View>
        );
    }

};

const style = StyleSheet.create({
    tile: {
        borderWidth: 0.5,
        borderColor: "#d6d7da"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    }
});


