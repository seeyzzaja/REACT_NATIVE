import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigationLogin from "./AppNavgationLogin";
import DrawerNavigator from "./Drawer";
import StackNavigation from "./StackNavigation";

export default function RootNavigation() {
  const [isLogin, setIsLogin] = useState(false);
  const [user,setUser] =useState('')
  return (
    <NavigationContainer>
      {isLogin
        ? <StackNavigation user={user}/>
        : <AppNavigationLogin 
        setIsLogin={setIsLogin}
        setUser={setUser} />
      }
    </NavigationContainer>
  );
}
