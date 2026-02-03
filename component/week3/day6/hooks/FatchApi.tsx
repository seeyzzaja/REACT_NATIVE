// components/UsersWithAxios.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import api from './Data';
import axios from 'axios';
const UsersWithAxios = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const source = axios.CancelToken.source(); // Cancellation

    api
      .get('/1', { cancelToken: source.token })
      .then(res => setUsers(res.data.results))
      .catch(err => {
        if (axios.isCancel(err)) console.log('Request cancelled');
      })
      .finally(() => setLoading(false));

    return () => source.cancel();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={item => item.ability}
        renderItem={({ item }) => (
          <View>
            <Text>{item.ability.name}</Text>
            <Image source={{ uri: item.ability.url }} resizeMode="contain" style={{width:50,height:50}} />
          </View>
        )}
      />
    </View>
  );
};

export default UsersWithAxios;
