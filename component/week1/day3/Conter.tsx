import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  Switch,
  Modal,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native';


export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [visibleConten, setvisibleContent] = useState(false);

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('./src/assets/kali-neon.png')}
      style={{ flex: 1 }}
    >
      <Text style={{ color: 'white', fontWeight: 'bold' }}>
        Ini Adalah Image Background
      </Text>

      {/* text di gunakan untuk menampilkan sebuah konten atau text */}
      <Text>Hello World</Text>
      <Text>welcome</Text>

      {/* image di gunakan untuk menampilkan sebuah gambar dan harus ada style dan sourcedi */}
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />

      <Image
        source={require('./src/assets/kali-neon.png')}
        style={{ width: 200, height: 200, borderRadius: 100 }}
      />
      {/* textinput di gunakan untuk menginput sebuah text dan hasil nya akan muncul di console (cara memunculkan console ketik d di terminal)*/}

      <TextInput
        placeholder="Enter your name"
        style={{
          width: 200,
          height: 40,
          borderWidth: 1,
          borderColor: 'white',
          padding: 10,
          color: 'white',
          marginTop: 20,
          backgroundColor: 'white',
        }}
        onChangeText={usernama => console.log(usernama)}
      />
      {/* imagebackground di gunakan untuk menampilkan gambar sebagai background */}

      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        style={{ marginTop: 20 }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Button title="Dialog Modal" onPress={() => setvisibleContent(true)} />
      <Modal
        visible={visibleConten}
        transparent
        animationType="fade"
        onRequestClose={() => setvisibleContent(false)}
      >
        <View style={styles.backdrop}>
          <View style={styles.dialog}>
            <Text style={styles.modalTitle}>Dialog</Text>
            <Text>Ini adalah dialog konfirmasi.</Text>
            <Button title="Tutup" onPress={() => setvisibleContent(false)} />
          </View>
        </View>
      </Modal>
       
    </ImageBackground>
    
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ScrolView:{
color:'#fff'

  }
});
