import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, TouchableOpacity, Alert, StyleSheet, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from "../styles/global";

function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Semua kolom harus diisi');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password harus memiliki setidaknya 6 karakter');
      return;
    }

    // Simpan data registrasi ke penyimpanan lokal
    const userData = { name, email, password };
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert('Berhasil', 'Data registrasi berhasil disimpan!');
      console.log('Data registrasi berhasil disimpan');
    } catch (error) {
      Alert.alert('Gagal', 'Data registrasi gagal disimpan!');
      console.error('Gagal menyimpan data registrasi:', error);
    }

    // Redirect ke halaman login setelah registrasi berhasil
    navigation.navigate('Login');
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }} >
      <ImageBackground style={globalStyles.container} source={require('../assets/background1.jpg')}>
        <Image 
          source={require('../assets/logo-itenas.jpg')} 
          style={{width: 40, height: 40, marginBottom: 15}}
        />
        <Text style={globalStyles.header}>Form Registrasi</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Nama"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <Button title="Registrasi" onPress={handleRegister} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={globalStyles.loginText}>Sudah punya akun? Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

export default RegisterScreen;