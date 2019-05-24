import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { Button, StyleProvider, Icon, Footer, Text, FooterTab } from 'native-base';

type Props = {};
export default class AppHeader extends Component<Props> {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <View style={styles.container} >
                    <Icon style={styles.iconImage} name={this.props.iconName} />
                    <Text style={styles.iconTitle}>{this.props.text}</Text>
                </View>
            </StyleProvider>)
    }
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 25
    },
    iconTitle: {
        height: 41,
        width: 60.2,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 19
    },
    iconImage: {
        paddingLeft: 10
    }

});