

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Card from '../components/Card'

import { Button, FooterTab, StyleProvider, Input, Container, Header, Footer, List, Text, TextInput, Content, InputGroup, Icon, ListItem, Right, Left, Body } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class HomeDashboard extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <AppHeader />
                    <Content>
                        <Grid style={styles.gridContainer}>
                            <Col>
                                <Row>
                                    <Card text="Second Opinions" source={require('../assets/secondOpinion.png')} bg='#00A0DF' />
                                </Row>
                                <Row>
                                    <Card text="Consults" source={require('../assets/consults.png')} bg='#FFA400' />
                                </Row>
                                <Row>
                                    <Card text="Medication" source={require('../assets/medication.png')} bg='#A32053' />
                                </Row>
                                <Row>
                                    <Card text="Vision" source={require('../assets/vision.png')} bg='#004987' />
                                </Row>
                                <Row>
                                    <Card text="Labs" source={require('../assets/labs.png')} bg='#00A0DF' />
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Card text="Diagnoses" source={require('../assets/diagnoses.png')} bg='#E08433' />
                                </Row>
                                <Row>
                                    <Card text="Bills" source={require('../assets/bills.png')} bg='#004987' />
                                </Row>
                                <Row>
                                    <Card text="Consents" source={require('../assets/consents.png')} bg='#E08433' />
                                </Row>
                                <Row>
                                    <Card text="Advanced Directives" source={require('../assets/directives.png')} bg='#00A0DF' />
                                </Row>
                                <Row>
                                    <Card text="Dental" source={require('../assets/dental.png')} bg='#A32053' />
                                </Row>
                            </Col>
                        </Grid>
                    </Content>
                    <AppFooter activeState={1} />
                </Container>
            </StyleProvider>

        );
    }
}

const styles = StyleSheet.create({
    gridContainer: {
        paddingLeft: 19,
        paddingTop: 31.71
    }
});
