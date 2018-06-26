import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

//TODO: image looks bad and is not aligned, fix with bkgrd color

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Image 
                    style={styles.logo}
                    source={require('./src/components/images/shopify-logo.png')} 
                    />
                    <Text style={styles.title}>BuildUp</Text>
                </View>
                    <Text style={styles.subtitle}>Powered by React Native</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        resizeMode:'contain',
        width: 100,
        height: 100
    },
    title: {
        color: 'green',
        fontSize:40, 
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'green',
        fontSize: 15,
        fontWeight: '100'
    },
    wrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    }
});