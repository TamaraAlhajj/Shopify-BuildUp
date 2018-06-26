import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const MeasuringSystems = t.enums.of([
    'CM',
    'INCHES',
  ], 'MeasuringSystems')



const User = t.struct({
  chest: t.Number,
  waist: t.Number,
  inseam: t.Number,
  shoulders: t.Number,
  sleeves : t.Number,
});

const formStyles = {
    ...Form.stylesheet,
    formGroup: {
      normal: {
        marginBottom: 5
      },
    },
    controlLabel: {
      normal: {
        color: 'white',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      },
      // the style applied when a validation error occours
      error: {
        color: 'red',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      }
    }
  }

const options = {
  /*fields: {
    chest: {
      error: 'err'
    },
    waist: {
      error: 'err'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },*/
  stylesheet: formStyles,
};

export default class InputFormSizes extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  
  render() {
    return (
    <View style={styles.wrapper}>
        <ScrollView>
        <Text style={styles.title}>Enter your measurements below (cm):</Text>
        <KeyboardAvoidingView style={{flex : 1}} keyboardVerticalOffset={-10} behavior="position">
            <Form 
                ref={c => this._form = c}
                type={User} 
                options={options}
            />
            <Button style={styles.button}
            title="Find my size!"
            onPress={this.handleSubmit}
            />
        </KeyboardAvoidingView>
        </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'darkgrey',
        flex: 1, 
        //padding: 0,
        justifyContent: 'center',
        //alignItems: 'center'
        padding: 50
    },
    keyboard: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
    },
    button: {
        color: 'white',
        flex: 1,    
        fontWeight: 'bold',
        padding: 20
    },
    title: {
        color: 'white',
        fontSize:25, 
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
