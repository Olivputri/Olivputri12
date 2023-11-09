import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function CalculatorScreen({ navigation }) {
  const [hitung, setHitung] = useState(0);
  const [hasil, setHasil] = useState(0);

  const masukkanAngka = (value) => {
    if (hitung <= 0) {
      setHitung(value);
    } else {
      setHitung(hitung + "" + value);
    }
  };

  const hitungHasil = () => {
    let hasil = eval(hitung);
    setHitung(hasil);
  };

  return (
    <View style={styles.container}>
      <View style={styles.hitung}>
        <Text style={styles.textHitung}>{hitung}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka("(")}
          >
            <Text style={styles.operator}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka(")")}
          >
            <Text style={styles.operator}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka("/")}
          >
            <Text style={styles.operator}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka("*")}
          >
            <Text style={styles.operator}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka(7)}
          >
            <Text style={styles.textButton}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka(8)}
          >
            <Text style={styles.textButton}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka(9)}
          >
            <Text style={styles.textButton}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka("+")}
          >
            <Text style={styles.operator}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka(4)}
          >
            <Text style={styles.textButton}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka(5)}
          >
            <Text style={styles.textButton}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka(6)}
          >
            <Text style={styles.textButton}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka("-")}
          >
            <Text style={styles.operator}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka(1)}
          >
            <Text style={styles.textButton}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka(2)}
          >
            <Text style={styles.textButton}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka(3)}
          >
            <Text style={styles.textButton}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => hitungHasil()}>
            <Text style={styles.operator}>=</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 3 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => masukkanAngka(0)}
          >
            <Text style={styles.textButton}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clear} onPress={() => setHitung(0)}>
            <Text style={styles.textClear}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  textButton: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
    padding: 10,
  },
  operator: {
    color: "#ff5722",
    fontSize: 24,
    textAlign: "center",
    padding: 10,
  },
  hitung: {
    flex: 0.5,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  textHitung: {
    color: "#ffffff",
    fontSize: 48,
    textAlign: "right",
  },
  clear: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    margin: 10,
  },
  textClear: {
    color: "#ff5722",
    fontSize: 24,
    textAlign: "right",
  },
});

export default CalculatorScreen;
