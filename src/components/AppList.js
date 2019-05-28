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
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={styles.date}>5 May,2019</Text>
                        </View>
                        <Body style={{ paddingLeft: 20 }}>
                            <Text style={styles.provider}>Kaiser Permanente</Text>
                            <Text note style={{ fontSize: 11 }}>Bill</Text>
                        </Body>
                        <View style={{ paddingLeft: 33 }}>
                            <Text style={styles.amount}>$500</Text>
                            <Text style={styles.payText}>Pay Now</Text>
                        </View>
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
        //fontFamily: "Roboto Medium"; 
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
        height: 15,
        opacity: 0.4,
        color: '#000000',
        // fontFamily: Roboto;
        fontSize: 11,
        letterSpacing: 1.02,
        lineHeight: 15,
        textAlign: 'right',
        textDecorationLine: 'underline'
    }
});