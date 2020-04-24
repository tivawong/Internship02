import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const GameOverScreen = props => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text> The Game is Over ! </Text>
            <Text>Number of rounds: {props.roundsNumber} </Text>
            <Text>Number was : {props.userNumber}</Text>

            <Button title="NEW GAME" onPress={props.onRestart}></Button>
        </View>
    )
}
export default GameOverScreen;