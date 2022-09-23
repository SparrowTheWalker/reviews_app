import React from 'react';
import Home from "../Screens/home";
import About from "../Screens/about";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import ReviewDetails from "../Screens/reviewDetails";

const Drawer = createDrawerNavigator()

export function Draw() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => {
                const filteredProps = {
                    ...props,
                    state: {
                        ...props.state,
                        // To hide single option (routeName) => routeName !== 'HiddenPage1',
                        // To hide multiple options you can add the && condition.
                        routeNames: props.state.routeNames.filter(routeName => routeName !== 'ReviewDetails'),
                        routes: props.state.routes.filter(route => route.name !== 'ReviewDetails'),
                    },
                };
                return (
                    <DrawerContentScrollView {...filteredProps}>
                        <DrawerItemList {...filteredProps} />
                    </DrawerContentScrollView>
                );
            }}>
                <Drawer.Screen name="HomeStack" component={Home}/>
                <Drawer.Screen name="ReviewDetails" component={ReviewDetails}
                               initialParams={{rating: 0, title: '', body: ''}}/>
                <Drawer.Screen name="AboutStack" component={About}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}/*
{
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    }
})*/
;

// export default createAppContainer(Drawer);