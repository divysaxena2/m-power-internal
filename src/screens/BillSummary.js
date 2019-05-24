import React, { Component } from 'react';
import { Platform, StyleSheet, Visew } from 'react-native';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import AppHeader from '../../src/components/AppHeader';
import AppFooter from '../../src/components/AppFooter';
import { StyleProvider, Container, Content } from 'native-base';
import AppList from '../../src/components/AppList';
import SummaryCard from '../../src/components/SummaryCard'
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
export default class BillSummary extends Component<Props> {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <AppHeader />
                    <Content>
                        <SummaryCard />
                        <AppList />
                        <AppList />
                        <AppList />
                        <AppList />
                    </Content>
                    <AppFooter />
                </Container>
            </StyleProvider>

        );
    }
}

const styles = StyleSheet.create({

});
