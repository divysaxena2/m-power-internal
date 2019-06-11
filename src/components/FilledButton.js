import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Button, Text } from 'native-base';

export default (props) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Button style={styles.buttonBody}>
                <Text uppercase={false} style={styles.buttonText}>{props.title}</Text>
            </Button>
        </StyleProvider>)
}

const styles = StyleSheet.create({
    buttonBody: {
        height: 31,
        width: 225,
        borderRadius: 6,
        backgroundColor: '#FFA400'
    },
    buttonText: {
        color: '#FFFFFF',
        paddingLeft: 53,
        //font- family: "Roboto Black";
        fontSize: 13,
        letterSpacing: 0.62,
        lineHeight: 18,
        textAlign: 'center'
    }
});