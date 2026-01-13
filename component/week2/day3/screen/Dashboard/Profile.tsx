import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export default function Profile() {
  const Navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity >
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
