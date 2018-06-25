import React, { Component } from 'react';
import {Button} from 'react-native';
import {TextInput, StyleSheet, Text, View } from 'react-native';
//import { StackNavigator} from 'react-navigation';

export default class Splash extends Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.title}>BuildUp</Text>
                <Text style={styles.subtitle}>Powered by React Native</Text>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'blue',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize:40, 
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontWeight: '200'
    }
});