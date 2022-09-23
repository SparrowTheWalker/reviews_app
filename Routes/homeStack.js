import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from "../Screens/home";
import ReviewDetails from "../Screens/reviewDetails";
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle:()=> <Header/>,
            // title: 'Gamezone'
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);