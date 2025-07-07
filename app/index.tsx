import { Text, View } from "react-native";

export default function Index() {
  return (
   <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20, // jarak antar elemen
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          NUR FADILLAH SARI
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "blue",
          paddingVertical: 6,
          paddingHorizontal: 20,
          borderRadius: 50,
        }}
      >
        <Text style={{ fontSize: 16, color: "white" }}>105841110422</Text>
      </View>

      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 30,
          borderRightWidth: 30,
          borderBottomWidth: 50,
          borderStyle: "solid",
          backgroundColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "pink",
        }}
      />
    </View>
  );
}