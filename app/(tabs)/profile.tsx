import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/Infor.jpg')} style={styles.image} />
      <Text style={styles.text}>Nama: Nur fadillah Sari</Text>
      <Text style={styles.text}>NIM: 10584110422</Text>
      <Text style={styles.text}>Kelas: 6C</Text>
      <Text style={styles.text}>Jurusan: Teknik Informatika</Text>
      <Text style={styles.text}>Fakultas: Fakultas Teknik</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  image: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 8, textAlign: 'center' },
});
