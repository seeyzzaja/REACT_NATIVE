import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function OpImage() {
  const [camera, setCamera] = useState('');
  const [galeri, setGaleri] = useState('');

  const openImage = async () => {
    try {
      const openCamera = await launchCamera({
        mediaType: 'photo',
        quality: 0.5,
        saveToPhotos:true
      });
      setCamera(openCamera.assets?.[0]?.uri || '');
    } catch (error) {
      console.log(error);
    }
  };

  const Galeri = async () => {
    try {
      const openGaleri = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
        selectionLimit:0
        
      });
      setGaleri(openGaleri.assets?.[0]?.uri || '');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Gambar</Text>

      <TouchableOpacity style={styles.buttonCamera} onPress={openImage}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonGallery} onPress={Galeri}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>

      <View style={styles.previewWrapper}>
        <View style={styles.card}>
          <Text style={styles.label}>Hasil Camera</Text>

          {camera ? (
            <>
              <Image source={{ uri: camera }} style={styles.image} />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => setCamera('')}
              >
                <Text style={styles.deleteText}>Hapus</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.placeholder}>Belum ada gambar</Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Hasil Gallery</Text>

          {galeri ? (
            <>
              <Image source={{ uri: galeri }} style={styles.image} />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => setGaleri('')}
              >
                <Text style={styles.deleteText}>Hapus</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.placeholder}>Belum ada gambar</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  buttonCamera: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonGallery: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  previewWrapper: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
    elevation: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeholder: {
    fontSize: 12,
    color: '#999',
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: '#E53935',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  deleteText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
});
