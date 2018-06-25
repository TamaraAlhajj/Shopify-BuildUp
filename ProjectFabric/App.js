import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {StackNavigator} from 'react-navigation';

import Splash from './Splash';
import InputForm from './input-form.js'

//import Login from './src/components/Login/Login';

export default class App extends React.Component {

  render() {
    return (
      // Didn't figure out how to do the navigation thing.
      // So for now we can just do it this way
      // comment and comment ... :3 
      <InputForm/>
      //<Splash/>
    );
  }
}

/*
const App = StackNavigator({
  Home: { screen: Splash },
  Profile: { screen: InputForm },
});

/*
class createStackNavigator({
  SplashPage: {screen: Splash},
  InputFormPage: {screen: Login},
});

*/