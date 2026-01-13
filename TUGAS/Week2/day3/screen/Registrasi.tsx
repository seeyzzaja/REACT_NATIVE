import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export default function Registrasi() {
     const Navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View>
      <TouchableOpacity onPress={()=>Navigation.replace('Login')}>
        <Text>REGISTRASI</Text>
      </TouchableOpacity>
    </View>
  );
}
