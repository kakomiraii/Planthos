import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
import { PlantDetails } from "./screens/";

// tabs
import Tabs from "./navigation/tabs";

import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {/* Tabs */}
            <Stack.Screen name="Home" component={Tabs}/>

            {/* Screens */}
            <Stack.Screen name="PlantDetails" component={PlantDetails} options={{ headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
    return <App />
}