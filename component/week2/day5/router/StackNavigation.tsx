import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DrawerNavigator from './Drawer';
import Profile from '../screen/Profile';


const Tab = createMaterialTopTabNavigator();
type Props = {
  user:string;
};

export default function StackNavigation({ user }:Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Drawer">
        {() => <DrawerNavigator user={user} />}
      </Tab.Screen>

      <Tab.Screen name="Profile">
        {() => <Profile user={user} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

