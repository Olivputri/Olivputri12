import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { globalStyles } from "../styles/global";

function ProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Ambil data nama dan email dari penyimpanan lokal (AsyncStorage)
    const fetchData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          setName(parsedUserData.name);
          setEmail(parsedUserData.email);
        }
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ImageBackground style={globalStyles.container} source={require('../assets/background1.jpg')}>
      <Text style={styles.header}>Halaman Profil</Text>
      <Text>Nama: {name}</Text>
      <Text style={{marginBottom: 40}} >Email: {email}</Text>
      <Button
        title="Kembali ke Halaman Utama"
        onPress={() => {
          // Navigasi kembali ke halaman utama
          navigation.navigate('Home');
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfileScreen;