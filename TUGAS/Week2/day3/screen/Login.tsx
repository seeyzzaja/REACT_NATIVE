import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
     const Navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View>
      <TouchableOpacity onPress={()=>Navigation.replace('registrasi')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
