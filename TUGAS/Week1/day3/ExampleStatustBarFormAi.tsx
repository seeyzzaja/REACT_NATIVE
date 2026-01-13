import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  // Contoh imperative API (perubahan sementara)
  useEffect(() => {
    StatusBar.setHidden(fullScreen, 'fade');
  }, [fullScreen]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? '#0f172a' : '#f8fafc' },
      ]}
    >
      {/* ===== STATUS BAR ===== */}
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor="transparent" // Android legacy
      />

      <Text
        style={[
          styles.title,
          { color: darkMode ? '#e5e7eb' : '#0f172a' },
        ]}
      >
        StatusBar Demo
      </Text>

      <Text style={{ color: darkMode ? '#cbd5f5' : '#334155' }}>
        Contoh pengaturan StatusBar berdasarkan state aplikasi.
      </Text>

      {/* ===== TOGGLE DARK / LIGHT ===== */}
      <Pressable
        style={[styles.button, { backgroundColor: '#2563eb' }]}
        onPress={() => setDarkMode(prev => !prev)}
      >
        <Text style={styles.buttonText}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </Text>
      </Pressable>

      {/* ===== TOGGLE FULL SCREEN ===== */}
      <Pressable
        style={[styles.button, { backgroundColor: '#16a34a' }]}
        onPress={() => setFullScreen(prev => !prev)}
      >
        <Text style={styles.buttonText}>
          {fullScreen ? 'Show' : 'Hide'} StatusBar
        </Text>
      </Pressable>
    </View>
  );
}

/* ===== STYLES ===== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
