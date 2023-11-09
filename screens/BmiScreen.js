import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const BmiScreen = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [resultText, setResultText] = useState("");

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || heightValue === 0) {
      alert("Please enter valid weight and height.");
      return;
    }

    const bmiValue = (weightValue / (heightValue * heightValue)) * 703;
    setBMI(bmiValue.toFixed(2));

    // Determine BMI category
    if (bmiValue < 18.5) {
      setResultText("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setResultText("Normal Weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setResultText("Overweight");
    } else {
      setResultText("Obesity");
    }
  };

  return (
    <View style={styles.container}>
      <Card title="BMI Calculator">
        <TextInput
          style={styles.input}
          placeholder="Enter Weight (lbs)"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Height (inches)"
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
        <Button title="Calculate BMI" onPress={calculateBMI} />
        {bmi !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>BMI: {bmi}</Text>
            <Text style={styles.resultText}>Category: {resultText}</Text>
          </View>
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
  },
});

export default BmiScreen;
