import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Platform,
} from 'react-native';

export default function App() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [fullScreenVisible, setFullScreenVisible] = useState(false);
  const [pageSheetVisible, setPageSheetVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal Showcase</Text>

      <Button title="Dialog Modal" onPress={() => setDialogVisible(true)} />
      <Button title="Bottom Sheet Modal" onPress={() => setBottomSheetVisible(true)} />
      <Button title="Full Screen Modal" onPress={() => setFullScreenVisible(true)} />
      {Platform.OS === 'ios' && (
        <Button title="iOS Page Sheet Modal" onPress={() => setPageSheetVisible(true)} />
      )}
      <Button title="Loading Overlay" onPress={() => setLoadingVisible(true)} />

      {/* ================= DIALOG MODAL ================= */}
      <Modal
        visible={dialogVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDialogVisible(false)}
      >
        <View style={styles.backdrop}>
          <View style={styles.dialog}>
            <Text style={styles.modalTitle}>Dialog</Text>
            <Text>Ini adalah dialog konfirmasi.</Text>
            <Button title="Tutup" onPress={() => setDialogVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* ================= BOTTOM SHEET ================= */}
      <Modal
        visible={bottomSheetVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setBottomSheetVisible(false)}
      >
        <Pressable
          style={styles.backdrop}
          onPress={() => setBottomSheetVisible(false)}
        >
          <View style={styles.bottomSheet}>
            <Text style={styles.modalTitle}>Bottom Sheet</Text>
            <Text>Biasanya muncul dari bawah.</Text>
            <Button title="Tutup" onPress={() => setBottomSheetVisible(false)} />
          </View>
        </Pressable>
      </Modal>

      {/* ================= FULL SCREEN MODAL ================= */}
      <Modal
        visible={fullScreenVisible}
        animationType="slide"
        onRequestClose={() => setFullScreenVisible(false)}
      >
        <View style={styles.fullScreen}>
          <Text style={styles.modalTitle}>Full Screen Modal</Text>
          <Text>Menutupi seluruh layar.</Text>
          <Button title="Kembali" onPress={() => setFullScreenVisible(false)} />
        </View>
      </Modal>

      {/* ================= iOS PAGE SHEET ================= */}
      {Platform.OS === 'ios' && (
        <Modal
          visible={pageSheetVisible}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setPageSheetVisible(false)}
        >
          <View style={styles.pageSheet}>
            <Text style={styles.modalTitle}>iOS Page Sheet</Text>
            <Text>Sheet native khas iOS.</Text>
            <Button title="Tutup" onPress={() => setPageSheetVisible(false)} />
          </View>
        </Modal>
      )}

      {/* ================= LOADING OVERLAY ================= */}
      <Modal
        visible={loadingVisible}
        transparent
        animationType="none"
        onRequestClose={() => setLoadingVisible(false)}
      >
        <View style={styles.backdrop}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" />
            <Text>Loading...</Text>
            <Button title="Stop" onPress={() => setLoadingVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 10,
  },
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
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageSheet: {
    flex: 1,
    padding: 20,
  },
  loadingBox: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    gap: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
