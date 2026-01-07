import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Alert,
} from "react-native";

export default function SimpleNativeFeedback() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => Alert.alert("Klik", "Ripple Android aktif")}
        background={TouchableNativeFeedback.Ripple("#b52d2dff", false)}
      >
        <View style={styles.button}>
          <Text style={styles.text}>Klik Saya</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    backgroundColor: "#16A34A",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    overflow: "hidden", // WAJIB untuk ripple
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
