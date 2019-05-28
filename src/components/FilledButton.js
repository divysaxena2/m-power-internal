import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Button, Text } from 'native-base';


type Props = {};
export default class FilledButton extends Component<Props> {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Button rounded style={styles.buttonBody}>
                    <Text style={styles.buttonText}>Pay Now</Text>
                </Button>
            </StyleProvider>)
    }
}
const styles = StyleSheet.create({
    buttonBody: {
        backgroundColor: '#FFA400',
        height: 36,
        width: 91,
        borderRadius: 18,
        backgroundColor: '#FFA400'
    },
    buttonText: {
        height: 18,
        color: '#FFFFFF',
        //font- family: "Roboto Black"; 
        fontSize: 12,
        letterSpacing: 0.47,
        lineHeight: 16
    }
});