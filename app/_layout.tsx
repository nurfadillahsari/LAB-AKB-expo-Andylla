// app/index.tsx
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";


export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halo Andylla</Text>
      <View style={styles.iconGrid}>
        <Ionicons name="planet" size={40} color="#4e8ef7" />
        <FontAwesome name="rocket" size={40} color="#e91e63" />
        <MaterialIcons name="emoji-nature" size={40} color="#00b894" />
        <Entypo name="aircraft" size={40} color="#fdcb6e" />
        <Feather name="camera" size={40} color="#6c5ce7" />
        <AntDesign name="star" size={40} color="#fab1a0" />
        <MaterialCommunityIcons name="tree" size={40} color="#2ecc71" />
        <Foundation name="heart" size={40} color="#d63031" />
        <Octicons name="bug" size={40} color="#fd79a8" />
        <EvilIcons name="bell" size={40} color="#00cec9" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#f1f2f6",
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#2d3436"
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    rowGap: 24
  }
});