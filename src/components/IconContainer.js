import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View, Image } from 'react-native';
import { Button, StyleProvider, Icon, Footer, Text, FooterTab } from 'native-base';

type Props = {};
export default class IconContainer extends Component<Props> {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <View style={styles.container} >
                    <View style={{ paddingLeft: 10 }}>
                        <Image source={require('../assets/ribbon.png')} style={styles.img} />
                    </View>
                    <View>
                        <Text style={styles.iconTitle}>{this.props.text}</Text>
                    </View>
                </View>
            </StyleProvider >)
    }
}
const styles = StyleSheet.create({
    container: {
        height: 110,
        width: 80,
        paddingLeft: 20
    },
    iconTitle: {
        color: '#000000',
        //font- family: Roboto;
        fontSize: 13,
        letterSpacing: 0.62,
        lineHeight: 18,
        textAlign: 'center'
    },
    img: {
        height: 40,
        width: 34
    }

});