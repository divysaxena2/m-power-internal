import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Form, Item, Label, Input } from 'native-base';


type Props = {};
export default class Field extends Component<Props> {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Form>
                    <Item floatingLabel>
                        <Label>{this.props.label}</Label>
                        <Input />
                    </Item>
                </Form>
            </StyleProvider>)
    }
}
const styles = StyleSheet.create({

});