import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { Image, StyleSheet } from 'react-native';
import { Button, StyleProvider, Icon, Footer, Text, FooterTab } from 'native-base';


export default (props) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Footer>
                <FooterTab>
                    <Button>
                        {props.activeState === 0 ?
                            <Image source={require('../assets/home.png')} style={{ height: 34, width: 38 }} /> : <Image source={require('../assets/home_gray.png')} style={{ height: 34, width: 38 }} />}
                        <Text uppercase={false} style={styles.captions}>Home</Text>
                    </Button>
                    <Button>
                        {props.activeState === 1 ?
                            <Image source={require('../assets/services.png')} style={{ height: 30, width: 38 }} /> : <Image source={require('../assets/services_gray.png')} style={{ height: 30, width: 38 }} />}
                        <Text uppercase={false} style={styles.captions}>Services</Text>
                    </Button>
                    <Button>
                        {props.activeState === 2 ?
                            <Image source={require('../assets/circles.png')} style={{ height: 34, width: 38 }} /> : <Image source={require('../assets/circles_gray.png')} style={{ height: 24, width: 24 }} />}
                        <Text uppercase={false} style={styles.captions}>Circles</Text>
                    </Button>
                    <Button >
                        {props.activeState === 3 ?
                            <Image source={require('../assets/utilities.png')} style={{ height: 34, width: 38 }} /> : <Image source={require('../assets/utilities_gray.png')} style={{ height: 24, width: 24 }} />}
                        <Text uppercase={false} style={styles.captions}>Utilities</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </StyleProvider>)
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