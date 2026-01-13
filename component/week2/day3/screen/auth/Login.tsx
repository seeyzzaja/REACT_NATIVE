import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export default function Login() {
  const Navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View>
      <TouchableOpacity onPress={() => Navigation.replace('LoginRegister')}>
        <Text>login</Text>
      </TouchableOpacity>
    </View>
  );
}
