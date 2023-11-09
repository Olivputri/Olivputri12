import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const KonversiSuhuScreen = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertToCelsius = () => {
    const fahrenheitValue = parseFloat(fahrenheit);
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    setCelsius(celsiusValue.toFixed(2));
  };

  const convertToFahrenheit = () => {
    const celsiusValue = parseFloat(celsius);
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Konversi Suhu</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Celsius"
        keyboardType="numeric"
        value={celsius}
        onChangeText={(text) => setCelsius(text)}
      />
      <TouchableOpacity style={styles.button} onPress={convertToFahrenheit}>
        <Text style={styles.buttonText}>Konversi ke Fahrenheit</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Fahrenheit"
        keyboardType="numeric"
        value={fahrenheit}
        onChangeText={(text) => setFahrenheit(text)}
      />
      <TouchableOpacity style={styles.button} onPress={convertToCelsius}>
        <Text style={styles.buttonText}>Konversi ke Celsius</Text>
      </TouchableOpacity>
      {celsius !== "" && (
        <Text style={styles.result}>Hasil Konversi: {celsius} Celsius</Text>
      )}
      {fahrenheit !== "" && (
        <Text style={styles.result}>
          Hasil Konversi: {fahrenheit} Fahrenheit
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ecf0f1",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#2c3e50",
  },
  input: {
    height: 40,
    borderColor: "#bdc3c7",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
    width: "100%",
    fontSize: 16,
    color: "#2c3e50",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  result: {
    fontSize: 18,
    marginTop: 16,
    color: "#2c3e50",
  },
});

export default KonversiSuhuScreen;
