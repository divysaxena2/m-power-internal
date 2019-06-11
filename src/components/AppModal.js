import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, Image } from 'react-native';
import { Left, Right, Body, ListItem, List } from 'native-base'

export default class AppModal extends Component {
    state = {
        modalVisible: false,
    };

    openModal() {
        this.setState({ modalVisible: true });
    }

    closeModal() {
        this.setState({ modalVisible: false });
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}>
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Image source={require('../assets/paymentSuccess.png')} />
                            <Text style={styles.successText}>Payment Successful</Text>
                            <Text>Confirmation Number</Text>
                            <Text>ABCDERUY21113</Text>
                            <Button
                                onPress={() => this.closeModal()}
                                title="Go to Bill Summary">
                            </Button>
                            <View>
                                <Text>Congrats!You have earned 445 MPowered Points!</Text>
                            </View>

                        </View>
                    </View>
                </Modal>
                <Button
                    onPress={() => this.openModal()}
                    title="Open modal"
                />
            </View >
        );
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
        textAlign: 'center'
    }
});