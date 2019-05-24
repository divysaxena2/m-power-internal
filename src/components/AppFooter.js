import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { Button, StyleProvider, Icon, Footer, Text, FooterTab } from 'native-base';

type Props = {};
export default class AppFooter extends Component<Props> {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Footer>
                    <FooterTab>
                        <Button>
                            <Icon name="home" style={{ fontSize: 24, color: 'black' }} />
                            <Text style={{ color: 'black' }}>Home</Text>
                        </Button>
                        <Button>
                            <Icon name="home" style={{ fontSize: 24, color: 'black' }} />
                            <Text style={{ color: 'black' }}>Services</Text>
                        </Button>
                        <Button>
                            <Icon name="home" style={{ fontSize: 24, color: 'black' }} />
                            <Text style={{ color: 'black' }}>Communities</Text>
                        </Button>
                        <Button >
                            <Icon name="settings" style={{ fontSize: 24, color: 'black' }} />
                            <Text style={{ color: 'black' }}>Utilities</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </StyleProvider>)
    }
}