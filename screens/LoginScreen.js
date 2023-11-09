import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../styles/global";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan password harus diisi");
      return;
    }

    if (password.length < 3) {
      Alert.alert("Error", "Password harus memiliki setidaknya 6 karakter");
      return;
    }

    try {
      // Ambil data registrasi dari penyimpanan lokal
      const userData = await AsyncStorage.getItem("userData");

      if (userData) {
        const parsedUserData = JSON.parse(userData);

        if (
          parsedUserData.email === email &&
          parsedUserData.password === password
        ) {
          // Data login sesuai dengan data registrasi yang ada
          // Redirect ke halaman utama
          navigation.navigate("HalamanHome");
          return;
        }
      }

      // Jika tidak ada data registrasi yang cocok atau data tidak tersedia
      Alert.alert("Error", "Email atau password salah");
    } catch (error) {
      console.error("Gagal mengambil data registrasi:", error);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        style={globalStyles.container}
        source={require("../assets/background1.jpg")}
      >
        <Image
          source={require("../assets/logo-itenas.jpg")}
          style={{ width: 40, height: 40, marginBottom: 15 }}
        />
        <Text style={globalStyles.header}>Form Login</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Masukkan email..."
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Masukkan password..."
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <Button title="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={globalStyles.registerText}>
            Belum punya akun? Daftar
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
