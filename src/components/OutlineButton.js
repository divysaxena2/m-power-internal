import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Button, Text } from 'native-base';


type Props = {};
export default class OutlineButton extends Component<Props> {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Button rounded light style={styles.buttonBody}>
                    <Text style={styles.buttonText}>Get Assistance</Text>
                </Button>
            </StyleProvider>)
    }
}
const styles = StyleSheet.create({
    buttonBody: {
        height: 36,
        width: 189,
        borderStyle: 'solid',
        borderColor: '#A6A5AC',
        borderWidth: 0.5,
        borderRadius: 18
    },
    buttonText: {
        height: 18,
        paddingLeft: 39,
        opacity: 0.54,
        color: '#000000',
        //font- family: "Roboto Light";
        fontSize: 13,
        letterSpacing: 0.62,
        lineHeight: 18,
        textAlign: 'center'
    }
});