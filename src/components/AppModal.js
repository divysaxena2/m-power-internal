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
                            <Text>Payment Successful!</Text>
                            <Text>Your Bill Details</Text>
                            <List>
                                <ListItem>
                                    <Text style={{ textAlign: 'right' }}>Provider Name</Text>
                                    <Text style={{ paddingLeft: 29 }}>El Camino Hospital</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={{ textAlign: 'left' }}>Amount</Text>
                                    <Text style={{ paddingLeft: 29 }}>$500</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={{ textAlign: 'right' }}>Payment Method</Text>
                                    <Text style={{ paddingLeft: 29 }}>Credit card ending 3924</Text>
                                </ListItem>
                            </List>
                            <View>
                                <Text>Congrats!You have earned 445 MPowered Points!</Text>
                            </View>
                            <Button
                                onPress={() => this.closeModal()}
                                title="Go to Bill Summary">
                            </Button>
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
        backgroundColor: 'white',
    },
    innerContainer: {
        alignItems: 'center',
    },
});