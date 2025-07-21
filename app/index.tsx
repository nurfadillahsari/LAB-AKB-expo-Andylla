// app/index.tsx
import { ScrollView, StyleSheet, Text, View } from "react-native";

const allNames = [
  "Fauzan Azhari Rahman (105841109622)",
  "Muh. Fadhil Aahmad (105841109722)",
  "Dayang Aisyah (105841109822)",
  "Ilfauza Febrianty Faisal  (105841110222)",
  "Sa'ban (105841110322)",
  "Nur Fadillah Sari (105841110422)",  // Index ke-5
  "Wa Nanda Sulystrian (105841110622)",
  "Muh. Tegar Al Fikri  (105841110722)",
  "Rayhanatul Jannah (105841110822)",
  "Hanna Maryam (105841110922)",
  "Afifah Auliyah (105841111022)"
];

const stambukIndex = 5;
const total = allNames.length;

const before = Array.from({ length: 5 }, (_, i) => (stambukIndex - i - 1 + total) % total)
  .map(i => allNames[i])
  .reverse();

const after = Array.from({ length: 5 }, (_, i) => allNames[(stambukIndex + i + 1) % total]);

const finalList = [...before, allNames[stambukIndex], ...after];

const fontList = [
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

export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>✨ Daftar Nama Berdasarkan Stambuk</Text>
      {finalList.map((name, idx) => {
        const isMainName = name.includes("Nur Fadillah Sari");
        return (
          <View key={idx} style={styles.card}>
            <Text
              style={[
                styles.nameText,
                {
                  fontFamily: fontList[idx],
                  fontWeight: isMainName ? "bold" : "normal",
                  color: isMainName ? "#fd4b69ff" : "#222"
                }
              ]}
            >
              {name}
            </Text>
            <Text style={styles.fontLabel}>Font: {fontList[idx]}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#F8F9FA"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#1D3557"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 18
  },
  nameText: {
    fontSize: 20
  },
  fontLabel: {
    fontSize: 12,
    color: "#6c757d",
    marginTop: 4
  }
});
