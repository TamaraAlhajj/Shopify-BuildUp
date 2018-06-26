import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.content}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Login Page</Text>
                </View>
                <View style={styles.form}>
                    <LoginForm />
                </View>
            </View>
        );
    }
}
//4286f4
const styles = StyleSheet.create({
    content: {
        backgroundColor: '#00CC54',
        flex: 1,
    },
    titleWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    title: {
        color:'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});