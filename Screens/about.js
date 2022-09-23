import React, {useState} from 'react';
import {StyleSheet, View, Text , Button} from "react-native";
import {globalStyles} from "../styles/global";

export default function About({navigation}){
    return(
        <View style={globalStyles.container}>
            {/*<Text>Review Details</Text>*/}

            {/*
            //sending data to another page
*/}
            <Text>This is about the App</Text>
            {/*<Button title={'back to home screen'} onPress={pressHandler}/>*/}
        </View>
    )
}