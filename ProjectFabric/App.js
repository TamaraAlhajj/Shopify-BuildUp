import React, { Component } from 'react';
//import {StackNavigator} from 'react-navigation';

import Splash from './Splash';
import InputForm from './src/components/measurement/InputForm'
import Login from './src/components/login/Login';

export default class App extends React.Component {

  render() {
    return (
      <InputForm/>
      //<Splash/>
      //<Login/>
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
