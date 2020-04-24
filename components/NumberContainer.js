import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const NumberContainer = props => {
    return (
        <View style={{ borderWidth:2, borderColor:'#c717fc', borderRadius: 10, padding: 10, marginVertical: 10,alignContent: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 22, color:'#f7287b'}}> {props.children} </Text>
        </View>
    )
}

export default NumberContainer;
