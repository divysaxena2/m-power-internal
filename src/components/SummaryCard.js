import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Card, CardItem, Left, Right, Body, Text } from 'native-base';



type Props = {};
export default class SummaryCard extends Component<Props> {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Card style={styles.cardContainer}>
                    <CardItem>
                        <Text style={styles.content}>Your bills due</Text>
                        <Right>
                            <Text>$3635.84</Text>
                        </Right>
                    </CardItem>
                </Card>
            </StyleProvider>)
    }
}
const styles = StyleSheet.create({
    cardContainer: {
        height: 56,
        width: 326.46,
        opacity: 0.5,
        borderRadius: 5,
        backgroundColor: '#000000'
    },
    content: {
        color: '#737373',

        fontSize: 15,
        letterSpacing: 1.06,
        lineHeight: 20
    }

});