import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Register from "../screen/auth/Register"
import Login from "../screen/auth/Login"
import BottomTabsNavigator from "./ButtomTabsNavigator"


const Stack =createNativeStackNavigator()

function AppNavigator(){
    return(
<NavigationContainer >
    <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{headerShown:true}}>
        <Stack.Screen 
        name="Login"
        component={Login}
        options={{animation:'simple_push'}}/>
        <Stack.Screen
        name="LoginRegister"
        component={Register}/>
        <Stack.Screen
        name="DashBoard"
        component={BottomTabsNavigator}
        options={{headerShown:false}}/>
    </Stack.Navigator>
    
</NavigationContainer>
    )
}

export default AppNavigator