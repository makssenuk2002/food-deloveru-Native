import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Home,OrderDelivery,Restaurant} from "./screens";
import AppLoading from "expo";
import Tabs from './navigation/tabs'
import { bootstrap } from "./bootstrap";
import { useState } from "react";
const Stack = createStackNavigator()

const App = () => {
    const [isReady, setIsReady] = useState(false)
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={"Home"}
            >
                <Stack.Screen name={"Home"} component={Tabs}/>
                <Stack.Screen name={"OrderDelivery"} component={OrderDelivery}/>
                <Stack.Screen name={"Restaurant"} component={Restaurant}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App