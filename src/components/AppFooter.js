import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { Image, StyleSheet } from 'react-native';
import { Button, StyleProvider, Icon, Footer, Text, FooterTab } from 'native-base';

type Props = {};
export default class AppFooter extends Component<Props> {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Footer>
                    <FooterTab>
                        <Button>
                            <Image source={require('../assets/ribbon.png')} style={{ height: 34, width: 38 }} />
                            <Text uppercase={false} style={styles.captions}>Home</Text>
                        </Button>
                        <Button>
                            <Image source={require('../assets/ribbon.png')} style={{ height: 34, width: 38 }} />
                            <Text uppercase={false} style={styles.captions}>Services</Text>
                        </Button>
                        <Button>
                            <Image source={require('../assets/ribbon.png')} style={{ height: 34, width: 38 }} />
                            <Text uppercase={false} style={styles.captions}>Circles</Text>
                        </Button>
                        <Button >
                            <Image source={require('../assets/ribbon.png')} style={{ height: 34, width: 38 }} />
                            <Text uppercase={false} style={styles.captions}>Utilities</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </StyleProvider>)
    }
}
const styles = StyleSheet.create({
    captions: {
        color: '#003A64',
        fontSize: 13,
        letterSpacing: 0.62,
        lineHeight: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center'

    }
});