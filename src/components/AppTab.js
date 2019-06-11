import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Tab, Tabs, Text } from 'native-base';

export default (props) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Tabs tabBarUnderlineStyle={{ height: 7, borderRadius: 3.5 }}>
                <Tab heading={props.heading1}>
                </Tab>
                <Tab heading={props.heading2}>
                </Tab>
            </Tabs>
        </StyleProvider>
    )
}
const styles = StyleSheet.create({


});