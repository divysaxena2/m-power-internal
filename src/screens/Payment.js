import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
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

// At the top of your file


// Later on in your component

//import { SearchBar } from 'react-native-elements';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class Payment extends Component<Props> {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <AppHeader />
                    <Content>
                        <AppTab />
                        <View>
                            <Field label="Group member ID" />
                            <Field label="Family ID" />
                            <Field label="First Name" />
                            <Field label="Last Name" />
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <FilledButton />
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <OutlineButton />
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <CTATextButton />
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
