import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { saveUserProfile } from '../utils/LocalStorage';
import { savePassword } from '../utils/secureStorage';
import Orientation from 'react-native-orientation-locker';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type RegisterNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterNavProp>();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Regex email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegistrasi = async () => {
    // Validasi field kosong
    if (!nama || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Semua field wajib diisi');
      return;
    }

    //  Validasi format email
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Format email tidak valid');
      return;
    }

    //  Validasi password
    if (password.length < 6) {
      Alert.alert('Error', 'Password minimal 6 karakter');
      return;
    }

    // Validasi konfirmasi password
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password dan konfirmasi tidak sama');
      return;
    }

    try {
      // Simpan password ke Secure Storage
      await savePassword(email, password);

      // Simpan profile ke AsyncStorage
      await saveUserProfile({
        email,
        nama,
      });

      Alert.alert('Sukses', 'Registrasi berhasil');
      navigation.replace('Login');
    } catch (error) {
      console.log('REGISTER ERROR:', error);
      Alert.alert('Gagal', 'Registrasi gagal');
    }
  };
  useEffect(() => {
  Orientation.lockToPortrait();

  return () => {
    Orientation.unlockAllOrientations();
  };
}, []);


  const isDisabled =
    !nama ||
    !email ||
    !isValidEmail(email) ||
    password !== confirmPassword ||
    password.length < 6;

  return (
    <View style={{ flex: 1 }}>
      <View style={style.modalHeader}>
        <Text style={style.modalTitle}>VinStore</Text>
      </View>

      <View style={style.modalBody}>
        <Text style={{ fontSize: 30, marginBottom: 20 }}>Registrasi</Text>

        <TextInput
        placeholderTextColor='#99bcc9'
          placeholder="Nama"
          value={nama}
          onChangeText={setNama}
          style={style.input}
        />

        <TextInput
        placeholderTextColor='#99bcc9'
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={style.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
        placeholderTextColor='#99bcc9'
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={style.input}
          secureTextEntry
        />

        <TextInput
        placeholderTextColor='#99bcc9'
          placeholder="Konfirmasi Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={style.input}
          secureTextEntry
        />

        <TouchableOpacity
          onPress={handleRegistrasi}
          disabled={isDisabled}
          style={[
            style.loginmodal,
            isDisabled && { opacity: 0.5 },
          ]}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>
            Daftar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    width: '90%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    color:'black'
  },

  loginmodal: {
    backgroundColor: '#26d2db',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 120,
    borderRadius: 15,
    marginTop: 20,
  },

  modalHeader: {
    height: 140,
    backgroundColor: '#13ffff',
    justifyContent: 'flex-end',
    paddingBottom: 24,
    paddingHorizontal: 24,
    elevation: 6,
  },

  modalTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },

  modalBody: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: -20,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 4,
  },
});
