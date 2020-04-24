import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableWithoutFeedback, keyboard, Keyboard, Alert } from 'react-native'

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };  

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid number !', 
                'Number has to be a number between 1 to 99', 
                [{text : 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        
        setConfirmed(true);
        setSelectNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = 
            <Card style={{marginTop: 20}}>
                <Text> You selected </Text>
                <View style={{marginTop:20, alignItems:'center'}}>
                    <NumberContainer>{selectedNumber}</NumberContainer>
                    <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
                </View>
            </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={{flex:1,padding:10,alignItems:'center'}}>
                <Text style={{fontSize: 20, marginVertical: 10}}> The Game Screen </Text>
                    <Card style={{alignItems:'center',shadowColor:'red',shadowOffset: {width:0, height:2}, shadowRadius:6, shadowOpacity:0.26, backgroundColor: 'white' ,elevation:5, padding:20, borderRadius: 10}}>
                        <Text>Select A Number !</Text>
                        <TextInput 
                            style={{height:30,width: 100, borderBottomColor: 'grey', borderWidth:1, marginVertical:10,alignItems:'center'}} 
                            blurOnSumbmit 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType="number-pad"
                            maxLength={2}
                            onChangeText={numberInputHandler}
                            value={enteredValue}
                        />

                        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15}}>
                            <View style={{width:100}}>
                                <Button title="Reset" onPress={resetInputHandler} color="#c717fc" />
                            </View>
                            <View style={{width:100}}>
                                <Button title="Confirm" onPress={confirmInputHandler} color="#f7287b"/>
                            </View> 
                        </View>
                    </Card>
                    {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}


export default StartGameScreen;

