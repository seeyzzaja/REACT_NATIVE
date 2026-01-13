import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screen/Login";
import Registrasi from "../screen/Registrasi";

const stack =createNativeStackNavigator()

export default function AppNavigations(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                name="Login"
                component={Login}/>
                <stack.Screen
                name="registrasi"
                component={Registrasi}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}