import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigationLogin from "./AppNavgationLogin";
import DrawerNavigator from "./Drawer";
import StackNavigation from "./StackNavigation";

export default function RootNavigationda() {
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
