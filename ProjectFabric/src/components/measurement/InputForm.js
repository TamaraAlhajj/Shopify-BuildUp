import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity , ScrollView, KeyboardAvoidingView} from 'react-native';

export default class InputForm extends Component {
  render() {
    return (
    <ScrollView>
    <View style={styles.container}>
            <KeyboardAvoidingView style={{flex : 1}} behavior="padding">
                <Text style={styles.title}>
                    What are your measurements
                </Text>
                <TextInput
                    placeholder="Height"
                    placeholderTextColor="black"
                    keyboardType='numeric'
                    style={styles.input}
                />
                <TextInput
                    placeholder="Chest"
                    placeholderTextColor="black"
                    keyboardType='numeric'
                    style={styles.input}
                />
                <TextInput
                    placeholder="Waist"
                    placeholderTextColor="black"
                    keyboardType='numeric'
                    style={styles.input}
                />
                <TextInput
                    placeholder="Inseam"
                    placeholderTextColor="black"
                    keyboardType='numeric'
                    style={styles.input}
                />
                <TextInput
                    placeholder="Shoulders"
                    placeholderTextColor="black"
                    keyboardType='numeric'
                    style={styles.input}
                />
                <TextInput
                    placeholder="Sleeves"
                    placeholderTextColor="black"
                    keyboardType='numeric'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Find my size!</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
     
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		padding: 20
    },
    title: {
        padding: 40,
        textAlign: 'center',
        color: 'grey',
        fontSize: 30,
        fontWeight: '700'        
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