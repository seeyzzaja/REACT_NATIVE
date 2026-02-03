import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native"

interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
}

interface InputProps {
  onSubmit: (product: Product) => void
}

export default function InputComponent({ onSubmit }: InputProps) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("") // ⬅️ STRING
  const [desc, setDesc] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = () => {
    if (!name || !image || !price) {
      setError("Nama, gambar, dan harga wajib diisi")
      return
    }

    if (isNaN(Number(price))) {
      setError("Harga harus berupa angka")
      return
    }

    setError("")

    onSubmit({
      id: Date.now(),
      title: name,
      price: Number(price),
      image,
      description: desc || "Tidak ada deskripsi",
    })

    // reset form
    setName("")
    setImage("")
    setPrice("")
    setDesc("")
  }

  return (
    <View>
      <Text style={styles.title}>Tambah Produk</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
       placeholderTextColor='#99bcc9'
        placeholder="Nama produk"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
       placeholderTextColor='#99bcc9'
        placeholder="URL gambar"
        style={styles.input}
        value={image}
        onChangeText={setImage}
      />

      <TextInput
       placeholderTextColor='#99bcc9'
        placeholder="Harga"
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TextInput
       placeholderTextColor='#99bcc9'
        placeholder="Deskripsi"
        style={styles.input}
        value={desc}
        onChangeText={setDesc}
      />

      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 12,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    height: 44,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
    color:'black'
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 8,
  },
  submitBtn: {
    marginTop: 16,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "600",
  },
})
