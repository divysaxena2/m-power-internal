

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import AppHeader from '../../src/components/AppHeader';
import AppFooter from '../../src/components/AppFooter';
import IconContainer from '../../src/components/IconContainer'

import { Button, FooterTab, StyleProvider, Input, Container, Header, Footer, List, Text, TextInput, Content, InputGroup, Icon, ListItem, Right, Left, Body } from 'native-base';
import IconList from '../components/IconList';
//import { SearchBar } from 'react-native-elements';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class HomeDashboard extends Component<Props> {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <AppHeader />
                    <Content>
                        <View style={{ paddingLeft: 19 }} >
                            <View style={{ paddingTop: 11 }}>
                                <Text style={styles.headings}>Recently used services</Text>
                            </View>
                            <View style={styles.iconSection}>
                                <IconContainer text="Award Points" />
                                <IconContainer text="Bills" />
                                <IconContainer text="Labs" />
                                <IconContainer text="Consultation" />
                            </View>
                            <View style={{ paddingTop: 22 }}>
                                <Text style={styles.headings}>Your alerts</Text>
                            </View>
                            <View style={{ paddingTop: 32.43 }}>
                                <IconList info="Bill is due by 9 May,2019" />
                                <IconList info="Congrats!445 MPowered award points credited in your account" />
                                <IconList info="You have an appointment with Dr. Bill James on 15 May,2019" />
                            </View>
                        </View>
                    </Content>
                    <AppFooter />
                </Container>
            </StyleProvider>

        );
    }
}

const styles = StyleSheet.create({
    headings: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    iconSection: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 22
    }
});
