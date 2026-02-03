
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/Login';
import RegisterScreen from '../screen/Registrasi';

type Props = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

const Stack = createNativeStackNavigator();

export default function AppNavigationLogin({ setIsLogin,setUser } :Props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login'>
 {() => <LoginScreen
           setIsLogin={setIsLogin}
           setUser={setUser} />}
      </Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
