import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { StackNavigator, } from 'react-navigation';
import Splash from './Splash';
import Login from './src/components/Login/Login';

export default class App extends Component {
  render() {
    return (
      //<Splash/>
      <Login/>
    );
  }
}

/**const App = StackNavigator({
  SplashPage: {screen: Splash},
  LoginPage: {screen: Login},
});**/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
