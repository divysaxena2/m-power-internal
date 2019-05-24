import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import AppHeader from '../../src/components/AppHeader';
import AppFooter from '../../src/components/AppFooter'
import IconContainer from '../../src/components/IconContainer'
import { StyleProvider, Container, Content, List, ListItem, Icon, Text } from 'native-base';

type Props = {};
export default class ServicesDashboard extends Component<Props> {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <AppHeader />
                    <Content>
                        <List>
                            <ListItem>
                                <IconContainer text="Second Opinion" iconName="ios-ribbon" />
                                <IconContainer text="Diagnosis" iconName="ios-ribbon" />
                                <IconContainer text="Visits" iconName="ios-ribbon" />
                                <IconContainer text="Medication" iconName="ios-ribbon" />
                            </ListItem>
                            <ListItem>
                                <IconContainer text="Finances" iconName="ios-ribbon" />
                                <IconContainer text="Consents" iconName="ios-ribbon" />
                                <IconContainer text="Vision" iconName="ios-ribbon" />
                                <IconContainer text="Wills" iconName="ios-ribbon" />
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

});
