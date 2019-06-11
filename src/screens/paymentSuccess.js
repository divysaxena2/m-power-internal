import React, { Component } from 'react';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material';
import { StyleSheet, View, Image } from 'react-native';
import { StyleProvider, Container, Text, Button } from 'native-base';
import AppHeader from '../components/AppHeader';
import FilledButton from '../components/FilledButton';



export default class PaymentSuccess extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container >
                    <AppHeader />
                    <View style={styles.container}>
                        <View style={styles.innerContainer}>
                            <Image source={require('../assets/paymentSuccess.png')} />
                            <Text style={styles.successText}>Payment Successful</Text>
                            <Text style={{ paddingTop: 16 }}>Confirmation Number</Text>
                            <Text style={{ paddingTop: 9 }}>ABCDERUY21113</Text>
                            <View style={{ paddingTop: 25 }}>
                                <Button style={styles.btn} >
                                    <Text >Go to Bill Summary</Text>
                                </Button>
                            </View>


                            <View style={{ paddingTop: 21, paddingLeft: 93, paddingRight: 58 }}>
                                <Text style={styles.message}>Congrats!You have earned 445 MPowered Points!</Text>
                            </View>

                        </View>
                    </View>
                </Container>
            </StyleProvider>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,

        justifyContent: 'center',

    },
    innerContainer: {
        alignItems: 'center',
    },
    successText: {
        color: '#000000',
        fontSize: 17,
        letterSpacing: 1.2,
        lineHeight: 22,
        textAlign: 'center',
        paddingTop: 33
    },
    btn: {
        height: 31,
        width: 225,
        borderRadius: 6,
        backgroundColor: '#FFA400',
        paddingLeft: 20


    },
    message: {
        color: '#000000',
        fontSize: 13,
        letterSpacing: 0.62,
        lineHeight: 18,
        textAlign: 'center'
    }
});