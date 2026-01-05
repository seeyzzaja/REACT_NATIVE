import React from 'react';
import { Modal, View, StyleSheet, Button,Text,Pressable} from 'react-native';
import { useState } from 'react';

function ModalComponent() {
  const [modalContent, setModalContent] = useState(false);
  return (
    <View>
        <Button title='dialogModal' onPress={()=>setModalContent(true)}/>
      <Modal
        visible={modalContent}
        transparent
        animationType="slide"
        onRequestClose={() => setModalContent(false)}
      > <Pressable
          style={styles.backdrop}
          onPress={() => setModalContent(false)}
        >
        <View style={styles.backdrop}>
          <View style={styles.dialog}>
            <Text style={styles.modalTitle}>Dialog</Text>
            <Text>Ini adalah dialog konfirmasi.</Text>
            <Button title="Tutup" onPress={() => setModalContent(false)} />
          </View>
        </View>
          </Pressable>
      </Modal>
    </View>
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
});
export default ModalComponent;
