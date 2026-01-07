import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
  StyleSheet,
} from "react-native";

export default function TouchableWithoutFeedbackComponent() {
  const [disabled, setDisabled] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() =>
          Alert.alert("onPress di klik", "onPress berhasil di klik")
        }
        onLongPress={() =>
          Alert.alert("onLongPress", "onLongPress aktif")
        }
        disabled={disabled}
      
      >
        <View
          style={[
            styles.card,
            disabled && styles.cardDisabled,
          ]}
        >
          <Text style={styles.title}>
            TouchableWithoutFeedback
          </Text>

          <Text
            style={[
              styles.status,
              disabled ? styles.statusDisabled : styles.statusActive,
            ]}
          >
            {disabled ? "DISABLED" : "ACTIVE"}
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <Text
        style={styles.toggle}
        onPress={() => setDisabled(prev => !prev)}
      >
        {disabled ? "Aktifkan" : "Nonaktifkan"} Disabled
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },

  card: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    alignItems: "center",
    minWidth: 220,
  },

  cardDisabled: {
    backgroundColor: "#D1D5DB",
    opacity: 0.6,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 6,
  },

  status: {
    fontSize: 12,
    fontWeight: "700",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    overflow: "hidden",
  },

  statusActive: {
    backgroundColor: "#DCFCE7",
    color: "#166534",
  },

  statusDisabled: {
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
  },

  toggle: {
    marginTop: 20,
    color: "#2563EB",
    fontWeight: "600",
  },
});
