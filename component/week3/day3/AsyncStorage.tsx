import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Async() {
  const [nama, setNama] = useState('');
  const [data, setData] = useState('');
  const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', jsonValue);
      getData();
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    const value = await AsyncStorage.getItem('my-key');
    console.log('Data dari storage:', value);
    if (value) {
      setData(JSON.parse(value))
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text></Text>
      <TextInput
        placeholder="masukkan nama"
        value={nama}
        onChangeText={setNama}
        style={{ backgroundColor: 'grey' }}
      />
      <TouchableOpacity
        onPress={() => storeData(nama)}
        style={{
          backgroundColor: 'blue',
          margin: 10,
          padding: 10,
          alignItems: 'center',
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>hasil async : {data}</Text>
    </View>
  );
}
