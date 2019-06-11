import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Form, Item, Label, Input } from 'native-base';

export default (props) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Form style={{ width: 343 }}>
                <Item stackedLabel style={styles.input}>
                    <Label>{props.label}</Label>
                    <Input />
                </Item>
            </Form>
        </StyleProvider>)
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#f5f4f8'
    }
});