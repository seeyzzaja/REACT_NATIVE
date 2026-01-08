import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native'
import { products as initialProducts } from './Data'
import InputComponent from './Input'

interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
}

export default function ListProduk() {
  const [modal, setModal] = useState(false)

  const [product, setProduct] = useState<Product[]>(initialProducts)

  const handleSubmit = (newProduct: Product) => {
    setProduct(prev => [newProduct, ...prev])
    setModal(false)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.title}</Text>
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fa1eeff',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 4,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e90ff',
  },
  description: {
    fontSize: 13,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#007AFF',
    margin: 20,
    paddingVertical: 14,
    borderRadius: 10,
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
})
