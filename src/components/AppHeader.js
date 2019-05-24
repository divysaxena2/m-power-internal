import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import { StyleSheet } from 'react-native';
import { Button, StyleProvider, Input, Header, Icon, Right, Left, Body, InputGroup } from 'native-base';


type Props = {};
export default class AppHeader extends Component<Props> {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-contact" style={{ color: 'black', fontSize: 30 }} />
                        </Button>
                    </Left>
                    <Body style={{
                        height: 38
                    }}>
                        <Input placeholder="Tell me what you want to do?" style={styles.searchBar} />
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-qr-scanner" style={{ fontSize: 30, color: 'black' }} />
                        </Button>
                    </Right>
                </Header>
            </StyleProvider>)
    }
}
const styles = StyleSheet.create({
    searchBar: {
        color: '#fff',
        width: 272.51,
        borderWidth: 0.5,
        borderColor: '#015BA8',
        borderRadius: 5
    }
});