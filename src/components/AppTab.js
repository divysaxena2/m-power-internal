import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Tab, Tabs, Text } from 'native-base';



type Props = {};
export default class AppTab extends Component<Props> {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Tabs tabBarUnderlineStyle={{ height: 7, borderRadius: 3.5 }}>
                    <Tab heading="Credit Card/Debit Card">
                    </Tab>
                    <Tab heading="Bank Account">
                    </Tab>
                </Tabs>
            </StyleProvider>)
    }
}
const styles = StyleSheet.create({


});