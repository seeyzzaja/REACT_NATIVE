import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Dashboard/Home';
import Profile from '../screen/Dashboard/Profile';

const Tabs = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={Home} options={{animation:'fade'}}/>
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
}
