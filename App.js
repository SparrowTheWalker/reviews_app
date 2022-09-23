import React, {useState} from "react";
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {StyleSheet} from "react-native";
import {Draw} from './Routes/drawer';


const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    if (!fontsLoaded) {
        return (
            <Draw/>
        );
    } else {
        return (
            <AppLoading startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});



