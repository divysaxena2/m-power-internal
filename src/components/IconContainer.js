import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View, Image } from 'react-native';
import { Button, StyleProvider, Icon, Footer, Text, FooterTab } from 'native-base';


export default (props) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <View style={styles.container} >
                <View style={styles.backgroundContainer}>
                    <Image source={props.bgSource} />
                </View>
                <View style={styles.overlayImage}>
                    <Image source={props.imgSource} />
                </View>
                {/* <View>
                        <Text style={styles.iconTitle}>{props.text}</Text>
                    </View> */}
            </View>
        </StyleProvider >)
}

const styles = StyleSheet.create({
    backgroundContainer: {
        position: 'absolute',
        //top: 0,
        //bottom: 0,
        //left: 0,
        //right: 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    overlayImage: {

    },
    // container: {
    //     height: 110,
    //     width: 80,
    //     paddingLeft: 20
    // },
    // iconTitle: {
    //     color: '#000000',
    //     //font- family: Roboto;
    //     fontSize: 13,
    //     letterSpacing: 0.62,
    //     lineHeight: 18,
    //     textAlign: 'center'
    // },
    // img: {
    //     height: 40,
    //     width: 34
    // }

});