import React, { Component } from 'react';
import { Platform, StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import AppHeader from '../../src/components/AppHeader';
import AppFooter from '../../src/components/AppFooter';
import { StyleProvider, Container, Content, Tabs } from 'native-base';
import Field from '../../src/components/Field';
import FilledButton from '../../src/components/FilledButton'
import AppList from '../../src/components/AppList';

import OutlineButton from '../components/OutlineButton';
import CTATextButton from '../components/CTATextButton';
import AppTab from '../components/AppTab'
import AppModal from '../components/AppModal';



export default class Payment extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <AppHeader />
                    <Content style={{ paddingLeft: 30, paddingRight: 28 }}>
                        <AppTab heading1="Credit/Debit Card" heading2="Bank Account" />
                        <View>
                            <Field label="Group member ID" />
                            <Field label="Family ID" />
                            <Field label="First Name" />
                            <Field label="Last Name" />
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <FilledButton title="Upload a scan" />
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <OutlineButton title="Upload a doctor's report" />
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <CTATextButton title="View More" />
                        </View>

                    </Content>
                    <AppFooter />
                </Container>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({

});
