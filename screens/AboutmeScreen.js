import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AboutmeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/oliv.jpg")}
        style={styles.profileImage}
      />
      <Text style={styles.title}>Tentang Developer</Text>
      <Text style={styles.subtitle}>Nama: Olivia Putri Kanakang</Text>
      <Text style={styles.subtitle}>Jurusan: Teknik Informatika</Text>
      <Text style={styles.subtitle}>
        Asal Kampus: Universitas Negeri Manado
      </Text>
      <Text style={styles.description}>
        Seorang pengembang perangkat lunak dengan keahlian dalam pengembangan
        aplikasi mobile menggunakan React Native. Memiliki minat dalam
        pengembangan front-end dan UI/UX design.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
});

export default AboutmeScreen;
