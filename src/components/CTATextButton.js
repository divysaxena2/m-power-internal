import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Button, Text } from 'native-base';


type Props = {};
export default class CTATextButton extends Component<Props> {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Text style={styles.buttonText}>View More</Text>
            </StyleProvider>)
    }
}
const styles = StyleSheet.create({

    buttonText: {
        textDecorationLine: 'underline',
        height: 18,
        paddingLeft: 39,
        opacity: 0.54,
        color: '#F7B500',
        //font- family: "Roboto Black";
        fontSize: 13,
        letterSpacing: 0.62,
        lineHeight: 18,
        textAlign: 'center'
    }
});