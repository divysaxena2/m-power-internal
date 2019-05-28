import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View, Image } from 'react-native';
import { Button, StyleProvider, Icon, List, ListItem, Text, } from 'native-base';

type Props = {};
export default class IconList extends Component<Props> {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <List>
                    <ListItem>
                        <Image source={require('../assets/ribbon.png')} style={styles.img} />
                        <Text style={styles.info}>{this.props.info}</Text>
                    </ListItem>
                </List>
            </StyleProvider>)
    }
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
        height: 26,
        width: 24.14
    }

});