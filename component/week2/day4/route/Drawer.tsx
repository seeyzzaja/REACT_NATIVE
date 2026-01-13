import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inbox from '../screen/dashboard/Inbox';
import OutBox from '../screen/dashboard/OutBox';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inbox" component={Inbox} />
      <Drawer.Screen name="Outbox" component={OutBox} />
    </Drawer.Navigator>
  );
}
