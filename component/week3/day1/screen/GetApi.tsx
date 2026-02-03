import axios from 'axios';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import api from './Api';
import React, { useState, useEffect } from 'react';
import { useNetworkingInfo } from '../Networking/NetInfo';

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  thumbnail: string;
};

const UserWithAxios = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { online, typeConection } = useNetworkingInfo();

  useEffect(() => {
    if (!online) {
      setLoading(false);
      Alert.alert('kamu offline');
      return;
    }
    const source = axios.CancelToken.source();

    api
      .get('/products', { cancelToken: source.token })
      .then(res => setData(res.data.products))
      .catch(err => {
        if (axios.isCancel(err)) console.log('request di batalkan');
      })
      .finally(() => setLoading(false));
    return () => source.cancel();
  }, [online]);

  if (loading) return <ActivityIndicator size={'large'} />;

  return (
    <View>
      <Text style={{ color: online ? 'green' : 'red' }}>
        Status: {online ? 'Online' : 'Offline'}
      </Text>
      <Text>Connection type: {typeConection}</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.description} numberOfLines={2}>
              {item.description}
            </Text>

            <Text style={styles.category}>Category: {item.category}</Text>

            <Text style={styles.price}>
              Rp {item.price.toLocaleString('id-ID')}
            </Text>

            <Text style={styles.stock}>Stock: {item.stock}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default UserWithAxios;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f5f5f5',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,

    elevation: 4,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  imageWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },

  description: {
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
  },

  category: {
    fontSize: 12,
    color: '#888',
    marginBottom: 6,
  },

  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 4,
  },

  stock: {
    fontSize: 12,
    color: '#d32f2f',
  },
});
