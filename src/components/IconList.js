import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View, Image } from 'react-native';
import { Button, StyleProvider, Icon, List, ListItem, Text, } from 'native-base';

export default (props) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <List>
                <ListItem>
                    <Image source={props.source} style={styles.img} />
                    <Text style={styles.info}>{props.info}</Text>
                </ListItem>
            </List>
        </StyleProvider>)
}

const styles = StyleSheet.create({
    info: {
        paddingLeft: 15.14,
        color: '#737373',
        fontSize: 15,
        letterSpacing: 1.06,
        lineHeight: 20
    },
    img: {
        height: 20.57,
        width: 15.43
    }

});