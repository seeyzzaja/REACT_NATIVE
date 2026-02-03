import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

type Props = {
  user: string;
};

export default function Profile({ user }: Props) {
  const [photo, setPhoto] = useState<string>('');

  const pickFromCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        quality: 0.7,
      });

      if (result.didCancel) return;

      setPhoto(result.assets?.[0]?.uri || '');
    } catch (error) {
      console.log(error);
    }
  };

  const pickFromGallery = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.7,
      });

      if (result.didCancel) return;

      setPhoto(result.assets?.[0]?.uri || '');
    } catch (error) {
      console.log(error);
    }
  };

  const openSourceChooser = () => {
    Alert.alert(
      'Ganti Foto Profil',
      'Pilih sumber foto',
      [
        { text: 'Kamera', onPress: pickFromCamera },
        { text: 'Galeri', onPress: pickFromGallery },
        { text: 'Batal', style: 'cancel' },
      ],
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* AVATAR */}
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={openSourceChooser}
      >
        <Image
          source={
            photo
              ? { uri: photo }
              : require('../../../../src/assets/kali-neon.png')
          }
          style={styles.avatar}
        />

        <View style={styles.cameraBadge}>
          <Text style={styles.cameraText}></Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.changeText}>
        Tap foto untuk mengganti
      </Text>

      {/* USER INFO */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nama User</Text>
        <Text style={styles.username}>{user}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingVertical: 25,
    backgroundColor: '#4bb6ec',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  avatarContainer: {
    marginTop: -50,
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 100,
    overflow: 'hidden',
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4bb6ec',
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraText: {
    color: '#fff',
    fontSize: 16,
  },
  changeText: {
    marginTop: 10,
    fontSize: 12,
    color: '#7f8c8d',
  },
  infoContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  username: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2d3436',
  },
});
