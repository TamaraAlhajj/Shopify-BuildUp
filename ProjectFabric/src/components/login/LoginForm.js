import React, { Component } from 'react';
import {  Text, StyleSheet, TextInput, TouchableOpacity , KeyboardAvoidingView, ScrollView} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
        <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TextInput
                placeholder="username"
                placeholderTextColor="black"
                style={styles.input}
            />
            <TextInput
                placeholder="password"
                placeholderTextColor="black"
                secureTextEntry 
                style={styles.input}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		padding: 20
    },
    input:{
        fontSize: 20,
        height: 60,
        backgroundColor: 'white',
        opacity: 0.4,
        marginBottom: 15,
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor:'green',
        paddingVertical: 20,

    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
        fontSize: 20
    }
});