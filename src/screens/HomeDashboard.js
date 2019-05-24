

import React, { Component } from 'react';
import { Platform, StyleSheet, Visew } from 'react-native';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import AppHeader from '../../src/components/AppHeader';
import AppFooter from '../../src/components/AppFooter';
import IconContainer from '../../src/components/IconContainer'

import { Button, FooterTab, StyleProvider, Input, Container, Header, Footer, List, Text, TextInput, Content, InputGroup, Icon, ListItem, Right, Left, Body } from 'native-base';
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
                        <List>
                            <ListItem>
                                <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Recently used services</Text>
                            </ListItem>
                            <ListItem>
                                <IconContainer text="Award Points" iconName="ios-ribbon" />
                                <IconContainer text="Bills" iconName="ios-ribbon" />
                                <IconContainer text="Labs" iconName="ios-ribbon" />
                                <IconContainer text="Consultation" iconName="ios-ribbon" />
                            </ListItem>
                            <ListItem>
                                <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Your alerts</Text>
                            </ListItem>
                            <ListItem >
                                <Icon name="ios-ribbon" />
                                <Text style={styles.info} >Bill is due by 9th May,2019</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name="ios-ribbon" />
                                <Text style={styles.info}>Congrats!445 Mpowered Award Points credited in your account</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name="ios-ribbon" />
                                <Text style={styles.info}>You have an appointment with Dr. Bill James on 15 May,2019</Text>
                            </ListItem>
                        </List>
                    </Content>
                    <AppFooter />
                </Container>
            </StyleProvider>

        );
    }
}

const styles = StyleSheet.create({
    info: {
        color: '#444444',
        fontSize: 16,
        lineHeight: 22
    }
});
