import React from "react";
import { View, Text, Pressable, Alert, StyleSheet } from "react-native";

export default function PressableComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pressable
      </Text>

      <Pressable
        onPress={() => Alert.alert("Pressable", "ini adalah Pressable")}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>
          Klik di sini
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3, // bayangan Android
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
