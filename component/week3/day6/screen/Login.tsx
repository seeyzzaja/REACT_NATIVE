import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,PermissionsAndroid, Platform
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { useNavigation } from '@react-navigation/native';
import { getPassword } from '../utils/secureStorage';
import { getUserProfile } from '../utils/LocalStorage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { isSensorAvailable, simplePrompt } from '@sbaiahmed1/react-native-biometrics';
import Geolocation from '@react-native-community/geolocation';

type SensorInfo = {
    available: boolean;        // Whether biometric auth is available
    biometryType?: string;     // Type of biometry ('FaceID', 'TouchID', 'Fingerprint', etc.)
    error?: string;            // Error message if not available
    errorCode?: string;        // Error code if not available (platform-specific)
}

type Props = {
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};


export default function LoginScreen({ setIsLogin, setUser }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
const [status, setStatus] = useState('Mengecek Sensor...');
 const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  type LoginNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>
 const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Izin Lokasi',
          message: 'Aplikasi butuh akses lokasi Anda',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true; 
  };

  const getLocation = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) {
      setErrorMsg('Izin ditolak');
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords); // Sukses
        setErrorMsg('');
      },
      (error) => setErrorMsg(`Error: ${error.message}`), // Gagal
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

 const handleAuth = async () => {

        try {
            const { success } = await simplePrompt(
                'Konfirmasi Identitas'
            );

            if (success) {
                Alert.alert('Berhasil', 'Identitas Terverifikasi!');
            } else {
                console.log('User membatalkan atau verifikasi gagal');
            }
        } catch (error) {
            Alert.alert('Error', 'Terjadi kesalahan pada sensor');
        }
    };

 useEffect(() => {
   Orientation.lockToPortrait();
    getLocation()
        const check = async () => {
            const sensorInfo: SensorInfo = await isSensorAvailable();

            if (sensorInfo.available) {
                if (sensorInfo.biometryType === 'FaceID') {
                    setStatus('Face ID Tersedia');
                } else {
                    setStatus('Sensor Biometrik Tersedia');
                    handleAuth()

                }
            } else {
                setStatus('Biometrik Tidak Tersedia');
            }
        };
        check();
         return () => {
      Orientation.unlockAllOrientations();
    };
    }, []);

const navigation = useNavigation<LoginNavProp>();
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleLogin = async () => {
    const savedCredential = await getPassword();
    const savedProfile = await getUserProfile();

    if (!savedCredential || !savedProfile) {
      Alert.alert('User belum terdaftar');
      return;
    }

    if (
      email === savedCredential.username &&
      password === savedCredential.password
    ) {
      navigation.replace('Home');
    } else {
      Alert.alert('Email atau password salah');
      return
    }
    if (!email || !password || !nama) {
      Alert.alert('email dan pasword harus di isi');
      return;
    } else if (password.length < 8) {
      Alert.alert('password harus berisi 8 karakter');
      return;
    } else if (!isValidEmail(email)) {
      Alert.alert('isi email dengan benar');
      return;
    }
    setUser(nama);
    setIsLogin(true);
    
  };

  
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={style.modalHeader}>
            <Text style={style.modalTitle}>VinStore</Text>
          </View>

          <View style={style.modalBody}>
            
            <Text style={{ fontSize: 30 }}>Login</Text>
            <TextInput
            placeholderTextColor='#99bcc9'
              placeholder="nama"
              value={nama}
              onChangeText={setNama}
              style={style.input}
            />
            <TextInput
            placeholderTextColor='#99bcc9'
              placeholder="email"
              value={email}
              onChangeText={setEmail}
              style={style.input}
            />

            <TextInput
            placeholderTextColor='#99bcc9'
              placeholder="password"
              value={password}
              onChangeText={setPassword}
              style={style.input}
              secureTextEntry
            />

            <TouchableOpacity onPress={handleLogin} style={style.loginmodal}>
              <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10 }}>
              <Text>
                belum punya akun?
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}
                >
                  <Text style={{ color: '#59d3ff' }}>Registrasi</Text>
                </TouchableOpacity>
              </Text>
            </TouchableOpacity>
             {location && (
        <Text style={{ marginTop: 20,color:'black' }}>
         Lokasi: Lat: {location.latitude},
           Long: {location.longitude}
        </Text>
      )}
          </View>
        </View>
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

  screen: {
    flex: 1,
    backgroundColor: '#0fe8fc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerGroup: {
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
  },

  login1: {
    backgroundColor: '#e0e0e0',
    height: 42,
    width: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    fontSize: 16,
    fontWeight: '500',
  },

  modalHeader: {
    height: 140,
    backgroundColor: '#13ffff',
    justifyContent: 'flex-end',
    paddingBottom: 24,
    paddingHorizontal: 24,
    //   borderBottomLeftRadius: 28,
    //   borderBottomRightRadius: 28,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  modalTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },

  modalBody: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: -20, // efek card naik ke header
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
});
