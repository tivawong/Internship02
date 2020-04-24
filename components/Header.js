import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Header = props => {
    return (
        <View style={{width:'100%', height:90, paddingTop:40, backgroundColor:'tomato',alignItems:'center' }}>
            <Text style={{color: 'black', fontSize:20,marginTop:10}}> {props.title} </Text>
        </View>
    );
}

export default Header;