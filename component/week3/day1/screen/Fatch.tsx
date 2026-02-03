import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';


interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  thumbnail: string;
}


export default function FatchApi() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products');
        setData(res.data.products);
      } catch {
        setError('Gagal mengambil data produk');
      } finally {
        setLoading(false);
      }
    };

    fetching();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading produk...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
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

          <Text style={styles.category}>
            Category: {item.category}
          </Text>

          <Text style={styles.price}>
            Rp {item.price.toLocaleString('id-ID')}
          </Text>

          <Text style={styles.stock}>
            Stock: {item.stock}
          </Text>
        </View>
      )}
    />
  );
}


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
