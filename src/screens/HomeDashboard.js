

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import AppHeader from '../../src/components/AppHeader';
import AppFooter from '../../src/components/AppFooter';
import IconContainer from '../../src/components/IconContainer'

import { Button, FooterTab, StyleProvider, Input, Container, Header, Footer, List, Text, TextInput, Content, InputGroup, Icon, ListItem, Right, Left, Body } from 'native-base';
import IconList from '../components/IconList';

export default class HomeDashboard extends Component {
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
                                <IconContainer text="Award Points" bgSource={require('../assets/award_points_container.png')} imgSource={require('../assets/award_points_icon.png')} />
                                <IconContainer text="Bills" bgSource={require('../assets/bills_container.png')} imgSource={require('../assets/bill_icon.png')} />
                                <IconContainer text="Labs" bgSource={require('../assets/labs_container.png')} imgSource={require('../assets/labs_icon.png')} />
                                <IconContainer text="Consultation" bgSource={require('../assets/second_opinions_container.png')} imgSource={require('../assets/second_opinions_icon.png')} />
                            </View>
                            <View style={{ paddingTop: 22, position: 'relative' }}>
                                <Text style={styles.headings}>Your alerts</Text>
                            </View>
                            <View style={{ paddingTop: 32.43 }}>
                                <IconList info="Bill is due by 9 May,2019" source={require('../assets/bill.png')} />
                                <IconList info="Congrats!445 MPowered award points credited in your account" source={require('../assets/award_point.png')} />
                                <IconList info="You have an appointment with Dr. Bill James on 15 May,2019" source={require('../assets/calendar.png')} />
                            </View>
                        </View>
                    </Content>
                    <AppFooter activeState={0} />
                </Container>
            </StyleProvider>

        );
    }
}

const styles = StyleSheet.create({
    headings: {
        color: '#000000',
        //font- family: Roboto;
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 1.56,
        lineHeight: 34
    },
    iconSection: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 22
    }
});
