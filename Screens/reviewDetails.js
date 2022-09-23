import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from "react-native";
import {globalStyles} from "../styles/global";

export default function ReviewDetails({route, navigation}) {
    const {title, body, rating} = route.params

    // const pressHandler = () => {
    //     navigation.goBack();
    // }

    console.log(rating)
    console.log(title)
    console.log(body)

    return (
        <View style={globalStyles.container}>
            {/*<Text>Review Details</Text>*/}
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
            {/*<Button title={'back to home screen'} onPress={pressHandler}/>*/}
        </View>
    )
}