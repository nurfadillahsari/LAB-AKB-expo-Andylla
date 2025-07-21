// app/index.tsx
import { ScrollView, StyleSheet, Text, View } from "react-native";

// 🔡 Daftar nama lengkap beserta stambuk
const daftarNama = [
  "Fauzan Azhari Rahman (105841109622)",
  "Muh. Fadhil Aahmad (105841109722)",
  "Dayang Aisyah (105841109822)",
  "Ilfauza Febrianty Faisal (105841110222)",
  "Sa'ban (105841110322)",
  "Nur Fadillah Sari (105841110422)",  // posisi target
  "Wa Nanda Sulystrian (105841110622)",
  "Muh. Tegar Al Fikri (105841110722)",
  "Rayhanatul Jannah (105841110822)",
  "Hanna Maryam (105841110922)",
  "Afifah Auliyah (105841111022)"
];

// 🎯 Posisi stambuk utama
const posisiUtama = 5;
const jumlahNama = daftarNama.length;

// ⏪ Ambil 5 nama sebelum (dengan wrap-around jika perlu)
const namaSebelum = [];
for (let i = 5; i >= 1; i--) {
  const idx = (posisiUtama - i + jumlahNama) % jumlahNama;
  namaSebelum.push(daftarNama[idx]);
}

// ⏩ Ambil 5 nama setelah
const namaSetelah = [];
for (let i = 1; i <= 5; i++) {
  const idx = (posisiUtama + i) % jumlahNama;
  namaSetelah.push(daftarNama[idx]);
}

// 📜 Gabungkan semua nama
const daftarFinal = [...namaSebelum, daftarNama[posisiUtama], ...namaSetelah];

// 🧬 Daftar font berbeda
const jenisFont = [
  "AbrilFatface-Regular",
  "BowlbyOne-Regular",
  "Michroma-Regular",
  "Play-Regular",
  "Shojumaru-Regular",
  "Montserrat-Variable",
  "Raleway-Variable",
  "Roboto-Variable",
  "Rubik-Variable",
  "TikTokSans-Variable"
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={gayaUtama.kontainer}>
      <Text style={gayaUtama.judul}>📘 10 Nama Berdasarkan Urutan Stambuk</Text>

      {daftarFinal.map((itemNama, urutan) => {
        const sorot = itemNama.includes("Nur Fadillah Sari");

        return (
          <View key={urutan} style={gayaUtama.kartu}>
            <Text
              style={[
                gayaUtama.teksNama,
                {
                  fontFamily: jenisFont[urutan],
                  fontWeight: sorot ? "bold" : "normal",
                  color: sorot ? "#e63946" : "#2d2d2d"
                }
              ]}
            >
              {itemNama}
            </Text>
            <Text style={gayaUtama.labelFont}>Font yang digunakan: {jenisFont[urutan]}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

// 🎨 Gaya tampilan komponen
const gayaUtama = StyleSheet.create({
  kontainer: {
    paddingVertical: 36,
    paddingHorizontal: 20,
    backgroundColor: "#f1f3f5"
  },
  judul: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 28,
    textAlign: "center",
    color: "#003049"
  },
  kartu: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 20
  },
  teksNama: {
    fontSize: 20
  },
  labelFont: {
    fontSize: 12,
    color: "#6c757d",
    marginTop: 5
  }
});
