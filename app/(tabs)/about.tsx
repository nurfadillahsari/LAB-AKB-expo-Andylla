import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.text}>
        Aplikasi ini dibuat untuk keperluan tugas pemrograman mobile menggunakan Expo Router.
      </Text>
      <Text style={styles.text}>
        - Halaman **Home**: Menampilkan informasi mengenai Unismuh Makassar.
      </Text>
      <Text style={styles.text}>
        - Halaman **About**: Menjelaskan fungsi dan tujuan aplikasi.
      </Text>
      <Text style={styles.text}>
        - Halaman **Profil**: Menampilkan data diri pembuat aplikasi.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 10 },
});
