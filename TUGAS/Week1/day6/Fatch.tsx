import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { products as initialProducts } from './Data';
import InputComponent from './Input';
import { useWishlist } from '../../../component/week3/day6/hooks/useWishList';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export default function ListProduk() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const numColumns = isLandscape ? 3 : 2;

  const spacing = 16;
  const cardWidth =
    (width - spacing * (numColumns + 1)) / numColumns;

  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState<Product[]>(initialProducts);

  
  const { toggleWishlist, isWishlisted } = useWishlist();

  const handleSubmit = (newProduct: Product) => {
    setProduct(prev => [newProduct, ...prev]);
    setModal(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        key={numColumns}
        numColumns={numColumns}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={[styles.card, { width: cardWidth }]}>
        
            <TouchableOpacity
              style={styles.wishlistButton}
              onPress={() => toggleWishlist(item.id)}
            >
              <Text style={styles.wishlistIcon}>
                {isWishlisted(item.id) ? '❤️' : '🤍'}
              </Text>
            </TouchableOpacity>

            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.price}>Rp {item.price}</Text>
              <Text style={styles.description} numberOfLines={3}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => setModal(true)}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>+ Tambah Produk</Text>
      </TouchableOpacity>

      <Modal visible={modal} animationType="slide" transparent>
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <InputComponent onSubmit={handleSubmit} />

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModal(false)}
            >
              <Text style={styles.closeText}>Keluar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fa1eeff',
  },

  list: {
    padding: 8,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 8,
    elevation: 4,
    overflow: 'hidden',
  },

  wishlistButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10,
  },

  wishlistIcon: {
    fontSize: 22,
  },

  image: {
    width: '100%',
    height: 160,
    backgroundColor: '#f2f2f2',
  },

  info: {
    padding: 10,
  },

  name: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },

  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 4,
  },

  description: {
    fontSize: 12,
    color: '#666',
  },

  addButton: {
    backgroundColor: '#007AFF',
    margin: 16,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },

  closeButton: {
    marginTop: 15,
    backgroundColor: '#e53935',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  closeText: {
    color: '#fff',
    fontWeight: '600',
  },
});
