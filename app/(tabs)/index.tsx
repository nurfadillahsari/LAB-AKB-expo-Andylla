import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Image source={require('../../assets/unismuh.jpg')} style={styles.image} />
      <Text style={styles.text}>
        Universitas Muhammadiyah (Unismuh) Makassar adalah salah satu perguruan tinggi swasta terbaik di Indonesia Timur.
        Terletak di Kota Makassar, Sulawesi Selatan, Unismuh memiliki berbagai fakultas dan fasilitas modern untuk mendukung pembelajaran.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  image: { width: 300, height: 200, marginBottom: 15, borderRadius: 10 },
  text: { fontSize: 16, textAlign: 'center' },
});
