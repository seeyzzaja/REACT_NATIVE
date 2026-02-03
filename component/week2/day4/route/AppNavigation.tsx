import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import DrawerNavigator from './Drawer';
import Log from '../screen/auth/Log';

const Tab = createMaterialTopTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Log' component={Log}/>
        {/* <Tab.Screen name="Drawer" component={DrawerNavigator} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
