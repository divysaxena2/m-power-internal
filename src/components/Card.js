import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, Image } from 'react-native';
import { StyleProvider, Text, Card, CardItem, Body, Right } from 'native-base';


export default (props) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Card>
                <CardItem style={[styles.cardContainer, { backgroundColor: props.bg ? props.bg : "" }]}>
                    <Body style={{ justifyContent: 'center' }}>
                        <Text style={styles.text}>
                            {props.text}
                        </Text>
                    </Body>
                    <Right>
                        <Image source={props.source} />
                    </Right>
                </CardItem>
            </Card>
        </StyleProvider>
    )
}
const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
        fontSize: 13,
        letterSpacing: 0.62,
        lineHeight: 18,
        textAlign: 'center'
    },
    cardContainer: {
        height: 85,
        width: 163,
        borderRadius: 7
    }

});