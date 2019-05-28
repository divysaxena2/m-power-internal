import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View, Image } from 'react-native';
import { Button, StyleProvider, Input, Header, Icon, Right, Left, Body, InputGroup } from 'native-base';


type Props = {};
export default class AppHeader extends Component<Props> {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Header style={{ paddingTop: 43.12, paddingBottom: 14.39 }} >
                    <View>
                        <Button transparent>
                            <Icon name="ios-contact" style={{ color: '#fff', fontSize: 27 }} />
                        </Button>
                    </View>
                    <View style={styles.searchSection}>
                        <Input placeholder="Tell me what you want to do?" placeholderTextColor="#fff" style={styles.searchBar} />
                        <Icon name="ios-search" style={styles.searchIcon} />
                    </View>
                    <View style={{ paddingLeft: 10.49, paddingRight: 10 }}>
                        <Button transparent>
                            <Image source={require('../assets/scanner.png')} />
                        </Button>
                    </View>
                </Header>
            </StyleProvider>)
    }
}
const styles = StyleSheet.create({
    searchSection: {
        width: 272.51,
        height: 38,
        flexDirection: 'row',
        backgroundColor: '#015BA8',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        color: '#fff',
    },
    searchIcon: {
        color: '#fff',
        fontSize: 12.5,
        paddingRight: 14.84,
        paddingLeft: 5.47

    }
});