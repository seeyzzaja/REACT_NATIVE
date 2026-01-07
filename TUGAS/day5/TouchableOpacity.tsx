import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TouchableOpacityComponent() {
  const [count, setCount] = useState(0);

  const onPress = () => setCount(prev => prev + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>
        Count: {count}
      </Text>

      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Klik di sini
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  counterText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  button: {
    backgroundColor: "#2563EB", // biru modern
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3, // Android shadow
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
