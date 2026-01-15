import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "../screen/Login";

type Props = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

const Tab =createMaterialTopTabNavigator()
export default function AppNavigationLogin({ setIsLogin,setUser } :Props) {
  return (
   
      <Tab.Navigator>
        <Tab.Screen name="Login">
          {() => <Login
           setIsLogin={setIsLogin}
           setUser={setUser} />}
        </Tab.Screen>
      </Tab.Navigator>
  
  );
}
