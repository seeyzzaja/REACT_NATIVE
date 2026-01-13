import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export default function Home() {
   const Navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View>
        <Text>homeScrean</Text>
      <TouchableOpacity onPress={()=>Navigation.navigate('Profile')}>
        <Text>ke profile</Text>
      </TouchableOpacity>
    </View>
  );
}
