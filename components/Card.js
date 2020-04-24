import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Card = props => {
        return (
            <View style={{alignItems:'center',shadowColor:'red',shadowOffset: {width:0, height:2}, shadowRadius:6, shadowOpacity:0.26, backgroundColor: 'white' ,elevation:5, padding:20, borderRadius: 10}}>
                {props.children}
            </View>
        )
}

export default Card;