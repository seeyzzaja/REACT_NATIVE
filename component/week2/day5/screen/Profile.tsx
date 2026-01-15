import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  user: string;
};

export default function Profile({ user }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={require('../../../../src/assets/kali-neon.png')}
          style={styles.avatar}
        />
      </View>

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
    backgroundColor: '#f5f6fa', // background lembut
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#4bb6ec', // warna header keren
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  avatarContainer: {
    marginTop: -50, // supaya gambar sedikit overlap header
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 100,
    overflow: 'hidden',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  username: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2d3436',
  },
});
