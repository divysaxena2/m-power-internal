import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, List, ListItem, Left, Right, Body, Text } from 'native-base';


type Props = {};
export default class AppList extends Component<Props> {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <List>
                    <ListItem style={styles.listItem}>
                        <Left>
                            <Text style={styles.date}>5 May,2019</Text>
                        </Left>
                        <Body>
                            <Text style={styles.provider}>Kaiser Permanente</Text>
                            <Text note>Bill</Text>

                        </Body>
                        <Right>
                            <Text style={styles.amount}>$500</Text>
                            <Text note style={styles.payText}>Pay Now</Text>
                        </Right>
                    </ListItem>
                </List>

            </StyleProvider>)
    }
}
const styles = StyleSheet.create({
    listItem: {
        height: 56,
        width: 363
    },
    date: {
        height: 16,
        width: 83.3,
        color: '#000000',

        fontSize: 12,
        letterSpacing: 0.47,
        lineHeight: 16
    },
    amount: {
        height: 20,
        width: 60,
        color: '#000000',

        fontSize: 15,
        letterSpacing: 1.06,
        lineHeight: 20,
        textAlign: 'right'

    },
    provider: {
        height: 16,
        width: 128,
        color: '#000000',

        fontSize: 12,
        letterSpacing: 0.47,
        lineHeight: 16
    },
    payText: {
        height: 13,
        width: 47,
        color: '#000000',

        fontSize: 11,
        letterSpacing: 0.52,
        lineHeight: 13,
        textAlign: 'right'
    }
});