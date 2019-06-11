import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Button, Text } from 'native-base';



export default (props) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </StyleProvider>)
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